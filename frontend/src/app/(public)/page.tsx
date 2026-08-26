import Hero from "@/components/features/Hero";
import SocialProof from "@/components/features/SocialProof";
import AppDownload from "@/components/features/AppDownload";
import AccompagnementsBoard from "@/components/features/AccompagnementsBoard";
import FranchiseCTA from "@/components/features/FranchiseCTA";
import ReviewsBoard from "@/components/features/ReviewsBoard";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <AppDownload />
      <AccompagnementsBoard />
      <FranchiseCTA />
      <ReviewsBoard />
    </>
  );
}
