// Curated emoji picker, grouped by intent.
import { useState } from "react";

const GROUPS = {
  Love: ["❤️", "💖", "💘", "💝", "💞", "💗", "💓", "💕", "💟", "🥰", "😍", "💋"],
  Flowers: ["🌹", "🌸", "🌺", "🌷", "🌻", "🌼", "💐", "🪻", "🪷"],
  Celebration: ["🎉", "🎊", "🥳", "🎈", "🎁", "🎀", "🎆", "✨", "🌟", "⭐"],
  Birthday: ["🎂", "🧁", "🍰", "🎶", "🎵", "🥂"],
  Festival: ["🪔", "🕉️", "🦚", "🪁", "🔥", "🌙", "🌅", "🪷"],
  Cute: ["🧸", "🐻", "🐰", "🦄", "🌈", "☁️", "💫", "🍫", "🍭"],
  Nature: ["🌙", "☀️", "⭐", "🌊", "🌲", "🍃", "🪐"],
  Feelings: ["🥺", "😊", "🤗", "😇", "🙏", "💭", "💌", "📮"],
  Symbols: ["💍", "💎", "🎭", "🔔", "🪢", "🤝", "🤞", "🎄"],
};

export default function EmojiPicker({ value, onChange }) {
  const [active, setActive] = useState("Love");
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <div className="mb-2 flex flex-wrap gap-1">
        {Object.keys(GROUPS).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setActive(g)}
            className={`rounded px-2 py-1 text-xs font-medium transition ${
              active === g ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1">
        {GROUPS[active].map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => onChange(e)}
            className={`rounded-lg p-1.5 text-2xl leading-none transition hover:bg-slate-100 ${
              value === e ? "bg-rose-100 ring-2 ring-rose-400" : ""
            }`}
            aria-label={`Pick ${e}`}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
}
