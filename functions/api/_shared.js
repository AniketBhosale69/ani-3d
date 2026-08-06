// Shared helpers for the ANI3D API.
//
// This module exports no onRequest* handlers, so Pages does not route it.

export const COOKIE = 'ani3d_session';
const SESSION_TTL = 60 * 60 * 12; // 12 hours

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}

export const badRequest = (msg) => json({ error: msg }, 400);
export const unauthorized = () => json({ error: 'Not authenticated' }, 401);

// Constant-time comparison. A plain === leaks how much of a secret matched via
// timing, which is exactly the signal an attacker guessing a password wants.
function safeEqual(a, b) {
  const enc = new TextEncoder();
  const x = enc.encode(a);
  const y = enc.encode(b);
  // Compare lengths without early-returning on them.
  let diff = x.length ^ y.length;
  const n = Math.max(x.length, y.length);
  for (let i = 0; i < n; i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

async function hmac(value, secret) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(value));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Token is "<expiry>.<hmac(expiry)>" — stateless, so no session storage needed.
export async function createSession(env) {
  const exp = String(Math.floor(Date.now() / 1000) + SESSION_TTL);
  return `${exp}.${await hmac(exp, env.SESSION_SECRET)}`;
}

export async function isAuthenticated(request, env) {
  if (!env.SESSION_SECRET) return false;

  const cookies = request.headers.get('Cookie') || '';
  const match = cookies.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]+)`));
  if (!match) return false;

  const [exp, sig] = decodeURIComponent(match[1]).split('.');
  if (!exp || !sig) return false;
  if (Number(exp) < Math.floor(Date.now() / 1000)) return false;

  return safeEqual(sig, await hmac(exp, env.SESSION_SECRET));
}

export async function checkPassword(password, env) {
  if (!env.ADMIN_PASSWORD) return false;
  return safeEqual(password, env.ADMIN_PASSWORD);
}

export function sessionCookie(token, maxAge = SESSION_TTL) {
  return `${COOKIE}=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${maxAge}`;
}

export const CATEGORIES = ['classic', 'outframe'];

// Whitelist of writable columns. Anything not listed is ignored, so a crafted
// request body cannot reach id, created_at, or a column added later.
const FIELDS = [
  'category', 'title', 'content_type', 'genre', 'language',
  'year', 'stream_url', 'download_url', 'thumb', 'description',
];

export function validate(body, { partial = false } = {}) {
  const out = {};
  const errors = [];

  for (const f of FIELDS) {
    if (!(f in body)) continue;
    let v = body[f];
    if (v === null || v === '') { out[f] = null; continue; }
    if (f === 'year') {
      const n = parseInt(v, 10);
      if (Number.isNaN(n) || n < 1800 || n > 2200) { errors.push('year must be a 4-digit year'); continue; }
      out[f] = n;
    } else {
      out[f] = String(v).trim();
    }
  }

  if (!partial) {
    if (!out.title) errors.push('title is required');
    if (!out.category) errors.push('category is required');
  }
  if (out.category && !CATEGORIES.includes(out.category)) {
    errors.push(`category must be one of: ${CATEGORIES.join(', ')}`);
  }
  for (const urlField of ['stream_url', 'download_url', 'thumb']) {
    const v = out[urlField];
    if (v && !/^https?:\/\//i.test(v)) errors.push(`${urlField} must start with http:// or https://`);
  }

  return { data: out, errors };
}

const POST_FIELDS = [
  'title', 'slug', 'category', 'excerpt', 'content', 'image', 'author', 'date', 'status',
];

export const slugify = (s) =>
  String(s).toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export function validatePost(body, { partial = false } = {}) {
  const out = {};
  const errors = [];

  for (const f of POST_FIELDS) {
    if (!(f in body)) continue;
    const v = body[f];
    out[f] = v === null || v === '' ? null : String(v).trim();
  }

  // A missing slug is derived from the title rather than rejected — the blog
  // page looks posts up by slug, so it must never end up empty.
  if (!partial && !out.slug && out.title) out.slug = slugify(out.title);
  if (out.slug) out.slug = slugify(out.slug);

  if (!partial) {
    if (!out.title) errors.push('title is required');
    if (!out.slug) errors.push('slug is required (or give a title to derive it from)');
    out.status = out.status || 'draft';
  }
  if (out.status && !['draft', 'published'].includes(out.status)) {
    errors.push("status must be 'draft' or 'published'");
  }
  if (out.image && !/^https?:\/\//i.test(out.image)) {
    errors.push('image must start with http:// or https://');
  }

  return { data: out, errors };
}
