import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Rankings = () => {
  const topPlayers = [
    { rank: 1, name: "ShadowMaster", level: 110, job: "Wizard", kills: 2847 },
    { rank: 2, name: "DragonSlayer", level: 110, job: "Warrior", kills: 2523 },
    { rank: 3, name: "SilkTrader", level: 109, job: "Rogue", kills: 2156 },
    { rank: 4, name: "MysticBlade", level: 108, job: "Warrior", kills: 1984 },
    { rank: 5, name: "PhoenixRise", level: 107, job: "Wizard", kills: 1756 }
  ];

  const topGuilds = [
    { rank: 1, name: "DragonKnights", level: 7, members: 50, points: 15420 },
    { rank: 2, name: "SilkWarriors", level: 6, members: 48, points: 12850 },
    { rank: 3, name: "PhoenixLegion", level: 6, members: 45, points: 11640 },
    { rank: 4, name: "ShadowClan", level: 5, members: 42, points: 9750 },
    { rank: 5, name: "MysticOrder", level: 5, members: 38, points: 8960 }
  ];

  const topKillers = [
    { rank: 1, name: "Assassin_X", kills: 3847, deaths: 245, ratio: "15.7" },
    { rank: 2, name: "BloodHunter", kills: 3523, deaths: 298, ratio: "11.8" },
    { rank: 3, name: "DeathBringer", kills: 3156, deaths: 412, ratio: "7.7" },
    { rank: 4, name: "SoulReaper", kills: 2984, deaths: 356, ratio: "8.4" },
    { rank: 5, name: "VoidWalker", kills: 2756, deaths: 389, ratio: "7.1" }
  ];

  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1: return "text-yellow-400"; // Gold
      case 2: return "text-gray-300";   // Silver
      case 3: return "text-amber-600";  // Bronze
      default: return "text-muted-foreground";
    }
  };

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return "👑";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return `${rank}`;
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            🏆 Hall of Fame
          </h2>
          <p className="text-lg text-muted-foreground">
            Champions of the Silk Road - The most skilled players and powerful guilds
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Top Players */}
          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                ⭐ Top Players
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topPlayers.map((player) => (
                <div key={player.rank} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className={`text-xl font-bold ${getRankColor(player.rank)}`}>
                      {getRankIcon(player.rank)}
                    </span>
                    <div>
                      <div className="font-bold text-foreground">{player.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Lv.{player.level} {player.job}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-primary font-bold">{player.kills.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Kills</div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">View Full Ranking</Button>
            </CardContent>
          </Card>

          {/* Top Guilds */}
          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                🛡️ Top Guilds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topGuilds.map((guild) => (
                <div key={guild.rank} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className={`text-xl font-bold ${getRankColor(guild.rank)}`}>
                      {getRankIcon(guild.rank)}
                    </span>
                    <div>
                      <div className="font-bold text-foreground">[{guild.name}]</div>
                      <div className="text-sm text-muted-foreground">
                        Lv.{guild.level} • {guild.members} members
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-secondary font-bold">{guild.points.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Points</div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">View Guild Wars</Button>
            </CardContent>
          </Card>

          {/* Top Unique Killers */}
          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                🗡️ Top Killers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topKillers.map((killer) => (
                <div key={killer.rank} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className={`text-xl font-bold ${getRankColor(killer.rank)}`}>
                      {getRankIcon(killer.rank)}
                    </span>
                    <div>
                      <div className="font-bold text-foreground">{killer.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {killer.deaths} deaths • {killer.ratio} K/D
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-accent font-bold">{killer.kills.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Unique Kills</div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">View PvP Stats</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Rankings;