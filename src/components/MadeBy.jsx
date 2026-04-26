export default function MadeBy() {
  return (
    <a
      href="https://www.linkedin.com/in/pallove/"
      target="_blank"
      rel="noreferrer"
      style={{ bottom: "calc(var(--sticky-bar-h, 0px) + 0.75rem)" }}
      className="fixed right-3 z-50 rounded-full bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm ring-1 ring-slate-200 backdrop-blur transition-all hover:text-slate-900"
    >
      Made with <span className="text-rose-500">♥</span> by Pallav
    </a>
  );
}
