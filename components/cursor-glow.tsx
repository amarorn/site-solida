"use client";
import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${e.clientX}px`);
      root.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20"
      style={{
        background:
          "radial-gradient(700px circle at var(--cursor-x) var(--cursor-y), rgba(245,158,11,0.045), transparent 45%)",
      }}
      aria-hidden
    />
  );
}
