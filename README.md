# Tenzing API Documentation

Source project for the interactive Tenzing API reference, built with
[Zudoku](https://zudoku.dev) from `apis/openapi.json` (generated from the
Tenzing OpenAPI spec — 810 endpoints across 120 resource groups).

## One-time setup: publish to GitHub Pages

1. Create a new **empty** GitHub repository named `tenzing-api-docs`
   (Settings → General on your GitHub account, or `gh repo create tenzing-api-docs --public`).
2. From this folder, push it:

   ```bash
   git init
   git add .
   git commit -m "Initial Tenzing API docs site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/tenzing-api-docs.git
   git push -u origin main
   ```

3. On GitHub: go to the repo's **Settings → Pages**, and under "Build and
   deployment", set **Source** to **GitHub Actions**. (The workflow in
   `.github/workflows/deploy.yml` is already included — it builds and
   deploys automatically on every push to `main`.)
4. Wait ~1-2 minutes for the "Deploy Tenzing API Docs to GitHub Pages"
   workflow to finish (check the **Actions** tab). The site will then be
   permanently live at:

   ```
   https://<your-username>.github.io/tenzing-api-docs/
   ```

## Updating the docs later

Edit `apis/openapi.json` (the spec) or `pages/introduction.mdx` (the intro
page), commit, and push to `main` — the GitHub Actions workflow rebuilds
and redeploys automatically. No local build step needed.

## Local development

```bash
npm install
npm run dev   # http://localhost:3000
```

## Notes

- The site is configured with `basePath: "/tenzing-api-docs"` in
  `zudoku.config.tsx` to match this exact repo name. If you rename the repo,
  update `basePath` to match and push again.
- If you'd rather host this elsewhere (Netlify, S3, an internal server)
  instead of GitHub Pages, just run `npm run build` and serve the
  `dist/tenzing-api-docs` folder — see `.github/workflows/deploy.yml` for
  the build command used.
