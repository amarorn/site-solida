import { AnimateIn } from "@/components/animate-in";
import { CountUp } from "@/components/count-up";
import { TiltCard } from "@/components/tilt-card";

const stats = [
  {
    to: 220, unit: "GW", suffix: "", decimals: 0,
    label: "Experiência acumulada total",
    sub: "portfólio verificável em projetos concluídos",
  },
  {
    to: 148, unit: "GW", suffix: "", decimals: 0,
    label: "Solar fotovoltaico",
    sub: "tecnologia líder do portfólio",
  },
  {
    to: 45, unit: "GW", suffix: "", decimals: 0,
    label: "Energia eólica",
    sub: "onshore e offshore",
  },
  {
    to: 29, unit: "GWh", suffix: "", decimals: 0,
    label: "Armazenamento BESS",
    sub: "150+ projetos desde 2023",
  },
  {
    to: 9, unit: "GW", suffix: "", decimals: 0,
    label: "Termossolar CSP",
    sub: "com simulação proprietária",
  },
  {
    to: 8000, unit: "MW", suffix: "", decimals: 0,
    label: "Supervisionados em obra",
    sub: "gestão de construção EPCM",
  },
  {
    to: 2700, unit: "km", suffix: "", decimals: 0,
    label: "Linhas de alta tensão",
    sub: "projetadas e supervisionadas",
  },
  {
    to: 400, unit: "", suffix: "+", decimals: 0,
    label: "Subestações",
    sub: "em 50+ países",
  },
];

export function SectionStats() {
  return (
    <section
      className="border-b border-border bg-surface/30"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">
          Indicadores de portfólio
        </h2>
        <div className="grid grid-flow-dense gap-4 md:grid-cols-6">
          {stats.map((s, i) => (
            <AnimateIn
              key={s.label}
              delay={i * 55}
              className={[
                i === 0 ? "md:col-span-3 md:row-span-2" : "",
                i === 1 ? "md:col-span-3" : "",
                i === 2 ? "md:col-span-2" : "",
                i === 3 ? "md:col-span-2" : "",
                i === 4 ? "md:col-span-2" : "",
                i === 5 ? "md:col-span-3" : "",
                i === 6 ? "md:col-span-3" : "",
                i === 7 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <TiltCard className="relative h-full overflow-hidden rounded-xl border border-border bg-slate-950/60 px-5 py-5 transition hover:border-amber-500/20">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(245,158,11,0.16) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-baseline gap-1.5">
                    <p className="font-metric text-4xl font-bold tabular-nums text-amber-400 sm:text-5xl">
                      <CountUp
                        to={s.to}
                        suffix={s.suffix}
                        decimals={s.decimals}
                        duration={1800}
                        delay={i * 60}
                      />
                    </p>
                    {s.unit && (
                      <span className="font-metric text-lg font-semibold text-amber-400/60">
                        {s.unit}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-200">
                    {s.label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{s.sub}</p>
                </div>
              </TiltCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
