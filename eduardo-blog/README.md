# Eduardo's Astro blog

A static, GitHub Pages-ready blog with categories, Markdown posts, drafts, article pages, and RSS.

## Set up

1. In `astro.config.mjs`, replace `https://example.com` with your actual domain (including `https://`).
2. Upload the **contents** of this folder to the root of your GitHub Pages repository. Preserve `.github/workflows/deploy.yml`.
3. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. In GitHub: **Settings → Pages → Custom domain**, enter your existing domain if needed. Keep your existing DNS records.
5. In **Actions**, watch the deploy workflow. Your new website will replace the old landing page once deployment succeeds.

**Important:** If you upload through the GitHub web UI, hidden `.github` folders can be inconvenient to upload. The easiest way is to use Git locally or GitHub Desktop. The GitHub web UI also lets you create `.github/workflows/deploy.yml` using **Add file → Create new file**.

## Run locally

Install Node.js 22 or later, then run:

```bash
npm install
npm run dev
```

Open the localhost URL Astro prints. `npm install` generates `package-lock.json`; commit it. Commit the generated lockfile for reproducible builds; the workflow currently uses `npm install`.

## Publishing a post

1. Copy `src/content/blog/welcome.md` to `src/content/blog/my-new-post.md`.
2. Change the title, description, date, category, and body.
3. Set `draft: false`.
4. Commit and push to `main`. GitHub Actions rebuilds the site.

The filename becomes the article URL: `my-new-post.md` → `/blog/my-new-post/`.

## Editing / deleting

Edit the Markdown file and push to update. Delete the file and push to remove it from the generated website. Old URLs will return 404 after deployment. Set `draft: true` to unpublish without deleting source history.

**Privacy note:** A draft committed to a public GitHub repository is still visible in the repository even if it isn't built into the site. For private drafts, keep them off the public repository.

## Categories

Use one of: Engineering, Projects, Travel, Reflections. To add categories, update `src/content.config.ts` and `src/pages/blog/index.astro`.

## Comments

Not implemented. GitHub Pages is static; accounts, bans, IP controls, and rate limits require a separate backend or managed comment service. Never put database credentials or API secrets in public website source.

## Custom domain caveat

With GitHub Actions publishing, GitHub stores the custom domain in Pages settings; do not need to add a `CNAME` file manually. If you change the custom domain later, update `astro.config.mjs` too.
