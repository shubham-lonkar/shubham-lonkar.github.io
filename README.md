# Personal Website — Built with GitHub Pages + Claude

This repo is a single-page personal portfolio site, hosted for free on GitHub Pages and built/maintained by describing changes in plain English to Claude (via [Claude Code](https://claude.com/claude-code)) instead of hand-writing every edit. This README explains the setup well enough to copy the approach for your own site.

## Stack

- **Hosting:** GitHub Pages, served straight from the `main` branch of a repo named `<your-username>.github.io`.
- **Generator:** Jekyll, using a stock remote theme (`jekyll-theme-slate`) purely as scaffolding — almost everything visual is overridden by custom CSS.
- **Content:** one file, [`index.md`](index.md) — Jekyll front matter followed by plain HTML. No templating, no components, no JS framework.
- **Styling:** one file, [`assets/css/style.scss`](assets/css/style.scss) — CSS custom properties for colors (so a dark/light toggle is a handful of variable overrides, not a rewrite), plain flexbox for layout.
- **No local build step required.** GitHub Pages builds and deploys automatically on every push to `main`, usually live within a minute or two.

## Quick start

1. On GitHub, create a new **public** repo named exactly `<your-username>.github.io`. That exact name is what makes Pages auto-publish it at `https://<your-username>.github.io`.
2. Clone it locally.
3. Add a minimal `_config.yml`:
   ```yaml
   title: "Your Name"
   description: "One-line tagline"
   theme: jekyll-theme-slate
   ```
4. Add an `index.md` with Jekyll front matter at the top and your page content as plain HTML underneath:
   ```markdown
   ---
   layout: default
   title: Your Name
   ---
   <div class="site-wrapper">
     ...
   </div>
   ```
5. Commit and push to `main`. In the repo's **Settings → Pages**, confirm the source is `main` / `/ (root)`. Give it a minute, then visit your `.github.io` URL.

## Working with Claude

This site was built almost entirely through conversation rather than manual editing:

- Open the repo in Claude Code (or point a Claude Code session at the folder) so it can read and edit the files directly.
- Give it your real material up front — a resume, a thesis abstract, actual project write-ups — rather than vague prompts. Claude writes tighter, more accurate copy from concrete facts than from generalities.
- Ask for changes in plain language: *"move Skills into a sticky sidebar," "add a light mode toggle," "condense these bullets to two each," "reorder sections."* Claude edits `index.md` and `style.scss` directly and can explain what it changed.
- Review before it ships: Claude will show you the diff (`git diff`) and hold off on `git push` until you say so — nothing goes live without a review step.
- Iterate in small requests. One section, one fix, one tweak per message keeps changes easy to review and easy to undo.
- No local Jekyll/Ruby install is required for this workflow — Claude can verify the HTML is well-formed without running a local server, and you can preview the real result on the live Pages URL after each push.

## Repo structure

```
_config.yml              site title, description, theme
index.md                 the entire page — header, sections, footer scripts
assets/css/style.scss    theme variables, layout, dark/light mode
assets/images/           any images referenced from index.md
```

## Design choices worth stealing

- **Single page, anchor nav** (`#experience`, `#projects`, …) — far simpler to build, style, and maintain than multiple routed pages.
- **CSS custom properties for every color** — makes a light/dark toggle a small, low-risk change instead of a redesign.
- **No JS framework** — a couple of small inline `<script>` blocks handle the back-to-top button and the theme toggle; that's the entire client-side logic.

## Deploying updates

Any push to `main` rebuilds and redeploys automatically via GitHub Pages — no manual deploy step, no CI config needed.
