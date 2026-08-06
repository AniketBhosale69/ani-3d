// Guards every /api/admin/* route except the login endpoint itself.
//
// Putting the check here rather than in each handler means a route added later
// is protected by default — the failure mode is "locked out", not "wide open".

import { isAuthenticated, unauthorized } from '../_shared.js';

export async function onRequest(context) {
  const { request, env, next } = context;
  const { pathname } = new URL(request.url);

  if (pathname === '/api/admin/login') return next();

  if (!(await isAuthenticated(request, env))) return unauthorized();

  const response = await next();
  // Admin responses must never be cached by the browser or the edge.
  response.headers.set('Cache-Control', 'no-store');
  return response;
}
