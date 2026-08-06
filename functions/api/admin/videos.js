// GET  /api/admin/videos  — full list, both categories
// POST /api/admin/videos  — create one

import { json, badRequest, validate } from '../_shared.js';

export async function onRequestGet({ env }) {
  const { results } = await env.DB
    .prepare(`SELECT * FROM videos ORDER BY created_at DESC, id DESC`)
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

  const { data, errors } = validate(body);
  if (errors.length) return json({ error: errors.join('; ') }, 400);

  const cols = Object.keys(data);
  const placeholders = cols.map(() => '?').join(', ');

  const row = await env.DB
    .prepare(`INSERT INTO videos (${cols.join(', ')}) VALUES (${placeholders}) RETURNING *`)
    .bind(...cols.map((c) => data[c]))
    .first();

  return json(row, 201);
}
