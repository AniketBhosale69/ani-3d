/**
 * files.ani3d.in — Google Drive file index for ani3d.in
 *
 * Replaces the generated Bhadoo/GoIndex worker (1,694 lines of SPA, jQuery,
 * Plyr, pdf.js, base64 obfuscation, auth0 and a broken search route) with the
 * three things this site actually uses:
 *
 *   GET /0:/<path>/<file>              stream bytes, Content-Disposition: attachment
 *   GET /0:/<path>/<file>?inline=true  same, Content-Disposition: inline  (<video> uses this)
 *   GET /api/list?path=/<path>         clean JSON listing
 *
 * Range requests are forwarded verbatim, so Google's 206 + Content-Range reach
 * the browser untouched. That matters: the eight classic/web encodes carry a
 * trailing `moov` atom, so playback depends on the browser range-requesting the
 * tail of the file.
 *
 * DEPLOY:  cd files-worker && npx wrangler deploy
 *
 * ─── SECURITY ───────────────────────────────────────────────────────────────
 * The OAuth credentials live in Worker secrets, NOT in this file. Set them at
 * Dashboard > ani3d-files > Settings > Variables and Secrets (type: Secret), or
 * `npx wrangler secret put CLIENT_SECRET` — see wrangler.toml for the full list.
 * Without them every request returns 500; the worker never falls back to a
 * hardcoded key.
 *
 * Keep it that way. `pages_build_output_dir = "."` publishes this whole repo, so
 * this file is readable at https://ani-3d.pages.dev/files-worker/worker.js. That
 * is fine for source, and a disclosed credential for anything else.
 * ────────────────────────────────────────────────────────────────────────────
 */

const CONFIG = {
  CLIENT_ID: '',
  CLIENT_SECRET: '',
  REFRESH_TOKEN: '',
  // The `web-uploads` folder that holds classic/ and outframe/, inside Shared
  // Drive 0AANXotUkOYP2Uk9PVA. NOTE: the old root worker.js still names
  // 1i7aiepMJNceBn0nzdTvHlpdLCUADCmzo — a *different, now-empty* folder that is
  // also called `web-uploads`. That file predates the Drive reorganisation; the
  // id below is the one the live index actually serves from.
  ROOT_FOLDER_ID: '1_H1dj3VRs4gcLx_jzh_kbk9CfZuiis8b',
};

/** Origins allowed to read /api/list. Media <video>/<a download> never needs CORS. */
const ALLOWED_ORIGINS = [
  'https://ani3d.in',
  'https://www.ani3d.in',
  'https://ani-3d.pages.dev',
  'http://localhost:8788',
  'http://127.0.0.1:8788',
];

/** Browsers cache media for a day; Cloudflare caches objects up to 512 MB (Free) / 1 GB (Pro). */
const FILE_CACHE_CONTROL = 'public, max-age=86400';
const LIST_CACHE_CONTROL = 'public, max-age=300';

const DRIVE_FILES = 'https://www.googleapis.com/drive/v3/files';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';

// ─── Module-scope caches ─────────────────────────────────────────────────────
// Live for the lifetime of an isolate, so warm requests skip the token refresh
// and the per-segment folder lookups entirely. The original refreshed its token
// on every cold start and never cached it.

let tokenCache = { value: null, expires: 0 };
const dirIdCache = new Map(); // '/classic/web/' -> folder id
const fileCache = new Map(); // '/classic/web/x.mp4' -> file metadata

// ─── Auth ────────────────────────────────────────────────────────────────────

async function accessToken(cfg) {
  if (tokenCache.value && tokenCache.expires > Date.now()) return tokenCache.value;

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: cfg.CLIENT_ID,
      client_secret: cfg.CLIENT_SECRET,
      refresh_token: cfg.REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });

  if (!res.ok) {
    // Surface it. A dead refresh token is the single most likely cause of a
    // site-wide media outage, and it must not look like a missing file.
    throw new DriveError(502, 'auth_failed', `Token refresh returned ${res.status}`);
  }

  const obj = await res.json();
  if (!obj.access_token) throw new DriveError(502, 'auth_failed', 'No access_token in token response');

  tokenCache = { value: obj.access_token, expires: Date.now() + 3500 * 1000 };
  return tokenCache.value;
}

