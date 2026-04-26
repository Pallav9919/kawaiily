# Kawaiily

Send a cute personalised greeting card with a shareable link. Zero backend — everything lives in the URL fragment.

## Stack

Vite + React + Tailwind + Framer Motion. Config-driven template system.

## Develop

```bash
npm install
npm run dev
```

Requires Node ≥ 20.19.

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite. Click **Deploy**.

Every push to `main` auto-deploys.

## Adding a card template

Add an entry to `src/templates/registry.js`:

```js
{
  id: "short-stable-id",        // ends up in share URL — don't change after launch
  name: "Display Name",
  category: "love",             // one of: love birthday friendship festival thanks miss
  lang: "en",                   // "en" or "hi"
  cover: {
    palette: "rose",            // from templates/palettes.js
    decoration: "hearts",       // from components/decorations/index.jsx
    titleFont: "font-dancing",  // Tailwind class defined in src/index.css
    title: "Happy Whatever",
    emoji: "🌹",
  },
  inside: { palette: "rose", decoration: "none", font: "font-caveat" },
  reveal: "burst",              // from components/animations/index.js
}
```

## Self-hosted fonts

Fonts are checked into `public/fonts/` and declared in `src/fonts.css`. No runtime request to Google Fonts — faster first paint, no third-party tracking.

### Refreshing fonts

Run every few months to pick up updates from Google (glyph fixes, new weights Google may publish, etc.):

```bash
npm run fonts
```

This:
1. Fetches the Google Fonts CSS for all families we use
2. Downloads each `woff2` into `public/fonts/` (replacing previous files)
3. Regenerates `src/fonts.css` with local URLs

Then commit the diff:

```bash
git add public/fonts src/fonts.css
git commit -m "Refresh self-hosted fonts"
```

### Adding a new font family

1. Edit `scripts/fetch-fonts.mjs` — add `family=<New+Family>:wght@…` to `GOOGLE_CSS`
2. Run `npm run fonts`
3. Add a utility class in `src/index.css` (e.g. `.font-newname { font-family: "New Name", serif; }`)
4. Commit everything

### For AI assistants

If asked to update fonts, the full workflow is:
```bash
npm run fonts && git add public/fonts src/fonts.css && git commit -m "Refresh self-hosted fonts"
```
Check the diff size before committing — font files can be large. If a font family is no longer used in `src/templates/registry.js`, also remove it from `scripts/fetch-fonts.mjs`.
