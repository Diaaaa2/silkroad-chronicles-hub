import { useParams } from "react-router-dom";
import { useGuildDetails } from "@/hooks/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

const GuildPage = () => {
  const { id } = useParams();
  const guildId = parseInt(id || "0", 10);
  const { data, isLoading, error } = useGuildDetails(guildId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto space-y-6">
                <Skeleton className="h-8 w-64 mx-auto" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Skeleton className="h-64" />
                  <Skeleton className="h-96 lg:col-span-2" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <section className="py-12">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-2xl font-bold text-destructive">Guild Not Found</h1>
              <p className="text-muted-foreground">The guild you're looking for doesn't exist.</p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }

  const { guild } = data;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  [{guild.Name}]
                </h1>
                <p className="text-lg text-muted-foreground">
                  Level {guild.Lvl} Guild
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Guild Stats */}
                <Card className="bg-gradient-card border border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Guild Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Guild Name</div>
                      <div className="text-xl font-bold text-primary">[{guild.Name}]</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Guild Level</div>
                      <div className="text-lg font-semibold text-secondary">{guild.Lvl}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Item Points</div>
                      <div className="text-lg font-semibold text-accent">{guild.ItemPoints.toLocaleString()}</div>
                    </div>
                    {guild.master && (
                      <div className="pt-4 border-t border-primary/10">
                        <div className="text-sm text-muted-foreground">Guild Master</div>
                        <Link 
                          to={`/character/${guild.master.CharID}`}
                          className="text-lg font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
                        >
                          {guild.master.CharName}
                        </Link>
                      </div>
                    )}
                    <div>
                      <div className="text-sm text-muted-foreground">Total Members</div>
                      <div className="text-lg font-semibold">{guild.members.length}</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Guild Members */}
                <Card className="bg-gradient-card border border-primary/20 lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-primary">Guild Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {guild.members.map((member) => (
                        <div key={member.CharID} className="flex items-center justify-between p-3 bg-muted/30 rounded border border-primary/10 hover:border-primary/30 transition-all">
                          <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                              <Link 
                                to={`/character/${member.CharID}`}
                                className="font-semibold text-foreground hover:text-primary transition-colors"
                              >
                                {member.CharName}
                              </Link>
                              <div className="text-sm text-muted-foreground">
                                Level {member.CharLevel}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">
                              {member.SiegeAuthority === 1 ? (
                                <span className="text-yellow-400">Guild Master</span>
                              ) : member.Permission === 2 ? (
                                <span className="text-blue-400">Officer</span>
                              ) : (
                                <span className="text-muted-foreground">Member</span>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Contribution: {member.Contribution.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Guild Stats */}
              <Card className="bg-gradient-card border border-primary/20 mt-6">
                <CardHeader>
                  <CardTitle className="text-primary">Member Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        {guild.members.filter(m => m.SiegeAuthority === 1).length}
                      </div>
                      <div className="text-sm text-muted-foreground">Guild Masters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {guild.members.filter(m => m.Permission === 2 && m.SiegeAuthority !== 1).length}
                      </div>
                      <div className="text-sm text-muted-foreground">Officers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {guild.members.filter(m => m.Permission === 1).length}
                      </div>
                      <div className="text-sm text-muted-foreground">Regular Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {Math.round(guild.members.reduce((sum, m) => sum + m.CharLevel, 0) / guild.members.length)}
                      </div>
                      <div className="text-sm text-muted-foreground">Average Level</div>
                    </div>
                  </div>
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

export default GuildPage;