import { getTemplate } from "../templates/registry";
import { getPalette } from "../templates/palettes";
import { getDecoration } from "./decorations";

export default function LivePreview({ templateId, to, from, message }) {
  const tpl = getTemplate(templateId);
  const coverPal = getPalette(tpl.cover.palette);
  const insidePal = getPalette(tpl.inside.palette);
  const CoverDeco = getDecoration(tpl.cover.decoration);

  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Cover preview */}
      <div
        className={`relative aspect-[3/4] overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 ${coverPal.cover}`}
      >
        <CoverDeco />
        <div className="absolute left-1/2 top-[32%] -translate-x-1/2 -translate-y-1/2 text-4xl drop-shadow">
          {tpl.cover.emoji}
        </div>
        <div
          className={`absolute bottom-8 left-2 right-2 line-clamp-2 text-center text-sm leading-tight ${tpl.cover.titleFont}`}
        >
          {tpl.cover.title}
        </div>
        {to && (
          <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] opacity-80">
            For {to}
          </div>
        )}
      </div>

      {/* Inside preview */}
      <div
        className={`relative aspect-[3/4] overflow-hidden rounded-xl p-3 shadow-md ring-1 ring-black/5 ${insidePal.inside}`}
      >
        <div className={`text-[11px] font-semibold ${insidePal.accent}`}>
          {to ? `Dear ${to},` : "Dear…"}
        </div>
        <p
          className={`mt-1 line-clamp-[10] whitespace-pre-wrap text-[11px] leading-snug ${tpl.inside.font}`}
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
