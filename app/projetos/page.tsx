import type { Metadata } from "next";

import { ProjectsGallery } from "@/components/projects/projects-gallery";
import { SectionCta } from "@/components/section-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Casos de uso e referências ilustrativas de portfólio em engenharia para energia renovável e infraestrutura elétrica no Brasil.",
};

export default function ProjetosPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo-principal">
        <section
          className="border-b border-border bg-slate-950"
          aria-labelledby="projetos-heading"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="mb-12 max-w-3xl space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/80">
                Casos de uso
              </p>
              <h1
                id="projetos-heading"
                className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Projetos e referências
              </h1>
              <p className="text-lg text-muted">
                Uma visão objetiva do tipo de entrega que fazemos — por tecnologia
                e por fase do projeto.
              </p>
            </div>

            <ProjectsGallery />
          </div>
        </section>

        <SectionCta />
      </main>
      <SiteFooter />
    </>
  );
}

