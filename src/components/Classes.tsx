import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Classes = () => {
  const classes = [
    {
      name: "Warrior",
      description: "Master of melee combat with heavy armor and devastating weapons",
      features: ["High Defense", "Melee Combat", "Heavy Armor", "Shield Mastery"],
      color: "text-red-400"
    },
    {
      name: "Wizard",
      description: "Wielder of powerful magic spells and elemental forces",
      features: ["Elemental Magic", "Area Damage", "Crowd Control", "Mana Shield"],
      color: "text-blue-400"
    },
    {
      name: "Rogue",
      description: "Agile assassin specializing in stealth and critical strikes",
      features: ["Stealth", "Critical Damage", "Speed", "Poison Attacks"],
      color: "text-green-400"
    }
  ];

  return (
    <section id="classes" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Choose Your Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master different combat styles and forge your legend in the world of Silkroad Online
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-epic group">
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-3xl font-bold ${cls.color} mb-2`}>
                  {cls.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  {cls.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {cls.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="game" className="w-full mt-6">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;