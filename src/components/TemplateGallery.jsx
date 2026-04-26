import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "../lib/categories";
import { LANGUAGES } from "../lib/languages";
import { getPalette } from "../templates/palettes";
import { getDecoration } from "./decorations";

const PAGE_SIZE = 30;

export default function TemplateGallery({
  templates,
  category,
  onCategoryChange,
  languages,
  onLanguagesChange,
  query,
  onQueryChange,
  selectedId,
  onSelect,
}) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Reset pagination when any filter changes
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [category, languages, query]);

  const toggleLang = (id) => {
    if (languages.includes(id)) {
      onLanguagesChange(languages.filter((l) => l !== id));
    } else {
      onLanguagesChange([...languages, id]);
    }
  };

  const shown = templates.slice(0, visible);
  const hasMore = visible < templates.length;

  return (
    <>
      <section className="mb-4">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const isAnime = c.id === "anime";
            const selected = category === c.id;
            return (
              <button
                key={c.id}
                onClick={() => onCategoryChange(c.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                  isAnime
                    ? selected
                      ? "bg-gradient-to-r from-red-700 via-black to-red-700 text-amber-300 shadow-lg ring-2 ring-amber-400/60"
                      : "bg-gradient-to-r from-red-900 via-black to-red-900 text-amber-300 shadow-md ring-1 ring-amber-500/40 hover:ring-amber-400"
                    : selected
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Languages
          </span>
          {LANGUAGES.map((l) => {
            const active = languages.includes(l.id);
            return (
              <button
                key={l.id}
                onClick={() => toggleLang(l.id)}
                aria-pressed={active}
                className={`rounded-full px-3 py-1 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                  active
                    ? "bg-rose-500 text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                {l.label}
              </button>
            );
          })}
          {languages.length > 0 && (
            <button
              onClick={() => onLanguagesChange([])}
              className="text-xs text-slate-500 underline hover:text-slate-800"
            >
              Clear
            </button>
          )}
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
            No templates match your filters. Try clearing search, languages, or category.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {shown.map((t) => (
                <TemplateCard
                  key={t.id}
                  template={t}
                  selected={selectedId === t.id}
                  onSelect={() => onSelect(t.id)}
                />
              ))}
            </div>
            {hasMore ? (
              <div className="mt-4 flex flex-col items-center gap-2">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Show more
                </button>
                <span className="text-xs text-slate-400">
                  Showing {shown.length} of {templates.length}
                </span>
              </div>
            ) : templates.length > PAGE_SIZE ? (
              <div className="mt-4 text-center text-xs text-slate-400">
                All {templates.length} shown
              </div>
            ) : null}
          </>
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
      {template.tier === "premium" && (
        <span className="absolute right-1.5 top-1.5 z-10 rounded-full bg-black/70 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur">
          ✦ Premium
        </span>
      )}
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
