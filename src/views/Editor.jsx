import { useEffect, useMemo, useRef, useState } from "react";
import { TEMPLATES } from "../templates/registry";
import { buildShareUrl } from "../lib/hash";
import { resolveCardConfig, templateAsCustom } from "../lib/resolveCard";
import { useDraft } from "../lib/useDraft";
import { pickPlaceholder } from "../lib/placeholders";
import { getExample } from "../lib/examples";
import { parseCategoryRoute } from "../lib/routes";
import LivePreview from "../components/LivePreview";
import TemplateGallery from "../components/TemplateGallery";
import MessageForm from "../components/MessageForm";
import ShareActions from "../components/ShareActions";
import ModeToggle from "../components/ModeToggle";
import TweakPanel from "../components/TweakPanel";
import ScratchPanel, { SCRATCH_STARTER } from "../components/ScratchPanel";
import { useToast } from "../components/Toast";

export default function Editor() {
  const route = typeof window !== "undefined" ? parseCategoryRoute(window.location.pathname) : null;
  const [category, setCategory] = useState(route?.category || "all");
  const [languages, setLanguages] = useState([]);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useDraft({
    templateId: TEMPLATES[0].id,
    from: "",
    to: "",
    message: "",
    isExample: false,
    mode: "template",
    overrides: {},
    custom: null,
    step: 1, // 1 = Design, 2 = Write
  });
  const { templateId, from, to, message, isExample, mode, overrides, custom, step } = draft;
  const setTemplateId = (templateId) => setDraft((d) => ({ ...d, templateId }));
  const setFrom = (from) => setDraft((d) => ({ ...d, from }));
  const setTo = (to) => setDraft((d) => ({ ...d, to }));
  const setMessage = (message) => setDraft((d) => ({ ...d, message, isExample: false }));
  const setMode = (mode) => setDraft((d) => ({ ...d, mode }));
  const setOverrides = (updater) =>
    setDraft((d) => ({ ...d, overrides: typeof updater === "function" ? updater(d.overrides || {}) : updater }));
  const setCustom = (updater) =>
    setDraft((d) => ({ ...d, custom: typeof updater === "function" ? updater(d.custom) : updater }));
  const setStep = (step) => setDraft((d) => ({ ...d, step }));

  const [url, setUrl] = useState("");
  const [urlStale, setUrlStale] = useState(false);
  const [copied, setCopied] = useState(false);
  const messageRef = useRef(null);
  const [placeholder] = useState(pickPlaceholder);
  const toast = useToast();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TEMPLATES.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (languages.length > 0 && !languages.includes(t.lang)) return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.cover.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    });
  }, [category, languages, query]);

  const canGenerate = message.trim().length > 0;
  const canProceed = mode === "scratch" ? !!custom : !!templateId;

  const resolvedConfig = useMemo(
    () => resolveCardConfig({ mode, templateId, overrides, custom }),
    [mode, templateId, overrides, custom]
  );

  useEffect(() => {
    if (!route) return;
    const prevTitle = document.title;
    document.title = route.title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content");
    if (meta) meta.setAttribute("content", route.description);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc != null) meta.setAttribute("content", prevDesc);
    };
  }, [route]);

  useEffect(() => {
    if (url) setUrlStale(true);
    setCopied(false);
  }, [templateId, from, to, message, overrides, custom]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!filtered.find((t) => t.id === templateId) && filtered[0]) {
      setTemplateId(filtered[0].id);
    }
  }, [filtered, templateId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mode === "scratch" && !custom) {
      setCustom(templateAsCustom(templateId));
    }
    // Scratch mode has no Step 1 gallery — always skip to step 2 (the builder page).
    if (mode === "scratch" && step === 1) setStep(2);
  }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isExample) return;
    const tpl = TEMPLATES.find((t) => t.id === templateId);
    const example = getExample(tpl?.category, tpl?.lang, tpl?.id);
    if (example === message) return;
    setDraft((d) => ({ ...d, message: example, isExample: true }));
    requestAnimationFrame(() => {
      const el = messageRef.current;
      if (el) {
        el.style.height = "auto";
        el.style.height = Math.min(el.scrollHeight, 400) + "px";
      }
    });
  }, [templateId]); // eslint-disable-line react-hooks/exhaustive-deps

  const selectTemplate = (id) => setTemplateId(id);

  const tryExample = () => {
    const tpl = TEMPLATES.find((t) => t.id === templateId);
    const example = getExample(tpl?.category, tpl?.lang, tpl?.id);
    setDraft((d) => ({ ...d, message: example, isExample: true }));
    requestAnimationFrame(() => {
      const el = messageRef.current;
      if (el) {
        el.style.height = "auto";
        el.style.height = Math.min(el.scrollHeight, 400) + "px";
      }
    });
  };

  const goToWrite = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToDesign = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => goToWrite();
  const goBack = () => goToDesign();

  const generate = () => {
    const payload = { f: from, to, m: message };
    if (mode === "scratch" && custom) {
      payload.c = custom;
    } else {
      payload.t = templateId;
      if (mode === "tweak" && overrides && Object.keys(overrides).length) {
        payload.o = overrides;
      }
    }
    setUrl(buildShareUrl(payload));
    setUrlStale(false);
    setCopied(false);
    toast(urlStale ? "Regenerated ✨" : "Link generated ✨");
  };

  const copy = async () => {
    if (!url) return;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
    toast("Link copied to clipboard");
  };

  const share = async () => {
    if (!url) return;
    if (navigator.share) {
      try {
        await navigator.share({ url });
      } catch {
        /* user cancelled */
      }
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(url)}`,
        "_blank",
        "noreferrer"
      );
    }
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-rose-50 via-white to-indigo-50 p-6 pb-24">
      <div className="mx-auto max-w-3xl">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800">
            {route ? route.h1 : "Kawaiily 💌"}
          </h1>
          <p className="mt-2 text-slate-600">
            {route
              ? "Pick a design, write your note, share the link."
              : "Create a personalised card and share with a link. No sign-up."}
          </p>
        </header>

        <Stepper
          step={step}
          mode={mode}
          onGoTo={(s) => {
            if (s === 1 && mode !== "scratch") return goToDesign();
            if (s === 2) {
              if (canProceed) return goToWrite();
            }
          }}
          canGoNext={canProceed}
        />

        {/* STEP 1: Gallery — only for Template and Tweak modes */}
        {step === 1 && mode !== "scratch" && (
          <>
            <ModeToggle mode={mode} onChange={setMode} />

            <TemplateGallery
              templates={filtered}
              category={category}
              onCategoryChange={setCategory}
              languages={languages}
              onLanguagesChange={setLanguages}
              query={query}
              onQueryChange={setQuery}
              selectedId={templateId}
              onSelect={selectTemplate}
            />

            <StickyNext
              hint={mode === "template" ? "Pick a design →" : "Pick a base template →"}
              label="Next: Write message →"
              disabled={!canProceed}
              onClick={goNext}
            />
          </>
        )}

        {/* STEP 2: Build (Scratch) OR Write (Template) OR Tweak + Write (Tweak) */}
        {(step === 2 || mode === "scratch") && (
          <>
            {mode !== "scratch" && (
              <button
                onClick={goToDesign}
                className="mb-4 inline-flex items-center gap-1 text-sm text-slate-600 underline hover:text-slate-900"
              >
                ← Back to templates
              </button>
            )}

            {mode === "scratch" && <ModeToggle mode={mode} onChange={setMode} />}

            {/* Preview */}
            <section className="mb-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Preview
              </div>
              <LivePreview config={resolvedConfig} to={to} from={from} message={message} />
            </section>

            {/* Tweak or Scratch panel — live editing alongside message */}
            {mode === "tweak" && (
              <div className="mb-5">
                <TweakPanel
                  templateId={templateId}
                  overrides={overrides}
                  onChange={setOverrides}
                />
              </div>
            )}

            {mode === "scratch" && (
              <div className="mb-5">
                <ScratchPanel custom={custom || SCRATCH_STARTER} onChange={setCustom} />
              </div>
            )}

            {/* Message form + share actions */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <MessageForm
                to={to}
                from={from}
                message={message}
                placeholder={placeholder}
                canGenerate={canGenerate}
                onToChange={setTo}
                onFromChange={setFrom}
                onMessageChange={setMessage}
                onTryExample={tryExample}
                messageRef={messageRef}
              />

              <ShareActions
                url={url}
                urlStale={urlStale}
                copied={copied}
                canGenerate={canGenerate}
                onGenerate={generate}
                onShare={share}
                onCopy={copy}
              />
            </section>
          </>
        )}

        <footer className="mt-8 text-center text-xs text-slate-400">
          Your message is encoded in the URL — nothing is sent to a server.
        </footer>
      </div>
    </div>
  );
}

function Stepper({ step, mode, onGoTo, canGoNext }) {
  // Scratch mode is effectively single-step — hide stepper.
  if (mode === "scratch") return null;
  const steps =
    mode === "tweak"
      ? [
          { n: 1, label: "Pick base" },
          { n: 2, label: "Tweak & write" },
        ]
      : [
          { n: 1, label: "Pick" },
          { n: 2, label: "Write & share" },
        ];
  return (
    <div className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center gap-2">
          {i > 0 && <span className="text-slate-300">—</span>}
          <button
            onClick={() => onGoTo(s.n)}
            disabled={!canGoNext && step < s.n}
            className={`rounded-full px-3 py-1 transition ${
              step === s.n
                ? "bg-slate-900 text-white"
                : "hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            }`}
          >
            {s.n}. {s.label}
          </button>
        </div>
      ))}
    </div>
  );
}

function StickyNext({ hint, label, disabled, onClick }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
        <div className="flex-1 text-xs text-slate-500">{hint}</div>
        <button
          disabled={disabled}
          onClick={onClick}
          className="rounded-lg bg-rose-500 px-6 py-2.5 font-semibold text-white shadow hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {label}
        </button>
      </div>
    </div>
  );
}
