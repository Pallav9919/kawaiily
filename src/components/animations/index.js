// Animation registry. Each returns framer-motion props for a reveal burst that fires once when card reveals.
export const REVEAL_ANIMATIONS = {
  none: { initial: {}, animate: {}, transition: {} },
  burst: {
    initial: { scale: 0.6, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 180, damping: 14 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  },
  rise: {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export const getReveal = (id) => REVEAL_ANIMATIONS[id] || REVEAL_ANIMATIONS.burst;
