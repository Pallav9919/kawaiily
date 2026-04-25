import { lazy, Suspense, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import MadeBy from "./components/MadeBy";
import { decodeCard } from "./lib/hash";

// Split bundles: Editor is the landing page for most users, Viewer only loads when opening a shared card.
const Editor = lazy(() => import("./views/Editor"));
const Viewer = lazy(() => import("./views/Viewer"));

export default function App() {
  const [data, setData] = useState(() =>
    window.location.hash ? decodeCard(window.location.hash.slice(1)) : null
  );

  useEffect(() => {
    const onHash = () =>
      setData(
        window.location.hash ? decodeCard(window.location.hash.slice(1)) : null
      );
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        {data && data.m ? <Viewer data={data} /> : <Editor />}
      </Suspense>
      <MadeBy />
      <Analytics />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="flex min-h-full items-center justify-center bg-gradient-to-b from-rose-50 via-white to-indigo-50">
      <div className="animate-pulse text-slate-400">Loading…</div>
    </div>
  );
}
