export default function ChipPicker({ options, value, onChange, renderOption }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const id = typeof opt === "string" ? opt : opt.id;
        const label = typeof opt === "string" ? opt : opt.label;
        const selected = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              selected
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {renderOption ? renderOption(opt, selected) : label}
          </button>
        );
      })}
    </div>
  );
}
