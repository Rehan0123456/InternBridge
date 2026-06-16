import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SponsoredSection from "@/components/SponsoredSection";
import VirahacksSection from "@/components/VirahacksSection";
import LatestPlacements from "@/components/LatestPlacements";
import StatsSection from "@/components/StatsSection";
import FeaturedSection from "@/components/FeaturedSection";
import ProgramsSection from "@/components/ProgramsSection";
import CommunitySection from "@/components/CommunitySection";
import EventsSection from "@/components/EventsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SponsoredSection />
      <VirahacksSection />
      <LatestPlacements />
      <StatsSection />
      <FeaturedSection />
      <ProgramsSection />
      <CommunitySection />
      <EventsSection />
    </div>
  );
};

export default Index;
