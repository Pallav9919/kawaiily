import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TEMPLATES } from "../templates/registry";
import { getPalette } from "../templates/palettes";
import { getDecoration } from "../components/decorations";
import { CATEGORIES } from "../lib/categories";
import { buildShareUrl } from "../lib/hash";
import { useDraft } from "../lib/useDraft";
import { pickPlaceholder } from "../lib/placeholders";
import LivePreview from "../components/LivePreview";

export default function Editor() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useDraft({
    templateId: TEMPLATES[0].id,
    from: "",
    to: "",
    message: "",
  });
  const { templateId, from, to, message } = draft;
  const setTemplateId = (templateId) => setDraft((d) => ({ ...d, templateId }));
  const setFrom = (from) => setDraft((d) => ({ ...d, from }));
  const setTo = (to) => setDraft((d) => ({ ...d, to }));
  const setMessage = (message) => setDraft((d) => ({ ...d, message }));

  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);
  const messageRef = useRef(null);
  const [highlighted, setHighlighted] = useState(false);
  const [placeholder] = useState(pickPlaceholder);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TEMPLATES.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.cover.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  const canGenerate = message.trim().length > 0;

  useEffect(() => {
    setUrl("");
    setCopied(false);
  }, [templateId, from, to, message]);

  // If user switches category and current template is no longer visible, pick the first visible one.
  useEffect(() => {
    if (!filtered.find((t) => t.id === templateId) && filtered[0]) {
      setTemplateId(filtered[0].id);
    }
  }, [filtered, templateId]);

  const selectTemplate = (id) => {
    setTemplateId(id);
    // Scroll the form into view and focus the message textarea
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      // Let scroll settle, then focus
      setTimeout(() => messageRef.current?.focus({ preventScroll: true }), 450);
    });
    setHighlighted(true);
    setTimeout(() => setHighlighted(false), 1200);
  };

  const generate = () => {
    setUrl(buildShareUrl({ t: templateId, f: from, to, m: message }));
    setCopied(false);
  };

  const copy = async () => {
    if (!url) return;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const share = async () => {
    if (!url) return;
    const shareText = `I made you a little something ✨ ${url}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "A card for you", text: shareText, url });
      } catch {
        /* user cancelled */
      }
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(shareText)}`,
        "_blank",
        "noreferrer"
      );
    }
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-rose-50 via-white to-indigo-50 p-6">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800">Kawaiily 💌</h1>
          <p className="mt-2 text-slate-600">
            Create a personalised card and share with a link. No sign-up.
          </p>
        </header>

        <section className="mb-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
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
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search templates…"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 pr-9 text-base text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-2 py-0.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                ×
              </button>
            )}
          </div>
        </section>

        <section className="mb-6">
          {filtered.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center text-slate-500 ring-1 ring-slate-200">
              No templates match “{query}”. Try a different word or clear the search.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {filtered.map((t) => (
                <TemplateCard
                  key={t.id}
                  template={t}
                  selected={templateId === t.id}
                  onSelect={() => selectTemplate(t.id)}
                />
              ))}
            </div>
          )}
        </section>

        <section
          ref={formRef}
          className={`scroll-mt-4 rounded-2xl bg-white p-6 shadow-sm ring-1 transition-all duration-500 ${
            highlighted ? "ring-rose-400 ring-2 shadow-lg" : "ring-slate-200"
          }`}
        >
          <div className="mb-5">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Live preview
            </div>
            <LivePreview
              templateId={templateId}
              to={to}
              from={from}
              message={message}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="To" value={to} onChange={setTo} placeholder="Their name" />
            <Field label="From" value={from} onChange={setFrom} placeholder="Your name" />
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
            <textarea
              ref={messageRef}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                // auto-resize up to a cap
                const el = e.target;
                el.style.height = "auto";
                el.style.height = Math.min(el.scrollHeight, 400) + "px";
              }}
              rows={5}
              maxLength={1500}
              placeholder={placeholder}
              className="kawaiily-scroll w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>{!canGenerate && message.length === 0 ? "Write a message to enable the share link" : "\u00A0"}</span>
              <span>{message.length}/1500</span>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              disabled={!canGenerate}
              onClick={generate}
              className="rounded-lg bg-rose-500 px-5 py-2.5 font-semibold text-white shadow hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Generate link
            </button>
            {url && (
              <>
                <button
                  onClick={share}
                  className="rounded-lg bg-emerald-500 px-5 py-2.5 font-semibold text-white shadow hover:bg-emerald-600"
                >
                  Share
                </button>
                <button
                  onClick={copy}
                  className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-600 underline hover:text-slate-900"
                >
                  Preview
                </a>
              </>
            )}
          </div>
          {url && (
            <div className="mt-3 break-all rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
              {url}
            </div>
          )}
        </section>

        <footer className="mt-8 text-center text-xs text-slate-400">
          Your message is encoded in the URL — nothing is sent to a server.
        </footer>
      </div>
    </div>
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

function Field({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={60}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
      />
    </label>
  );
}
