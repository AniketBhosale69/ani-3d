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

### step-3-media-urls/ — 14 files, only for an already-populated database

Repoints every video's `stream_url` and `download_url` at `files.ani3d.in`,
replacing the old Wistia (streaming) and VikingFile (download) links.

**Skip this step on a fresh setup.** `step-2-data/` already carries the new URLs,
so running these against a database you just seeded changes nothing. They exist
for the live database, which was populated before the migration.

Each file is an `UPDATE ... WHERE title = '...'`, so they are safe to run twice
and safe to run in any order. Every one should report **1 row written**; a 0
means the title in the file no longer matches the title in the database.

**Do not paste all 14 at once.** `step-3-all-in-one.sql` exists for the CLI and
the REST API only — **it does not work in the D1 web console**. Tried on
2026-08-11: of 14 statements, the console executed only the **last** one and
silently discarded the other thirteen, reporting no error. This is the same
behaviour that produced the one-statement-per-file rule at the top of this file;
being idempotent `UPDATE`s does not help, because re-pasting just re-runs the
last statement.

**For the console, use `step-3-single-statement.sql`.** It expresses all 14
updates as *one* statement — `UPDATE videos SET stream_url = CASE title WHEN …`
— so there is nothing for the console to drop. It reports `14 rows written`.
This is the trick worth remembering for any future bulk edit here: don't fight
the one-statement limit, write one statement.

The 14 numbered files still work pasted individually, and remain the readable
per-row record of what changed.

For automation (needs the wrangler CLI):

```
npx wrangler d1 execute ani3d --remote --file=sql-web/step-3-all-in-one.sql
```

The two URLs per video are not interchangeable:

| Field | Points at | Ends with |
|---|---|---|
| `stream_url` | the `web/` encode — H.264/AAC, plays in the browser | `?inline=true` |
| `download_url` | the `master/` file — ProRes or H.264, for keeping | no query string |

`?inline=true` is what makes the worker send `Content-Disposition: inline`
instead of `attachment`. Without it the browser downloads the file rather than
playing it in the modal.

Seven rows point `download_url` at the `web/` encode because no master exists for
them: the six out-of-frame videos (that category has no masters) and
`The beautiful view of Dhom Lake, Mahabaleshwar in TRUE 3D`.

Check afterwards — expect 14 and 0:

```sql
SELECT COUNT(*) FROM videos WHERE stream_url LIKE 'https://files.ani3d.in/%';
SELECT COUNT(*) FROM videos WHERE stream_url LIKE '%wistia%' OR download_url LIKE '%vikingfile%';
```

## Provenance

Generated from `seed.sql`, which was exported from Supabase by
`tools/export-supabase.mjs`. Verified by running all 20 files one at a time and
comparing the result against `seed.sql` row for row.
