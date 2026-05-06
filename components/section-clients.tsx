import { AnimateIn } from "@/components/animate-in";
import { clientLogos } from "@/lib/client-logos-data";

function sanitizeClientLabel(raw: string) {
  return raw
    .replace(/\.(png|jpg|jpeg|webp|svg)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b(logo|removebg|preview|descargar|cuadrada|prueba|final)\b/gi, "")
    .replace(/\be\d{6,}\b/gi, "")
    .replace(/\b\d{2,}x\d{2,}\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

const categories = [
  {
    label: "Utilities & Energéticas",
    count: "16+",
    clients: [
      "Iberdrola", "Enel Green Power", "Acciona", "EDP", "Naturgy",
      "Engie", "TotalEnergies", "ENI Plenitude", "Shell", "AES",
      "Statkraft", "Scatec", "Galp", "FRV", "Lightsource BP", "Masdar",
    ],
    color: "text-amber-400",
    borderCls: "border-amber-500/20",
    bgCls: "bg-amber-500/5",
    dotCls: "bg-amber-400",
  },
  {
    label: "Financiadores & Fundos",
    count: "5+",
    clients: [
      "Santander", "RBC", "Copenhagen Infrastructure Partners",
      "NextEnergy Capital", "Matrix",
    ],
    color: "text-sky-400",
    borderCls: "border-sky-500/20",
    bgCls: "bg-sky-500/5",
    dotCls: "bg-sky-400",
  },
  {
    label: "EPCs & Construtoras",
    count: "5+",
    clients: ["Eiffage", "Equans", "Metka", "Sterling & Wilson", "Cox"],
    color: "text-emerald-400",
    borderCls: "border-emerald-500/20",
    bgCls: "bg-emerald-500/5",
    dotCls: "bg-emerald-400",
  },
];

function getLogoImgClasses(logo: (typeof clientLogos)[number]) {
  const base = "h-8 w-auto max-w-[120px] object-contain opacity-40 grayscale transition duration-300 group-hover:opacity-75 group-hover:grayscale-0 sm:h-9";
  const invert = logo.invert ? " invert brightness-150" : "";
  return base + invert;
}

function MarqueeRow({
  logos,
  reverse = false,
  duration = "38s",
}: {
  logos: (typeof clientLogos)[number][];
  reverse?: boolean;
  duration?: string;
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={[
          "flex w-max gap-10 pr-10",
          "motion-safe:animate-marquee motion-reduce:animate-none",
          reverse ? "[animation-direction:reverse]" : "",
        ].join(" ")}
        style={{ animationDuration: duration }}
      >
        {[...logos, ...logos].map((logo, idx) => {
          const label = logo.label ?? sanitizeClientLabel(logo.alt);
          return (
            <div
              key={`${logo.src}__${idx}`}
              className="group flex shrink-0 items-center"
              aria-label={label || undefined}
            >
              <img
                src={logo.src}
                alt={label ? `${label} logótipo` : "Logótipo de cliente"}
                title={label || undefined}
                loading="lazy"
                decoding="async"
                className={getLogoImgClasses(logo)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SectionClients() {
  const row1 = clientLogos.filter((_, i) => i % 2 === 0);
  const row2 = clientLogos.filter((_, i) => i % 2 === 1);

  return (
    <section
      id="clientes"
      className="scroll-mt-24 border-b border-border"
      aria-labelledby="clientes-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* Header */}
        <AnimateIn>
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                Clientes & parceiros
              </p>
              <h2
                id="clientes-heading"
                className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Confiança das maiores energéticas do mundo
              </h2>
              <p className="max-w-2xl text-lg text-muted">
                Utilities, fundos de infraestrutura e EPCs de referência — nas operações financeiras e técnicas mais relevantes da indústria.
              </p>
            </div>
            <div className="flex gap-8 lg:flex-col lg:items-end lg:gap-3 lg:text-right">
              <div>
                <p className="font-metric text-3xl font-bold text-amber-400">{clientLogos.length}+</p>
                <p className="text-xs text-slate-500">organizações</p>
              </div>
              <div>
                <p className="font-metric text-3xl font-bold text-amber-400">50+</p>
                <p className="text-xs text-slate-500">países</p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Marquee strip */}
        <AnimateIn>
          <div
            className="mb-14 overflow-hidden rounded-2xl border border-border/60 bg-slate-950/50 px-0 py-8"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
            aria-label="Logótipos de clientes"
          >
            <div className="flex flex-col gap-7 px-6">
              <MarqueeRow logos={row1} duration="42s" />
              <MarqueeRow logos={row2} reverse duration="38s" />
            </div>
          </div>
        </AnimateIn>

        {/* Category cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <AnimateIn key={cat.label} delay={i * 80}>
              <div className={`h-full rounded-xl border p-6 ${cat.borderCls} ${cat.bgCls}`}>
                <div className="mb-5 flex items-start justify-between gap-2">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${cat.color}`}>
                    {cat.label}
                  </p>
                  <span className={`font-metric text-2xl font-bold ${cat.color} opacity-40`}>
                    {cat.count}
                  </span>
                </div>
                <ul className="space-y-2">
                  {cat.clients.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className={`h-1 w-1 shrink-0 rounded-full ${cat.dotCls} opacity-60`} aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Associations */}
        <AnimateIn delay={300}>
          <div className="mt-8 rounded-xl border border-border bg-surface/30 px-6 py-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/70">
              Associações & certificações
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "ISO Certipedia",
                "APREN (Portugal)",
                "AVAESEN (Valencia)",
                "AEE (España)",
                "Italia Solare",
                "AIAS (Agrivoltaico)",
                "AEPIBAL (Baterias)",
                "SpainDC (Data Centers)",
              ].map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-slate-950/60 px-3 py-1 text-xs text-slate-500"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
