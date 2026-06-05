import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SponsoredSection from "@/components/SponsoredSection";
import StatsSection from "@/components/StatsSection";
import FeaturedSection from "@/components/FeaturedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SponsoredSection />
      <StatsSection />
      <FeaturedSection />
    </div>
  );
};

export default Index;
