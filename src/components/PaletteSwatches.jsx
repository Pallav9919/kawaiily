import { PALETTES } from "../templates/palettes";
import { PALETTE_IDS } from "./pickerOptions";

export default function PaletteSwatches({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {PALETTE_IDS.map((id) => {
        const p = PALETTES[id];
        const selected = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            aria-label={`Pick ${id} palette`}
            title={id}
            className={`h-9 w-9 overflow-hidden rounded-full ring-2 transition ${
              selected ? "ring-slate-900" : "ring-transparent hover:ring-slate-300"
            } ${p.cover}`}
          />
        );
      })}
    </div>
  );
}
