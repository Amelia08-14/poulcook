import Image from "next/image";

/**
 * Zone discrète "nouvelle application à venir" dans le footer.
 *
 * L'app n'est pas encore disponible : AUCUN lien de téléchargement, aucun QR.
 * L'architecture est prête — quand les stores seront ouverts, remplir `STORES`
 * (et éventuellement ajouter un visuel QR) : le bloc s'affichera automatiquement.
 */
const STORES: Array<{ label: string; href: string }> = [];

export default function FooterAppComingSoon() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-start gap-4">
        <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/5">
          <Image src="/images/poulcook-logo-rond.png" alt="" width={28} height={29} className="h-6 w-auto" />
        </span>
        <div>
          <p className="text-sm font-semibold text-cream">L&apos;application Poulcook arrive bientôt</p>
          <p className="mt-1 text-sm text-cream-dim">
            Notre nouvelle app se prépare — suivez-nous sur les réseaux pour être prévenu·e du lancement.
          </p>
          {STORES.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {STORES.map((store) => (
                <a
                  key={store.label}
                  href={store.href}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold text-cream transition-colors hover:border-white/40"
                >
                  {store.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
