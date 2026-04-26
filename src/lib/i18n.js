// Localized viewer copy — "For X", "Dear X,", "Hello,"
// Falls back to English if lang not found.
const T = {
  en: { forX: (x) => `For ${x}`, dearX: (x) => `Dear ${x},`, hello: "Hello," },
  hi: { forX: (x) => `${x} के लिए`, dearX: (x) => `प्रिय ${x},`, hello: "नमस्ते," },
  mr: { forX: (x) => `${x} साठी`, dearX: (x) => `प्रिय ${x},`, hello: "नमस्कार," },
  ta: { forX: (x) => `${x}க்கு`, dearX: (x) => `அன்பான ${x},`, hello: "வணக்கம்," },
  bn: { forX: (x) => `${x}-এর জন্য`, dearX: (x) => `প্রিয় ${x},`, hello: "হ্যালো," },
  gu: { forX: (x) => `${x} માટે`, dearX: (x) => `પ્રિય ${x},`, hello: "નમસ્તે," },
  kn: { forX: (x) => `${x}ಗೆ`, dearX: (x) => `ಪ್ರಿಯ ${x},`, hello: "ನಮಸ್ಕಾರ," },
  te: { forX: (x) => `${x} కోసం`, dearX: (x) => `ప్రియమైన ${x},`, hello: "నమస్కారం," },
  pa: { forX: (x) => `${x} ਲਈ`, dearX: (x) => `ਪਿਆਰੇ ${x},`, hello: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ," },
};

export const t = (lang) => T[lang] || T.en;
