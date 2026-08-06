// GET /api/videos?category=classic|outframe
//
// Public, read-only. This is what the gallery pages call. Unlike the old
// Supabase setup, no key is exposed to the browser and there is no way to
// reach anything but a SELECT from here.

import { json, badRequest, CATEGORIES } from './_shared.js';

export async function onRequestGet({ request, env }) {
  const category = new URL(request.url).searchParams.get('category');

  if (category && !CATEGORIES.includes(category)) {
    return badRequest(`Unknown category. Expected one of: ${CATEGORIES.join(', ')}`);
  }

  try {
    const sql = `SELECT id, category, title, content_type, genre, language, year,
                        stream_url, download_url, thumb, description, created_at
                 FROM videos
                 ${category ? 'WHERE category = ?' : ''}
                 ORDER BY created_at DESC, id DESC`;

    const stmt = category
      ? env.DB.prepare(sql).bind(category)
      : env.DB.prepare(sql);

    const { results } = await stmt.all();

    return json(results ?? [], 200, {
      // Short edge cache: the catalogue changes rarely, and the admin panel
      // busts it by hitting the API with no-store.
      'Cache-Control': 'public, max-age=60',
    });
  } catch (err) {
    return json({ error: 'Could not load videos', detail: err.message }, 500);
  }
}
