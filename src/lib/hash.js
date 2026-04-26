// URL-hash encode/decode. Keys are short to keep URLs compact.
// Shape: { t: templateId, f: fromName, to: toName, m: message }

const toB64Url = (s) =>
  btoa(unescape(encodeURIComponent(s)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

const fromB64Url = (s) => {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + pad;
  return decodeURIComponent(escape(atob(b64)));
};

export const encodeCard = (data) => toB64Url(JSON.stringify(data));

export const decodeCard = (hash) => {
  try {
    const obj = JSON.parse(fromB64Url(hash));
    if (!obj || typeof obj !== "object") return null;
    // Coerce/validate each field defensively. Any malformed URL -> null => Editor shown.
    const safe = {
      t: typeof obj.t === "string" ? obj.t.slice(0, 64) : "",
      f: typeof obj.f === "string" ? obj.f.slice(0, 120) : "",
      to: typeof obj.to === "string" ? obj.to.slice(0, 120) : "",
      m: typeof obj.m === "string" ? obj.m.slice(0, 5000) : "",
    };
    if (!safe.m) return null;
    return safe;
  } catch {
    return null;
  }
};

export const buildShareUrl = (data) =>
  `${window.location.origin}${window.location.pathname}#${encodeCard(data)}`;
