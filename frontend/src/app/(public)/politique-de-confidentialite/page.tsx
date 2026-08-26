import type { Metadata } from "next";
import PageHeader from "@/components/layouts/PageHeader";
import { SITE } from "@/data/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Poulcook",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Politique de confidentialité" line="gold" />
      <section className="mx-auto max-w-2xl px-4 py-16 text-cream-dim sm:px-6">
        <p>
          Contenu à finaliser avec le client (données collectées via les formulaires
          de contact et de candidature franchise, cookies, durée de conservation,
          droits RGPD). Contact : {SITE.email}
        </p>
      </section>
    </>
  );
}
