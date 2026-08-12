# ani-3d

The ANI3D website — a catalogue of stereoscopic 3D conversions, with two
galleries, a blog, and an admin panel to manage both.

Static HTML/CSS/JS on **Cloudflare Pages**, with a handful of Functions in
`functions/api/` reading a **Cloudflare D1** database. Video files live in
Google Drive and are served through a separate Worker at `files.ani3d.in`
(source in `files-worker/`). Thumbnails are hosted on ImgBB.

| Thing | Where |
|---|---|
| Live site | https://ani3d.in |
| Admin panel | https://ani3d.in/admin |
| Media index | https://files.ani3d.in |
| First-time setup, secrets, D1 bindings | [`DEPLOY.md`](DEPLOY.md) |
| Pasting SQL into the D1 dashboard | [`sql-web/README.md`](sql-web/README.md) |

The rest of this file is the day-to-day guide: **how to add a video**, what every
field means, and why the gallery filters are pickier than they look.

---

## Signing in

Go to **https://ani3d.in/admin** and enter the password. There is no username.

- The password is the `ADMIN_PASSWORD` secret on the Pages project. To change it,
  see [`DEPLOY.md` § 2](DEPLOY.md).
- Sessions last **12 hours**, then you are signed out and have to log in again.
- A wrong password is deliberately slow to answer (half a second) to make
  guessing tedious.
- **"Server not configured" or a 500 on login** means `ADMIN_PASSWORD` and
  `SESSION_SECRET` are not set as secrets in the **Production** environment. It
  is not a wrong-password problem. Set them, redeploy, try again.
- Signing out, or changing `SESSION_SECRET`, invalidates the cookie immediately.
  Changing the secret kicks out *every* session everywhere, which is the lever to
  pull if you think a login leaked.

The panel has two sections in the top bar: **Videos** and **Posts**.

---

## Adding a video

Same form for both galleries — the **Category** field is what decides where the
video shows up. Four things happen before you touch the form: upload the file,
copy its URLs, upload a thumbnail, then fill in the metadata.

### Step 1 — Put the file in Google Drive

Everything served by `files.ani3d.in` lives under one Drive folder,
`web-uploads`, laid out like this:

```
web-uploads/
├── classic/
│   ├── web/       ← what streams in the browser   (8 files)
│   └── master/    ← what people download          (7 files)
└── outframe/
    └── web/       ← streams AND downloads         (7 files)
```

Two folders per category, and the split matters:

- **`web/`** must be **H.264 video + AAC audio in an .mp4**. This is the file the
  browser plays inline. Anything else — ProRes, HEVC, DNxHR — will not decode in
  Chrome or Firefox and the player will fall back to an error message with a
  download link.
- **`master/`** is the full-quality file people keep: ProRes 422, H.264, whatever
  you produced. It is never played in the browser, only downloaded, so the codec
  does not matter. These are large (up to ~9 GB).

**Out-of-frame has no `master/` folder.** For those, the `web/` encode is both
the stream and the download.

Two conventions worth keeping:

- Name the file something close to the title. It becomes part of the public URL
  and is what you will search for later.
- Avoid double spaces and stray punctuation. They work, but they have to be
  percent-encoded by hand and are easy to get wrong — one existing file has a
  double space in it and it is a recurring nuisance.

A **faststart** remux (`ffmpeg -i in.mp4 -c copy -movflags +faststart out.mp4`)
is worth doing on the `web/` file. Without it the browser has to make a second
request for the end of the file before playback starts. It still works either
way; it is just a little slower to start.

### Step 2 — Get the stream and download URLs

URLs follow a fixed shape:

```
https://files.ani3d.in/0:/<category>/<web|master>/<filename>
```

Note the `0:` — that is part of the path, not a typo.

To see what is actually in a folder, open its listing:

```
https://files.ani3d.in/api/list?path=/classic/web
```

**The filename must be percent-encoded.** Spaces become `%20`, commas `%2C`, and
so on. The reliable way to produce one is your browser's dev console:

```js
'https://files.ani3d.in/0:/classic/web/' +
  encodeURIComponent('Alpha - Classic 3D Teaser.mp4')
```

Then fill the two fields as follows.

