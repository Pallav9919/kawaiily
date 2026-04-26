// Panel for From-Scratch mode: build a card from nothing (with sensible defaults).
import EmojiPicker from "./EmojiPicker";
import PaletteSwatches from "./PaletteSwatches";
import ChipPicker from "./ChipPicker";
import {
  DECORATION_IDS,
  REVEAL_IDS,
  TITLE_FONTS,
  CATEGORIES_FOR_PICKER,
  LANGUAGES_FOR_PICKER,
  defaultFontForLang,
} from "./pickerOptions";

export const SCRATCH_STARTER = {
  cat: "love",
  lang: "en",
  cover: {
    palette: "rose",
    decoration: "hearts",
    titleFont: "font-playfair",
    title: "A Little Note",
    emoji: "💌",
  },
  inside: {
    palette: "rose",
    decoration: "none",
    font: "font-caveat",
  },
  reveal: "burst",
};

export default function ScratchPanel({ custom, onChange }) {
  const c = custom || SCRATCH_STARTER;
  const update = (patch) => onChange({ ...c, ...patch });
  const updateCover = (patch) => update({ cover: { ...c.cover, ...patch } });
  const updateInside = (patch) => update({ inside: { ...c.inside, ...patch } });

  const changeLang = (lang) => {
    const font = defaultFontForLang(lang);
    update({
      lang,
      cover: { ...c.cover, titleFont: font },
      inside: { ...c.inside, font: font === "font-playfair" ? "font-caveat" : font },
    });
  };

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="mb-4">
        <div className="text-sm font-semibold text-slate-800">Build from scratch</div>
        <div className="text-xs text-slate-500">
          Pro tip: templates already look great — this mode is for full creative control.
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Section label="Category">
          <ChipPicker
            options={CATEGORIES_FOR_PICKER}
            value={c.cat}
            onChange={(v) => update({ cat: v })}
          />
        </Section>
        <Section label="Language">
          <ChipPicker options={LANGUAGES_FOR_PICKER} value={c.lang} onChange={changeLang} />
        </Section>
      </div>

      <div className="mt-3 border-t border-slate-100 pt-4">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Cover
        </div>

        <Section label="Title">
          <input
            value={c.cover.title}
            onChange={(e) => updateCover({ title: e.target.value })}
            maxLength={120}
            placeholder="Your cover title"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
          />
        </Section>

        <Section label="Emoji">
          <EmojiPicker value={c.cover.emoji} onChange={(v) => updateCover({ emoji: v })} />
        </Section>

        <Section label="Palette">
          <PaletteSwatches value={c.cover.palette} onChange={(v) => updateCover({ palette: v })} />
        </Section>

        <Section label="Decoration">
          <ChipPicker
            options={DECORATION_IDS}
            value={c.cover.decoration}
            onChange={(v) => updateCover({ decoration: v })}
          />
        </Section>

        <Section label="Title font">
          <ChipPicker
            options={TITLE_FONTS}
            value={c.cover.titleFont}
            onChange={(v) => updateCover({ titleFont: v })}
            renderOption={(opt) => (
              <span className={opt.id}>
                {opt.label} <span className="opacity-60">{opt.sample}</span>
              </span>
            )}
          />
        </Section>
      </div>

      <div className="mt-3 border-t border-slate-100 pt-4">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Inside
        </div>

        <Section label="Palette">
          <PaletteSwatches
            value={c.inside.palette}
            onChange={(v) => updateInside({ palette: v })}
          />
        </Section>

        <Section label="Decoration">
          <ChipPicker
            options={DECORATION_IDS}
            value={c.inside.decoration}
            onChange={(v) => updateInside({ decoration: v })}
          />
        </Section>

        <Section label="Message font">
          <ChipPicker
            options={TITLE_FONTS}
            value={c.inside.font}
            onChange={(v) => updateInside({ font: v })}
            renderOption={(opt) => (
              <span className={opt.id}>
                {opt.label} <span className="opacity-60">{opt.sample}</span>
              </span>
            )}
          />
        </Section>
      </div>

      <div className="mt-3 border-t border-slate-100 pt-4">
        <Section label="Reveal animation">
          <ChipPicker
            options={REVEAL_IDS}
            value={c.reveal}
            onChange={(v) => update({ reveal: v })}
          />
        </Section>
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div className="mb-3">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      {children}
    </div>
  );
}
