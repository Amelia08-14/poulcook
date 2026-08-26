import type { Metadata } from "next";
import PageHeader from "@/components/layouts/PageHeader";
import ContactForm from "@/components/features/ContactForm";
import { CONTACT_INTRO, SITE } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact — Poulcook",
  description: "Contactez Poulcook, le meilleur poulet braisé de Paname.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contactez-nous" line="gold" />

      <section className="mx-auto grid max-w-6xl gap-16 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display font-expanded text-2xl uppercase tracking-tight text-cream">
            {CONTACT_INTRO.title}
          </h2>
          <p className="mt-3 max-w-sm text-cream-dim">{CONTACT_INTRO.text}</p>

          <ul className="mt-8 space-y-2 font-mono text-lg text-coral-strong">
            {SITE.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-coral">
                  {phone}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-sm border border-board-line bg-board-raised px-6 py-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cream-dim">Heures d&apos;ouverture</h3>
            <p className="mt-2 font-display font-expanded text-lg uppercase text-cream">{SITE.hours}</p>
          </div>

          <div className="mt-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cream-dim">Vous avez des commentaires ?</h3>
            <p className="mt-2 text-sm text-cream-dim">
              Votre opinion compte énormément pour nous. Que vous ayez des suggestions, des
              compliments ou des préoccupations, nous sommes là pour vous écouter.
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
