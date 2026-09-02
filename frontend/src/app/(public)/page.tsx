import Hero from "@/components/features/Hero";
import HeroSlogan from "@/components/features/HeroSlogan";
import Marquee from "@/components/ui/Marquee";
import BonsPlans from "@/components/features/BonsPlans";
import Accompagnements from "@/components/features/Accompagnements";
import SocialProof from "@/components/features/SocialProof";
import AppDownload from "@/components/features/AppDownload";
import Reviews from "@/components/features/Reviews";
import FranchiseCTA from "@/components/features/FranchiseCTA";
import { SIDES } from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSlogan />
      <Marquee items={SIDES.map((side) => side.name)} />
      <BonsPlans />
      <Accompagnements />
      <SocialProof />
      <AppDownload />
      <Reviews />
      <FranchiseCTA />
    </>
  );
}
