import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Calendar, BarChart3, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Trophy className="w-8 h-8 text-gold" />
            <span className="text-2xl font-bold">SEA<span className="text-champion">Games</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#results" className="flex items-center space-x-2 hover:text-champion transition-colors">
              <BarChart3 className="w-4 h-4" />
              <span>Results</span>
            </a>
            <a href="#medals" className="flex items-center space-x-2 hover:text-gold transition-colors">
              <Medal className="w-4 h-4" />
              <span>Medals</span>
            </a>
            <a href="#schedule" className="flex items-center space-x-2 hover:text-victory transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Schedule</span>
            </a>
            <Badge variant="outline" className="animate-pulse">
              🔴 Live
            </Badge>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button variant="champion">Sign Up</Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#results" className="flex items-center space-x-2 hover:text-champion transition-colors">
                <BarChart3 className="w-4 h-4" />
                <span>Results</span>
              </a>
              <a href="#medals" className="flex items-center space-x-2 hover:text-gold transition-colors">
                <Medal className="w-4 h-4" />
                <span>Medals</span>
              </a>
              <a href="#schedule" className="flex items-center space-x-2 hover:text-victory transition-colors">
                <Calendar className="w-4 h-4" />
                <span>Schedule</span>
              </a>
              <div className="flex items-center space-x-2 pt-4 border-t">
                <Button variant="outline" className="flex-1">Login</Button>
                <Button variant="champion" className="flex-1">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;