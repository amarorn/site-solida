import { AnimateIn } from "@/components/animate-in";

const stats = [
  {
    value: "220",
    unit: "GW",
    label: "Experiência acumulada total",
    sub: "portfólio verificável em projetos concluídos",
  },
  {
    value: "148",
    unit: "GW",
    label: "Solar fotovoltaico",
    sub: "tecnologia líder do portfólio",
  },
  {
    value: "45",
    unit: "GW",
    label: "Energia eólica",
    sub: "onshore e offshore",
  },
  {
    value: "29",
    unit: "GWh",
    label: "Armazenamento BESS",
    sub: "150+ projetos desde 2023",
  },
  {
    value: "9",
    unit: "GW",
    label: "Termossolar CSP",
    sub: "com simulação proprietária",
  },
  {
    value: "8.000",
    unit: "MW",
    label: "Supervisionados em obra",
    sub: "gestão de construção EPCM",
  },
  {
    value: "2.700",
    unit: "km",
    label: "Linhas de alta tensão",
    sub: "projetadas e supervisionadas",
  },
  {
    value: "400+",
    unit: "",
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimateIn
              key={s.label}
              delay={i * 55}
              className="rounded-xl border border-border bg-slate-950/60 px-5 py-5 transition hover:border-amber-500/20"
            >
              <div className="flex items-baseline gap-1.5">
                <p className="font-metric text-4xl font-bold tabular-nums text-amber-400 sm:text-5xl">
                  {s.value}
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
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
