const MODES = [
  { id: "template", label: "Template", hint: "Pick a ready-made design" },
  { id: "tweak", label: "Tweak", hint: "Start from a template, customise it" },
  { id: "scratch", label: "From scratch", hint: "Build your own, pixel by pixel" },
];

export default function ModeToggle({ mode, onChange }) {
  return (
    <div className="mb-5 rounded-2xl bg-white p-1 shadow-sm ring-1 ring-slate-200">
      <div className="grid grid-cols-3 gap-1">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => onChange(m.id)}
            className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
              mode === m.id
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            aria-pressed={mode === m.id}
            title={m.hint}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}
