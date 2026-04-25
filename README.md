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
