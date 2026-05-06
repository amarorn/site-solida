import { Hero } from "@/components/hero";
import { SectionAbout } from "@/components/section-about";
import { SectionClients } from "@/components/section-clients";
import { SectionCta } from "@/components/section-cta";
import { SectionInnovation } from "@/components/section-innovation";
import { SectionServices } from "@/components/section-services";
import { SectionStats } from "@/components/section-stats";
import { SectionTech } from "@/components/section-tech";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo-principal">
        <Hero />
        <SectionStats />
        <SectionAbout />
        <SectionServices />
        <SectionTech />
        <SectionClients />
        <SectionInnovation />
        <SectionCta />
      </main>
      <SiteFooter />
    </>
  );
}
