"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  prefix?: string;
  typingText?: string;
  to: number;
  unit?: string;
  durationMs?: number;
  typingMsPerChar?: number;
  className?: string;
};

function formatPt(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function easeOutQuart(t: number): number {
  return 1 - (1 - t) ** 4;
}

function reducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? true;
}

export function LiveMetric({
  prefix = ">",
  typingText = "calculando...",
  to,
  unit,
  durationMs = 1600,
  typingMsPerChar = 26,
  className,
}: Props) {
  const [phase, setPhase] = useState<"idle" | "typing" | "counting" | "done">("idle");
  const [typed, setTyped] = useState("");
  const [value, setValue] = useState(0);

  const hostRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const started = useRef(false);

  const staticText = useMemo(() => `${formatPt(to)}${unit ? ` ${unit}` : ""}`, [to, unit]);

  useEffect(() => {
    if (reducedMotion()) {
      setPhase("done");
      setTyped(typingText);
      setValue(to);
      return;
    }

    const el = hostRef.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;

      setPhase("typing");
      setTyped("");

      let i = 0;
      const typeTimer = window.setInterval(() => {
        i++;
        setTyped(typingText.slice(0, i));
        if (i >= typingText.length) {
          window.clearInterval(typeTimer);
          setPhase("counting");

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / durationMs, 1);
            setValue(easeOutQuart(t) * to);
            if (t < 1) raf.current = requestAnimationFrame(tick);
            else {
              setValue(to);
              setPhase("done");
            }
          };
          raf.current = requestAnimationFrame(tick);
        }
      }, typingMsPerChar);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [durationMs, to, typingMsPerChar, typingText]);

  return (
    <div ref={hostRef} className={className}>
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-400">
        <span className="font-mono text-amber-400/80">{prefix}</span>
        <span className="font-mono">
          {phase === "idle" ? typingText : typed}
          <span
            aria-hidden
            className="ml-0.5 inline-block h-3 w-[1px] align-middle"
            style={{
              background: "rgba(245,158,11,0.7)",
              opacity: phase === "done" ? 0 : 1,
              animation: "blink 900ms steps(2,end) infinite",
            }}
          />
        </span>
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        <span
          className="font-metric leading-none tabular-nums text-amber-400"
          style={{ fontSize: "clamp(64px, 12vw, 140px)", fontWeight: 800 }}
          aria-label={staticText}
        >
          <span aria-hidden>{formatPt(value)}</span>
        </span>
        {unit && (
          <span
            className="font-metric font-bold text-amber-400/55"
            style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
            aria-hidden
          >
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

