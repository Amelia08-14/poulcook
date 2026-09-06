import type { Metadata } from "next";
import PageHeader from "@/components/layouts/PageHeader";
import Reveal from "@/components/ui/Reveal";
import AnimeText from "@/components/ui/AnimeText";
import RestaurantSelector from "@/components/features/RestaurantSelector";
import ContactForm from "@/components/features/ContactForm";
import { CONTACT_INTRO, SITE, RESTAURANT_COUNT, COUNTRIES } from "@/data/content";

export const metadata: Metadata = {
  title: "Nos restaurants",
  description:
    "Retrouvez les restaurants Poulcook en France (Paris, Saint-Denis, Villiers-le-Bel, Creil), en Algérie (Alger) et au Maroc (Casablanca).",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title={CONTACT_INTRO.title} description={CONTACT_INTRO.text} line="teal" />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.16em] text-ink-dim">
          {RESTAURANT_COUNT} restaurants · {COUNTRIES.length} pays
        </p>
        <RestaurantSelector />
      </section>

      <section className="border-t border-paper-line bg-paper-raised py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16 lg:px-8">
          <div>
            <AnimeText
              as="h2"
              text="Une question ? Écrivez-nous"
              className="text-balance font-display text-3xl tracking-tight text-ink sm:text-4xl"
            />
            <Reveal as="p" delay={100} className="mt-4 text-base leading-relaxed text-ink-dim">
              Votre opinion compte énormément pour nous. Suggestions, compliments ou
              préoccupations — nous sommes là pour vous écouter.
            </Reveal>

            <div className="mt-8 space-y-4 text-sm">
              <div>
                <p className="font-semibold uppercase tracking-wide text-ink-dim">Email</p>
                <a href={`mailto:${SITE.email}`} className="mt-1 block text-lg font-medium text-ink hover:text-coral">
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-wide text-ink-dim">Téléphone</p>
                <ul className="mt-1 space-y-0.5">
                  {SITE.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-lg font-medium tabular-nums text-ink hover:text-coral"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-wide text-ink-dim">Horaires</p>
                <p className="mt-1 text-lg font-medium text-ink">{SITE.hours}</p>
              </div>
            </div>
          </div>

          <Reveal direction="right" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
