import type { Metadata } from "next";
import PageHeader from "@/components/layouts/PageHeader";
import { SITE } from "@/data/content";

export const metadata: Metadata = {
  title: "Mentions légales — Poulcook",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader title="Mentions légales" line="gold" />
      <section className="mx-auto max-w-2xl px-4 py-16 text-cream-dim sm:px-6">
        <p>
          Contenu à finaliser avec le client (raison sociale, SIRET, siège social,
          directeur de publication, hébergeur). Contact : {SITE.email}
        </p>
      </section>
    </>
  );
}
