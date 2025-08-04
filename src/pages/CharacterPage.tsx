import { useParams } from "react-router-dom";
import { useCharacterDetails } from "@/hooks/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import InventoryGrid from "@/components/InventoryGrid";

const CharacterPage = () => {
  const { id } = useParams();
  const charId = parseInt(id || "0", 10);
  const { data, isLoading, error } = useCharacterDetails(charId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-6">
                <Skeleton className="h-8 w-64 mx-auto" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Skeleton className="h-64" />
                  <Skeleton className="h-64" />
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
              <h1 className="text-2xl font-bold text-destructive">Character Not Found</h1>
              <p className="text-muted-foreground">The character you're looking for doesn't exist.</p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }

  const { character, guild, equipment, avatar } = data;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {character.CharName16}
                </h1>
                <p className="text-lg text-muted-foreground">
                  Level {character.CurLevel} Character
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Character Stats */}
                <Card className="bg-gradient-card border border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Character Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Level</div>
                        <div className="text-xl font-bold text-primary">{character.CurLevel}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Character ID</div>
                        <div className="text-xl font-bold">{character.CharID}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Strength</div>
                        <div className="text-lg font-semibold text-red-400">{character.Strength}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Intelligence</div>
                        <div className="text-lg font-semibold text-blue-400">{character.Intellect}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Health Points</div>
                        <div className="text-lg font-semibold text-green-400">{character.HP}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Mana Points</div>
                        <div className="text-lg font-semibold text-purple-400">{character.MP}</div>
                      </div>
                    </div>
                    
                    {guild && (
                      <div className="pt-4 border-t border-primary/10">
                        <div className="text-sm text-muted-foreground">Guild</div>
                        <div className="text-lg font-semibold text-secondary">[{guild.Name}]</div>
                        <div className="text-sm text-muted-foreground">Level {guild.Lvl}</div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Location Info */}
                <Card className="bg-gradient-card border border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Location & Additional Info</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Current Region</div>
                        <div className="text-lg font-semibold">{character.LatestRegion}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Position</div>
                        <div className="text-sm">
                          X: {character.PosX}, Y: {character.PosY}, Z: {character.PosZ}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Inventory Size</div>
                        <div className="text-lg font-semibold">{character.InventorySize}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Inventory Grid */}
              <div className="mt-6">
                <InventoryGrid equipment={equipment} avatar={avatar} />
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CharacterPage;