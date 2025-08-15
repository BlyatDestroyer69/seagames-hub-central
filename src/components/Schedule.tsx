import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Users } from "lucide-react";

const scheduleData = {
  today: [
    {
      time: "09:00",
      sport: "Swimming",
      event: "Men's 50m Butterfly Heats",
      venue: "Aquatic Center",
      participants: 32
    },
    {
      time: "14:30",
      sport: "Athletics",
      event: "Women's Long Jump Final",
      venue: "National Stadium",
      participants: 12
    },
    {
      time: "19:00",
      sport: "Badminton",
      event: "Men's Singles Semi-Final",
      venue: "Indoor Arena",
      participants: 4
    }
  ],
  tomorrow: [
    {
      time: "08:30",
      sport: "Cycling",
      event: "Road Race Final",
      venue: "City Circuit",
      participants: 45
    },
    {
      time: "15:00",
      sport: "Gymnastics",
      event: "All-Around Final",
      venue: "Gymnastics Hall",
      participants: 18
    },
    {
      time: "20:00",
      sport: "Football",
      event: "Men's Final",
      venue: "National Stadium",
      participants: 22
    }
  ],
  upcoming: [
    {
      time: "10:00",
      sport: "Weightlifting",
      event: "Men's 77kg Final",
      venue: "Weight Hall",
      participants: 8
    },
    {
      time: "16:30",
      sport: "Table Tennis",
      event: "Mixed Doubles Final",
      venue: "TT Arena",
      participants: 4
    },
    {
      time: "21:00",
      sport: "Boxing",
      event: "Light Heavyweight Final",
      venue: "Boxing Arena",
      participants: 2
    }
  ]
};

const Schedule = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            📅 Event Schedule
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Competition Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with all upcoming matches and events
          </p>
        </div>
        
        <Tabs defaultValue="today" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="today" className="text-lg py-3">Today</TabsTrigger>
            <TabsTrigger value="tomorrow" className="text-lg py-3">Tomorrow</TabsTrigger>
            <TabsTrigger value="upcoming" className="text-lg py-3">This Week</TabsTrigger>
          </TabsList>
          
          {Object.entries(scheduleData).map(([day, events]) => (
            <TabsContent key={day} value={day} className="space-y-4">
              {events.map((event, index) => (
                <Card key={index} className="shadow-card hover:shadow-gold transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-2xl font-bold text-champion">
                            {event.time}
                          </div>
                          <Badge variant="secondary">{event.sport}</Badge>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3">{event.event}</h3>
                        
                        <div className="flex items-center space-x-6 text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.venue}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.participants} participants
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline">
                          <Clock className="w-4 h-4 mr-2" />
                          Remind Me
                        </Button>
                        <Button variant="champion">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;