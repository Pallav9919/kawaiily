import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTemplate } from "../templates/registry";
import { getPalette } from "../templates/palettes";
import { getDecoration } from "../components/decorations";
import { getReveal } from "../components/animations";
import Burst from "../components/Burst";
import Typewriter from "../components/Typewriter";
import Envelope from "../components/Envelope";

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

  const handleFlip = () => {
    setFlipped((f) => !f);
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

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
                onClick={handleFlip}
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
                    Tap to flip
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
                  <p
                    className={`kawaiily-scroll relative mt-4 flex-1 overflow-auto whitespace-pre-wrap text-lg leading-relaxed ${tpl.inside.font}`}
                  >
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
          href="/"
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
