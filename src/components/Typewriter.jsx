import { useEffect, useState } from "react";

// Reveals text character by character. speedMs = delay per character.
export default function Typewriter({ text, speedMs = 18, className, onDone }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    if (!text) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        onDone?.();
      }
    }, speedMs);
    return () => clearInterval(id);
  }, [text, speedMs, onDone]);

  return <span className={className}>{shown}</span>;
}
