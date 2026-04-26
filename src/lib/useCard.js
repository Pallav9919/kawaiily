import { useEffect, useState } from "react";
import { decodeCard } from "./hash";

// Reads/tracks the decoded card from the URL hash.
// Returns { data } where data is null (=> show Editor) or a validated card object.
export function useCard() {
  const [data, setData] = useState(() =>
    typeof window !== "undefined" && window.location.hash
      ? decodeCard(window.location.hash.slice(1))
      : null
  );

  useEffect(() => {
    const onHash = () =>
      setData(window.location.hash ? decodeCard(window.location.hash.slice(1)) : null);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return data;
}
