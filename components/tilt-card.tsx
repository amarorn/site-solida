"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  maxTiltDeg?: number;
  perspectivePx?: number;
  fillHeight?: boolean;
};

export function TiltCard({
  className,
  children,
  maxTiltDeg = 8,
  perspectivePx = 900,
  fillHeight = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia?.("(pointer: fine)");
    const hover = window.matchMedia?.("(hover: hover)");
    if (!reduce || !fine || !hover) return;

    const compute = () => {
      setEnabled(!reduce.matches && fine.matches && hover.matches);
    };
    compute();

    reduce.addEventListener?.("change", compute);
    fine.addEventListener?.("change", compute);
    hover.addEventListener?.("change", compute);
    return () => {
      reduce.removeEventListener?.("change", compute);
      fine.removeEventListener?.("change", compute);
      hover.removeEventListener?.("change", compute);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const shellCls = fillHeight ? "h-full min-h-0" : "min-h-0";
  const innerGrow = fillHeight ? "h-full min-h-0" : "min-h-0";

  if (!enabled) {
    return (
      <div className={[innerGrow, className].filter(Boolean).join(" ")}>
        {children}
      </div>
    );
  }

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * (maxTiltDeg * 2);
    const ry = (px - 0.5) * (maxTiltDeg * 2);

    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${rx.toFixed(3)}deg`);
      el.style.setProperty("--ry", `${ry.toFixed(3)}deg`);
    });
  };

  const onPointerLeave: React.PointerEventHandler<HTMLDivElement> = () => {
    const el = ref.current;
    if (!el) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
    });
  };

  return (
    <div
      className={shellCls}
      style={{ perspective: `${perspectivePx}px` }}
    >
      <div
        ref={ref}
        className={[className, innerGrow].filter(Boolean).join(" ")}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
          transition: "transform 180ms cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

