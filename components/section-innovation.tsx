import { AnimateIn } from "@/components/animate-in";

const tools = [
  {
    name: "Modelo de Ray Tracing",
    desc: "Simulação precisa de sombreamento e rendimento ótico para plantas termosolares (CSP). Precisão que nenhuma ferramenta comercial oferece.",
    tag: "CSP",
    tagCls: "bg-orange-500/12 text-orange-400 border-orange-500/20",
  },
  {
    name: "Otimizador de Terraplenagem FV",
    desc: "Minimização de movimentação de terra em parques solares, com impacto direto na redução de CAPEX e no prazo de construção.",
    tag: "Solar",
    tagCls: "bg-amber-500/12 text-amber-400 border-amber-500/20",
  },
  {
    name: "Shadow Flicker Eólico",
    desc: "Análise de impacto visual e luminoso causado pela rotação das pás em áreas habitadas — essencial para licenciamentos sensíveis.",
    tag: "Eólica",
    tagCls: "bg-sky-500/12 text-sky-400 border-sky-500/20",
  },
  {
    name: "Simulador CSP Detalhado",
    desc: "Modelagem completa de plantas termosolares: campo de coletores, bloco de potência, sistema de armazenamento térmico e despacho energético.",
    tag: "CSP",
    tagCls: "bg-orange-500/12 text-orange-400 border-orange-500/20",
  },
  {
    name: "Hibridizador FV + Termossolar",
    desc: "Otimização da complementaridade técnica e econômica entre geração solar fotovoltaica e termossolar para maximizar o fator de capacidade.",
    tag: "Híbrido",
    tagCls: "bg-violet-500/12 text-violet-400 border-violet-500/20",
  },
  {
    name: "BI para Plantas CSP",
    desc: "Dashboard proprietário de inteligência operacional para monitoramento e otimização de desempenho em tempo real de plantas termosolares.",
    tag: "O&M",
    tagCls: "bg-emerald-500/12 text-emerald-400 border-emerald-500/20",
  },
];

const stack = ["Python", "Java", "C#", "SCRUM"];

export function SectionInnovation() {
  return (
    <section
      id="inovacao"
      className="scroll-mt-24 border-b border-border bg-slate-950"
      aria-labelledby="inovacao-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        <AnimateIn>
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                P&D & Inovação
              </p>
              <h2
                id="inovacao-heading"
                className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Ferramentas que o mercado não tem
              </h2>
              <p className="text-lg text-muted">
                Nossa equipe interna de engenheiros, matemáticos e físicos desenvolve soluções proprietárias para problemas que as ferramentas comerciais não resolvem.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end lg:text-right">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Stack tecnológico
                </p>
                <div className="mt-2 flex flex-wrap gap-2 lg:justify-end">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border bg-surface px-3 py-1 font-metric text-sm font-semibold text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Metodologia ágil SCRUM · Ciclos de entrega contínua
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Tools grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <AnimateIn key={tool.name} delay={i * 70}>
              <div className="group h-full rounded-xl border border-border bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:bg-surface hover:shadow-card-hover">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <span
                    className={`rounded border px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${tool.tagCls}`}
                  >
                    {tool.tag}
                  </span>
                  {/* "Proprietary" mark */}
                  <span className="text-[10px] font-medium uppercase tracking-widest text-slate-600">
                    Exclusivo
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {tool.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Events */}
        <AnimateIn delay={500}>
          <div className="mt-8 rounded-xl border border-border bg-surface/40 p-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/70">
              Presença em eventos de referência
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Intersolar Europe 2025 (Munique) — Hibridização & Storage",
                "Key Energy 2025 (Itália) — Stand C3/128",
              ].map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-border bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-400"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
