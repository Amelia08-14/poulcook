import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Blob from "@/components/ui/Blob";
import LogoPattern from "@/components/ui/LogoPattern";
import { SIDES } from "@/data/content";

export default function Accompagnements() {
  return (
    <section className="relative overflow-hidden border-t border-paper-line bg-paper py-24 sm:py-32">
      <LogoPattern />
      <Blob color="teal" className="left-[-12%] top-[-8%] size-[38vw] max-w-md" />
      <Blob color="gold" className="bottom-[-15%] right-[-8%] size-[32vw] max-w-sm" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">Nos accompagnements</h2>
          <p className="mt-5 text-lg text-ink-dim">
            Sept accompagnements maison, pensés pour sublimer le poulet braisé — à
            composer à volonté avec votre commande.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {SIDES.map((side, index) => (
            <Reveal
              key={side.name}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={(index % 4) * 60}
            >
              <div className="photo-zoom relative aspect-square overflow-hidden rounded-2xl bg-paper-raised">
                <Image
                  src={side.image}
                  alt={side.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{side.name}</h3>
              <p className="mt-1 text-sm text-ink-dim">{side.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
