import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LiveResults from "@/components/LiveResults";
import MedalTally from "@/components/MedalTally";
import Schedule from "@/components/Schedule";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="results">
        <LiveResults />
      </div>
      <div id="medals">
        <MedalTally />
      </div>
      <div id="schedule">
        <Schedule />
      </div>
    </main>
  );
};

export default Index;
