import { json, sessionCookie } from '../_shared.js';

export async function onRequestPost() {
  return json({ ok: true }, 200, {
    'Set-Cookie': sessionCookie('', 0),
    'Cache-Control': 'no-store',
  });
}
