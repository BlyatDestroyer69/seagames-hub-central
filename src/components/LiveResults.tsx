import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

const liveMatches = [
  {
    id: 1,
    sport: "Swimming",
    event: "Men's 100m Freestyle Final",
    time: "LIVE",
    venue: "Aquatic Center",
    status: "In Progress",
    results: [
      { athlete: "Nguyen Thai (VN)", time: "48.23", position: 1 },
      { athlete: "Ahmad Rahman (MY)", time: "48.45", position: 2 },
      { athlete: "John Tan (SG)", time: "48.67", position: 3 },
    ]
  },
  {
    id: 2,
    sport: "Athletics",
    event: "Women's 200m Semi-Final",
    time: "15:30",
    venue: "National Stadium",
    status: "Completed",
    results: [
      { athlete: "Maria Santos (PH)", time: "22.85", position: 1 },
      { athlete: "Siti Nurhaliza (ID)", time: "23.12", position: 2 },
      { athlete: "Lisa Wong (SG)", time: "23.34", position: 3 },
    ]
  },
  {
    id: 3,
    sport: "Badminton",
    event: "Mixed Doubles Final",
    time: "19:00",
    venue: "Indoor Arena",
    status: "Upcoming",
    results: [
      { athlete: "Thailand vs Malaysia", time: "TBD", position: null },
    ]
  }
];

const LiveResults = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            🔴 Live Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time scores and results from ongoing competitions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveMatches.map((match) => (
            <Card key={match.id} className="shadow-card hover:shadow-champion transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg mb-2">{match.event}</CardTitle>
                    <Badge variant="secondary" className="mb-2">{match.sport}</Badge>
                  </div>
                  <Badge 
                    variant={match.status === 'LIVE' ? 'destructive' : 
                            match.status === 'Completed' ? 'default' : 'outline'}
                    className={match.status === 'LIVE' ? 'animate-pulse' : ''}
                  >
                    {match.status === 'LIVE' ? '🔴 LIVE' : match.status}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {match.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {match.venue}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {match.results.map((result, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        result.position === 1 ? 'bg-gold/10 border border-gold/20' :
                        result.position === 2 ? 'bg-silver/10 border border-silver/20' :
                        result.position === 3 ? 'bg-bronze/10 border border-bronze/20' :
                        'bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center">
                        {result.position && (
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                            result.position === 1 ? 'bg-gold text-foreground' :
                            result.position === 2 ? 'bg-silver text-foreground' :
                            result.position === 3 ? 'bg-bronze text-foreground' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {result.position}
                          </span>
                        )}
                        <span className="font-medium">{result.athlete}</span>
                      </div>
                      <span className="font-bold text-lg">{result.time}</span>
                    </div>
                  ))}
                </div>
                
                {match.status !== 'Upcoming' && (
                  <Button variant="victory" className="w-full mt-4">
                    View Full Results
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveResults;