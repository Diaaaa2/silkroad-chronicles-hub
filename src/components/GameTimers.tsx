import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GameTimers = () => {
  const timers = [
    {
      event: "Capture the Flag",
      time: "00:00:00",
      status: "Starting Now!",
      color: "text-green-400",
      icon: "🏳️"
    },
    {
      event: "Fortress War",
      time: "5d 11:40:20",
      status: "Next Battle",
      color: "text-red-400", 
      icon: "⚔️"
    },
    {
      event: "Guild Registration",
      time: "Saturday 12:00 - 23:00",
      status: "Open Window",
      color: "text-blue-400",
      icon: "📝"
    },
    {
      event: "Medusa Spawn",
      time: "01:40:20",
      status: "Next Appearance",
      color: "text-purple-400",
      icon: "🐍"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            ⏰ Event Timers
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with upcoming events and competitions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timers.map((timer, index) => (
            <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <span className="text-2xl">{timer.icon}</span>
                  {timer.event}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className={`text-3xl font-mono font-bold ${timer.color} animate-pulse`}>
                    {timer.time}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {timer.status}
                  </div>
                </div>
                
                {timer.event === "Capture the Flag" && (
                  <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-2 text-center">
                    <div className="text-green-400 font-bold text-sm">ACTIVE NOW!</div>
                  </div>
                )}
                
                {timer.event === "Fortress War" && (
                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-2 text-center">
                    <div className="text-red-400 font-bold text-sm">Prepare for Battle</div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameTimers;