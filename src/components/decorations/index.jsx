// Decoration registry. Each decoration is a positioned layer rendered behind/around the card content.
// Kept pure-CSS/SVG for consistency and zero assets.
import { motion } from "framer-motion";

const seedFloats = (count, seed = 0) =>
  Array.from({ length: count }, (_, i) => {
    const r = Math.sin(seed + i * 37.13) * 10000;
    const rand = r - Math.floor(r);
    const r2 = Math.sin(seed + i * 91.7) * 10000;
    const rand2 = r2 - Math.floor(r2);
    const r3 = Math.sin(seed + i * 17.9) * 10000;
    const rand3 = r3 - Math.floor(r3);
    return {
      left: `${rand * 100}%`,
      top: `${rand2 * 100}%`,
      size: 12 + rand3 * 22,
      delay: rand * 2,
    };
  });

const Layer = ({ children }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">{children}</div>
);

const Hearts = ({ count = 14, color = "#fff" }) => (
  <Layer>
    {seedFloats(count, 1).map((p, i) => (
      <motion.div
        key={i}
        className="absolute opacity-80"
        style={{ left: p.left, top: p.top, fontSize: p.size, color }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3 + p.delay, repeat: Infinity, delay: p.delay }}
      >
        ♥
      </motion.div>
    ))}
  </Layer>
);

const Petals = ({ count = 16 }) => (
  <Layer>
    {seedFloats(count, 2).map((p, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: p.left, top: p.top, fontSize: p.size }}
        animate={{ y: [0, 10, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 4 + p.delay, repeat: Infinity, delay: p.delay }}
      >
        🌸
      </motion.div>
    ))}
  </Layer>
);

const Confetti = ({ count = 30 }) => {
  const colors = ["#f43f5e", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];
  return (
    <Layer>
      {seedFloats(count, 3).map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-sm"
          style={{
            left: p.left,
            top: p.top,
            width: p.size * 0.4,
            height: p.size * 0.2,
            background: colors[i % colors.length],
          }}
          animate={{ y: [0, 16, 0], rotate: [0, 360] }}
          transition={{ duration: 5 + p.delay, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </Layer>
  );
};

const Stars = ({ count = 20, color = "#fde68a" }) => (
  <Layer>
    {seedFloats(count, 4).map((p, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: p.left, top: p.top, fontSize: p.size, color }}
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 2 + p.delay, repeat: Infinity, delay: p.delay }}
      >
        ✦
      </motion.div>
    ))}
  </Layer>
);

const Diyas = ({ count = 6 }) => (
  <Layer>
    {seedFloats(count, 5).map((p, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: p.left, top: p.top, fontSize: p.size + 10 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.5 + p.delay * 0.5, repeat: Infinity, delay: p.delay }}
      >
        🪔
      </motion.div>
    ))}
  </Layer>
);

const Geometric = () => (
  <Layer>
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, #fff 0, transparent 40%), radial-gradient(circle at 80% 30%, #fff 0, transparent 35%), radial-gradient(circle at 50% 80%, #fff 0, transparent 40%)",
      }}
    />
  </Layer>
);

const Balloons = ({ count = 8 }) => {
  const emojis = ["🎈", "🎉", "🎊"];
  return (
    <Layer>
      {seedFloats(count, 6).map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: p.left, top: p.top, fontSize: p.size + 6 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3 + p.delay, repeat: Infinity, delay: p.delay }}
        >
          {emojis[i % emojis.length]}
        </motion.div>
      ))}
    </Layer>
  );
};

const Colors = ({ count = 14 }) => {
  const colors = ["#f43f5e", "#f59e0b", "#84cc16", "#06b6d4", "#a855f7"];
  return (
    <Layer>
      {seedFloats(count, 7).map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: colors[i % colors.length],
            opacity: 0.7,
            filter: "blur(2px)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3 + p.delay, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </Layer>
  );
};

export const DECORATIONS = {
  none: () => null,
  hearts: Hearts,
  petals: Petals,
  confetti: Confetti,
  stars: Stars,
  diyas: Diyas,
  geometric: Geometric,
  balloons: Balloons,
  colors: Colors,
};

export const getDecoration = (id) => DECORATIONS[id] || DECORATIONS.none;
