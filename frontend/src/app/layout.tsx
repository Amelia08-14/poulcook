import type { Metadata } from "next";
import { Archivo, Carter_One } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const carterOne = Carter_One({
  variable: "--font-carter-one",
  subsets: ["latin"],
  weight: "400",
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
    <html lang="fr" className={`${archivo.variable} ${carterOne.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        {/*
          THESIS: Poulcook mérite d'être vendu comme un produit d'exception, pas mis
          en scène par un gadget — refuse le monde "quai de gare" jugé générique.
          OWN-WORLD: fond papier clair et encre sombre extraits du site réel, corail
          en unique couleur d'action, teal en second rôle, or en accent rare ;
          Carter One (display, jeune et rond) pour les grands titres, Archivo pour
          le corps et les données ; photo plein cadre du produit ; blobs organiques
          et bandes nuit rythment le défilement.
          STORY: le visiteur affamé voit le poulet en premier, comprend l'offre en
          une phrase, commande ou explore la franchise sans détour.
          FIRST VIEWPORT: photo plein cadre du poulet braisé, dégradé bas pour la
          lisibilité, accroche éditoriale en bas à gauche, deux actions claires.
          FORM: grammaire produit-vedette façon Apple/Nike, direction fixée par le
          client — remplace le monde "quai de gare" (rounded-sm, split-flap, mono).
          FINISH: unreviewed and undocumented is unfinished; this build ends with
          the finish review, the verdict, DESIGN.md, and every shipping raster
          carrying its provenance.
        */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