class DriveError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

async function driveFetch(url, cfg, extraHeaders = {}) {
  const token = await accessToken(cfg);
  return fetch(url, { headers: { authorization: `Bearer ${token}`, ...extraHeaders } });
}

/**
 * Is this failure worth retrying?
 *
 * The subtle case is 403. Drive overloads it for two opposite meanings:
 *
 *   rateLimitExceeded / userRateLimitExceeded  — too many queries per minute,
 *       clears in seconds, must be retried
 *   downloadQuotaExceeded                      — this file has been pulled too
 *       often, clears in ~24h, retrying is pointless
 *
 * Status alone cannot tell them apart, so read the reason out of the body.
 */
function isRetryable(status, bodyText) {
  if (status >= 500 || status === 429) return true;
  if (status !== 403) return false;
  return /rateLimitExceeded|userRateLimitExceeded|Quota exceeded for quota metric/i.test(bodyText);
}

/** Pull the human-readable message out of a Drive error body. */
function driveMessage(text) {
  try {
    return JSON.parse(text).error?.message ?? text.slice(0, 300);
  } catch {
    return text.slice(0, 300); // upstream sent HTML or nothing
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Drive call with retry. Returns the successful Response; throws DriveError with
 * the real upstream status once retries are exhausted or the failure is final.
 */
async function driveFetchRetry(url, cfg, extraHeaders = {}) {
  let status = 500;
  let message = 'no response';

  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await driveFetch(url, cfg, extraHeaders);
    if (res.ok || res.status === 206) return res;

    status = res.status;
    const text = await res.text().catch(() => '');
    message = driveMessage(text) || res.statusText;
    if (!isRetryable(status, text)) break;
    await sleep(500 * 2 ** attempt); // 0.5s, 1s, 2s
  }

  throw new DriveError(status, 'drive_error', message);
}

async function driveJson(url, cfg) {
  return (await driveFetchRetry(url, cfg)).json();
}

// ─── Path resolution ─────────────────────────────────────────────────────────

/** Drive query strings are single-quoted; escape backslashes then quotes. */
function q(name) {
  return name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

const BASE_PARAMS = { includeItemsFromAllDrives: 'true', supportsAllDrives: 'true' };

/** Resolve '/classic/web/' to a folder id, walking and caching one segment at a time. */
async function findDirId(path, cfg) {
  let current = '/';
  let id = cfg.ROOT_FOLDER_ID;

  for (const name of path.split('/').filter(Boolean)) {
    current += name + '/';
    if (dirIdCache.has(current)) {
      id = dirIdCache.get(current);
    } else {
      const url = `${DRIVE_FILES}?${new URLSearchParams({
        ...BASE_PARAMS,
        q: `'${id}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${q(name)}' and trashed = false`,
        fields: 'files(id,name)',
      })}`;
      const obj = await driveJson(url, cfg);
      id = obj.files?.[0]?.id ?? null;
      dirIdCache.set(current, id);
    }
    if (!id) return null;
  }
  return id;
}

/** Resolve '/classic/web/Alpha.mp4' to its file metadata, or null. */
async function findFile(path, cfg) {
  if (fileCache.has(path)) return fileCache.get(path);

  const parts = path.split('/');
  const name = parts.pop();
  const parent = await findDirId(parts.join('/') + '/', cfg);
  if (!parent) return null;

  const url = `${DRIVE_FILES}?${new URLSearchParams({
    ...BASE_PARAMS,
    q: `'${parent}' in parents and name = '${q(name)}' and trashed = false and mimeType != 'application/vnd.google-apps.shortcut'`,
    fields: 'files(id,name,mimeType,size,modifiedTime)',
  })}`;
  const file = (await driveJson(url, cfg)).files?.[0] ?? null;
  fileCache.set(path, file);
  return file;
}

// ─── Responses ───────────────────────────────────────────────────────────────

function corsHeaders(request) {
  const origin = request.headers.get('Origin');
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) return {};
  return {
    'access-control-allow-origin': origin,
    'vary': 'Origin',
  };
}

function jsonResponse(body, status, request, cacheControl = 'no-store') {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'cache-control': cacheControl,
      ...corsHeaders(request),
    },
  });
}

