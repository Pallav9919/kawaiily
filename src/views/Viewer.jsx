import { useState } from "react";
import { motion } from "framer-motion";
import { getTemplate } from "../templates/registry";
import { getPalette } from "../templates/palettes";
import { getDecoration } from "../components/decorations";
import { getReveal } from "../components/animations";

export default function Viewer({ data }) {
  const [opened, setOpened] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const tpl = getTemplate(data.t);
  const coverPal = getPalette(tpl.cover.palette);
  const insidePal = getPalette(tpl.inside.palette);
  const CoverDeco = getDecoration(tpl.cover.decoration);
  const InsideDeco = getDecoration(tpl.inside.decoration);
  const reveal = getReveal(tpl.reveal);

  return (
    <div className="flex min-h-full items-center justify-center bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 p-4">
      <div className="relative flex flex-col items-center">
        {!opened ? (
          <Envelope onOpen={() => setOpened(true)} />
        ) : (
          <motion.div {...reveal} className="perspective">
            <motion.div
              className="preserve-3d relative h-[520px] w-[340px] cursor-pointer sm:h-[560px] sm:w-[380px]"
              onClick={() => setFlipped((f) => !f)}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.9, ease: [0.4, 0.1, 0.2, 1] }}
            >
              <Face className={`${coverPal.cover} flex flex-col items-center justify-center`}>
                <CoverDeco />
                <div className="relative text-7xl drop-shadow">{tpl.cover.emoji}</div>
                <h2 className={`relative mt-6 px-4 text-center text-4xl font-bold ${tpl.cover.titleFont}`}>
                  {tpl.cover.title}
                </h2>
                {data.to && (
                  <p className="relative mt-2 text-center text-lg opacity-90">
                    {tpl.lang === "hi" ? `${data.to} के लिए` : `For ${data.to}`}
                  </p>
                )}
                <p className="absolute bottom-6 text-xs uppercase tracking-widest opacity-70">
                  Tap to open
                </p>
              </Face>
              <Face back className={`${insidePal.inside} flex flex-col p-8`}>
                <InsideDeco />
                <div className={`relative text-sm font-semibold ${insidePal.accent}`}>
                  {data.to
                    ? tpl.lang === "hi"
                      ? `प्रिय ${data.to},`
                      : `Dear ${data.to},`
                    : tpl.lang === "hi"
                    ? "नमस्ते,"
                    : "Hello,"}
                </div>
                <p className={`relative mt-4 flex-1 overflow-auto whitespace-pre-wrap text-lg leading-relaxed ${tpl.inside.font}`}>
                  {data.m}
                </p>
                {data.f && (
                  <div className={`relative mt-4 text-right italic ${insidePal.accent}`}>
                    — {data.f}
                  </div>
                )}
                <div className="relative mt-6 text-center text-[10px] uppercase tracking-widest opacity-60">
                  Tap to flip
                </div>
              </Face>
            </motion.div>
          </motion.div>
        )}

        <a
          href={window.location.pathname}
          className="mt-8 text-sm text-white/70 underline hover:text-white"
        >
          Create your own ✨
        </a>
      </div>
    </div>
  );
}

function Face({ children, className, back }) {
  return (
    <div
      className={`absolute inset-0 backface-hidden overflow-hidden rounded-2xl shadow-2xl ${className}`}
      style={{ transform: back ? "rotateY(180deg)" : "none" }}
    >
      {children}
    </div>
  );
}

function Envelope({ onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
      transition={{
        scale: { duration: 0.4 },
        opacity: { duration: 0.4 },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.96 }}
      className="relative"
      aria-label="Open envelope"
    >
      <svg
        viewBox="0 0 340 220"
        className="h-[220px] w-[340px] drop-shadow-2xl sm:h-[240px] sm:w-[380px]"
      >
        {/* envelope body */}
        <rect x="10" y="30" width="320" height="180" rx="6" fill="#fecdd3" />
        {/* left & right inside flaps (triangles) */}
        <polygon points="10,30 170,140 10,210" fill="#fda4af" />
        <polygon points="330,30 170,140 330,210" fill="#fda4af" />
        {/* bottom flap */}
        <polygon points="10,210 170,110 330,210" fill="#fb7185" />
        {/* top flap — the one that "opens" */}
        <polygon points="10,30 330,30 170,160" fill="#e11d48" />
        {/* wax seal */}
        <circle cx="170" cy="120" r="22" fill="#be123c" />
        <circle cx="170" cy="120" r="22" fill="none" stroke="#881337" strokeWidth="1.5" opacity="0.6" />
        <text
          x="170"
          y="128"
          textAnchor="middle"
          fontSize="20"
          fill="#fff1f2"
          fontFamily="Georgia, serif"
          fontStyle="italic"
        >
          K
        </text>
      </svg>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-white/80">
        Tap to open
      </span>
    </motion.button>
  );
}