| Field | Points at | Query string |
|---|---|---|
| **Stream URL** | the `web/` encode | **must end in `?inline=true`** |
| **Download URL** | the `master/` file (classic) or the same `web/` file (outframe) | **no query string** |

`?inline=true` is not decoration. It tells the worker to send
`Content-Disposition: inline`, which is what makes the browser *play* the file.
Without it the same URL downloads instead, and the Stream button silently turns
into a second Download button.

A worked pair, classic:

```
Stream    https://files.ani3d.in/0:/classic/web/Alpha%20-%20Classic%203D%20Teaser.mp4?inline=true
Download  https://files.ani3d.in/0:/classic/master/Alpha%20-%20Classic%203D%20Teaser.mov
```

And out-of-frame, where both point at the same file:

```
Stream    https://files.ani3d.in/0:/outframe/web/Ramayana%20Rama%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true
Download  https://files.ani3d.in/0:/outframe/web/Ramayana%20Rama%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4
```

**Don't assume the master's extension.** Most are `.mov`, but at least one is
`.mp4`. Check the listing rather than pattern-matching off the web file.

Before saving, paste each URL into a browser tab. The stream URL should start
playing; the download URL should start downloading. Two minutes here saves
finding out from a visitor.

### Step 3 — Upload a thumbnail

