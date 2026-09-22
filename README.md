# Solimon Security

The static React site for Solimon Security, built with Vite and ready to deploy to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Before pushing, run:

```bash
npm run lint
npm run build
```

The build creates `dist/index.html` and a matching `dist/404.html`. The fallback keeps the React Router pages working when a visitor refreshes a deep link on GitHub Pages.

## GitHub Pages

This repository is named `RKKDC.github.io`, so it is configured as a user site with the root path `/`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site automatically whenever changes are pushed to `main`.

In the repository settings, open **Pages** and set **Source** to **GitHub Actions**. After the first successful workflow run, the site will be available at `https://rkkdc.github.io/`.
