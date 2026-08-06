// GET  /api/admin/posts — every post, drafts included
// POST /api/admin/posts — create one

import { json, badRequest, validatePost } from '../_shared.js';

export async function onRequestGet({ env }) {
  const { results } = await env.DB
    .prepare(`SELECT * FROM posts ORDER BY created_at DESC, id DESC`)
    .all();
  return json(results ?? []);
}

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return badRequest('Expected a JSON body');
  }

  const { data, errors } = validatePost(body);
  if (errors.length) return json({ error: errors.join('; ') }, 400);

  const cols = Object.keys(data);
  try {
    const row = await env.DB
      .prepare(`INSERT INTO posts (${cols.join(', ')}) VALUES (${cols.map(() => '?').join(', ')}) RETURNING *`)
      .bind(...cols.map((c) => data[c]))
      .first();
    return json(row, 201);
  } catch (err) {
    if (/UNIQUE/i.test(err.message)) return json({ error: 'That slug is already in use' }, 409);
    throw err;
  }
}
