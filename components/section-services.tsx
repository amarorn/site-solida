import { AnimateIn } from "@/components/animate-in";

const services = [
  {
    id: "engenharia",
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

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <AnimateIn key={s.id} delay={i * 75}>
              <article
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface/70 p-7 transition hover:border-amber-500/20 hover:bg-surface"
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

                <h3
                  id={`service-${s.id}`}
                  className="font-display text-xl font-bold text-foreground"
                >
                  {s.title}
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
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
