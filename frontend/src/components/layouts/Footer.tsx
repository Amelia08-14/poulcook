import Image from "next/image";
import Link from "next/link";
import { COUNTRIES, SITE } from "@/data/content";
import { MENU } from "@/data/menu";
import FooterAppComingSoon from "@/components/layouts/FooterAppComingSoon";

const SITEMAP = [
  { label: "La Carte", href: "/menu" },
  { label: "Nos restaurants", href: "/contact" },
  { label: "PoulCook", href: "/a-propos" },
  { label: "Franchise", href: "/franchise" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-night text-cream">
      <div aria-hidden className="aurora opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          {/* Marque */}
          <div>
            <Image
              src="/images/poulcook-logo-rond.png"
              alt="Poulcook — depuis 2021"
              width={96}
              height={100}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-dim">
              Poulet braisé Fast Good, mariné et braisé lentement. Depuis 2021, de Paname
              à Alger et Casablanca.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-cream-dim">
              {SITE.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cream">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan du site + carte */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream-dim">Explorer</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-medium text-cream transition-colors hover:text-coral-strong">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-cream-dim">
              {MENU.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/menu#${cat.slug}`} className="transition-colors hover:text-cream">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Restaurants */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream-dim">Nos restaurants</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {COUNTRIES.map((country) => (
                <li key={country.code}>
                  <Link href={`/contact#${country.code}`} className="group flex items-baseline gap-2">
                    <span aria-hidden>{country.flag}</span>
                    <span className="font-medium text-cream transition-colors group-hover:text-coral-strong">
                      {country.name}
                    </span>
                    <span className="text-xs text-cream-dim">
                      {country.restaurants.map((r) => r.city.split(" — ")[0]).join(", ")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-1 text-sm text-cream-dim">
              <a href={`mailto:${SITE.email}`} className="block transition-colors hover:text-cream">
                {SITE.email}
              </a>
              {SITE.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block tabular-nums transition-colors hover:text-cream"
                >
                  {phone}
                </a>
              ))}
              <p className="pt-1">{SITE.hours}</p>
            </div>
          </div>

          {/* App à venir */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream-dim">Bientôt</h2>
            <div className="mt-4">
              <FooterAppComingSoon />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-cream-dim sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© Poulcook {new Date().getFullYear()} — tous droits réservés</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {SITE.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
