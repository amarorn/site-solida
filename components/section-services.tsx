import Link from "next/link";

import { AnimateIn } from "@/components/animate-in";
import { TiltCard } from "@/components/tilt-card";

const services = [
  {
    id: "engenharia",
    href: "/engenharia",
    number: "01",
    title: "Engenharia",
    subtitle: "Ciclo completo do projeto",
    description:
      "Serviço 360° do conceito ao comissionamento. Especialistas em solar, eólica, termossolar, biomassa, armazenamento, hibridização, subestações e linhas de alta tensão.",
    highlights: [
      "Viabilidade, conexão e licenciamento",
      "Engenharia básica e de detalhamento",
      "Subestações AT e linhas de transmissão",
      "Hibridização FV + termossolar + BESS",
      "Modelagem econômica CAPEX / OPEX / LCOE",
    ],
    numberCls: "text-amber-400/35 group-hover:text-amber-400/65",
    badgeCls: "border-amber-500/20 bg-amber-500/10 text-amber-400",
    dotCls: "bg-amber-400",
  },
  {
    id: "consultoria",
    href: "/consultoria",
    number: "02",
    title: "Consultoria",
    subtitle: "Assessoria técnica independente",
    description:
      "Assessores técnicos independentes nas operações financeiras mais relevantes da Europa. Due Diligence Técnica, Lender's Technical Advisor e auditorias especializadas.",
    highlights: [
      "Due Diligence Técnica (TDD)",
      "Lender's Technical Advisor (LTA)",
      "Auditorias de desempenho e risco",
      "Contratos de assessoria de longo prazo",
      "Avaliação de contratos EPC e fornecedores",
    ],
    numberCls: "text-sky-400/35 group-hover:text-sky-400/65",
    badgeCls: "border-sky-500/20 bg-sky-500/10 text-sky-400",
    dotCls: "bg-sky-400",
  },
  {
    id: "construcao",
    href: "/gestao-da-construcao",
    number: "03",
    title: "Gestão de Construção",
    subtitle: "EPCM · Supervisão · Zero Acidentes",
    description:
      "8.000 MW supervisionados em campo. Gerenciamento EPCM, supervisão de obras e coordenação HSE com compromisso inabalável com segurança e qualidade.",
    highlights: [
      "EPCM — Engineering, Procurement & Construction Management",
      "Supervisão de campo e quality assurance",
      "Coordenação HSE — meta Zero Acidentes",
      "Comissionamento e entrada em operação",
      "Documentação as-built e manuais O&M",
    ],
    numberCls: "text-emerald-400/35 group-hover:text-emerald-400/65",
    badgeCls: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    dotCls: "bg-emerald-400",
  },
  {
    id: "inovacao",
    href: "/inovacao",
    number: "04",
    title: "Inovação",
    subtitle: "P&D proprietário · Ferramentas exclusivas",
    description:
      "Equipe interna de engenheiros, matemáticos e físicos. Metodologia SCRUM, stack Python/Java/C#. Ferramentas que simplesmente não existem no mercado convencional.",
    highlights: [
      "Modelo de Ray Tracing para CSP",
      "Otimizador de terraplenagem fotovoltaica",
      "Simulador de shadow flicker eólico",
      "Hibridizador FV + termossolar",
      "BI proprietário para plantas CSP",
    ],
    numberCls: "text-violet-400/35 group-hover:text-violet-400/65",
    badgeCls: "border-violet-500/20 bg-violet-500/10 text-violet-400",
    dotCls: "bg-violet-400",
  },
];

export function SectionServices() {
  return (
    <section
      id="servicos"
      className="scroll-mt-24 border-b border-border"
      aria-labelledby="servicos-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        <AnimateIn>
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
              O que fazemos
            </p>
            <h2
              id="servicos-heading"
              className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Quatro pilares. Um portfólio completo.
            </h2>
            <p className="text-lg text-muted">
              Engenharia, consultoria, gestão de construção e inovação — sob um mesmo teto técnico, com independência total.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-flow-dense gap-5 md:grid-cols-6 md:items-start lg:grid-cols-12">
          {services.map((s, i) => {
            const isFeature = i === 0;
            const wrapperCls = [
              "min-h-0",
              isFeature ? "md:col-span-4 md:row-span-2 md:h-full lg:col-span-7" : "",
              i === 1 ? "md:col-span-2 lg:col-span-5" : "",
              i === 2 ? "md:col-span-3 lg:col-span-6" : "",
              i === 3 ? "md:col-span-3 lg:col-span-6" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <AnimateIn
                key={s.id}
                delay={i * 75}
                className={wrapperCls}
              >
                <TiltCard
                  fillHeight={isFeature}
                  className={[
                    "group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface/70 p-7",
                    "transition-[border-color,box-shadow,background-color] duration-300 hover:border-amber-500/30 hover:bg-surface hover:shadow-card-hover",
                    isFeature ? "md:min-h-[26rem] md:h-full" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 65%)",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full blur-3xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 62%)",
                  }}
                  aria-hidden
                />

                <article
                  className={[
                    "relative flex flex-col",
                    isFeature ? "md:min-h-0 md:flex-1" : "",
                  ].filter(Boolean).join(" ")}
                  aria-labelledby={`service-${s.id}`}
                >
                  <div className="mb-5 flex items-start justify-between gap-2">
                  <span
                    className={`font-metric text-5xl font-extrabold tabular-nums transition-colors ${s.numberCls}`}
                  >
                    {s.number}
                  </span>
                  <span
                    className={`rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${s.badgeCls}`}
                  >
                    Serviço
                  </span>
                </div>

                <h3 id={`service-${s.id}`} className="font-display text-xl font-bold">
                  <Link
                    href={s.href}
                    className="text-foreground underline-offset-4 hover:underline focus-ring rounded-sm"
                  >
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {s.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                      <span
                        className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${s.dotCls}`}
                        aria-hidden
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/90 hover:text-amber-200 focus-ring rounded-sm"
                  >
                    Ver detalhes
                    <span aria-hidden>→</span>
                  </Link>
                </div>
                </article>
                </TiltCard>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
