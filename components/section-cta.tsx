import { AnimateIn } from "@/components/animate-in";

export function SectionCta() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 bg-gradient-to-b from-slate-950 to-slate-900"
      aria-labelledby="contato-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* Main CTA block */}
        <AnimateIn>
          <div className="grid gap-10 rounded-2xl border border-border bg-surface/60 p-8 shadow-glow-lg backdrop-blur-sm lg:grid-cols-[1fr,auto] lg:items-center lg:p-12">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                Contato
              </p>
              <h2
                id="contato-heading"
                className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Vamos estruturar o seu próximo projeto?
              </h2>
              <p className="max-w-xl text-lg text-muted">
                Conte-nos sobre fase, escopo e prazo. Nossa equipe retorna com o desenho de entrega adequado — RTB, construção ou due diligence.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[260px]">
              <a
                href="mailto:contato@solida.com.br"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3.5 text-center text-sm font-semibold text-slate-950 shadow-amber-sm transition hover:bg-amber-400 focus-visible:rounded-md focus-ring"
              >
                contato@solida.com.br
              </a>
              <p className="text-center text-xs text-slate-600">
                Brasil · Horário BRT (UTC−3)
              </p>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
