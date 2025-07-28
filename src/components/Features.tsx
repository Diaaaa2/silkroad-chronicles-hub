import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Massive PvP Battles",
      description: "Engage in epic fortress wars and large-scale PvP battles with hundreds of players",
      icon: "⚔️"
    },
    {
      title: "Trading System",
      description: "Build your merchant empire along the historic Silk Road trade routes",
      icon: "💰"
    },
    {
      title: "Three Unique Races",
      description: "Choose from Chinese, European, or Arabic cultures, each with distinct advantages",
      icon: "🏛️"
    },
    {
      title: "Job System",
      description: "Master multiple professions from warrior to merchant to thief",
      icon: "🔨"
    },
    {
      title: "Guild System",
      description: "Form powerful alliances and compete for territorial control",
      icon: "👥"
    },
    {
      title: "Fantasy Creatures",
      description: "Encounter dragons, phoenixes, and mythical beasts in your adventures",
      icon: "🐉"
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Game Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the rich gameplay mechanics that make Silkroad Online a legendary MMORPG experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-float">{feature.icon}</div>
                <CardTitle className="text-2xl text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center text-lg">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;