"use client";
import { useEffect, useRef, useState } from "react";
import { AnimateIn } from "@/components/animate-in";
import { CountUp } from "@/components/count-up";

const technologies = [
  {
    name: "Solar Fotovoltaico",
    to: 148, unit: "GW", decimals: 0,
    pct: 100,
    barCls: "bg-amber-400",
    valueCls: "text-amber-400",
    sub: "Maior especialização do portfólio",
  },
  {
    name: "Eólica",
    to: 45, unit: "GW", decimals: 0,
    pct: 76,
    barCls: "bg-sky-400",
    valueCls: "text-sky-400",
    sub: "Onshore e offshore",
  },
  {
    name: "Armazenamento BESS",
    to: 29, unit: "GWh", decimals: 0,
    pct: 67,
    barCls: "bg-violet-400",
    valueCls: "text-violet-400",
    sub: "150+ projetos desde 2023",
  },
  {
    name: "Termossolar CSP",
    to: 9, unit: "GW", decimals: 0,
    pct: 44,
    barCls: "bg-orange-400",
    valueCls: "text-orange-400",
    sub: "Com simulador proprietário",
  },
  {
    name: "Biomassa",
    to: 0.5, unit: "GW", decimals: 1,
    pct: 10,
    barCls: "bg-emerald-400",
    valueCls: "text-emerald-400",
    sub: "Projetos industriais e agroindustriais",
  },
];

const emergingMarkets = [
  "Agrivoltaico",
  "Repowering & Revamping",
  "Hidrogênio Verde",
  "Biogás",
  "Data Centers",
];

export function SectionTech() {
  const [barsVisible, setBarsVisible] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tecnologias"
      className="scroll-mt-24 border-b border-border bg-slate-950"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        <AnimateIn>
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
              Portfólio por tecnologia
            </p>
            <h2
              id="tech-heading"
              className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              220 GW distribuídos em cinco tecnologias
            </h2>
            <p className="text-lg text-muted">
              Experiência acumulada verificável em cada segmento da geração renovável — e ferramentas proprietárias de engenharia para cada um deles.
            </p>
          </div>
        </AnimateIn>

        {/* Technology bars — animate on scroll */}
        <div ref={barsRef} className="space-y-4">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className="grid grid-cols-[1fr,auto] items-center gap-4 rounded-xl border border-border bg-surface/50 p-4 sm:grid-cols-[180px,1fr,130px] sm:gap-6 sm:p-5"
            >
              {/* Name */}
              <div className="sm:text-right">
                <p className="text-sm font-semibold text-slate-200">{tech.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{tech.sub}</p>
              </div>

              {/* Animated bar */}
              <div className="relative hidden h-8 overflow-hidden rounded-md bg-slate-900/80 sm:block">
                {/* Background glow layer */}
                <div
                  className={`absolute inset-y-0 left-0 rounded-md ${tech.barCls} opacity-12 transition-all`}
                  style={{
                    width: barsVisible ? `${tech.pct}%` : "0%",
                    transitionProperty: "width",
                    transitionDuration: "1400ms",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${i * 140}ms`,
                  }}
                  aria-hidden
                />
                {/* Bright leading edge */}
                <div
                  className={`absolute inset-y-0 left-0 rounded-md ${tech.barCls} opacity-75`}
                  style={{
                    width: barsVisible ? `${Math.max(tech.pct * 0.1, 1)}%` : "0%",
                    transitionProperty: "width",
                    transitionDuration: "1400ms",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${i * 140}ms`,
                  }}
                  aria-hidden
                />
              </div>

              {/* Animated value */}
              <div className="text-right">
                <span className={`font-metric text-3xl font-bold tabular-nums sm:text-4xl ${tech.valueCls}`}>
                  <CountUp
                    to={tech.to}
                    decimals={tech.decimals}
                    duration={1400}
                    delay={barsVisible ? i * 140 : 99999}
                  />
                </span>
                <span className={`ml-1 font-metric text-base font-semibold ${tech.valueCls} opacity-60`}>
                  {tech.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Emerging markets */}
        <AnimateIn delay={500}>
          <div className="mt-10 rounded-xl border border-border bg-surface/40 p-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/70">
              Mercados & frentes emergentes (2024–2025)
            </p>
            <div className="flex flex-wrap gap-2">
              {emergingMarkets.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-border bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
