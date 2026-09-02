import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import EmberGlow from "@/components/ui/EmberGlow";
import YouTubeFacade from "@/components/ui/YouTubeFacade";
import { NASDAS_VIDEO_ID } from "@/data/content";

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-night py-24 text-cream sm:py-28">
      <EmberGlow />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal as="h2" className="text-balance font-display text-3xl tracking-tight sm:text-4xl">
          Poulcook validé par Nasdas et sa team 🔥
        </Reveal>

        <Reveal direction="zoom" delay={100} className="mx-auto mt-10 aspect-video max-w-2xl overflow-hidden rounded-2xl bg-night-raised">
          <YouTubeFacade videoId={NASDAS_VIDEO_ID} title="Poulcook validé par Nasdas et sa team" />
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-md justify-center gap-4">
          <Reveal direction="left" delay={200} className="w-28 -rotate-3 overflow-hidden rounded-xl shadow-[0_16px_30px_-14px_rgba(0,0,0,0.6)] sm:w-36">
            <Image src="/images/3.jpg" alt="Nasdas et sa team chez Poulcook" width={288} height={180} className="aspect-[8/5] w-full object-cover" />
          </Reveal>
          <Reveal direction="right" delay={260} className="w-28 rotate-2 overflow-hidden rounded-xl shadow-[0_16px_30px_-14px_rgba(0,0,0,0.6)] sm:w-36">
            <Image
              src="/images/IMG-2-1-1-q9bxrlzyyudmupmvhbyom9uioqt79xjthy9ni2gc5k.jpg"
              alt="Nasdas chez Poulcook"
              width={288}
              height={180}
              className="aspect-[8/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
