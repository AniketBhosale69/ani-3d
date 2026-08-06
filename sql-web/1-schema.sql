-- ANI3D schema, for the D1 dashboard console.
--
-- Deliberately no DROP statements. On a fresh database they do nothing useful,
-- and if the console executes only the first statement of a paste, a leading
-- DROP appears to succeed while creating no tables — which then fails as
-- "no such table: videos" on the next file. IF NOT EXISTS makes every
-- statement here safe to re-run on its own.
--
-- If the console runs only one statement per Execute, run these one at a time,
-- top to bottom.

CREATE TABLE IF NOT EXISTS videos (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  category     TEXT    NOT NULL CHECK (category IN ('classic', 'outframe')),
  title        TEXT    NOT NULL,
  content_type TEXT,
  genre        TEXT,
  language     TEXT,
  year         INTEGER,
  stream_url   TEXT,
  download_url TEXT,
  thumb        TEXT,
  description  TEXT,
  created_at   TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  updated_at   TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_videos_category_created ON videos (category, created_at DESC);

CREATE TABLE IF NOT EXISTS posts (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  title      TEXT    NOT NULL,
  slug       TEXT    NOT NULL UNIQUE,
  category   TEXT,
  excerpt    TEXT,
  content    TEXT,
  image      TEXT,
  author     TEXT,
  date       TEXT,
  status     TEXT    NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  updated_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_posts_status_created ON posts (status, created_at DESC);
