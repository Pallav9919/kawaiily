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

// ============ Anime premium decorations ============

const SharinganSpin = () => (
  <Layer>
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      {/* Sasuke's Eternal Mangekyō Sharingan — from provided SVG */}
      <svg viewBox="0 0 300 300" width="300" height="300" style={{ opacity: 0.75 }}>
        <defs>
          <radialGradient id="sasuke-iris-grad">
            <stop offset="0" stopColor="#660000" stopOpacity="1" />
            <stop offset="0.5" stopColor="#c30000" stopOpacity="1" />
            <stop offset="1" stopColor="#a00000" stopOpacity="1" />
          </radialGradient>
          <g id="sasuke-tomoe">
            <path
              fill="none"
              stroke="#000"
              strokeWidth="5"
              d="M200,150 C 200,215 170,275 150,295 C 130,275 100,215 100,150 C 100,85 130,25 150,5 C 170,25 200,85 200,150 z"
            />
            <path
              fill="#000"
              d="M 275,77.5 C 260,40 200,0 150,5 C 170,30 183.4,55.1 190,80 C 215,75 244.2,71.7 275,77.5 z"
              id="sasuke-tomoe-top"
            />
            <use href="#sasuke-tomoe-top" transform="rotate(180 150 150)" />
            <path
              fill="#000"
              d="M 150,258.7 C 141,244 131.5,195.8 128.6,162.4 L 150,150 171.4,162.4 C 168.5,195.8 159,244 150,258.7 z"
            />
          </g>
        </defs>
        <circle
          cx="150"
          cy="150"
          r="145"
          style={{ fill: "url(#sasuke-iris-grad)", stroke: "#000", strokeWidth: 10 }}
        />
        <use href="#sasuke-tomoe" />
        <use href="#sasuke-tomoe" transform="rotate(120 150 150)" />
        <use href="#sasuke-tomoe" transform="rotate(-120 150 150)" />
        <circle cx="150" cy="150" r="20" fill="#a00000" />
      </svg>
    </motion.div>
  </Layer>
);

const MangekyoItachi = () => (
  <Layer>
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 300 300" width="300" height="300" style={{ opacity: 0.75 }}>
        <defs>
          <radialGradient id="itachi-iris-grad">
            <stop offset="0" stopColor="#660000" stopOpacity="1" />
            <stop offset="0.5" stopColor="#c30000" stopOpacity="1" />
            <stop offset="1" stopColor="#a00000" stopOpacity="1" />
          </radialGradient>
        </defs>
        <circle
          cx="150"
          cy="150"
          r="145"
          style={{ fill: "url(#itachi-iris-grad)", stroke: "#000", strokeWidth: 10 }}
        />
        <path
          fill="#000"
          d="M 177.6,10.7 C 135,68.4 155.4,100.7 179.8,118.5 C 260.9,160.6 274.8,214.5 255.9,244.9 C 237.3,191.9 198,172.4 158.5,194.9 C 86.9,238.6 40.7,231.2 15.7,196.6 C 58.2,203.1 109.1,193.5 107.9,128.3 C 109.5,97.6 111.5,16.6 177.6,10.7 z"
        />
        <circle cx="150" cy="150" r="20" fill="#a00000" />
      </svg>
    </motion.div>
  </Layer>
);

const MadaraMangekyo = () => (
  <Layer>
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    >
      {/* Madara's Eternal Mangekyō Sharingan — from provided SVG */}
      <svg viewBox="0 0 300 300" width="300" height="300" style={{ opacity: 0.75 }}>
        <defs>
          <radialGradient id="madara-iris-grad">
            <stop offset="0" stopColor="#660000" stopOpacity="1" />
            <stop offset="0.5" stopColor="#c30000" stopOpacity="1" />
            <stop offset="1" stopColor="#a00000" stopOpacity="1" />
          </radialGradient>
          <g id="madara-tomoe">
            <circle fill="none" stroke="#000" strokeWidth="15" cx="150" cy="60" r="30" />
            <path
              fill="#000"
              d="M 151.1 24.6 L 174.1 43.1 L 180 82.5 C 240.9 62.8 255 166.9 244.1 161.2 C 255 183.2 264.5 185 262.9 181.9 C 260.5 177.2 260.8 175.4 260.8 171 C 264.9 103.6 227 34 151.1 24.6 z"
            />
            <path fill="#000" d="M 115,250 L 115,290 L 150,295 L 185,290 L 185,250 L 115,250 z" />
          </g>
        </defs>
        <circle
          cx="150"
          cy="150"
          r="145"
          style={{ fill: "url(#madara-iris-grad)", stroke: "#000", strokeWidth: 10 }}
        />
        <use href="#madara-tomoe" />
        <use href="#madara-tomoe" transform="rotate(120 150 150)" />
        <use href="#madara-tomoe" transform="rotate(-120 150 150)" />
        <circle cx="150" cy="150" r="28" fill="#000" />
      </svg>
    </motion.div>
  </Layer>
);

