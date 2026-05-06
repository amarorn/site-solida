"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#sobre",       label: "Sobre",       id: "sobre" },
  { href: "#servicos",    label: "Serviços",    id: "servicos" },
  { href: "#tecnologias", label: "Tecnologias", id: "tecnologias" },
  { href: "#clientes",    label: "Clientes",    id: "clientes" },
  { href: "#inovacao",    label: "Inovação",    id: "inovacao" },
];

const SECTION_IDS = nav.map((n) => n.id);

export function SiteHeader() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const OFFSET = 80; // header height + buffer

    const update = () => {
      const scrollY = window.scrollY + OFFSET;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    update(); // initial check
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-slate-950/90 backdrop-blur-md">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-baseline gap-1.5 focus-ring rounded"
        >
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground transition-colors group-hover:text-amber-400 sm:text-xl">
            Sólida
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500 transition-colors group-hover:text-slate-400 sm:inline">
            Energías Renovables
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "relative text-xs font-semibold uppercase tracking-wider transition-colors focus-ring rounded-sm",
                  "after:absolute after:-bottom-1 after:left-0 after:h-px after:transition-all after:duration-300",
                  isActive
                    ? "text-amber-400 after:w-full after:bg-amber-400"
                    : "text-slate-400 after:w-0 after:bg-amber-400 hover:text-slate-100 hover:after:w-full",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-amber-sm transition hover:bg-amber-400 hover:shadow-glow focus-ring lg:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900/40" aria-hidden />
            Fale conosco
          </a>

          {/* Mobile menu */}
          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-foreground marker:hidden [&::-webkit-details-marker]:hidden focus-ring">
              <span className="flex h-4 w-5 flex-col justify-between">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-4 self-end bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            </summary>
            <nav
              className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-surface shadow-glow"
              aria-label="Mobile"
            >
              <div className="p-1.5">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={[
                      "block rounded-lg px-4 py-2.5 text-sm font-medium transition focus-ring",
                      active === item.id
                        ? "bg-amber-500/10 text-amber-400"
                        : "text-muted hover:bg-surface-elevated hover:text-foreground",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="border-t border-border p-2">
                <a
                  href="#contato"
                  className="block rounded-lg bg-amber-500 px-4 py-2.5 text-center text-sm font-bold text-slate-950 transition hover:bg-amber-400 focus-ring"
                >
                  Fale conosco
                </a>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
