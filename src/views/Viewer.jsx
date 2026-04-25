import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTemplate } from "../templates/registry";
import { getPalette } from "../templates/palettes";
import { getDecoration } from "../components/decorations";
import { getReveal } from "../components/animations";
import Burst from "../components/Burst";
import Typewriter from "../components/Typewriter";

export default function Viewer({ data }) {
  const [opened, setOpened] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);
  const tpl = getTemplate(data.t);
  const coverPal = getPalette(tpl.cover.palette);
  const insidePal = getPalette(tpl.inside.palette);
  const CoverDeco = getDecoration(tpl.cover.decoration);
  const InsideDeco = getDecoration(tpl.inside.decoration);
  const reveal = getReveal(tpl.reveal);

  return (
    <div className="flex min-h-full items-center justify-center bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 p-4">
      <div className="relative flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!opened ? (
            <Envelope key="envelope" onOpen={() => setOpened(true)} />
          ) : (
            <motion.div key="card" {...reveal} className="relative perspective">
              <Burst />
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
                  {flipped && !hasFlipped ? (
                    <Typewriter text={data.m} onDone={() => setHasFlipped(true)} />
                  ) : (
                    data.m
                  )}
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
        </AnimatePresence>

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
      className={`absolute inset-0 backface-hidden overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ${className}`}
      style={{ transform: back ? "rotateY(180deg)" : "none" }}
    >
      {children}
    </div>
  );
}

function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleTap = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 800);
  };

  return (
    <motion.button
      onClick={handleTap}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={
        opening
          ? { scale: 1, opacity: 1 }
          : { scale: 1, opacity: 1, y: [0, -6, 0] }
      }
      transition={
        opening
          ? { duration: 0.3 }
          : {
              scale: { duration: 0.4 },
              opacity: { duration: 0.4 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }
      }
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4, delay: 0.2 } }}
      whileTap={!opening ? { scale: 0.96 } : {}}
      aria-label="Open envelope"
      className="relative h-[220px] w-[340px] sm:h-[240px] sm:w-[380px]"
      style={{ perspective: 1200 }}
    >
      {/* envelope body */}
      <div className="absolute inset-0 rounded-md bg-rose-200 shadow-2xl" />
      {/* left & right inside flaps (triangles) */}
      <div
        className="absolute inset-0 bg-rose-300"
        style={{ clipPath: "polygon(0 0, 50% 50%, 0 100%)" }}
      />
      <div
        className="absolute inset-0 bg-rose-300"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}
      />
      {/* bottom flap */}
      <div
        className="absolute inset-0 bg-rose-400"
        style={{ clipPath: "polygon(0 100%, 50% 40%, 100% 100%)" }}
      />
      {/* top flap — hinges from top edge */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[60%]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          background: "#e11d48",
          transformOrigin: "top center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "visible",
        }}
        initial={{ rotateX: 0 }}
        animate={{ rotateX: opening ? -175 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
      />
      {/* wax seal — on top of the closed flap */}
      {!opening && (
        <motion.div
          className="absolute left-1/2 top-[52%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose-800 font-serif italic text-rose-50 shadow-lg ring-2 ring-rose-900/30"
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          K
        </motion.div>
      )}
      {!opening && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-white/80">
          Tap to open
        </span>
      )}
    </motion.button>
  );
}
