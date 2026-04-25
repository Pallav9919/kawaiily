import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TEMPLATES } from "../templates/registry";
import { getPalette } from "../templates/palettes";
import { getDecoration } from "../components/decorations";
import { CATEGORIES } from "../lib/categories";
import { buildShareUrl } from "../lib/hash";

export default function Editor() {
  const [category, setCategory] = useState("all");
  const [templateId, setTemplateId] = useState(TEMPLATES[0].id);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(
    () => (category === "all" ? TEMPLATES : TEMPLATES.filter((t) => t.category === category)),
    [category]
  );

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
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  category === c.id
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {filtered.map((t) => (
              <TemplateCard
                key={t.id}
                template={t}
                selected={templateId === t.id}
                onSelect={() => setTemplateId(t.id)}
              />
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="To" value={to} onChange={setTo} placeholder="Their name" />
            <Field label="From" value={from} onChange={setFrom} placeholder="Your name" />
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              maxLength={1500}
              placeholder="Write something from the heart…"
              className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
            />
            <div className="mt-1 text-right text-xs text-slate-400">{message.length}/1500</div>
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
      className={`relative aspect-[3/4] overflow-hidden rounded-xl p-3 text-left shadow-md ring-2 transition ${pal.cover} ${
        selected ? "ring-slate-900" : "ring-transparent"
      }`}
    >
      <Deco />
      <div className="relative text-2xl drop-shadow">{template.cover.emoji}</div>
      <div
        className={`absolute bottom-8 left-3 right-3 line-clamp-2 text-lg ${template.cover.titleFont}`}
      >
        {template.cover.title}
      </div>
      <div className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-wide opacity-80">
        {template.name}
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
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
      />
    </label>
  );
}
