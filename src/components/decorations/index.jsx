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
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(currentColor 1.5px, transparent 1.5px), radial-gradient(currentColor 1.5px, transparent 1.5px)",
        backgroundSize: "20px 20px, 20px 20px",
        backgroundPosition: "0 0, 10px 10px",
        opacity: 0.25,
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

// ============ Rich cinematic decorations (new, leave originals untouched) ============

const seedFallers = (count, seed = 0) =>
  Array.from({ length: count }, (_, i) => {
    const r = Math.sin(seed + i * 41.21) * 10000;
    const rand = r - Math.floor(r);
    const r2 = Math.sin(seed + i * 13.7) * 10000;
    const rand2 = r2 - Math.floor(r2);
    return {
      left: `${rand * 100}%`,
      size: 18 + rand2 * 20,
      duration: 6 + rand * 6,
      delay: rand2 * 5,
      drift: (rand - 0.5) * 40,
      rotate: (rand2 - 0.5) * 80,
    };
  });

const FallingEmoji = ({ emoji, count = 16, seed = 10, sizeAdjust = 0, slower = 0 }) => (
  <Layer>
    {seedFallers(count, seed).map((p, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: p.left, fontSize: p.size + sizeAdjust }}
        initial={{ top: "-10%", x: 0, rotate: 0, opacity: 0 }}
        animate={{ top: "110%", x: p.drift, rotate: p.rotate, opacity: [0, 1, 1, 0.85] }}
        transition={{ duration: p.duration + slower, repeat: Infinity, delay: p.delay, ease: "linear" }}
      >
        {emoji}
      </motion.div>
    ))}
  </Layer>
);

const RoseRain = ({ count = 16 }) => <FallingEmoji emoji="🌹" count={count} seed={10} />;
const ChocolateRain = ({ count = 14 }) => <FallingEmoji emoji="🍫" count={count} seed={11} sizeAdjust={-2} />;
const TeddyDrift = ({ count = 10 }) => (
  <Layer>
    {seedFallers(count, 12).map((p, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: p.left, fontSize: p.size + 6 }}
        initial={{ top: "-12%", x: 0, rotate: -10, opacity: 0 }}
        animate={{ top: "110%", x: [p.drift, -p.drift, p.drift], rotate: [-10, 10, -10], opacity: [0, 1, 1, 0.85] }}
        transition={{ duration: p.duration + 3, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
      >
        🧸
      </motion.div>
    ))}
  </Layer>
);

const PetalShower = ({ count = 22 }) => {
  const emojis = ["🌸", "🌺", "🌷"];
  return (
    <Layer>
      {seedFallers(count, 13).map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: p.left, fontSize: p.size - 4 }}
          initial={{ top: "-10%", x: 0, rotate: 0, opacity: 0 }}
          animate={{ top: "110%", x: [p.drift, -p.drift], rotate: [0, 360], opacity: [0, 1, 1, 0.9] }}
          transition={{ duration: p.duration + 2, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        >
          {emojis[i % emojis.length]}
        </motion.div>
      ))}
    </Layer>
  );
};

const SparkleTrail = ({ count = 28 }) => (
  <Layer>
    {seedFallers(count, 14).map((p, i) => (
      <motion.div
        key={i}
        className="absolute text-yellow-200"
        style={{ left: p.left, top: `${(i * 37) % 100}%`, fontSize: p.size - 6 }}
        animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
        transition={{ duration: 2 + p.delay * 0.5, repeat: Infinity, delay: p.delay }}
      >
        ✦
      </motion.div>
    ))}
  </Layer>
);

const FireworkBursts = () => {
  const spots = [
    { left: "20%", top: "25%", color: "#fbbf24" },
    { left: "75%", top: "20%", color: "#f472b6" },
    { left: "50%", top: "55%", color: "#34d399" },
    { left: "15%", top: "70%", color: "#60a5fa" },
    { left: "80%", top: "75%", color: "#a78bfa" },
  ];
  return (
    <Layer>
      {spots.map((s, idx) => (
        <div key={idx} className="absolute" style={{ left: s.left, top: s.top }}>
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            return (
              <motion.span
                key={i}
                className="absolute block h-1 w-1 rounded-full"
                style={{ background: s.color }}
                animate={{
                  x: [0, Math.cos(angle) * 60, Math.cos(angle) * 80],
                  y: [0, Math.sin(angle) * 60, Math.sin(angle) * 80 + 20],
                  opacity: [1, 1, 0],
                }}
                transition={{ duration: 1.6, repeat: Infinity, delay: idx * 0.4, ease: "easeOut" }}
              />
            );
          })}
        </div>
      ))}
    </Layer>
  );
};

const SnowFall = ({ count = 24 }) => (
  <Layer>
    {seedFallers(count, 15).map((p, i) => (
      <motion.div
        key={i}
        className="absolute text-white"
        style={{ left: p.left, fontSize: p.size - 6, opacity: 0.85 }}
        initial={{ top: "-8%", x: 0 }}
        animate={{ top: "110%", x: [p.drift, -p.drift, p.drift] }}
        transition={{ duration: p.duration + 4, repeat: Infinity, delay: p.delay, ease: "linear" }}
      >
        ❄
      </motion.div>
    ))}
  </Layer>
);

const CupidHearts = ({ count = 10 }) => (
  <Layer>
    {seedFallers(count, 16).map((p, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: p.left, fontSize: p.size }}
        initial={{ top: "110%", x: 0, opacity: 0 }}
        animate={{ top: "-10%", x: [0, p.drift, -p.drift, 0], opacity: [0, 1, 1, 0.8] }}
        transition={{ duration: p.duration + 3, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
      >
        💘
      </motion.div>
    ))}
  </Layer>
);

const DiyaGlow = () => {
  const spots = [
    { left: "15%", top: "70%" },
    { left: "38%", top: "78%" },
    { left: "60%", top: "72%" },
    { left: "82%", top: "80%" },
    { left: "50%", top: "85%" },
  ];
  return (
    <Layer>
      {spots.map((s, i) => (
        <div key={i} className="absolute" style={s}>
          <motion.div
            className="absolute -inset-6 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(253,186,116,0.7) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
          />
          <div className="relative text-3xl">🪔</div>
        </div>
      ))}
    </Layer>
  );
};

const RibbonDrift = ({ count = 12 }) => (
  <Layer>
    {seedFallers(count, 17).map((p, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: p.left, fontSize: p.size }}
        initial={{ top: "-10%", x: 0, rotate: 0, opacity: 0 }}
        animate={{ top: "110%", x: [p.drift, -p.drift * 1.5, p.drift], rotate: [0, 180, 360], opacity: [0, 1, 1, 0.9] }}
        transition={{ duration: p.duration + 2, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
      >
        🎀
      </motion.div>
    ))}
  </Layer>
);

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
  "rose-rain": RoseRain,
  "chocolate-rain": ChocolateRain,
  "teddy-drift": TeddyDrift,
  "petal-shower": PetalShower,
  "sparkle-trail": SparkleTrail,
  "firework-bursts": FireworkBursts,
  "snow-fall": SnowFall,
  "cupid-hearts": CupidHearts,
  "diya-glow": DiyaGlow,
  "ribbon-drift": RibbonDrift,
};

export const getDecoration = (id) => DECORATIONS[id] || DECORATIONS.none;