Thumbnails are **not** in Drive — they go to [ImgBB](https://imgbb.com), which
gives back a permanent `https://i.ibb.co/…` link. Drive's own thumbnail URLs
expire after a few hours, which is why they are not used.

- Upload the image, then copy the **direct link** (ends in `.png` / `.jpg`), not
  the page link.
- **16:9**, around 1280×720. The image is used both on the gallery card and as
  the video's poster frame, so it is what people see while the video buffers.
- The admin form previews it as soon as you paste a valid URL. If no preview
  appears, the link is wrong — usually an ImgBB *page* URL rather than the image.

### Step 4 — Fill in the form

**+ Add video**, then:

| Field | Required | Notes |
|---|---|---|
| **Title** | yes | Shown on the card and in the modal. Also what gallery search matches. |
| **Category** | yes | `Immersive 3D (classic)` or `Out of Frame 3D`. Decides which gallery it appears in — nothing else does. |
| **Content type** | no | One value, e.g. `Trailer`, `Teaser`, `Clip`. See the filter rules below. |
| **Language** | no | One value, e.g. `English`, `Hindi`, `Marathi`. |
| **Year** | no | 4 digits, 1800–2200. Anything outside that range is rejected. |
| **Genre** | no | **Comma-separated**, e.g. `Action, Adventure, Sci-Fi`. The only multi-value field. |
| **Stream URL** | no | From step 2. Must start with `http://` or `https://`. |
| **Download URL** | no | From step 2. |
| **Thumbnail URL** | no | From step 3. |
| **Description** | no | Free text shown in the modal — conversion notes, source, settings. Gallery search matches this too. |

Only Title and Category are enforced. A video with no stream URL saves happily
and then does nothing when clicked, so treat the rest as required in practice.

**Content type** and **Language** offer autocomplete drawn from values already in
the catalogue. Use the suggestions. They exist specifically so spelling stays
consistent, because the filters are exact-match.

### Step 5 — Save and check

Hit **Save**. The video appears in the admin table immediately.

On the live gallery it can take up to **a minute** — `/api/videos` is cached at
the edge for 60 seconds. If it has not shown up after that, hard-refresh.

New videos sort to the **top** of the gallery; ordering is newest-created first,
and there is no way to reorder from the panel.

---

## How the gallery filters actually work

Worth reading once, because it explains most "why isn't my video showing up"
questions.

Each gallery has a filter panel with four groups: **content type**, **genre**,
**language**, **year**. Two things to know:

**1. Only one filter is active at a time.** Picking a genre clears the content
type. They do not combine.

**2. The buttons are a fixed hardcoded list** — around 225 content types, 296
genres, 115 languages, baked into `gallery-classic.html` and
`gallery-outframe.html`. Your video is matched against them like this:

- **content type** and **language** must match **exactly** (case-insensitive).
- **genre** is split on commas and each piece must match exactly.

So a genre of `Action, Adventure` matches both the Action and Adventure buttons.
A content type of `Clip, Movie` matches **neither** Clip nor Movie — that field
is single-valued, commas and all.

**The multi-word trap.** The buttons compare against an internal id, which is
lowercased and hyphenated. Single words are fine: `Action` matches `action`.
Multi-word values are not: `Fantasy Epic` never matches `fantasy-epic`, so a
video tagged that way is invisible under every genre button. Thirteen values in
the current catalogue have this problem, including `Fantasy Epic`, `Action Epic`,
`Period Drama`, `Marvel`, `Spy`, `IMAX`, and the content type
`Introduction Trailer`.

Practically: **prefer single-word values.** A multi-word tag still displays on
the card, it just cannot be filtered on. Fixing that properly means editing the
lists in both gallery files.

A video is never hidden by the filters when **All** is selected — it always
appears in its gallery regardless of how odd its metadata is.

The gallery **search box** matches title and description only, not genre or
language. The admin table's search is broader: title, genre, language, and
content type.

---

## Editing and deleting

- **Edit** on any row reopens the same form, prefilled. Blanking a field clears
  it.
- **Delete** asks for confirmation, then removes the row permanently. There is no
  undo and no trash. The Drive file and the ImgBB image are untouched — only the
  catalogue entry goes.
- The category tabs and search box above the table are just for finding rows;
  they change nothing.

If you delete something by accident, the last known-good catalogue is in
`seed.sql` in this repo — you can read the row back out of there and retype it.

---

## Blog posts

**Posts** section, then **+ Add post**. Same shape, different fields:

| Field | Notes |
|---|---|
| **Title** | Required. |
| **Slug** | The URL. Leave blank and it is derived from the title. **Changing it on a live post breaks every existing link to that post.** |
| **Status** | `Draft` hides it; `Published` puts it live. New posts default to draft. |
| **Category** | Free text with autocomplete from existing posts. |
| **Author** | Free text. |
| **Display date** | Free text, e.g. `June 10, 2026`. Cosmetic — it does not affect ordering. |
| **Cover image URL** | ImgBB, same as thumbnails. |
| **Excerpt** | One or two sentences for the blog card. |
| **Content** | **Raw HTML**, rendered as-is on the blog page. Only paste markup you trust. |

Posts sort newest-created first. Only published posts are visible publicly.

---

## Repo layout

```
index.html              home page — its carousel is a HARDCODED array in
                        script.js, separate from the database
gallery-classic.html    the two galleries. Near-identical; a change to one
gallery-outframe.html   almost always belongs in the other too
blog.html               blog, reads /api/posts
admin/index.html        the whole admin panel, one file
functions/api/          Cloudflare Pages Functions
  videos.js               GET  /api/videos?category=…   public, read-only
  posts.js                GET  /api/posts               public, read-only
  admin/                  everything behind the login
  _shared.js              auth, sessions, field validation
files-worker/           the files.ani3d.in Worker (Google Drive index)
schema.sql              D1 tables
seed.sql                full catalogue snapshot
sql-web/                paste-ready SQL for the D1 dashboard
tools/                  local dev server and export scripts
```

**The home page carousel does not read the database.** It is a literal array near
the top of `script.js`. Adding a video in the admin panel will not put it on the
home page — that needs a code change and a deploy.

---

## Troubleshooting

| Symptom | Cause |
|---|---|
| Login returns 500 | `ADMIN_PASSWORD` / `SESSION_SECRET` not set as Production secrets. |
| Signed out after a while | Normal — sessions are 12 hours. |
| Video saved but not on the gallery | 60-second edge cache. Wait, then hard-refresh. |
| Stream button downloads instead of playing | Missing `?inline=true` on the stream URL. |
| Player shows "couldn't be played" | The stream URL points at a `master/` file, or a `web/` file that is not H.264+AAC. |
| Video is missing under a filter but visible under All | Metadata does not exactly match a filter button — see the filter rules above. |
| Everything on the site fails at once | `files.ani3d.in` is down, or its OAuth credentials expired. Test a file URL directly. |
| Thumbnail preview blank in the form | ImgBB page link instead of the direct image link. |
