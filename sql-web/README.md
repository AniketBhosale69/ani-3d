# Paste-ready SQL for the Cloudflare D1 dashboard

For setting up the database from the browser, without the wrangler CLI.
(CLI route: see `DEPLOY.md` — it loads `schema.sql` + `seed.sql` in two commands.)

**Every file here contains exactly one SQL statement and no comments.** The D1
web console does not reliably execute a multi-statement paste — it will run some
statements and skip others, which produced errors like
`no such table: main.posts` when the `CREATE TABLE` in the same paste was
skipped but the `CREATE INDEX` after it ran.

## How to use

Open your D1 database in the Cloudflare dashboard → **Console** tab.

For each file, in filename order: open it, copy the whole thing, paste, **Execute**.

### step-1-schema/ — 4 files, run these first

| File | Creates |
|---|---|
| `01-videos-table.sql` | the `videos` table |
| `02-videos-index.sql` | its lookup index |
| `03-posts-table.sql` | the `posts` table |
| `04-posts-index.sql` | its lookup index |

All four use `IF NOT EXISTS`, so they are safe to run again if a previous
attempt half-completed.

Check before moving on:

```sql
SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';
```

Expect `videos` and `posts`.

### step-2-data/ — 16 files, one row each

Files `01`–`06` are the out-of-frame videos, `07`–`14` the immersive 3D videos,
`15`–`16` the blog posts. Order does not matter here, but running them in order
makes it easy to keep your place.

Unlike the schema files these are **not** safe to run twice — doing so inserts a
duplicate row. If you lose track, check what landed:

```sql
SELECT category, COUNT(*) FROM videos GROUP BY category;
SELECT COUNT(*) FROM posts;
```

Expect `classic 8`, `outframe 6`, and 2 posts.

If you do end up with duplicates, clear the table and start step 2 over:

```sql
DELETE FROM videos;
```

## Provenance

Generated from `seed.sql`, which was exported from Supabase by
`tools/export-supabase.mjs`. Verified by running all 20 files one at a time and
comparing the result against `seed.sql` row for row.
