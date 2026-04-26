// URL-hash encode/decode. Keys are short to keep URLs compact.
// Modes:
//  - Template:  { t, f, to, m }
//  - Tweak:     { t, f, to, m, o: { title?, emoji?, palette?, decoration?, insidePalette?, reveal? } }
//  - Scratch:   { f, to, m, c: { cat, lang, cover:{palette,decoration,titleFont,title,emoji}, inside:{palette,font}, reveal } }

const toB64Url = (s) =>
  btoa(unescape(encodeURIComponent(s)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

const fromB64Url = (s) => {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + pad;
  return decodeURIComponent(escape(atob(b64)));
};

export const encodeCard = (data) => toB64Url(JSON.stringify(data));

const str = (v, max) => (typeof v === "string" ? v.slice(0, max) : undefined);

const safeOverrides = (o) => {
  if (!o || typeof o !== "object") return undefined;
  const out = {};
  if (typeof o.title === "string") out.title = o.title.slice(0, 120);
  if (typeof o.emoji === "string") out.emoji = o.emoji.slice(0, 8);
  if (typeof o.palette === "string") out.palette = o.palette.slice(0, 32);
  if (typeof o.decoration === "string") out.decoration = o.decoration.slice(0, 32);
  if (typeof o.insidePalette === "string") out.insidePalette = o.insidePalette.slice(0, 32);
  if (typeof o.reveal === "string") out.reveal = o.reveal.slice(0, 16);
  return Object.keys(out).length ? out : undefined;
};

const safeCustom = (c) => {
  if (!c || typeof c !== "object") return undefined;
  const cover = c.cover || {};
  const inside = c.inside || {};
  return {
    cat: str(c.cat, 32) || "everyday",
    lang: str(c.lang, 4) || "en",
    cover: {
      palette: str(cover.palette, 32) || "rose",
      decoration: str(cover.decoration, 32) || "none",
      titleFont: str(cover.titleFont, 32) || "font-playfair",
      title: str(cover.title, 120) || "",
      emoji: str(cover.emoji, 8) || "✨",
    },
    inside: {
      palette: str(inside.palette, 32) || cover.palette || "rose",
      decoration: str(inside.decoration, 32) || "none",
      font: str(inside.font, 32) || cover.titleFont || "font-caveat",
    },
    reveal: str(c.reveal, 16) || "burst",
  };
};

export const decodeCard = (hash) => {
  try {
    const obj = JSON.parse(fromB64Url(hash));
    if (!obj || typeof obj !== "object") return null;
    const safe = {
      t: str(obj.t, 64) || "",
      f: str(obj.f, 120) || "",
      to: str(obj.to, 120) || "",
      m: str(obj.m, 5000) || "",
      o: safeOverrides(obj.o),
      c: safeCustom(obj.c),
    };
    if (!safe.m) return null;
    return safe;
  } catch {
    return null;
  }
};

export const buildShareUrl = (data) =>
  `${window.location.origin}${window.location.pathname}#${encodeCard(data)}`;
