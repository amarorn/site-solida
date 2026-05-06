import Link from "next/link";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#clientes", label: "Clientes" },
  { href: "#inovacao", label: "Inovação" },
  { href: "#contato", label: "Contato" },
];

const offices = [
  { city: "Madrid", detail: "Sede global · C/ Musgo 2, Ed. Europa II" },
  { city: "Santiago", detail: "Nueva Tajamar 183, Of. 1111, Las Condes" },
  { city: "Roma", detail: "Via Cavour 71" },
  { city: "Cidade do México", detail: "Blvd. Manuel Ávila Camacho 36, Piso 11" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/solida-energias-renovables" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-slate-950" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr,1fr,auto]">

          {/* Brand + Bureau Veritas */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex flex-col focus-visible:rounded-sm focus-ring"
            >
              <span className="font-display text-lg font-extrabold text-foreground">
                Sólida
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                Energías Renovables
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-muted">
              18 anos de engenharia 100% dedicada a energias renováveis. Independência técnica, inovação proprietária e escala global.
            </p>

            {/* Bureau Veritas notice */}
            <div className="rounded-lg border border-amber-500/15 bg-amber-500/5 px-4 py-3">
              <p className="text-xs font-semibold text-amber-400/90">
                Grupo Bureau Veritas
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Integração firmada em outubro de 2025 · 140 países
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded border border-border px-3 py-1.5 text-xs font-medium text-muted transition hover:border-amber-500/25 hover:text-foreground focus-visible:rounded focus-ring"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Escritórios
            </p>
            <ul className="space-y-3">
              {offices.map((o) => (
                <li key={o.city}>
                  <p className="text-sm font-semibold text-slate-300">
                    {o.city}
                  </p>
                  <p className="text-xs text-slate-600">{o.detail}</p>
                </li>
              ))}
              <li>
                <p className="text-xs text-slate-700">
                  Presença adicional em Brasil e Portugal
                </p>
              </li>
            </ul>
          </div>

          {/* Nav + Contact */}
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Navegação
              </p>
              <ul className="space-y-2">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted transition hover:text-foreground focus-visible:rounded-sm focus-ring"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Contato geral
              </p>
              <a
                href="mailto:comercial@solida.com.es"
                className="block text-sm text-amber-400/90 hover:text-amber-400 focus-visible:rounded-sm focus-ring"
              >
                comercial@solida.com.es
              </a>
              <a
                href="tel:+34914855316"
                className="mt-1 block text-sm text-slate-400 hover:text-foreground focus-visible:rounded-sm focus-ring"
              >
                (+34) 91 485 53 16
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-600 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Sólida Energías Renovables. Todos os direitos reservados.
          </p>
          <p>
            Membro do Grupo Bureau Veritas · Madrid, Espanha
          </p>
        </div>
      </div>
    </footer>
  );
}
