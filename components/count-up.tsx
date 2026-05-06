"use client";
import { useEffect, useRef, useState } from "react";

function easeOutQuart(t: number): number {
  return 1 - (1 - t) ** 4;
}

function formatValue(n: number, decimals: number): string {
  if (decimals > 0) {
    return n.toFixed(decimals).replace(".", ",");
  }
  // Portuguese thousands separator (dot)
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

interface Props {
  to: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function CountUp({
  to,
  suffix = "",
  decimals = 0,
  duration = 1800,
  delay = 0,
  className,
}: Props) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false);
    if (reduce) {
      started.current = true;
      setCurrent(to);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          const run = () => {
            const startTime = performance.now();
            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              setCurrent(easeOutQuart(progress) * to);
              if (progress < 1) raf.current = requestAnimationFrame(tick);
            };
            raf.current = requestAnimationFrame(tick);
          };

          delay > 0 ? setTimeout(run, delay) : run();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, [to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {formatValue(current, decimals)}
      {suffix}
    </span>
  );
}
