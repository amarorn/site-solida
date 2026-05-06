import { HeroCarousel } from "@/components/hero-carousel";
import { CountUp } from "@/components/count-up";
import { LiveMetric } from "@/components/live-metric";
import { ScrambleText } from "@/components/scramble-text";

const quickMetrics = [
  { to: 2500, suffix: "+", decimals: 0, label: "Projetos concluídos" },
  { to: 50,   suffix: "+", decimals: 0, label: "Países de atuação" },
  { to: 300,  suffix: "+", decimals: 0, label: "Profissionais" },
  { to: 18,   suffix: " anos", decimals: 0, label: "Exclusividade em renováveis" },
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
      style={{ minHeight: "calc(100vh - 60px)" }}
      aria-labelledby="hero-heading"
    >
      {/* ── Background layers ───────────────────────────────── */}
      <div className="absolute inset-0">
        <HeroCarousel />
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950/98 via-slate-950/93 to-slate-900/78"
          aria-hidden
        />
        <div
          className="animate-grid pointer-events-none absolute inset-0 bg-grid-engineering bg-grid"
          aria-hidden
        />

        {/* Floating orbs */}
        <div
          className="orb-1 pointer-events-none absolute -left-48 -top-24 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div
          className="orb-2 pointer-events-none absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div
          className="orb-3 pointer-events-none absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div
          className="orb-4 pointer-events-none absolute right-1/4 top-1/2 h-80 w-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)" }}
          aria-hidden
        />

        {/* Decorative scan line */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-1/3 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(245,158,11,0.12) 30%, rgba(245,158,11,0.18) 50%, rgba(245,158,11,0.12) 70%, transparent)",
          }}
          aria-hidden
        />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8 lg:py-32">

        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1fr,400px] lg:items-end">

          {/* Left column */}
          <div className="space-y-8 lg:space-y-10">

            {/* Primary metric — animated count-up */}
            <div className="animate-hero" style={{ animationDelay: "120ms" }}>
              <LiveMetric
                prefix=">"
                typingText="calculando experiência acumulada..."
                to={220}
                unit="GW"
                durationMs={1700}
                typingMsPerChar={18}
              />
              <p className="mt-1 text-base font-medium tracking-wide text-slate-300 sm:text-lg">
                de experiência acumulada em projetos de energia renovável
              </p>
            </div>

            {/* Headline */}
            <div className="animate-hero space-y-4" style={{ animationDelay: "240ms" }}>
              <h1
                id="hero-heading"
                className="font-display text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                <ScrambleText text="A engenharia independente que o seu projeto merece" />
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-300/80">
                18 anos dedicados exclusivamente a renováveis. Engenharia, consultoria e inovação em 50+ países — sem conflito de interesse.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-hero flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "340ms" }}
            >
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-amber-sm transition hover:bg-amber-400 hover:shadow-glow focus-ring"
              >
                Conheça os serviços
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition hover:border-amber-500/30 hover:bg-white/8 focus-ring"
              >
                Solicitar assessoria técnica
              </a>
            </div>
          </div>

          {/* Right column — hidden on mobile, visible lg+ */}
          <div className="animate-hero hidden lg:block lg:mb-2" style={{ animationDelay: "180ms" }}>
            <div
              className="relative rounded-2xl p-px"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(255,255,255,0.06) 50%, rgba(56,189,248,0.12))",
              }}
            >
              <div className="rounded-2xl bg-slate-950/80 p-7 backdrop-blur-md">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Por que a Sólida
                </p>
                <ul className="space-y-4">
                  {differentiators.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span
                        className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-amber-400/25 bg-amber-400/10"
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
        </div>

        {/* Quick metrics strip — animated count-ups */}
        <div
          className="animate-hero mt-10 grid grid-cols-2 gap-4 border-t border-white/7 pt-8 sm:mt-16 sm:grid-cols-4 sm:gap-6 sm:pt-10"
          style={{ animationDelay: "420ms" }}
        >
          {quickMetrics.map((m, i) => (
            <div key={m.label} className="group cursor-default">
              <p className="font-metric text-3xl font-bold tabular-nums text-amber-400 transition-colors group-hover:text-amber-300 sm:text-4xl">
                <CountUp
                  to={m.to}
                  suffix={m.suffix}
                  decimals={m.decimals}
                  duration={1600}
                  delay={500 + i * 120}
                />
              </p>
              <p className="mt-1 text-xs text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
