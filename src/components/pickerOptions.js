import { PALETTES } from "../templates/palettes";
import { DECORATIONS } from "./decorations";
import { LANGUAGES } from "../lib/languages";
import { CATEGORIES } from "../lib/categories";

export const PALETTE_IDS = Object.keys(PALETTES);
export const DECORATION_IDS = Object.keys(DECORATIONS);
export const REVEAL_IDS = ["burst", "rise", "fade", "none"];

// Curated title fonts (handwriting/display) + per-language scripts.
// Inside font can be any of these too.
export const TITLE_FONTS = [
  { id: "font-playfair", label: "Playfair", sample: "Aa" },
  { id: "font-dancing", label: "Dancing", sample: "Aa" },
  { id: "font-caveat", label: "Caveat", sample: "Aa" },
  { id: "font-kalam", label: "Kalam", sample: "Aa" },
  { id: "font-devanagari", label: "Devanagari", sample: "अआ" },
  { id: "font-marathi", label: "Marathi", sample: "अआ" },
  { id: "font-bangla", label: "Bangla", sample: "অআ" },
  { id: "font-tamil", label: "Tamil", sample: "அஆ" },
  { id: "font-telugu", label: "Telugu", sample: "అఆ" },
  { id: "font-kannada", label: "Kannada", sample: "ಅಆ" },
  { id: "font-gujarati", label: "Gujarati", sample: "અઆ" },
  { id: "font-gurmukhi", label: "Gurmukhi", sample: "ਅਆ" },
];

// Suggest title font by language (first-class match) or a general display font.
export const defaultFontForLang = (lang) => {
  const m = {
    hi: "font-devanagari",
    mr: "font-marathi",
    bn: "font-bangla",
    ta: "font-tamil",
    te: "font-telugu",
    kn: "font-kannada",
    gu: "font-gujarati",
    pa: "font-gurmukhi",
  };
  return m[lang] || "font-playfair";
};

export const CATEGORIES_FOR_PICKER = CATEGORIES.filter((c) => c.id !== "all");
export const LANGUAGES_FOR_PICKER = LANGUAGES;
