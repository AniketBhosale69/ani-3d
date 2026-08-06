import { json, createSession, checkPassword, sessionCookie } from '../_shared.js';

export async function onRequestPost({ request, env }) {
  if (!env.ADMIN_PASSWORD || !env.SESSION_SECRET) {
    return json({ error: 'Server not configured. Set ADMIN_PASSWORD and SESSION_SECRET secrets.' }, 500);
  }

  let password = '';
  try {
    ({ password = '' } = await request.json());
  } catch {
    return json({ error: 'Expected a JSON body' }, 400);
  }

  if (!(await checkPassword(password, env))) {
    // Small fixed delay to blunt rapid online guessing. Not a substitute for a
    // strong password — see DEPLOY.md.
    await new Promise((r) => setTimeout(r, 500));
    return json({ error: 'Incorrect password' }, 401);
  }

  const token = await createSession(env);
  return json({ ok: true }, 200, {
    'Set-Cookie': sessionCookie(token),
    'Cache-Control': 'no-store',
  });
}
