import { AnimateIn } from "@/components/animate-in";

const categories = [
  {
    label: "Utilities & Energéticas",
    clients: [
      "Iberdrola",
      "Enel Green Power",
      "Acciona",
      "EDP",
      "Naturgy",
      "Engie",
      "TotalEnergies",
      "ENI Plenitude",
      "Shell",
      "AES",
      "Statkraft",
      "Scatec",
      "Galp",
      "FRV",
      "Lightsource BP",
      "Masdar",
    ],
    color: "text-amber-400",
    borderCls: "border-amber-500/20",
  },
  {
    label: "Financiadores & Fundos",
    clients: [
      "Santander",
      "RBC",
      "Copenhagen Infrastructure Partners",
      "NextEnergy Capital",
      "Matrix",
    ],
    color: "text-sky-400",
    borderCls: "border-sky-500/20",
  },
  {
    label: "EPCs & Construtoras",
    clients: ["Eiffage", "Equans", "Metka", "Sterling & Wilson", "Cox"],
    color: "text-emerald-400",
    borderCls: "border-emerald-500/20",
  },
];

const allClients = [
  "Iberdrola",
  "Enel Green Power",
  "Acciona",
  "EDP",
  "Naturgy",
  "Engie",
  "TotalEnergies",
  "ENI Plenitude",
  "Shell",
  "AES",
  "Statkraft",
  "Scatec",
  "Galp",
  "FRV",
  "Lightsource BP",
  "Masdar",
  "Santander",
  "RBC",
  "CIP",
  "NextEnergy",
  "Eiffage",
  "Equans",
  "Metka",
  "Sterling & Wilson",
  "Sungrow",
  "Risen",
  "Cox",
  "Colliers",
];

export function SectionClients() {
  return (
    <section
      id="clientes"
      className="scroll-mt-24 border-b border-border"
      aria-labelledby="clientes-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        <AnimateIn>
          <div className="mb-12 space-y-4">
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
              Trabalhamos com utilities, fundos de infraestrutura e EPCs líderes globais — nas operações financeiras e técnicas mais relevantes da indústria.
            </p>
          </div>
        </AnimateIn>

        {/* Client marquee strip */}
        <AnimateIn>
          <div className="relative overflow-hidden rounded-xl border border-border bg-surface/50 py-5 mb-10">
            <div className="flex animate-marquee gap-0 whitespace-nowrap" aria-hidden>
              {[...allClients, ...allClients].map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-4 px-6 text-sm font-semibold text-slate-400"
                >
                  {c}
                  <span className="h-1 w-1 rounded-full bg-slate-700" />
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Category breakdown */}
        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <AnimateIn key={cat.label} delay={i * 80}>
              <div
                className={`h-full rounded-xl border bg-surface/60 p-6 ${cat.borderCls}`}
              >
                <p
                  className={`mb-4 text-[10px] font-bold uppercase tracking-[0.16em] ${cat.color}`}
                >
                  {cat.label}
                </p>
                <ul className="space-y-2">
                  {cat.clients.map((c) => (
                    <li
                      key={c}
                      className="text-sm font-medium text-slate-300"
                    >
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
          <div className="mt-8 rounded-xl border border-border bg-surface/40 p-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/70">
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
                  className="rounded-full border border-border bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-400"
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
