import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const medalData = [
  { country: "Thailand", flag: "🇹🇭", gold: 28, silver: 25, bronze: 22, total: 75 },
  { country: "Vietnam", flag: "🇻🇳", gold: 24, silver: 19, bronze: 30, total: 73 },
  { country: "Singapore", flag: "🇸🇬", gold: 22, silver: 18, bronze: 15, total: 55 },
  { country: "Malaysia", flag: "🇲🇾", gold: 18, silver: 22, bronze: 25, total: 65 },
  { country: "Indonesia", flag: "🇮🇩", gold: 16, silver: 20, bronze: 18, total: 54 },
  { country: "Philippines", flag: "🇵🇭", gold: 12, silver: 15, bronze: 20, total: 47 },
  { country: "Myanmar", flag: "🇲🇲", gold: 8, silver: 12, bronze: 15, total: 35 },
  { country: "Cambodia", flag: "🇰🇭", gold: 6, silver: 8, bronze: 12, total: 26 },
];

const MedalTally = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            🏅 Medal Standings
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Medal Tally
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track the medal count and rankings of all participating countries
          </p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Country Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-2 font-semibold">Rank</th>
                    <th className="text-left py-4 px-2 font-semibold">Country</th>
                    <th className="text-center py-4 px-2 font-semibold text-gold">🥇 Gold</th>
                    <th className="text-center py-4 px-2 font-semibold text-silver">🥈 Silver</th>
                    <th className="text-center py-4 px-2 font-semibold text-bronze">🥉 Bronze</th>
                    <th className="text-center py-4 px-2 font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {medalData.map((country, index) => (
                    <tr 
                      key={country.country} 
                      className={`border-b hover:bg-muted/50 transition-colors ${
                        index < 3 ? 'bg-gradient-to-r from-gold/5 to-transparent' : ''
                      }`}
                    >
                      <td className="py-4 px-2">
                        <div className="flex items-center">
                          <span className={`font-bold text-lg ${
                            index === 0 ? 'text-gold' : 
                            index === 1 ? 'text-silver' : 
                            index === 2 ? 'text-bronze' : 'text-foreground'
                          }`}>
                            {index + 1}
                          </span>
                          {index < 3 && <span className="ml-2 text-2xl">
                            {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                          </span>}
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{country.flag}</span>
                          <span className="font-semibold">{country.country}</span>
                        </div>
                      </td>
                      <td className="text-center py-4 px-2 font-bold text-gold">{country.gold}</td>
                      <td className="text-center py-4 px-2 font-bold text-silver">{country.silver}</td>
                      <td className="text-center py-4 px-2 font-bold text-bronze">{country.bronze}</td>
                      <td className="text-center py-4 px-2 font-bold text-lg">{country.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MedalTally;