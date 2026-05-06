import { AnimateIn } from "@/components/animate-in";

const differentials = [
  {
    title: "Exclusividade total em renováveis",
    body: "Desde a fundação em 2007, 100% do negócio é dedicado a energias renováveis. Nenhum projeto fora do setor. Isso se traduz em profundidade técnica inalcançável por generalistas.",
  },
  {
    title: "Independência como princípio",
    body: "Não vendemos equipamentos nem temos participações em ativos. Nossa recomendação técnica é sempre livre de conflito de interesse — uma raridade no mercado.",
  },
  {
    title: "Engenharia + Assessoria integrados",
    body: "Poucos concorrentes oferecem ambos com o mesmo nível técnico. Cobrimos da viabilidade ao comissionamento, e as due diligences mais exigentes da Europa.",
  },
  {
    title: "Brasil",
    body: "Operações no Brasil com contato comercial e referência em São Paulo.",
  },
];

export function SectionAbout() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 border-b border-border bg-slate-950"
      aria-labelledby="sobre-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Left: story */}
          <AnimateIn>
            <div className="space-y-7">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                  Sobre a empresa
                </p>
                <h2
                  id="sobre-heading"
                  className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                >
                  18 anos dedicados exclusivamente a energias renováveis
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-muted">
                Fundada em 2007 por{" "}
                <strong className="font-semibold text-slate-200">
                  Fernando Rueda
                </strong>{" "}
                e{" "}
                <strong className="font-semibold text-slate-200">
                  Enrique Romero
                </strong>
                , a Sólida Energías Renovables construiu um dos portfólios técnicos mais extensos do setor — 220 GW em projetos concluídos, presença em 50+ países e uma equipe de 300+ profissionais de 18 nacionalidades.
              </p>

              <p className="leading-relaxed text-muted">
                Nossa identidade é a independência absoluta: não comercializamos equipamentos, não temos conflitos de interesse. Somos exclusivamente engenharia e assessoria técnica — 100% do negócio, 100% do tempo, desde o primeiro dia.
              </p>

              {/* Mini metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { v: "300+", l: "Profissionais" },
                  { v: "18", l: "Nacionalidades" },
                  { v: "2007", l: "Fundação" },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="rounded-lg border border-border bg-surface px-4 py-3"
                  >
                    <p className="font-metric text-2xl font-bold text-amber-400">
                      {m.v}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Right: differentials */}
          <AnimateIn delay={150}>
            <div className="space-y-3">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                Diferenciais
              </p>
              {differentials.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-surface p-5 transition hover:border-amber-500/20 hover:bg-surface-elevated"
                >
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
