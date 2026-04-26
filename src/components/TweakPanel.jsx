// Panel for Tweak mode: edit overrides on top of a selected template.
import { getTemplate } from "../templates/registry";
import EmojiPicker from "./EmojiPicker";
import PaletteSwatches from "./PaletteSwatches";
import ChipPicker from "./ChipPicker";
import {
  DECORATION_IDS,
  REVEAL_IDS,
  TITLE_FONTS,
} from "./pickerOptions";

export default function TweakPanel({ templateId, overrides, onChange }) {
  const tpl = getTemplate(templateId);
  const set = (key, value) => onChange((o) => ({ ...o, [key]: value }));
  const clear = (key) =>
    onChange((o) => {
      const n = { ...o };
      delete n[key];
      return n;
    });
  const reset = () => onChange({});

  const has = (k) => overrides && overrides[k] != null;
  const eff = (k, nested) => {
    if (overrides && overrides[k] != null) return overrides[k];
    if (nested === "cover") return tpl.cover[k] ?? tpl[k];
    if (nested === "inside") return tpl.inside[k];
    return tpl[k];
  };

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-800">Tweak this template</div>
          <div className="text-xs text-slate-500">Overrides stay on the URL you share.</div>
        </div>
        {overrides && Object.keys(overrides).length > 0 && (
          <button
            type="button"
            onClick={reset}
            className="text-xs font-medium text-slate-500 underline hover:text-slate-800"
          >
            Reset all
          </button>
        )}
      </div>

      <Section label="Cover title" onReset={has("title") ? () => clear("title") : null}>
        <input
          value={eff("title", "cover")}
          onChange={(e) => set("title", e.target.value)}
          maxLength={120}
          placeholder={tpl.cover.title}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
        />
      </Section>

      <Section label="Cover emoji" onReset={has("emoji") ? () => clear("emoji") : null}>
        <EmojiPicker value={eff("emoji", "cover")} onChange={(v) => set("emoji", v)} />
      </Section>

      <Section label="Cover palette" onReset={has("palette") ? () => clear("palette") : null}>
        <PaletteSwatches value={eff("palette", "cover")} onChange={(v) => set("palette", v)} />
      </Section>

      <Section label="Cover decoration" onReset={has("decoration") ? () => clear("decoration") : null}>
        <ChipPicker
          options={DECORATION_IDS}
          value={eff("decoration", "cover")}
          onChange={(v) => set("decoration", v)}
        />
      </Section>

      <Section label="Cover title font" onReset={has("titleFont") ? () => clear("titleFont") : null}>
        <ChipPicker
          options={TITLE_FONTS}
          value={eff("titleFont", "cover")}
          onChange={(v) => set("titleFont", v)}
          renderOption={(opt, selected) => (
            <span className={opt.id}>
              {opt.label} <span className="opacity-60">{opt.sample}</span>
            </span>
          )}
        />
      </Section>

      <Section label="Inside palette" onReset={has("insidePalette") ? () => clear("insidePalette") : null}>
        <PaletteSwatches
          value={eff("insidePalette", "inside") || tpl.inside.palette}
          onChange={(v) => set("insidePalette", v)}
        />
      </Section>

      <Section label="Inside font" onReset={has("insideFont") ? () => clear("insideFont") : null}>
        <ChipPicker
          options={TITLE_FONTS}
          value={eff("insideFont", "inside") || tpl.inside.font}
          onChange={(v) => set("insideFont", v)}
          renderOption={(opt) => (
            <span className={opt.id}>
              {opt.label} <span className="opacity-60">{opt.sample}</span>
            </span>
          )}
        />
      </Section>

      <Section label="Reveal animation" onReset={has("reveal") ? () => clear("reveal") : null}>
        <ChipPicker options={REVEAL_IDS} value={eff("reveal")} onChange={(v) => set("reveal", v)} />
      </Section>
    </div>
  );
}

function Section({ label, onReset, children }) {
  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </label>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="text-[11px] text-slate-400 hover:text-slate-700"
          >
            reset
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
