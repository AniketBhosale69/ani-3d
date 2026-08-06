#!/usr/bin/env bash
# ANI3D - local dev server
#
# The site is fully static (HTML/CSS/vanilla JS), so all this does is serve the
# folder over HTTP. Serving it matters -- opening index.html as a file:// URL
# breaks the Supabase fetch on the gallery pages and the Wistia iframes.
#
# Usage:
#   ./run.sh              serve on port 8000 (or next free one) and open browser
#   ./run.sh 3000         serve on port 3000
#   ./run.sh --no-open    don't launch a browser

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=8000
OPEN_BROWSER=1

for arg in "$@"; do
  case "$arg" in
    --no-open) OPEN_BROWSER=0 ;;
    -h|--help) sed -n '2,12p' "${BASH_SOURCE[0]}"; exit 0 ;;
    ''|*[!0-9]*) echo "Unknown argument: $arg (expected a port number or --no-open)" >&2; exit 1 ;;
    *) PORT="$arg" ;;
  esac
done

port_in_use() {
  (exec 3<>"/dev/tcp/127.0.0.1/$1") 2>/dev/null && exec 3>&- && return 0 || return 1
}

# If the requested port is taken, walk forward until we find a free one.
START_PORT=$PORT
while port_in_use "$PORT"; do
  PORT=$((PORT + 1))
  if [ $((PORT - START_PORT)) -gt 20 ]; then
    echo "No free port found between $START_PORT and $PORT." >&2
    exit 1
  fi
done
[ "$PORT" -ne "$START_PORT" ] && echo "Port $START_PORT was busy, using $PORT instead."

URL="http://localhost:$PORT/index.html"

echo ""
echo "  ANI3D  ·  The 3D Experience Project"
echo "  ───────────────────────────────────"
echo "  serving : $ROOT"
echo "  url     : $URL"
echo "  pages   : /index.html  /gallery-classic.html  /gallery-outframe.html"
echo "            /creator.html  /blog.html  /privacy.html  /terms.html"
echo ""
echo "  Ctrl+C to stop."
echo ""

if [ "$OPEN_BROWSER" -eq 1 ] && command -v xdg-open >/dev/null 2>&1; then
  # Give the server a moment to bind before the browser hits it.
  ( sleep 1; xdg-open "$URL" >/dev/null 2>&1 ) &
fi

cd "$ROOT"

if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT" --bind 127.0.0.1
elif command -v npx >/dev/null 2>&1; then
  exec npx --yes serve -l "$PORT" .
elif command -v php >/dev/null 2>&1; then
  exec php -S "127.0.0.1:$PORT"
else
  echo "Need python3, npx, or php to serve the site. None found." >&2
  exit 1
fi
