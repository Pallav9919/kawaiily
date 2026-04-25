// Template registry. Each template composes palette + decoration + fonts + copy.
// Keep IDs short & stable — they go into share URLs.
export const TEMPLATES = [
  // ---------- LOVE ----------
  {
    id: "love-rose",
    name: "Rose Garden",
    category: "love",
    lang: "en",
    cover: {
      palette: "rose",
      decoration: "hearts",
      titleFont: "font-dancing",
      title: "With All My Love",
      emoji: "🌹",
    },
    inside: {
      palette: "rose",
      decoration: "none",
      font: "font-caveat",
    },
    reveal: "burst",
  },
  {
    id: "love-tum-ho",
    name: "Tum Ho",
    category: "love",
    lang: "hi",
    cover: {
      palette: "lavender",
      decoration: "petals",
      titleFont: "font-devanagari",
      title: "तुम हो तो सब है",
      emoji: "💖",
    },
    inside: {
      palette: "lavender",
      decoration: "none",
      font: "font-devanagari",
    },
    reveal: "rise",
  },
  {
    id: "love-valentine",
    name: "Be Mine",
    category: "love",
    lang: "en",
    cover: {
      palette: "rose",
      decoration: "hearts",
      titleFont: "font-playfair",
      title: "Happy Valentine's Day",
      emoji: "❤️",
    },
    inside: { palette: "rose", decoration: "none", font: "font-caveat" },
    reveal: "burst",
  },

  // ---------- BIRTHDAY ----------
  {
    id: "bday-confetti",
    name: "Confetti Pop",
    category: "birthday",
    lang: "en",
    cover: {
      palette: "sunset",
      decoration: "confetti",
      titleFont: "font-playfair",
      title: "Happy Birthday!",
      emoji: "🎂",
    },
    inside: { palette: "sunset", decoration: "none", font: "font-caveat" },
    reveal: "burst",
  },
  {
    id: "bday-balloons",
    name: "Balloon Party",
    category: "birthday",
    lang: "en",
    cover: {
      palette: "indigo",
      decoration: "balloons",
      titleFont: "font-dancing",
      title: "Make a Wish",
      emoji: "🎈",
    },
    inside: { palette: "indigo", decoration: "none", font: "font-caveat" },
    reveal: "rise",
  },
  {
    id: "bday-janamdin",
    name: "Janamdin Mubarak",
    category: "birthday",
    lang: "hi",
    cover: {
      palette: "amber",
      decoration: "balloons",
      titleFont: "font-devanagari",
      title: "जन्मदिन मुबारक",
      emoji: "🎉",
    },
    inside: { palette: "amber", decoration: "none", font: "font-devanagari" },
    reveal: "burst",
  },

  // ---------- FRIENDSHIP ----------
  {
    id: "friend-bestie",
    name: "Best Friend",
    category: "friendship",
    lang: "en",
    cover: {
      palette: "emerald",
      decoration: "stars",
      titleFont: "font-caveat",
      title: "To My Favourite Human",
      emoji: "🌟",
    },
    inside: { palette: "emerald", decoration: "none", font: "font-caveat" },
    reveal: "fade",
  },
  {
    id: "friend-yaar",
    name: "Yaari",
    category: "friendship",
    lang: "hi",
    cover: {
      palette: "mint",
      decoration: "stars",
      titleFont: "font-devanagari",
      title: "मेरे यार के नाम",
      emoji: "🤝",
    },
    inside: { palette: "mint", decoration: "none", font: "font-devanagari" },
    reveal: "fade",
  },

  // ---------- FESTIVAL ----------
  {
    id: "fest-diwali",
    name: "Diwali Lights",
    category: "festival",
    lang: "en",
    cover: {
      palette: "diya",
      decoration: "diyas",
      titleFont: "font-playfair",
      title: "Happy Diwali",
      emoji: "🪔",
    },
    inside: { palette: "diya", decoration: "none", font: "font-caveat" },
    reveal: "burst",
  },
  {
    id: "fest-holi",
    name: "Holi Hai",
    category: "festival",
    lang: "hi",
    cover: {
      palette: "holi",
      decoration: "colors",
      titleFont: "font-devanagari",
      title: "होली है!",
      emoji: "🎨",
    },
    inside: { palette: "holi", decoration: "none", font: "font-devanagari" },
    reveal: "burst",
  },
];

export const getTemplate = (id) =>
  TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];
