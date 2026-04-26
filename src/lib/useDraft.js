import { useEffect, useRef, useState } from "react";

const KEY = "kawaiily:draft:v1";

export function useDraft(initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? { ...initial, ...JSON.parse(raw) } : initial;
    } catch {
      return initial;
    }
  });

  const saveRef = useRef();
  useEffect(() => {
    clearTimeout(saveRef.current);
    saveRef.current = setTimeout(() => {
      try {
        localStorage.setItem(KEY, JSON.stringify(value));
      } catch {
        /* storage full / disabled */
      }
    }, 250);
    return () => clearTimeout(saveRef.current);
  }, [value]);

  const clear = () => {
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
  };

  return [value, setValue, clear];
}
