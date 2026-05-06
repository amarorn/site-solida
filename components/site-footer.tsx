import Link from "next/link";

const pageLinks = [
  { href: "#sobre",       label: "Sobre a empresa" },
  { href: "#servicos",    label: "Serviços" },
  { href: "#tecnologias", label: "Tecnologia" },
  { href: "#clientes",    label: "Clientes" },
  { href: "#contato",     label: "Contato" },
];

const serviceLinks = [
  { href: "/engenharia",           label: "Engenharia" },
  { href: "/consultoria",          label: "Consultoria" },
  { href: "/gestao-da-construcao", label: "Gestão de Construção" },
  { href: "/inovacao",             label: "Inovação" },
  { href: "/projetos",             label: "Projetos" },
];

const partners = [
  { src: "/partners/tuv-rheinland-testmark.svg", alt: "TÜV Rheinland" },
  { src: "/partners/solare-italia-white.svg",    alt: "Solare Italia" },
  { src: "/partners/spain-dc-white.svg",         alt: "Spain DC" },
  { src: "/partners/aee-white.svg",              alt: "AEE" },
  { src: "/partners/logo-aias-bianco.svg",       alt: "AIAS" },
  { src: "/partners/aepibal-white.svg",          alt: "Aepibal" },
  { src: "/partners/camera-logo.svg",            alt: "Camera di Commercio" },
  { src: "/partners/avaesen-logo-1.svg",         alt: "Avaesen" },
  { src: "/partners/logo-apren-blanco.svg",      alt: "APREN" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/solida-energias-renovables",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@solidaenergiasrenovables",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/solidaenergias",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

function NavCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((item) => (
          <li key={item.href}>
            {item.href.startsWith("/") ? (
              <Link
                href={item.href}
                className="text-sm text-muted transition hover:text-foreground focus-ring"
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className="text-sm text-muted transition hover:text-foreground focus-ring"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-slate-950" role="contentinfo">

      {/* ── Main grid ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-12">

          {/* 1 — Brand */}
          <div className="col-span-2 space-y-5 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col focus-ring">
              <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
                Sólida
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                Energías Renovables
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-muted">
              18 anos de engenharia 100% dedicada a energias renováveis — independência técnica e inovação proprietária.
            </p>

            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-slate-400 transition hover:border-amber-500/30 hover:bg-amber-500/8 hover:text-amber-400 focus-ring"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-amber-500/15 bg-amber-500/5 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-400/80">
                  Grupo Bureau Veritas
                </p>
                <p className="text-[10px] text-slate-600">140 países · desde out. 2025</p>
              </div>
            </div>
          </div>

          {/* 2 — Empresa */}
          <NavCol title="Empresa" links={pageLinks} />

          {/* 3 — Serviços */}
          <NavCol title="Serviços" links={serviceLinks} />

          {/* 4 — Contacto */}
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Contacto
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:comercial@solida.com.es" className="text-amber-400/90 transition hover:text-amber-400 focus-ring">
                    comercial@solida.com.es
                  </a>
                </li>
                <li>
                  <a href="tel:+34914855316" className="text-slate-400 transition hover:text-slate-300 focus-ring">
                    (+34) 91 485 53 16
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Brasil
              </p>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a href="mailto:contato@solida.com.br" className="text-amber-400/90 transition hover:text-amber-400 focus-ring">
                    contato@solida.com.br
                  </a>
                </li>
                <li className="text-xs text-slate-600">Referência São Paulo</li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Sede
              </p>
              <p className="text-xs leading-relaxed text-slate-600">
                Madrid, Espanha<br />
                Santiago · Roma · México · São Paulo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Partners strip ────────────────────────────────────── */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="mb-5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
            Membros &amp; associações
          </p>
          <div className="grid grid-cols-3 items-center gap-x-8 gap-y-5 sm:grid-cols-5 lg:grid-cols-9">
            {partners.map((p) => (
              <div key={p.src} className="flex items-center justify-center">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-7 w-auto max-w-[96px] object-contain opacity-35 transition hover:opacity-65"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────── */}
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-700 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Sólida Energías Renovables · Todos os direitos reservados.</p>
          <p className="text-slate-700">Madrid · Santiago · Roma · México · São Paulo · Lisboa</p>
        </div>
      </div>
    </footer>
  );
}
