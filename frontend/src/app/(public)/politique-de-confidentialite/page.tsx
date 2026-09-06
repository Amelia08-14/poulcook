import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layouts/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Politique de confidentialité" line="gold" />
      <section className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-start lg:px-8 lg:py-24">
        <Reveal direction="left" className="mx-auto lg:mx-0">
          <Image src="/images/poulcook-logo-rond.png" alt="Poulcook — depuis 2021" width={160} height={168} className="h-32 w-auto sm:h-40" />
        </Reveal>
        <Reveal direction="right" delay={100} className="text-lg leading-relaxed text-ink-dim">
          <p>
            Contenu à finaliser avec le client (données collectées via les formulaires
            de contact et de candidature franchise, cookies, durée de conservation,
            droits RGPD). Contact : {SITE.email}
          </p>
        </Reveal>
      </section>
    </>
  );
}
