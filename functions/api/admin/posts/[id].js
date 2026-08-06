// PUT    /api/admin/posts/:id
// DELETE /api/admin/posts/:id

import { json, badRequest, validatePost } from '../../_shared.js';

export async function onRequestPut({ request, env, params }) {
  const id = parseInt(params.id, 10);
  if (Number.isNaN(id)) return badRequest('Invalid id');

  let body;
  try {
    body = await request.json();
  } catch {
    return badRequest('Expected a JSON body');
  }

  const { data, errors } = validatePost(body, { partial: true });
  if (errors.length) return json({ error: errors.join('; ') }, 400);

  const cols = Object.keys(data);
  if (!cols.length) return badRequest('No updatable fields supplied');

  try {
    const row = await env.DB
      .prepare(`UPDATE posts
                SET ${cols.map((c) => `${c} = ?`).join(', ')},
                    updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
                WHERE id = ?
                RETURNING *`)
      .bind(...cols.map((c) => data[c]), id)
      .first();

    if (!row) return json({ error: 'No post with that id' }, 404);
    return json(row);
  } catch (err) {
    if (/UNIQUE/i.test(err.message)) return json({ error: 'That slug is already in use' }, 409);
    throw err;
  }
}

export async function onRequestDelete({ env, params }) {
  const id = parseInt(params.id, 10);
  if (Number.isNaN(id)) return badRequest('Invalid id');

  const row = await env.DB.prepare(`DELETE FROM posts WHERE id = ? RETURNING id`).bind(id).first();
  if (!row) return json({ error: 'No post with that id' }, 404);
  return json({ ok: true, id });
}
