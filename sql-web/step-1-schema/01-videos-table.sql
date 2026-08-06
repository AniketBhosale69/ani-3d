CREATE TABLE IF NOT EXISTS videos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL CHECK (category IN ('classic', 'outframe')),
  title TEXT NOT NULL,
  content_type TEXT,
  genre TEXT,
  language TEXT,
  year INTEGER,
  stream_url TEXT,
  download_url TEXT,
  thumb TEXT,
  description TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);
