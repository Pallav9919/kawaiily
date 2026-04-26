import { useState } from "react";
import { motion } from "framer-motion";

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleTap = () => {
    if (opening) return;
    setOpening(true);
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(12);
    }
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
      className="relative h-[220px] w-[340px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 rounded-md sm:h-[240px] sm:w-[380px]"
      style={{ perspective: 1200 }}
    >
      <div className="absolute inset-0 rounded-md bg-rose-200 shadow-2xl" />
      <div
        className="absolute inset-0 bg-rose-300"
        style={{ clipPath: "polygon(0 0, 50% 50%, 0 100%)" }}
      />
      <div
        className="absolute inset-0 bg-rose-300"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}
      />
      <div
        className="absolute inset-0 bg-rose-400"
        style={{ clipPath: "polygon(0 100%, 50% 40%, 100% 100%)" }}
      />
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
