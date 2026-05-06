import { AnimateIn } from "@/components/animate-in";

const offices = [
  {
    city: "Madrid",
    flag: "🇪🇸",
    country: "Espanha",
    address: "C/ Musgo 2, Ed. Europa II",
    role: "Sede global",
    roleCls: "text-amber-400 border-amber-500/25 bg-amber-500/10",
  },
  {
    city: "Santiago",
    flag: "🇨🇱",
    country: "Chile",
    address: "Nueva Tajamar 183, Of. 1111, Las Condes",
    role: "América do Sul",
    roleCls: "text-sky-400 border-sky-500/20 bg-sky-500/8",
  },
  {
    city: "Roma",
    flag: "🇮🇹",
    country: "Itália",
    address: "Via Cavour 71",
    role: "Europa",
    roleCls: "text-emerald-400 border-emerald-500/20 bg-emerald-500/8",
  },
  {
    city: "Cidade do México",
    flag: "🇲🇽",
    country: "México",
    address: "Blvd. Manuel Ávila Camacho 36, Piso 11",
    role: "América Central",
    roleCls: "text-violet-400 border-violet-500/20 bg-violet-500/8",
  },
];

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
                href="mailto:comercial@solida.com.es"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3.5 text-center text-sm font-semibold text-slate-950 shadow-amber-sm transition hover:bg-amber-400 focus-visible:rounded-md focus-ring"
              >
                comercial@solida.com.es
              </a>
              <a
                href="tel:+34914855316"
                className="inline-flex items-center justify-center rounded-md border border-white/12 bg-slate-950/40 px-5 py-3.5 text-center text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-500/30 hover:bg-slate-950/60 focus-visible:rounded-md focus-ring"
              >
                (+34) 91 485 53 16
              </a>
              <p className="text-center text-xs text-slate-600">
                Madrid, Espanha · Horário CET
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Offices */}
        <AnimateIn delay={150}>
          <div className="mt-10">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Escritórios globais
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {offices.map((o) => (
                <div
                  key={o.city}
                  className="rounded-xl border border-border bg-surface/50 p-5"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-2xl" role="img" aria-label={o.country}>
                      {o.flag}
                    </span>
                    <span
                      className={`rounded border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${o.roleCls}`}
                    >
                      {o.role}
                    </span>
                  </div>
                  <p className="font-display text-base font-semibold text-foreground">
                    {o.city}
                  </p>
                  <p className="text-xs text-slate-500">{o.country}</p>
                  <p className="mt-2 text-xs text-slate-600">{o.address}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-600">
              Presença adicional em Brasil e Portugal.
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
