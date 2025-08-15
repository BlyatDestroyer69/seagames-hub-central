import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/sports-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
          🏆 SEA Games 2024
        </Badge>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Champions
          <br />
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Rise Here
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90">
          Experience the ultimate sports competition platform featuring live results, 
          matchmaking, scheduling, and medal tallies from across Southeast Asia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="champion" size="lg" className="text-lg px-8 py-6">
            <Trophy className="w-5 h-5 mr-2" />
            View Live Results
          </Button>
          <Button variant="gold" size="lg" className="text-lg px-8 py-6">
            <Medal className="w-5 h-5 mr-2" />
            Medal Tally
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">15</div>
            <div className="text-white/80">Sports</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-victory mb-2">11</div>
            <div className="text-white/80">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">400+</div>
            <div className="text-white/80">Athletes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">180</div>
            <div className="text-white/80">Medals</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;