-- ANI3D video catalogue (Cloudflare D1)
--
-- Replaces the two Supabase tables (videos + outframe_videos) with a single
-- table discriminated by `category`, so one API and one admin form cover both
-- galleries and any future one.

DROP TABLE IF EXISTS videos;

CREATE TABLE videos (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  category     TEXT    NOT NULL CHECK (category IN ('classic', 'outframe')),
  title        TEXT    NOT NULL,
  content_type TEXT,
  genre        TEXT,              -- comma-separated, matching the existing data
  language     TEXT,
  year         INTEGER,
  stream_url   TEXT,
  download_url TEXT,
  thumb        TEXT,
  description  TEXT,
  created_at   TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  updated_at   TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

-- Every gallery query is "newest first within one category".
CREATE INDEX idx_videos_category_created ON videos (category, created_at DESC);


-- Blog posts (was the Supabase `blog_posts` table).

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  title      TEXT    NOT NULL,
  slug       TEXT    NOT NULL UNIQUE,
  category   TEXT,
  excerpt    TEXT,
  content    TEXT,              -- HTML, authored in the admin panel
  image      TEXT,
  author     TEXT,
  date       TEXT,              -- human-facing display date, e.g. "June 10, 2026"
  status     TEXT    NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  updated_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

CREATE INDEX idx_posts_status_created ON posts (status, created_at DESC);
