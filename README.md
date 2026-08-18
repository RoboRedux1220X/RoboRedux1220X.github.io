# 1220X RoboRedux — Team Website

This is the starting layout for your team website. It has three pages
(Home, About, Sponsors) styled to match your team colors, plus placeholder
spots for your own photos and text. Nothing here is final — everything
marked with a `✏️ EDIT ME` or `⚙️ ADD IMAGE HERE` comment in the code is
meant for you to change.

## What's in this folder

```
index.html        → Home page
about.html         → About / "Who We Are" page
sponsors.html      → Sponsorship packet page (has the tiers + Contact Us button)
css/style.css      → All the styling (colors, fonts, layout) — one file controls the whole site
js/main.js         → Small script that runs the mobile menu button
images/            → Put your photos and logo here
```

## 1. Preview it on your own computer (before uploading anywhere)

You don't need to install anything. Find the folder on your computer, and
double-click **index.html**. It will open in your web browser and look
exactly like it will online. Click around to check Home, About, and
Sponsors. Do this again any time you make an edit, to see your change.

## 2. Get this code onto GitHub

Since you already have a repository started, the easiest way to add these
files — no software or command line required — is through GitHub's
website:

1. Go to your repository on **github.com** (log in first).
2. Click the **Add file** button (top right of the file list), then choose
   **Upload files**.
3. On the upload page, drag this entire `roboredux-website` folder
   (or just its contents: `index.html`, `about.html`, `sponsors.html`, and
   the `css`, `js`, and `images` folders) into the browser window. Modern
   GitHub accepts whole folders dropped in at once, and it will keep the
   folder structure intact.
4. Scroll down, type a short message like "Add website files" in the
   **Commit changes** box, and click the green **Commit changes** button.

Your repository's file list should now show `index.html` at the top level
(not inside another folder) along with the `css`, `js`, and `images`
folders next to it. This matters — if `index.html` ends up nested inside
an extra folder, GitHub Pages won't find it.

## 3. Turn the repository into a live website (GitHub Pages)

1. In your repository, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
5. Wait a minute or two, then refresh the page. GitHub will show you your
   live URL — something like:
   `https://your-username.github.io/your-repo-name/`

Any time you upload changed files the same way (step 2), the live site
updates automatically within a minute or two.

## 4. Add your own text

Open any `.html` file in a text editor (even a basic one like Notepad or
TextEdit works, though a free tool like
[VS Code](https://code.visualstudio.com/) is much easier to read code in).
Search for comments that look like this:

```html
<!-- ✏️ EDIT ME: your tagline -->
<p class="hero-tagline">Empowering the next generation...</p>
```

The comment tells you what the line below it is for. Just change the
text between the tags (leave the tags themselves — the parts in
`< >` — alone), save the file, and re-upload it to GitHub the same way as
before (Add file → Upload files → it will ask if you want to replace the
existing file).

## 5. Add your own images

Right now every photo spot on the site is a gray placeholder box so the
site looks complete before you have real images. Each one has a comment
above it, like:

```html
<!--
  ⚙️ ADD IMAGE HERE: your best team or robot photo
  1. Save an image as images/hero.jpg
  2. Delete the <div class="img-placeholder">...</div> block below
  3. Replace it with:
     <img src="images/hero.jpg" alt="1220X RoboRedux team with their robot">
-->
<div class="img-placeholder img-placeholder--square">
  ...
</div>
```

To use it:
1. Put your photo file in the `images` folder (see `images/README.txt`
   for suggested filenames).
2. Delete the placeholder `<div class="img-placeholder">...</div>` block.
3. Type the `<img>` line shown in the comment in its place.
4. Re-upload both the changed HTML file and the new image to GitHub.

Your logo works the same way — see the comment above `.logo` in each
HTML file's header.

## 6. Change colors or fonts

Everything visual is controlled from one place: the top of
`css/style.css`, in a section called **DESIGN TOKENS**. For example:

```css
--red: #e2032b;
--blue: #0b3d91;
```

Change the hex code (the `#` value) and every red or blue element on the
whole site updates. The sponsorship tier colors (`--bronze`, `--silver`,
`--gold`) work the same way.

## Notes

- The **Contact Us** button on the Sponsors page opens the visitor's email
  app addressed to `roboredux1220@gmail.com`. That works with no extra
  setup because this is a simple static website with no backend server.
- The season stats ("7 awards," "Top 4 at States," etc.) appear on both
  the Home and About pages — update both spots each season.
- If something looks broken after uploading, the most common cause is
  `index.html` ending up inside an extra folder instead of at the top
  level of the repository — check step 2 above.

## Editing directly on GitHub (no downloads needed)

You don't have to download anything to make changes — GitHub lets you edit
files and add photos right in the browser.

**To edit text in a file:**
1. In your repository, click the file (e.g. `about.html`).
2. Click the pencil icon in the top right of the file view (it may be
   under a small ✏️ "Edit" button or a `...` menu, depending on your
   screen size).
3. Make your change, then scroll down and click **Commit changes**.

**To add a photo:**
1. In your repository, click into the `images` folder.
2. Click **Add file → Upload files**.
3. Drag your photo in (or click "choose your files") and give it a
   simple name, like `student-1.jpg`, matching what the comment in the
   HTML file asks for.
4. Click **Commit changes**.
5. Go edit the matching HTML file (same steps as above) and swap in the
   `<img>` tag exactly as shown in the comment above that photo spot.

Either way, your live site updates automatically within a minute or two.
