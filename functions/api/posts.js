// GET /api/posts        — published posts only
// GET /api/posts?slug=… — a single published post
//
// Public and read-only. Drafts are never reachable from here; they only appear
// via the authenticated /api/admin/posts route.

import { json } from './_shared.js';

export async function onRequestGet({ request, env }) {
  const slug = new URL(request.url).searchParams.get('slug');

  try {
    const base = `SELECT id, title, slug, category, excerpt, content, image, author,
                         date, created_at
                  FROM posts
                  WHERE status = 'published'`;

    if (slug) {
      const row = await env.DB.prepare(`${base} AND slug = ?`).bind(slug).first();
      if (!row) return json({ error: 'Post not found' }, 404);
      return json(row, 200, { 'Cache-Control': 'public, max-age=60' });
    }

    const { results } = await env.DB
      .prepare(`${base} ORDER BY created_at DESC, id DESC`)
      .all();

    return json(results ?? [], 200, { 'Cache-Control': 'public, max-age=60' });
  } catch (err) {
    return json({ error: 'Could not load posts', detail: err.message }, 500);
  }
}
