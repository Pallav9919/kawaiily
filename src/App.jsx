import { useEffect, useState } from "react";
import Editor from "./views/Editor";
import Viewer from "./views/Viewer";
import { decodeCard } from "./lib/hash";

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

  return data && data.m ? <Viewer data={data} /> : <Editor />;
}
