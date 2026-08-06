// Reached only if _middleware.js let the request through, so hitting this
// successfully is itself the proof of a valid session.
import { json } from '../_shared.js';

export const onRequestGet = () => json({ authenticated: true });