/**
 * Errors are JSON under their real status code.
 *
 * The worker this replaces returned an 8 KB HTML page under status **200** for
 * every non-404 Drive failure, so a 403 downloadQuotaExceeded, an expired token
 * and a Drive outage were all indistinguishable from success — to <video>, to
 * curl, and to any monitoring. That is the bug this function exists to not have.
 */
function errorResponse(err, request) {
  const status = err instanceof DriveError ? err.status : 500;
  const code = err instanceof DriveError ? err.code : 'internal_error';
  return jsonResponse({ error: code, status, message: err.message }, status, request);
}

// ─── Route: file download / stream ───────────────────────────────────────────

async function serveFile(path, url, request, cfg) {
  const file = await findFile(path, cfg);
  if (!file) throw new DriveError(404, 'not_found', `No such file: ${path}`);
  if (file.mimeType === 'application/vnd.google-apps.folder') {
    throw new DriveError(400, 'is_folder', `${path} is a folder`);
  }

  const range = request.headers.get('Range');
  // Throws a DriveError carrying Google's real status if the fetch fails — a
  // 403 quota block must reach the browser as a 403, not as a 200 with an
  // apology page in it.
  const upstream = await driveFetchRetry(
    `${DRIVE_FILES}/${file.id}?alt=media&supportsAllDrives=true&acknowledgeAbuse=true`,
    cfg,
    range ? { Range: range } : {},
  );

  const inline = url.searchParams.get('inline') === 'true';
  const filename = file.name.replace(/["\\]/g, '_');
  const headers = new Headers(upstream.headers);

  headers.set('content-type', contentType(file));
  headers.set(
    'content-disposition',
    `${inline ? 'inline' : 'attachment'}; filename*=UTF-8''${encodeURIComponent(file.name)}; filename="${filename}"`,
  );
  // Never set by the original. Seeking, and the trailing-`moov` tail request the
  // classic/web encodes depend on, both key off this.
  headers.set('accept-ranges', 'bytes');
  // Google sends `private, max-age=0, must-revalidate`, which makes Cloudflare
  // cache nothing and turns every view into a fresh Drive read (and fresh quota).
  headers.set('cache-control', FILE_CACHE_CONTROL);
  headers.delete('expires');
  headers.delete('pragma');
  // Drive's own ETags are per-revision and stable; keep them for 304s.

  return new Response(upstream.body, { status: upstream.status, headers });
}

/** Drive reports .mov as video/quicktime and occasionally octet-stream; fix the ones that matter. */
const EXT_TYPES = {
  mp4: 'video/mp4',
  m4v: 'video/mp4',
  mov: 'video/quicktime',
  webm: 'video/webm',
  mkv: 'video/x-matroska',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  srt: 'text/plain;charset=UTF-8',
  vtt: 'text/vtt;charset=UTF-8',
};

function contentType(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (EXT_TYPES[ext]) return EXT_TYPES[ext];
  if (file.mimeType && file.mimeType !== 'application/octet-stream') return file.mimeType;
  return 'application/octet-stream';
}

// ─── Route: listing ──────────────────────────────────────────────────────────

/** Read a folder and shape it into the entries both the JSON and HTML views use. */
async function readFolder(path, request, cfg) {
  const id = await findDirId(path.endsWith('/') ? path : path + '/', cfg);
  if (!id) throw new DriveError(404, 'not_found', `No such folder: ${path}`);

  const files = [];
  let pageToken = null;
  do {
    const params = new URLSearchParams({
      ...BASE_PARAMS,
      q: `'${id}' in parents and trashed = false and name != '.password' and mimeType != 'application/vnd.google-apps.shortcut'`,
      orderBy: 'folder,name',
      fields: 'nextPageToken, files(id,name,mimeType,size,modifiedTime)',
      pageSize: '200',
    });
    if (pageToken) params.set('pageToken', pageToken);
    const obj = await driveJson(`${DRIVE_FILES}?${params}`, cfg);
    files.push(...(obj.files ?? []));
    pageToken = obj.nextPageToken ?? null;
  } while (pageToken);

  const dir = path.endsWith('/') ? path : path + '/';
  const base = `${new URL(request.url).origin}/0:${dir}`;

  return {
    path: dir,
    count: files.length,
    files: files.map((f) => {
      const isFolder = f.mimeType === 'application/vnd.google-apps.folder';
      const href = base + encodeURIComponent(f.name) + (isFolder ? '/' : '');
      return {
        name: f.name,
        type: isFolder ? 'folder' : 'file',
        mimeType: f.mimeType,
        size: f.size ? Number(f.size) : null,
        modifiedTime: f.modifiedTime,
        // For a file these are the two values the site's D1 rows need:
        // streamUrl goes in stream_url, url goes in download_url.
        url: href,
        streamUrl: isFolder ? null : href + '?inline=true',
      };
    }),
  };
}

async function listJson(path, request, cfg) {
  return jsonResponse(await readFolder(path, request, cfg), 200, request, LIST_CACHE_CONTROL);
}

// ─── Route: browsable HTML index ─────────────────────────────────────────────

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function humanSize(bytes) {
  if (bytes == null) return '';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let n = bytes;
  let i = 0;
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++; }
  return `${n < 10 && i > 0 ? n.toFixed(2) : Math.round(n)} ${units[i]}`;
}

/**
 * A folder page you can actually pick URLs from.
 *
 * The point of this route: every video needs two different URLs that differ only
 * by a query string, and both have percent-encoded spaces. Copying them by hand
 * is where mistakes come from. Each file row here has a Stream button and a
 * Download button that copy the exact strings to paste into the admin form.
 */
function listHtml(data, request) {
  const crumbs = data.path.split('/').filter(Boolean);
  const origin = new URL(request.url).origin;
  let acc = '';
  const trail = [`<a href="${origin}/0:/">0:</a>`].concat(
    crumbs.map((c) => {
      acc += '/' + encodeURIComponent(c);
      return `<a href="${origin}/0:${acc}/">${esc(c)}</a>`;
    }),
  );

  const rows = data.files
    .map((f) => {
      if (f.type === 'folder') {
        return `<tr class="folder">
          <td class="name"><a href="${esc(f.url)}">📁 ${esc(f.name)}</a></td>
          <td class="size"></td><td class="acts"></td></tr>`;
      }
      return `<tr>
        <td class="name"><a href="${esc(f.streamUrl)}">🎬 ${esc(f.name)}</a></td>
        <td class="size">${humanSize(f.size)}</td>
        <td class="acts">
          <button data-u="${esc(f.streamUrl)}">copy stream</button>
          <button data-u="${esc(f.url)}">copy download</button>
        </td></tr>`;
    })
    .join('\n');

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${esc(data.path)} — ani3d files</title><style>
:root{color-scheme:dark}
*{box-sizing:border-box}
body{margin:0;padding:24px 16px;background:#111;color:#ddd;
  font:14px/1.5 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
.wrap{max-width:1000px;margin:0 auto}
h1{font-size:1rem;font-weight:600;margin:0 0 4px}
nav{margin-bottom:16px;color:#666;font-size:.85rem;word-break:break-all}
nav a{color:#c33;text-decoration:none}nav a:hover{text-decoration:underline}
nav a+a::before{content:" / ";color:#555}
p.hint{color:#888;font-size:.8rem;margin:0 0 16px}
table{width:100%;border-collapse:collapse}
td{padding:8px 6px;border-bottom:1px solid #222;vertical-align:middle}
td.name{word-break:break-word}
td.name a{color:#ddd;text-decoration:none}
td.name a:hover{color:#fff;text-decoration:underline}
tr.folder td.name a{color:#e8c06a}
td.size{color:#777;white-space:nowrap;text-align:right;font-variant-numeric:tabular-nums}
td.acts{white-space:nowrap;text-align:right}
button{background:#1c1c1c;color:#bbb;border:1px solid #333;border-radius:5px;
  padding:4px 9px;font-size:.75rem;cursor:pointer;margin-left:5px}
button:hover{background:#262626;color:#fff;border-color:#444}
button.done{background:#1d3a1d;color:#8f8;border-color:#2f5f2f}
footer{margin-top:20px;color:#555;font-size:.75rem}
@media(max-width:600px){td.acts{text-align:left}td,td.acts{display:block;border:none;padding:2px 0}
tr{display:block;border-bottom:1px solid #222;padding:8px 0}td.size{text-align:left}}
</style></head><body><div class="wrap">
<h1>${esc(data.path)}</h1>
<nav>${trail.join('')}</nav>
<p class="hint">${data.count} item${data.count === 1 ? '' : 's'}. <strong>copy stream</strong> gives the
<code>?inline=true</code> URL for <code>stream_url</code>; <strong>copy download</strong> gives the plain
URL for <code>download_url</code>.</p>
<table>${rows || '<tr><td colspan="3" style="color:#666">empty</td></tr>'}</table>
<footer>ani3d file index</footer>
</div><script>
document.addEventListener('click', async (e) => {
  const b = e.target.closest('button[data-u]');
  if (!b) return;
  const url = b.dataset.u;
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    // clipboard API needs a secure context and can still be blocked; fall back
    const ta = document.createElement('textarea');
    ta.value = url; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); ta.remove();
  }
  const was = b.textContent;
  b.textContent = 'copied'; b.classList.add('done');
  setTimeout(() => { b.textContent = was; b.classList.remove('done'); }, 1200);
});
</script></body></html>`;

  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'cache-control': LIST_CACHE_CONTROL,
      ...corsHeaders(request),
    },
  });
}

// ─── Entry point ─────────────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    const cfg = {
      CLIENT_ID: env.CLIENT_ID || CONFIG.CLIENT_ID,
      CLIENT_SECRET: env.CLIENT_SECRET || CONFIG.CLIENT_SECRET,
      REFRESH_TOKEN: env.REFRESH_TOKEN || CONFIG.REFRESH_TOKEN,
      ROOT_FOLDER_ID: env.ROOT_FOLDER_ID || CONFIG.ROOT_FOLDER_ID,
    };

    // Fail loudly and immediately. Without this, a missing secret surfaces as a
    // 502 from the token refresh on every request, which reads like a Google
    // outage rather than a deploy that forgot its bindings.
    const missing = Object.keys(cfg).filter((k) => !cfg[k]);
    if (missing.length) {
      return jsonResponse(
        { error: 'not_configured', missing, status: 500 },
        500,
        request
      );
    }

    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          ...corsHeaders(request),
          'access-control-allow-methods': 'GET, HEAD, OPTIONS',
          'access-control-allow-headers': 'Range, Content-Type',
          'access-control-max-age': '86400',
        },
      });
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return jsonResponse({ error: 'method_not_allowed', status: 405 }, 405, request);
    }

    try {
      // JSON listing, for scripts and the admin panel.
      if (url.pathname === '/api/list') {
        const path = url.searchParams.get('path') || '/';
        return await listJson(decodeURIComponent(path), request, cfg);
      }

      // Bare root redirects into the browsable index rather than explaining itself.
      if (url.pathname === '/' || url.pathname === '/0:') {
        return Response.redirect(`${url.origin}/0:/`, 302);
      }

      const m = url.pathname.match(/^\/0:(\/.*)$/);
      if (!m) return jsonResponse({ error: 'not_found', status: 404 }, 404, request);

      const path = decodeURIComponent(m[1]);

      // A trailing slash means "show this folder" rather than "download a file".
      // Folders render as a page you can pick URLs from; add ?json to get data.
      if (path.endsWith('/')) {
        if (url.searchParams.has('json')) return await listJson(path, request, cfg);
        return listHtml(await readFolder(path, request, cfg), request);
      }

      return await serveFile(path, url, request, cfg);
    } catch (err) {
      return errorResponse(err, request);
    }
  },
};
