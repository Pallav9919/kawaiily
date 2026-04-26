// Downloads the fonts used by Kawaiily from Google Fonts into public/fonts/
// and generates src/fonts.css with @font-face rules pointing to local files.
//
// Usage:  node scripts/fetch-fonts.mjs
// Re-run periodically (e.g. quarterly) to pick up font updates from Google.

import { writeFile, mkdir, readdir, rm } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import path from "node:path";

const GOOGLE_CSS =
  "https://fonts.googleapis.com/css2?" +
  "family=Caveat:wght@500;700&" +
  "family=Dancing+Script:wght@600;700&" +
  "family=Playfair+Display:wght@700&" +
  "family=Kalam:wght@400;700&" +
  "family=Tiro+Devanagari+Hindi:ital@0;1&" +
  "family=Tiro+Devanagari+Marathi:ital@0;1&" +
  "family=Tiro+Tamil:ital@0;1&" +
  "family=Tiro+Bangla:ital@0;1&" +
  "family=Tiro+Gujarati:ital@0;1&" +
  "family=Tiro+Kannada:ital@0;1&" +
  "family=Tiro+Telugu:ital@0;1&" +
  "family=Tiro+Gurmukhi:ital@0;1&" +
  "display=swap";

// Chrome UA ⇒ Google returns woff2 (smallest, modern)
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const FONT_DIR = path.resolve("public/fonts");
const CSS_OUT = path.resolve("src/fonts.css");

async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  return res.text();
}

async function downloadFile(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(dest));
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function main() {
  // Ensure font dir exists and is empty (fresh pull)
  await mkdir(FONT_DIR, { recursive: true });
  for (const f of await readdir(FONT_DIR).catch(() => [])) {
    await rm(path.join(FONT_DIR, f), { force: true });
  }

  console.log("Fetching CSS from Google…");
  const css = await fetchText(GOOGLE_CSS);

  // Parse each @font-face block
  const blocks = css.split("@font-face").slice(1).map((b) => "@font-face" + b);
  console.log(`Found ${blocks.length} @font-face blocks`);

  const counts = new Map();
  let rewritten = "";

  for (const block of blocks) {
    const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
    const style = /font-style:\s*(\w+)/.exec(block)?.[1] || "normal";
    const weight = /font-weight:\s*(\d+)/.exec(block)?.[1] || "400";
    const urlMatch = /url\((https:\/\/[^)]+)\)/.exec(block);
    const unicodeRange = /unicode-range:\s*([^;]+);/.exec(block)?.[1]?.trim();
    if (!family || !urlMatch) continue;

    const famSlug = slugify(family);
    const key = `${famSlug}-${weight}-${style}`;
    const n = (counts.get(key) || 0) + 1;
    counts.set(key, n);
    const fname = `${key}-${n}.woff2`;
    const dest = path.join(FONT_DIR, fname);
    console.log(`  ${family} ${weight} ${style} #${n}`);
    await downloadFile(urlMatch[1], dest);

    rewritten +=
      `@font-face {\n` +
      `  font-family: '${family}';\n` +
      `  font-style: ${style};\n` +
      `  font-weight: ${weight};\n` +
      `  font-display: swap;\n` +
      `  src: url('/fonts/${fname}') format('woff2');\n` +
      (unicodeRange ? `  unicode-range: ${unicodeRange};\n` : "") +
      `}\n\n`;
  }

  await writeFile(CSS_OUT, rewritten);
  console.log(`\n✓ Wrote ${CSS_OUT}`);
  console.log(`✓ Downloaded ${blocks.length} files to ${FONT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
