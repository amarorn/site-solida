import Image from "next/image";
import Link from "next/link";

import { AnimateIn } from "@/components/animate-in";
import { SectionCta } from "@/components/section-cta";
import type { ServicePage } from "@/lib/service-pages";

export function ServicePageView({ page }: { page: ServicePage }) {
  return (
    <main id="conteudo-principal">
      <section className="relative overflow-hidden border-b border-border bg-slate-950">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-sky-500/8 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.08),transparent_38%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <AnimateIn>
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                  {page.eyebrow}
                </p>
                <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {page.title}
                </h1>
                <p className="text-lg text-muted">{page.subtitle}</p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                  {page.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-slate-300"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-amber-sm transition hover:bg-amber-400 focus-ring"
                >
                  Fale com um especialista
                </a>
                <div className="text-center text-xs text-slate-500">
                  ou{" "}
                  <Link
                    href="/projetos"
                    className="font-semibold text-amber-300 underline-offset-4 hover:underline focus-ring rounded-sm"
                  >
                    veja projetos e referências
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <div className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr,280px] lg:items-start">
            <div className="min-w-0">
          <section id="como-entregamos" className="scroll-mt-24">
          <AnimateIn>
            <div className="mb-12 max-w-3xl space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                Como entregamos
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Um fluxo claro — sem ruído, com evidências
              </h2>
              <p className="text-lg text-muted">
                Estrutura em fases com entregáveis e critérios objetivos. Você
                sabe exatamente o que recebe e quando.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-6 lg:grid-cols-3">
            {page.phases.map((ph, idx) => (
              <AnimateIn key={ph.id} delay={idx * 90}>
                <article
                  id={`fase-${ph.id}`}
                  className="group scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-surface/60"
                >
                  <div className="relative aspect-[21/9] overflow-hidden bg-slate-900">
                    <Image
                      src={ph.image.src}
                      alt={ph.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {ph.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {ph.description}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-border pt-4">
                      {ph.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-slate-400"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400"
                            aria-hidden
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
          </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-border bg-surface/50 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Acesso rápido
                </p>
                <nav className="mt-4 space-y-1" aria-label="Nesta página">
                  <a
                    href="#como-entregamos"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-elevated hover:text-foreground focus-ring"
                  >
                    Como entregamos
                  </a>
                  <div className="mt-2 space-y-1 border-l border-border pl-2">
                    {page.phases.map((ph) => (
                      <a
                        key={ph.id}
                        href={`#fase-${ph.id}`}
                        className="block rounded-md px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:text-slate-100 focus-ring"
                      >
                        {ph.title}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#entregaveis"
                    className="mt-3 block rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-elevated hover:text-foreground focus-ring"
                  >
                    Entregáveis
                  </a>
                  <a
                    href="#faq"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-elevated hover:text-foreground focus-ring"
                  >
                    FAQ
                  </a>
                  <a
                    href="#contato"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-amber-sm transition hover:bg-amber-400 focus-ring"
                  >
                    Falar agora
                  </a>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <section id="entregaveis" className="scroll-mt-24 border-b border-border bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimateIn>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                  Entregáveis
                </p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  O que você recebe
                </h2>
                <p className="text-lg text-muted">
                  Pacotes de entrega desenhados para reduzir risco e acelerar
                  decisões.
                </p>
              </div>

              <ul className="grid gap-3">
                {page.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-xl border border-border bg-surface/50 px-5 py-4 text-sm text-slate-300"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimateIn>
            <div className="mb-10 max-w-3xl space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                Perguntas frequentes
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Dúvidas comuns
              </h2>
            </div>
          </AnimateIn>

          <div className="grid gap-4 lg:grid-cols-2">
            {page.faq.map((f, idx) => (
              <AnimateIn key={f.q} delay={idx * 70}>
                <details className="group rounded-2xl border border-border bg-surface/60 p-6">
                  <summary className="cursor-pointer list-none font-semibold text-slate-200 marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      <span>{f.q}</span>
                      <span className="mt-1 text-slate-500 transition group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {f.a}
                  </p>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}

