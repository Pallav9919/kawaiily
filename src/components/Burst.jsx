import { motion } from "framer-motion";

// One-shot burst from a center point. Use `key` to re-trigger.
export default function Burst({ count = 24 }) {
  const pieces = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const distance = 180 + Math.random() * 120;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      rotate: Math.random() * 720 - 360,
      color: ["#f43f5e", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"][i % 6],
      size: 6 + Math.random() * 6,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-sm"
          style={{
            width: p.size,
            height: p.size * 0.4,
            background: p.color,
          }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.5 }}
          animate={{ x: p.x, y: p.y, opacity: 0, rotate: p.rotate, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.6, 0.4, 1] }}
        />
      ))}
    </div>
  );
}
