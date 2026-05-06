import Image from "next/image";

import { projectCardImages } from "@/lib/site-images";

type CardVisual =
  (typeof projectCardImages)[keyof typeof projectCardImages];

const projetos: Array<{
  tipo: string;
  nome: string;
  potencia: string;
  regiao: string;
  visual: CardVisual;
}> = [
  {
    tipo: "Fotovoltaica",
    nome: "Complexo solar de grande escala",
    potencia: "850 MW",
    regiao: "Brasil",
    visual: projectCardImages.solarLarge,
  },
  {
    tipo: "Fotovoltaica",
    nome: "Parque FV em terras semiáridas",
    potencia: "320 MW",
    regiao: "Ibérico",
    visual: projectCardImages.solarArid,
  },
  {
    tipo: "Eólica",
    nome: "Parque eólico em altitude",
    potencia: "205 MW",
    regiao: "Andes",
    visual: projectCardImages.wind,
  },
  {
    tipo: "Rede",
    nome: "Subestação e OT para evacuação",
    potencia: "400 kV",
    regiao: "LATAM",
    visual: projectCardImages.grid,
  },
];

export function SectionProjects() {
  return (
    <section
      id="destaques"
      className="scroll-mt-24 border-b border-border"
      aria-labelledby="destaques-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="destaques-heading"
              className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Projetos em destaque
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Referências ilustrativas de portfólio em geração distribuída e
              centralizada, com integração à rede.
            </p>
          </div>
          <a
            href="#contato"
            className="text-sm font-semibold text-amber-400 underline-offset-4 hover:underline focus-visible:rounded-sm focus-ring"
          >
            Discutir um projeto semelhante
          </a>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projetos.map((p) => (
            <li key={p.nome}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-amber-500/30">
                <div className="relative aspect-[5/3] overflow-hidden bg-slate-900">
                  <Image
                    src={p.visual.src}
                    alt={p.visual.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent"
                    aria-hidden
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-slate-950/75 px-2 py-1 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                    {p.tipo}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-amber-100">
                    {p.nome}
                  </h3>
                  <dl className="mt-4 space-y-1 text-sm text-muted">
                    <div className="flex justify-between gap-2">
                      <dt className="sr-only">Potência</dt>
                      <dd className="font-medium tabular-nums text-slate-300">
                        {p.potencia}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="sr-only">Região</dt>
                      <dd>{p.regiao}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
