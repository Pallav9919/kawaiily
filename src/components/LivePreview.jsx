import { getPalette } from "../templates/palettes";
import { getDecoration } from "./decorations";

// Accepts either a resolved card config (from resolveCardConfig) or falls back to legacy { templateId }.
export default function LivePreview({ config, to, from, message }) {
  const coverPal = getPalette(config.cover.palette);
  const insidePal = getPalette(config.inside.palette);
  const CoverDeco = getDecoration(config.cover.decoration);

  return (
    <div className="grid grid-cols-2 gap-3">
      <div
        className={`relative aspect-[3/4] overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 ${coverPal.cover}`}
      >
        <CoverDeco />
        <div className="absolute left-1/2 top-[32%] -translate-x-1/2 -translate-y-1/2 text-4xl drop-shadow">
          {config.cover.emoji}
        </div>
        <div
          className={`absolute bottom-8 left-2 right-2 line-clamp-2 text-center text-sm leading-tight ${config.cover.titleFont}`}
        >
          {config.cover.title}
        </div>
        {to && (
          <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] opacity-80">
            For {to}
          </div>
        )}
      </div>

      <div
        className={`relative aspect-[3/4] overflow-hidden rounded-xl p-3 shadow-md ring-1 ring-black/5 ${insidePal.inside}`}
      >
        <div className={`text-[11px] font-semibold ${insidePal.accent}`}>
          {to ? `Dear ${to},` : "Dear…"}
        </div>
        <p
          className={`mt-1 line-clamp-[10] whitespace-pre-wrap text-[11px] leading-snug ${config.inside.font}`}
        >
          {message || "Your message will appear here…"}
        </p>
        {from && (
          <div className={`absolute bottom-2 right-3 text-[10px] italic ${insidePal.accent}`}>
            — {from}
          </div>
        )}
      </div>
    </div>
  );
}
