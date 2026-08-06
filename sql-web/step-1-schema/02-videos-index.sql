CREATE INDEX IF NOT EXISTS idx_videos_category_created ON videos (category, created_at DESC);
