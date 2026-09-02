import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-night text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[auto_1fr_1fr_1fr] lg:px-8">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/images/poulcook-logo-rond.png"
            alt="Poulcook — depuis 2021"
            width={96}
            height={100}
            className="h-20 w-auto"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-cream-dim">Nos services</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={SITE.orderUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-coral-strong hover:text-coral">
                Commander en ligne
              </a>
            </li>
            <li>
              <Link href="/franchise" className="font-medium text-cream hover:text-cream-dim">
                Devenir franchisé
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-cream-dim">Contactez-nous</h2>
          <ul className="mt-4 space-y-2 text-sm tabular-nums">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-coral-strong">
                {SITE.email}
              </a>
            </li>
            {SITE.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-coral-strong">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-cream-dim">
            {SITE.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-cream-dim">Téléchargez l&apos;app</h2>
          <p className="mt-4 text-sm text-cream-dim">Soyez les premiers à profiter d&apos;avantages et de remises exclusives.</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={SITE.appStoreUrl} className="font-medium hover:text-cream-dim">
              App Store →
            </a>
            <a href={SITE.playStoreUrl} className="font-medium hover:text-cream-dim">
              Google Play →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-cream-dim sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© Poulcook {new Date().getFullYear()}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {SITE.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
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
