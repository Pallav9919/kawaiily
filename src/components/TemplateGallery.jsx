import { motion } from "framer-motion";
import { CATEGORIES } from "../lib/categories";
import { getPalette } from "../templates/palettes";
import { getDecoration } from "./decorations";

export default function TemplateGallery({
  templates,
  category,
  onCategoryChange,
  query,
  onQueryChange,
  selectedId,
  onSelect,
}) {
  return (
    <>
      <section className="mb-4">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => onCategoryChange(c.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                category === c.id
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="relative mt-3">
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search templates…"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 pr-9 text-base text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
          />
          {query && (
            <button
              onClick={() => onQueryChange("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-2 py-0.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              ×
            </button>
          )}
        </div>
      </section>

      <section className="mb-6">
        {templates.length === 0 ? (
          <div className="rounded-xl bg-white p-8 text-center text-slate-500 ring-1 ring-slate-200">
            No templates match &ldquo;{query}&rdquo;. Try a different word or clear the search.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {templates.map((t) => (
              <TemplateCard
                key={t.id}
                template={t}
                selected={selectedId === t.id}
                onSelect={() => onSelect(t.id)}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function TemplateCard({ template, selected, onSelect }) {
  const pal = getPalette(template.cover.palette);
  const Deco = getDecoration(template.cover.decoration);
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onSelect}
      aria-label={`Select template: ${template.name}`}
      aria-pressed={selected}
      className={`relative aspect-[3/4] overflow-hidden rounded-xl p-3 text-left shadow-md ring-2 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 ${pal.cover} ${
        selected ? "ring-slate-900" : "ring-transparent"
      }`}
    >
      <Deco />
      <div className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 text-5xl drop-shadow">
        {template.cover.emoji}
      </div>
      <div
        className={`absolute bottom-9 left-2 right-2 line-clamp-2 text-center text-base leading-tight ${template.cover.titleFont}`}
      >
        {template.cover.title}
      </div>
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <h3 className="m-0 text-[10px] font-semibold uppercase tracking-wide opacity-80">
          {template.name}
        </h3>
      </div>
    </motion.button>
  );
}
