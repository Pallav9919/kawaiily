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
  const [languages, setLanguages] = useState([]); // empty = all
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useDraft({
    templateId: TEMPLATES[0].id,
    from: "",
    to: "",
    message: "",
    isExample: false,
    mode: "template", // "template" | "tweak" | "scratch"
    overrides: {}, // for tweak mode
    custom: null, // for scratch mode
  });
  const { templateId, from, to, message, isExample, mode, overrides, custom } = draft;
  const setTemplateId = (templateId) => setDraft((d) => ({ ...d, templateId }));
  const setFrom = (from) => setDraft((d) => ({ ...d, from }));
  const setTo = (to) => setDraft((d) => ({ ...d, to }));
  const setMessage = (message) => setDraft((d) => ({ ...d, message, isExample: false }));
  const setMode = (mode) => setDraft((d) => ({ ...d, mode }));
  const setOverrides = (updater) =>
    setDraft((d) => ({ ...d, overrides: typeof updater === "function" ? updater(d.overrides || {}) : updater }));
  const setCustom = (updater) =>
    setDraft((d) => ({ ...d, custom: typeof updater === "function" ? updater(d.custom) : updater }));

  const [url, setUrl] = useState("");
  const [urlStale, setUrlStale] = useState(false);
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);
  const tweakRef = useRef(null);
  const messageRef = useRef(null);
  const [highlighted, setHighlighted] = useState(false);
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
  }, [templateId, from, to, message]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!filtered.find((t) => t.id === templateId) && filtered[0]) {
      setTemplateId(filtered[0].id);
    }
  }, [filtered, templateId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Seed custom config from the current template when user first enters scratch mode.
  useEffect(() => {
    if (mode === "scratch" && !custom) {
      setCustom(templateAsCustom(templateId));
    }
  }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  // If the current message is still the auto-filled example, refresh it
  // when user switches to a different template (different category/lang).
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

  const selectTemplate = (id) => {
    setTemplateId(id);
    requestAnimationFrame(() => {
      // In Tweak mode, scroll to the tweak panel; otherwise the message form.
      const target = mode === "tweak" ? tweakRef.current : formRef.current;
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (mode !== "tweak") {
        setTimeout(() => messageRef.current?.focus({ preventScroll: true }), 450);
      }
    });
    setHighlighted(true);
    setTimeout(() => setHighlighted(false), 1200);
  };

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
    // Only send the URL — the OG preview card carries the visual context.
    // Including text duplicates the URL in WhatsApp/Messenger previews.
    if (navigator.share) {
      try {
        await navigator.share({ url });
      } catch {
        /* user cancelled */
      }
    } else {
      // WhatsApp Web fallback — text is the URL by itself
      window.open(
        `https://wa.me/?text=${encodeURIComponent(url)}`,
        "_blank",
        "noreferrer"
      );
    }
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-rose-50 via-white to-indigo-50 p-6">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800">
            {route ? route.h1 : "Kawaiily 💌"}
          </h1>
          <p className="mt-2 text-slate-600">
            {route
              ? "Pick a design, write your note, share the link. Free, no sign-up."
              : "Create a personalised card and share with a link. No sign-up."}
          </p>
        </header>

        <ModeToggle mode={mode} onChange={setMode} />

        {mode !== "scratch" && (
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
        )}

        {mode === "tweak" && (
          <div ref={tweakRef} className="mb-6 scroll-mt-4">
            <TweakPanel templateId={templateId} overrides={overrides} onChange={setOverrides} />
          </div>
        )}

        {mode === "scratch" && (
          <div className="mb-6">
            <ScratchPanel custom={custom || SCRATCH_STARTER} onChange={setCustom} />
          </div>
        )}

        <section
          ref={formRef}
          className={`scroll-mt-4 rounded-2xl bg-white p-6 shadow-sm ring-1 transition-all duration-500 ${
            highlighted ? "shadow-lg ring-2 ring-rose-400" : "ring-slate-200"
          }`}
        >
          <div className="mb-5">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Live preview
            </div>
            <LivePreview config={resolvedConfig} to={to} from={from} message={message} />
          </div>

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

        <footer className="mt-8 text-center text-xs text-slate-400">
          Your message is encoded in the URL — nothing is sent to a server.
        </footer>
      </div>
    </div>
  );
}
