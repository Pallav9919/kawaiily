// Single source of truth for supported languages.
// `label` is what we show on the filter chip (native script).
export const LANGUAGES = [
  { id: "en", label: "English" },
  { id: "hi", label: "हिन्दी" },
  { id: "mr", label: "मराठी" },
  { id: "bn", label: "বাংলা" },
  { id: "ta", label: "தமிழ்" },
  { id: "te", label: "తెలుగు" },
  { id: "kn", label: "ಕನ್ನಡ" },
  { id: "gu", label: "ગુજરાતી" },
  { id: "pa", label: "ਪੰਜਾਬੀ" },
];

export const LANG_IDS = LANGUAGES.map((l) => l.id);
