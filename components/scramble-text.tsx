"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
  once?: boolean;
};

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? true;
}

export function ScrambleText({ text, className, as = "span", once = true }: Props) {
  const Tag = as as any;
  const [out, setOut] = useState(text);
  const ran = useRef(false);
  const raf = useRef<number | null>(null);
  const hostRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setOut(text);
      return;
    }

    const el = hostRef.current;
    if (!el) return;

    const run = () => {
      if (once && ran.current) return;
      ran.current = true;

      const start = performance.now();
      const duration = 720;
      const settleMs = 18;

      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const reveal = Math.floor(t * text.length);
        const scrambled = text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < reveal) return ch;
            const r = CHARS[(i * 7 + Math.floor(now / settleMs)) % CHARS.length];
            return r;
          })
          .join("");

        setOut(scrambled);
        if (t < 1) raf.current = requestAnimationFrame(tick);
        else setOut(text);
      };

      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          if (once) io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [text, once]);

  return (
    <Tag
      ref={hostRef as any}
      className={className}
      aria-label={text}
    >
      <span aria-hidden>{out}</span>
    </Tag>
  );
}

