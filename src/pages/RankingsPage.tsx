import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTopPlayers, useTopGuilds } from "@/hooks/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const RankingsPage = () => {
  const { data: playersData, isLoading: playersLoading } = useTopPlayers();
  const { data: guildsData, isLoading: guildsLoading } = useTopGuilds();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                Hall of Fame
              </h1>
              <p className="text-xl text-muted-foreground">
                The strongest warriors and most powerful guilds in Silkroad Online
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Top Players */}
              <Card className="bg-gradient-card border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    🏆 Top Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {playersLoading ? (
                    <div className="space-y-4">
                      {[...Array(10)].map((_, i) => (
                        <Skeleton key={i} className="h-16 w-full" />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {playersData?.topPlayers.map((player, index) => (
                        <Link 
                          key={player.CharID} 
                          to={`/character/${player.CharID}`}
                          className="block hover:scale-105 transition-transform duration-200"
                        >
                          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-muted/50 transition-all">
                            <div className="flex items-center gap-4">
                              <Badge 
                                variant={index < 3 ? "default" : "outline"}
                                className={
                                  index === 0 ? "bg-yellow-500 text-black" :
                                  index === 1 ? "bg-gray-400 text-black" :
                                  index === 2 ? "bg-amber-600 text-white" :
                                  ""
                                }
                              >
                                #{index + 1}
                              </Badge>
                              <div>
                                <div className="font-bold text-lg text-foreground hover:text-primary">
                                  {player.CharName16}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Level {player.CurLevel}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-primary">
                                {player.ItemPoints?.toLocaleString() || 0}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Item Points
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Top Guilds */}
              <Card className="bg-gradient-card border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    ⚔️ Top Guilds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {guildsLoading ? (
                    <div className="space-y-4">
                      {[...Array(10)].map((_, i) => (
                        <Skeleton key={i} className="h-16 w-full" />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {guildsData?.topGuilds.map((guild, index) => (
                        <Link 
                          key={guild.id} 
                          to={`/guild/${guild.id}`}
                          className="block hover:scale-105 transition-transform duration-200"
                        >
                          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-muted/50 transition-all">
                            <div className="flex items-center gap-4">
                              <Badge 
                                variant={index < 3 ? "default" : "outline"}
                                className={
                                  index === 0 ? "bg-yellow-500 text-black" :
                                  index === 1 ? "bg-gray-400 text-black" :
                                  index === 2 ? "bg-amber-600 text-white" :
                                  ""
                                }
                              >
                                #{index + 1}
                              </Badge>
                              <div>
                                <div className="font-bold text-lg text-foreground hover:text-primary">
                                  [{guild.name}]
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Level {guild.lvl}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-primary">
                                {guild.ItemPoints?.toLocaleString() || 0}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Item Points
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RankingsPage;