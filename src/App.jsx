import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import MadeBy from "./components/MadeBy";
import ErrorBoundary from "./components/ErrorBoundary";
import { useCard } from "./lib/useCard";

// Split bundles: Editor is the landing page for most users, Viewer only loads when opening a shared card.
const Editor = lazy(() => import("./views/Editor"));
const Viewer = lazy(() => import("./views/Viewer"));

export default function App() {
  const data = useCard();

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          {data && data.m ? <Viewer data={data} /> : <Editor />}
        </Suspense>
      </ErrorBoundary>
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
