import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicePageView } from "@/components/services/service-page";
import { getServicePage } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Inovação",
  description:
    "Inovação aplicada em engenharia: simulação, otimização e ferramentas proprietárias para projetos de energia renovável.",
};

export default function InovacaoPage() {
  return (
    <>
      <SiteHeader />
      <ServicePageView page={getServicePage("inovacao")} />
      <SiteFooter />
    </>
  );
}

