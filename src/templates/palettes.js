// Named color palettes. Each entry supplies classes for a card face.
// cover: strong background + readable foreground.
// inside: soft background + rich foreground + accent.
export const PALETTES = {
  rose: {
    cover: "bg-gradient-to-br from-rose-400 via-pink-500 to-red-500 text-white",
    inside: "bg-rose-50 text-rose-900",
    accent: "text-rose-600",
  },
  amber: {
    cover: "bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400 text-white",
    inside: "bg-amber-50 text-amber-900",
    accent: "text-amber-700",
  },
  indigo: {
    cover: "bg-gradient-to-br from-sky-300 via-indigo-400 to-purple-500 text-white",
    inside: "bg-indigo-50 text-indigo-900",
    accent: "text-indigo-600",
  },
  emerald: {
    cover: "bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500 text-white",
    inside: "bg-emerald-50 text-emerald-900",
    accent: "text-emerald-700",
  },
  sunset: {
    cover: "bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 text-white",
    inside: "bg-orange-50 text-orange-900",
    accent: "text-orange-600",
  },
  midnight: {
    cover: "bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900 text-white",
    inside: "bg-slate-50 text-slate-900",
    accent: "text-indigo-600",
  },
  mint: {
    cover: "bg-gradient-to-br from-green-300 via-emerald-400 to-teal-500 text-white",
    inside: "bg-green-50 text-green-900",
    accent: "text-emerald-700",
  },
  lavender: {
    cover: "bg-gradient-to-br from-purple-300 via-fuchsia-400 to-pink-400 text-white",
    inside: "bg-purple-50 text-purple-900",
    accent: "text-purple-600",
  },
  diya: {
    cover: "bg-gradient-to-br from-yellow-500 via-orange-600 to-red-700 text-yellow-50",
    inside: "bg-yellow-50 text-orange-900",
    accent: "text-orange-700",
  },
  holi: {
    cover: "bg-gradient-to-br from-fuchsia-500 via-orange-400 to-lime-400 text-white",
    inside: "bg-pink-50 text-fuchsia-900",
    accent: "text-fuchsia-600",
  },
};

export const getPalette = (id) => PALETTES[id] || PALETTES.rose;
