"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

// ── Types ────────────────────────────────────────────────
type AnchorItem = { type: "anchor"; href: string; label: string; id: string };
type RouteItem  = { type: "route";  href: string; label: string };
type NavItem    = AnchorItem | RouteItem;

// ── Home nav (anchor-based) ───────────────────────────────
const homeNav: NavItem[] = [
  { type: "anchor", href: "#sobre",       label: "Sobre",      id: "sobre" },
  { type: "anchor", href: "#servicos",    label: "Serviços",   id: "servicos" },
  { type: "anchor", href: "#tecnologias", label: "Tecnologia", id: "tecnologias" },
  { type: "anchor", href: "#clientes",    label: "Clientes",   id: "clientes" },
  { type: "route",  href: "/inovacao",    label: "Inovação" },
  { type: "route",  href: "/projetos",    label: "Projetos" },
];

// ── Service pages ─────────────────────────────────────────
const servicePages: RouteItem[] = [
  { type: "route", href: "/engenharia",          label: "Engenharia" },
  { type: "route", href: "/consultoria",         label: "Consultoria" },
  { type: "route", href: "/gestao-da-construcao",label: "Gestão de Construção" },
  { type: "route", href: "/inovacao",            label: "Inovação" },
];

const homeRoute: RouteItem = { type: "route", href: "/", label: "Home" };

/** Returns the nav items for a given pathname */
function getNav(pathname: string): NavItem[] {
  if (pathname === "/") return homeNav;

  const isService = servicePages.some((s) => s.href === pathname);
  if (isService) {
    // Home + every service except the current one
    return [
      homeRoute,
      ...servicePages.filter((s) => s.href !== pathname),
    ];
  }

  if (pathname === "/projetos") {
    return [
      homeRoute,
      ...servicePages,
    ];
  }

  return homeNav;
}

const homeSectionIds = homeNav
  .filter((n): n is AnchorItem => n.type === "anchor")
  .map((n) => n.id);

// ── Component ─────────────────────────────────────────────
export function SiteHeader() {
  const pathname  = usePathname();
  const [active,  setActive]  = useState("");
  const [scrolled, setScrolled] = useState(false);
  const prevPathRef = useRef(pathname);
  const scrollLockRef = useRef(false);
  const scrollLockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nav       = getNav(pathname);
  const isHome    = pathname === "/";
  const activeRoute = !isHome ? pathname : "";

  // Scroll opacity
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Active section (home only)
  useEffect(() => {
    if (!isHome) {
      requestAnimationFrame(() => setActive(""));
      return;
    }
    const OFFSET = 90;
    const update = () => {
      if (scrollLockRef.current) return;
      const y = window.scrollY + OFFSET;
      let cur = "";
      for (const id of homeSectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", update, { passive: true });
    requestAnimationFrame(update);
    return () => window.removeEventListener("scroll", update);
  }, [isHome]);

  // track prev path for ref
  useEffect(() => { prevPathRef.current = pathname; }, [pathname]);

  // ── Shared item renderer ────────────────────────────────
  const renderItem = (item: NavItem, mobile = false) => {
    const isAnchor = item.type === "anchor";
    const isActive = isAnchor
      ? active === (item as AnchorItem).id
      : activeRoute === item.href;

    const href =
      isAnchor
        ? (isHome ? item.href : `/${item.href}`)
        : item.href;

    const desktopCls = [
      "relative px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] rounded-lg transition-all duration-200 focus-ring whitespace-nowrap",
      isActive
        ? "text-amber-400 bg-amber-500/10"
        : "text-slate-400 hover:text-slate-100 hover:bg-white/5",
    ].join(" ");

    const mobileCls = [
      "flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium transition focus-ring",
      isActive
        ? "bg-amber-500/10 text-amber-400"
        : "text-muted hover:bg-white/5 hover:text-foreground",
    ].join(" ");

    const cls = mobile ? mobileCls : desktopCls;

    const indicator = isActive && !mobile && (
      <span
        className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-amber-400"
        aria-hidden
      />
    );

    const dot = isActive && mobile && (
      <span className="h-1 w-1 rounded-full bg-amber-400" aria-hidden />
    );

    if (!isAnchor || item.href === "/") {
      return (
        <Link href={href} className={cls} aria-current={isActive ? "page" : undefined}>
          {dot}{item.label}{indicator}
        </Link>
      );
    }

    // Set active immediately on click and lock scroll listener until smooth scroll settles
    const handleClick = () => {
      setActive((item as AnchorItem).id);
      scrollLockRef.current = true;
      if (scrollLockTimer.current) clearTimeout(scrollLockTimer.current);
      scrollLockTimer.current = setTimeout(() => {
        scrollLockRef.current = false;
      }, 900);
    };

    return (
      <a
        href={href}
        className={cls}
        aria-current={isActive ? "page" : undefined}
        onClick={handleClick}
      >
        {dot}{item.label}{indicator}
      </a>
    );
  };

  // ── Page label for service pages ─────────────────────────
  const currentService = servicePages.find((s) => s.href === pathname);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        background: scrolled ? "rgba(2,9,23,0.92)" : "rgba(2,9,23,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5 focus-ring rounded">
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground transition-colors group-hover:text-amber-400 sm:text-xl">
            Sólida
          </span>
          {currentService ? (
            <span className="hidden items-center gap-1.5 sm:flex">
              <span className="text-slate-700" aria-hidden>/</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-400/80">
                {currentService.label}
              </span>
            </span>
          ) : (
            <span
              className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600 sm:inline"
              aria-hidden
            >
              Energías Renovables
            </span>
          )}
        </Link>

        {/* Desktop nav — Framer Motion stagger */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              className="flex items-center gap-0.5"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
                exit:   { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
            >
              {nav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: -8, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
                    exit:    { opacity: 0, y: 6, filter: "blur(3px)", transition: { duration: 0.18, ease: [0.55, 0, 1, 0.45] } },
                  }}
                >
                  {renderItem(item)}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </nav>

        {/* CTA + mobile */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={isHome ? "#contato" : "/#contato"}
            className="hidden items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-950 shadow-amber-sm transition hover:bg-amber-400 hover:shadow-glow focus-ring lg:inline-flex"
          >
            Fale conosco
          </a>

          {/* Mobile hamburger */}
          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg border border-border p-2 text-slate-400 transition hover:border-amber-500/30 hover:text-amber-400 marker:hidden [&::-webkit-details-marker]:hidden focus-ring">
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                <line x1="2" y1="4" x2="14" y2="4" />
                <line x1="2" y1="8" x2="10" y2="8" />
                <line x1="2" y1="12" x2="14" y2="12" />
              </svg>
            </summary>
            <nav
              className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-border/80 bg-slate-950/95 shadow-glow backdrop-blur-xl"
              aria-label="Mobile"
            >
              <div className="p-1.5">
                {nav.map((item) => (
                  <Fragment key={item.href}>{renderItem(item, true)}</Fragment>
                ))}
              </div>
              <div className="border-t border-border/50 p-2">
                <a
                  href={isHome ? "#contato" : "/#contato"}
                  className="block rounded-xl bg-amber-500 px-4 py-2.5 text-center text-sm font-bold text-slate-950 transition hover:bg-amber-400 focus-ring"
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
