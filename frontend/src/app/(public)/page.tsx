import HeroScroll from "@/components/features/HeroScroll";
import BrandIntro from "@/components/features/BrandIntro";
import CategoryShowcase from "@/components/features/CategoryShowcase";
import SignatureProducts from "@/components/features/SignatureProducts";
import BrandStory from "@/components/features/BrandStory";
import InternationalExpansion from "@/components/features/InternationalExpansion";
import RestaurantsPreview from "@/components/features/RestaurantsPreview";
import Reviews from "@/components/features/Reviews";
import SocialProof from "@/components/features/SocialProof";
import HomeMenuCta from "@/components/features/HomeMenuCta";

export default function Home() {
  return (
    <>
      <HeroScroll />
      <BrandIntro />
      <CategoryShowcase />
      <SignatureProducts />
      <BrandStory />
      <InternationalExpansion />
      <RestaurantsPreview />
      <Reviews />
      <SocialProof />
      <HomeMenuCta />
    </>
  );
}
