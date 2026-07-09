"use client";

import { useEffect, useState } from "react";

export const ScrollGauge = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight =
        (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      const pct =
        scrollHeight > 0
          ? Math.min(1, Math.max(0, scrollTop / scrollHeight))
          : 0;
      setProgress(pct);
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const pct = progress * 100;

  return (
    <div className="gauge" aria-hidden="true">
      <div className="gauge__track">
        <div className="gauge__fill" style={{ height: `${pct}%` }} />
        <div className="gauge__dot" style={{ top: `${pct}%` }} />
      </div>
    </div>
  );
};
