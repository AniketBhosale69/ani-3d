CREATE INDEX IF NOT EXISTS idx_posts_status_created ON posts (status, created_at DESC);
