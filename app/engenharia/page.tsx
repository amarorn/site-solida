import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicePageView } from "@/components/services/service-page";
import { getServicePage } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Engenharia",
  description:
    "Engenharia independente para projetos de energia renovável e infraestrutura elétrica no Brasil — do desenvolvimento ao comissionamento.",
};

export default function EngenhariaPage() {
  return (
    <>
      <SiteHeader />
      <ServicePageView page={getServicePage("engenharia")} />
      <SiteFooter />
    </>
  );
}

