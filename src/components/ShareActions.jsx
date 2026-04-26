export default function ShareActions({
  url,
  urlStale,
  copied,
  canGenerate,
  onGenerate,
  onShare,
  onCopy,
}) {
  return (
    <>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          disabled={!canGenerate}
          onClick={onGenerate}
          className="rounded-lg bg-rose-500 px-5 py-2.5 font-semibold text-white shadow hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {url && urlStale ? "Regenerate link" : url ? "Link ready" : "Generate link"}
        </button>
        {url && !urlStale && (
          <>
            <button
              onClick={onShare}
              className="rounded-lg bg-emerald-500 px-5 py-2.5 font-semibold text-white shadow hover:bg-emerald-600"
            >
              Share
            </button>
            <button
              onClick={onCopy}
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
        <div
          className={`mt-3 break-all rounded-lg p-3 text-xs ${
            urlStale
              ? "bg-amber-50 text-amber-700 line-through"
              : "bg-slate-50 text-slate-500"
          }`}
        >
          {url}
          {urlStale && (
            <div className="mt-1 text-[10px] font-medium not-italic no-underline">
              Your edits aren't in this link yet — regenerate to update.
            </div>
          )}
        </div>
      )}
    </>
  );
}
