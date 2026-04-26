import { forwardRef } from "react";

const MessageForm = forwardRef(function MessageForm(
  {
    to,
    from,
    message,
    placeholder,
    canGenerate,
    onToChange,
    onFromChange,
    onMessageChange,
    onTryExample,
    messageRef,
  },
  _ref
) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="To" value={to} onChange={onToChange} placeholder="Their name" />
        <Field label="From" value={from} onChange={onFromChange} placeholder="Your name" />
      </div>
      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between">
          <label className="block text-sm font-medium text-slate-700">Message</label>
          <button
            type="button"
            onClick={onTryExample}
            className="rounded px-1 text-xs font-medium text-rose-600 hover:text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
          >
            Try example ✨
          </button>
        </div>
        <textarea
          ref={messageRef}
          value={message}
          onChange={(e) => {
            onMessageChange(e.target.value);
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
          <span>
            {!canGenerate && message.length === 0
              ? "Write a message to enable the share link"
              : "\u00A0"}
          </span>
          <span>{message.length}/1500</span>
        </div>
      </div>
    </>
  );
});

export default MessageForm;

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
