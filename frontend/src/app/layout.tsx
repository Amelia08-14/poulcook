import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Poulcook — Le meilleur poulet braisé de Paname",
  description:
    "Poulcook, poulet braisé Fast Good à Paris depuis 2021. Commandez en ligne, découvrez nos accompagnements et devenez franchisé.",
  openGraph: {
    title: "Poulcook — Le meilleur poulet braisé de Paname",
    description:
      "Poulcook, poulet braisé Fast Good à Paris depuis 2021. Commandez en ligne, découvrez nos accompagnements et devenez franchisé.",
    url: "https://poulcook.com",
    siteName: "Poulcook",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${archivo.variable} ${spaceMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-board text-cream antialiased">
        {/*
          THESIS: Poulcook refuse la grille générique des sites de livraison ; le site
          emprunte le langage du quai de métro parisien pour vendre du poulet, le
          mouvement fait la démonstration plutôt que l'illustration.
          OWN-WORLD: panneaux quasi-noirs, teal #00697F et corail #E94F36 en couleurs
          de ligne, or #DB9423 en signal, chiffres split-flap en Space Mono, gros
          titres Archivo étiré (axe wdth) en capitales.
          STORY: le visiteur arrive sur un "quai" qui annonce le poulet du soir, lit
          le plan de ligne vers menu/franchise/contact, puis repart via Commander ou
          Devenir franchisé.
          FIRST VIEWPORT: panneau sombre plein cadre, ligne de titre en split-flap qui
          se stabilise sur l'accroche, bandeau plan de ligne en dessous, deux tuiles
          de départ en guise de CTA.
          FORM: direction assignée (quai/métro parisien), seed 3e1fd2c3, index 4.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the
          finish review, the verdict, DESIGN.md, and every shipping raster carrying
          its provenance.
        */}
        <div className="board-grain" aria-hidden="true" />
        <Header />
        <main className="relative z-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
