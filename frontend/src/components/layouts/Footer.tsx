import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative z-0 border-t border-board-line bg-board-raised">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[auto_1fr_1fr_1fr]">
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
          <h2 className="font-display font-expanded text-xs uppercase tracking-[0.2em] text-cream-dim">Nos services</h2>
          <ul className="mt-4 space-y-3 font-display font-expanded text-sm uppercase tracking-[0.08em]">
            <li>
              <a href={SITE.orderUrl} target="_blank" rel="noopener noreferrer" className="text-coral-strong hover:text-coral">
                Commander en ligne
              </a>
            </li>
            <li>
              <Link href="/franchise" className="text-teal-strong hover:text-cream">
                Devenir franchisé
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display font-expanded text-xs uppercase tracking-[0.2em] text-cream-dim">Contactez-nous</h2>
          <ul className="mt-4 space-y-2 font-mono text-sm text-cream">
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
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.1em] text-cream-dim">
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
          <h2 className="font-display font-expanded text-xs uppercase tracking-[0.2em] text-cream-dim">Téléchargez l&apos;app</h2>
          <p className="mt-4 text-sm text-cream-dim">
            Soyez les premiers à profiter d&apos;avantages et de remises exclusives.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs uppercase tracking-[0.1em]">
            <a href={SITE.appStoreUrl} className="text-teal-strong hover:text-cream">
              App Store →
            </a>
            <a href={SITE.playStoreUrl} className="text-teal-strong hover:text-cream">
              Google Play →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-board-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs uppercase tracking-[0.1em] text-cream-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
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
