import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicePageView } from "@/components/services/service-page";
import { getServicePage } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Gestão da construção",
  description:
    "Gestão de construção (EPCM), supervisão e HSE — foco em qualidade, prazo e Zero Acidentes.",
};

export default function GestaoDaConstrucaoPage() {
  return (
    <>
      <SiteHeader />
      <ServicePageView page={getServicePage("gestao-da-construcao")} />
      <SiteFooter />
    </>
  );
}

