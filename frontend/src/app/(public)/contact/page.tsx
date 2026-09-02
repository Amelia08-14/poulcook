import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layouts/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/features/ContactForm";
import { CONTACT_INTRO, SITE } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact — Poulcook",
  description: "Contactez Poulcook, le meilleur poulet braisé de Paname.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title={CONTACT_INTRO.title} description={CONTACT_INTRO.text} line="gold" />

      <section className="mx-auto grid max-w-6xl gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8 lg:py-24">
        <Reveal direction="left">
          <div className="photo-zoom relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/image00012.jpg"
              alt="Poulet braisé Poulcook, prêt à déguster"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <ul className="mt-8 space-y-2 text-2xl font-bold tabular-nums text-coral-strong">
            {SITE.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-coral">
                  {phone}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-paper-raised px-6 py-6">
            <h3 className="text-sm font-semibold text-ink-dim">Heures d&apos;ouverture</h3>
            <p className="mt-2 text-lg font-bold text-ink">{SITE.hours}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-ink-dim">Vous avez des commentaires ?</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-dim">
              Votre opinion compte énormément pour nous. Que vous ayez des suggestions, des
              compliments ou des préoccupations, nous sommes là pour vous écouter.
            </p>
          </div>
        </Reveal>

        <Reveal direction="right" delay={100}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
