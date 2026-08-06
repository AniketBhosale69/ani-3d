// PUT    /api/admin/videos/:id — update
// DELETE /api/admin/videos/:id — remove

import { json, badRequest, validate } from '../../_shared.js';

function parseId(params) {
  const id = parseInt(params.id, 10);
  return Number.isNaN(id) ? null : id;
}

export async function onRequestPut({ request, env, params }) {
  const id = parseId(params);
  if (id === null) return badRequest('Invalid id');

  let body;
  try {
    body = await request.json();
  } catch {
    return badRequest('Expected a JSON body');
  }

  const { data, errors } = validate(body, { partial: true });
  if (errors.length) return json({ error: errors.join('; ') }, 400);

  const cols = Object.keys(data);
  if (!cols.length) return badRequest('No updatable fields supplied');

  const assignments = cols.map((c) => `${c} = ?`).join(', ');
  const row = await env.DB
    .prepare(`UPDATE videos
              SET ${assignments}, updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
              WHERE id = ?
              RETURNING *`)
    .bind(...cols.map((c) => data[c]), id)
    .first();

  if (!row) return json({ error: 'No video with that id' }, 404);
  return json(row);
}

export async function onRequestDelete({ env, params }) {
  const id = parseId(params);
  if (id === null) return badRequest('Invalid id');

  const row = await env.DB
    .prepare(`DELETE FROM videos WHERE id = ? RETURNING id`)
    .bind(id)
    .first();

  if (!row) return json({ error: 'No video with that id' }, 404);
  return json({ ok: true, id });
}
