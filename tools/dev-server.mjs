/**
 * Minimal local dev server for the gallery and blog pages.
 *
 *   node tools/dev-server.mjs [port]      # default 8788
 *
 * `python3 -m http.server` is enough for index.html, whose carousel reads the
 * hardcoded array in script.js. It is NOT enough for gallery-classic.html,
 * gallery-outframe.html or blog.html: those fetch /api/videos and /api/posts,
 * which are Cloudflare Pages Functions backed by D1. Against a plain static
 * server they show "Error loading videos — Server returned 404".
 *
 * The real answer is `npx wrangler pages dev .`, which runs the actual
 * Functions against a local D1. This exists for when that is not available
 * (no wrangler installed, no network to install it). It serves the static files
 * and answers the two read-only GET endpoints out of an in-memory SQLite
 * database built from schema.sql + seed.sql.
 *
 * Deliberately NOT a wrangler substitute: it reimplements the query rather than
 * running functions/api/*.js, so it can drift from them. It covers no POST, no
 * admin, and no auth. Use it to check the page and the player; use wrangler or
 * a deploy to check the API itself.
 */

import { createServer } from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { readFile } from 'node:fs/promises';
import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const PORT = Number(process.argv[2]) || 8788;

const db = new DatabaseSync(':memory:');
db.exec(readFileSync(path.join(ROOT, 'schema.sql'), 'utf8'));
db.exec(readFileSync(path.join(ROOT, 'seed.sql'), 'utf8'));

const MIME = {
  '.html': 'text/html;charset=UTF-8',
  '.js': 'text/javascript;charset=UTF-8',
  '.css': 'text/css;charset=UTF-8',
  '.json': 'application/json;charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.txt': 'text/plain;charset=UTF-8',
};

const sendJson = (res, body, status = 200) => {
  const payload = JSON.stringify(body);
  res.writeHead(status, { 'content-type': 'application/json;charset=UTF-8', 'cache-control': 'no-store' });
  res.end(payload);
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === '/api/videos') {
    const category = url.searchParams.get('category');
    if (category && !['classic', 'outframe'].includes(category)) {
      return sendJson(res, { error: 'Unknown category. Expected one of: classic, outframe' }, 400);
    }
    const sql =
      `SELECT id, category, title, content_type, genre, language, year,
              stream_url, download_url, thumb, description, created_at
       FROM videos ${category ? 'WHERE category = ?' : ''}
       ORDER BY created_at DESC, id DESC`;
    const stmt = db.prepare(sql);
    return sendJson(res, category ? stmt.all(category) : stmt.all());
  }

  if (url.pathname === '/api/posts') {
    const slug = url.searchParams.get('slug');
    const rows = slug
      ? db.prepare('SELECT * FROM posts WHERE slug = ? AND published = 1').all(slug)
      : db.prepare('SELECT * FROM posts WHERE published = 1 ORDER BY created_at DESC').all();
    return sendJson(res, slug ? (rows[0] ?? null) : rows);
  }

  // Static files, with the same index.html default Pages uses.
  let rel = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
  let file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT)) { res.writeHead(403).end('Forbidden'); return; }
  if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!existsSync(file) && existsSync(file + '.html')) file += '.html';

  if (!existsSync(file)) {
    res.writeHead(404, { 'content-type': 'text/plain' });
    return res.end(`404 ${rel}`);
  }

  res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] ?? 'application/octet-stream' });
  res.end(await readFile(file));
});

server.listen(PORT, '127.0.0.1', () => {
  const { videos, posts } = {
    videos: db.prepare('SELECT COUNT(*) c FROM videos').get().c,
    posts: db.prepare('SELECT COUNT(*) c FROM posts').get().c,
  };
  console.log(`dev server  http://127.0.0.1:${PORT}`);
  console.log(`seeded from seed.sql: ${videos} videos, ${posts} posts`);
  console.log(`api: /api/videos?category=classic|outframe   /api/posts[?slug=]`);
});
