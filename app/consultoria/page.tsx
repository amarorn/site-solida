import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicePageView } from "@/components/services/service-page";
import { getServicePage } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Consultoria",
  description:
    "Consultoria e assessoria técnica independente — due diligence, auditorias e suporte a decisões críticas em projetos de renováveis.",
};

export default function ConsultoriaPage() {
  return (
    <>
      <SiteHeader />
      <ServicePageView page={getServicePage("consultoria")} />
      <SiteFooter />
    </>
  );
}

