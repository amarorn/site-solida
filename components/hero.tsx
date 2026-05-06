import Image from "next/image";
import { heroImage } from "@/lib/site-images";

const quickMetrics = [
  { value: "2.500+", label: "Projetos concluídos" },
  { value: "50+", label: "Países de atuação" },
  { value: "300+", label: "Profissionais" },
  { value: "18 anos", label: "Exclusividade em renováveis" },
];

const differentiators = [
  {
    title: "100% Energias Renováveis",
    desc: "Desde 2007 — zero conflito de interesse",
  },
  {
    title: "Independência técnica absoluta",
    desc: "Não vendemos equipamentos. Só engenharia.",
  },
  {
    title: "2.500+ projetos em 50 países",
    desc: "Solar, eólica, BESS, CSP, biomassa",
  },
  {
    title: "P&D com ferramentas exclusivas",
    desc: "Soluções proprietárias que o mercado não tem",
  },
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      style={{ minHeight: "calc(100vh - 64px)" }}
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950/97 via-slate-950/92 to-slate-900/82"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-grid-engineering bg-grid opacity-50"
          aria-hidden
        />
        {/* Ambient glows */}
        <div
          className="pointer-events-none absolute -left-64 top-0 h-[700px] w-[700px] rounded-full bg-amber-500/6 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full bg-sky-600/5 blur-3xl"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">

        {/* Bureau Veritas integration badge */}
        <div className="animate-hero mb-14" style={{ animationDelay: "0ms" }}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/20 bg-amber-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300/90">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" style={{ boxShadow: "0 0 6px rgba(251,191,36,0.8)" }} />
            Grupo Bureau Veritas · Integração Global em 140 países · Out. 2025
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr,400px] lg:items-end">

          {/* Left column */}
          <div className="space-y-10">
            {/* Primary metric anchor */}
            <div className="animate-hero space-y-2" style={{ animationDelay: "120ms" }}>
              <div className="flex items-baseline gap-2">
                <span className="font-metric text-[clamp(80px,14vw,140px)] font-extrabold leading-none tabular-nums text-amber-400">
                  220
                </span>
                <span className="font-metric text-[clamp(36px,6vw,64px)] font-bold text-amber-400/60">
                  GW
                </span>
              </div>
              <p className="text-base font-medium tracking-wide text-slate-300 sm:text-lg">
                de experiência acumulada em projetos de energia renovável
              </p>
            </div>

            {/* Headline */}
            <div className="animate-hero space-y-4" style={{ animationDelay: "240ms" }}>
              <h1
                id="hero-heading"
                className="font-display text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                A engenharia independente que o seu projeto merece
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-300/85">
                18 anos dedicados exclusivamente a energias renováveis. Engenharia, consultoria e inovação em 50+ países — sem conflito de interesse.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-hero flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "340ms" }}
            >
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-amber-sm transition hover:bg-amber-400 focus-visible:rounded-md focus-ring"
              >
                Conheça os serviços
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-md border border-white/12 bg-slate-950/40 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition hover:border-amber-500/35 hover:bg-slate-950/60 focus-visible:rounded-md focus-ring"
              >
                Solicitar assessoria técnica
              </a>
            </div>
          </div>

          {/* Right column — differentiators card */}
          <div
            className="animate-hero lg:mb-2"
            style={{ animationDelay: "180ms" }}
          >
            <div className="rounded-2xl border border-white/8 bg-slate-950/65 p-7 shadow-glow backdrop-blur-md">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Por que a Sólida
              </p>
              <ul className="space-y-4">
                {differentiators.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span
                      className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-amber-400/30 bg-amber-400/12"
                      aria-hidden
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-snug text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/8 pt-5 space-y-0.5">
                <p className="text-xs font-medium text-slate-400">
                  Fundada em Madrid · 2007
                </p>
                <p className="text-xs text-slate-600">
                  Fernando Rueda (CEO) · Enrique Romero (COO)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick metrics strip */}
        <div
          className="animate-hero mt-16 grid grid-cols-2 gap-6 border-t border-white/7 pt-10 sm:grid-cols-4"
          style={{ animationDelay: "420ms" }}
        >
          {quickMetrics.map((m) => (
            <div key={m.label}>
              <p className="font-metric text-3xl font-bold tabular-nums text-amber-400 sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