const RinneganRipple = () => (
  <Layer>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg viewBox="0 0 200 200" width="260" height="260" style={{ opacity: 0.45 }}>
        <circle cx="100" cy="100" r="90" fill="#7c3aed" />
        {[80, 65, 50, 35, 20, 10].map((r, i) => (
          <motion.circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="#1e1b4b"
            strokeWidth="2.5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
        <circle cx="100" cy="100" r="6" fill="#1e1b4b" />
      </svg>
    </div>
  </Layer>
);

const BloodDrip = ({ count = 10 }) => (
  <Layer>
    {/* top band drip sources */}
    {Array.from({ length: count }, (_, i) => {
      const r = Math.sin(30 + i * 51.3) * 10000;
      const rand = r - Math.floor(r);
      const left = `${(i / count) * 100 + rand * 5}%`;
      const delay = rand * 4;
      const duration = 4 + rand * 3;
      const len = 40 + rand * 60;
      return (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{ left }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration, repeat: Infinity, delay }}
        >
          {/* vertical thin red streak */}
          <div
            style={{
              width: 2,
              height: len,
              background: "linear-gradient(to bottom, rgba(220,38,38,0.9), rgba(127,29,29,0.6) 60%, transparent)",
              boxShadow: "0 0 6px rgba(220,38,38,0.6)",
            }}
          />
          {/* drop at end */}
          <motion.div
            className="absolute"
            style={{
              left: -3,
              top: len - 3,
              width: 8,
              height: 10,
              borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
              background: "#b91c1c",
              boxShadow: "0 0 6px rgba(220,38,38,0.8)",
            }}
            animate={{ y: [0, 10, 20], opacity: [1, 1, 0] }}
            transition={{ duration, repeat: Infinity, delay, ease: "easeIn" }}
          />
        </motion.div>
      );
    })}
  </Layer>
);

const CharacterBg = ({ src, scale = 0.9, opacity = 0.45 }) => (
  <Layer>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: `auto ${scale * 100}%`,
        opacity,
        mixBlendMode: "screen",
        filter: "drop-shadow(0 0 8px rgba(0,0,0,0.4))",
      }}
    />
  </Layer>
);

const NarutoBg = () => <CharacterBg src="/anime/naruto.png" scale={0.95} opacity={0.55} />;
const MinatoBg = () => <CharacterBg src="/anime/minato.png" scale={0.95} opacity={0.55} />;

const Rasenshuriken = () => (
  <Layer>
    {/* Four rotating wind blades */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 400 400" width="420" height="420" style={{ opacity: 0.8 }}>
        <defs>
          <radialGradient id="rs-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%" stopColor="#e0f2fe" stopOpacity="1" />
            <stop offset="65%" stopColor="#7dd3fc" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="rs-blade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <filter id="rs-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* 4 shuriken wind blades */}
        <g filter="url(#rs-glow)">
          {[0, 90, 180, 270].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 200 200)`}>
              {/* blade: narrow at center, wider tapering outward, pointed tip */}
              <path
                d="M 200 200 L 200 185 Q 260 180 330 170 L 380 200 L 330 230 Q 260 220 200 215 Z"
                fill="url(#rs-blade)"
              />
              {/* inner wind streaks */}
              <path
                d="M 215 200 L 260 195 L 320 195 L 360 200 L 320 205 L 260 205 Z"
                fill="#fff"
                opacity="0.3"
              />
            </g>
          ))}
        </g>
      </svg>
    </motion.div>

    {/* Glowing core — spins opposite direction for contrast, stays centered */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: -360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 200 200" width="180" height="180" style={{ opacity: 0.95 }}>
        {/* outer sphere halo */}
        <circle cx="100" cy="100" r="75" fill="url(#rs-core-halo)" />
        <defs>
          <radialGradient id="rs-core-halo">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#bae6fd" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* swirling rings inside the sphere */}
        {[0, 45, 90, 135].map((a) => (
          <ellipse
            key={a}
            cx="100"
            cy="100"
            rx="60"
            ry="18"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            opacity="0.55"
            transform={`rotate(${a} 100 100)`}
          />
        ))}
        {/* bright center */}
        <circle cx="100" cy="100" r="14" fill="#ffffff" />
      </svg>
    </motion.div>

    {/* Subtle pulse behind everything */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: 300,
        height: 300,
        background: "radial-gradient(circle, rgba(125,211,252,0.35) 0%, transparent 70%)",
      }}
      animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.6, 0.9, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
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
  "sharingan-spin": SharinganSpin,
  "mangekyo-itachi": MangekyoItachi,
  "mangekyo-madara": MadaraMangekyo,
  "rinnegan-ripple": RinneganRipple,
  "blood-drip": BloodDrip,
  "naruto-bg": NarutoBg,
  "minato-bg": MinatoBg,
  rasenshuriken: Rasenshuriken,
};

export const getDecoration = (id) => DECORATIONS[id] || DECORATIONS.none;
