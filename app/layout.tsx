import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Outfit, Barlow_Condensed } from "next/font/google";
import { CursorGlow } from "@/components/cursor-glow";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-metric",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal"],
});

export const viewport: Viewport = {
  themeColor: "#020917",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Sólida Energías Renovables | Engenharia em Energia Renovável",
    template: "%s | Sólida",
  },
  description:
    "18 anos de engenharia 100% dedicada a energias renováveis. 220 GW de experiência acumulada em solar, eólica, armazenamento e termossolar em 50+ países.",
  openGraph: {
    locale: "pt_BR",
    type: "website",
    title: "Sólida Energías Renovables",
    description:
      "Engenharia independente e consultoria técnica de referência global para projetos de energia renovável.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${plexSans.variable} ${outfit.variable} ${barlowCondensed.variable} font-sans antialiased`}
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
