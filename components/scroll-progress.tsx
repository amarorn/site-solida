"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setShowBar(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!showBar) return;

    const measure = () => {
      const root = document.documentElement;
      const scrollTop = window.scrollY ?? root.scrollTop;
      const denom = root.scrollHeight - root.clientHeight;
      const next =
        denom <= 0 ? 0 : Math.min(100, Math.max(0, (scrollTop / denom) * 100));
      setProgress(next);
      rafRef.current = null;
    };

    const schedule = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(measure);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [showBar]);

  if (!showBar) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[2px] w-full sm:h-[3px]"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
