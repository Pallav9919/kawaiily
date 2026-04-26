// Localized viewer copy — "For X", "Dear X,", "Hello,"
// Falls back to English if lang not found.
const T = {
  en: { forX: (x) => `For ${x}`, dearX: (x) => `Dear ${x},`, hello: "Hello," },
  hi: { forX: (x) => `${x} के लिए`, dearX: (x) => `प्रिय ${x},`, hello: "नमस्ते," },
  mr: { forX: (x) => `${x} साठी`, dearX: (x) => `प्रिय ${x},`, hello: "नमस्कार," },
  ta: { forX: (x) => `${x}க்கு`, dearX: (x) => `அன்பான ${x},`, hello: "வணக்கம்," },
  bn: { forX: (x) => `${x}-এর জন্য`, dearX: (x) => `প্রিয় ${x},`, hello: "হ্যালো," },
};

export const t = (lang) => T[lang] || T.en;
