import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServerStatus = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Live Server Stats */}
          <Card className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                🟢 Live Server Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Players Online</span>
                <span className="text-2xl font-bold text-green-400 animate-pulse">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Server Time</span>
                <span className="text-lg font-mono text-secondary">15:42:33 UTC</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Server Status</span>
                <span className="text-green-400 font-semibold">● ONLINE</span>
              </div>
            </CardContent>
          </Card>

          {/* Server Rates */}
          <Card className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">⚡ Server Rates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cap Level</span>
                  <span className="text-accent font-bold">110</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">EXP Rate</span>
                  <span className="text-secondary font-bold">2x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">SP Rate</span>
                  <span className="text-secondary font-bold">2x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Party EXP</span>
                  <span className="text-secondary font-bold">3x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gold Rate</span>
                  <span className="text-secondary font-bold">2x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Drop Rate</span>
                  <span className="text-white font-bold">1x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trade Goods</span>
                  <span className="text-white font-bold">1x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">IP Limit</span>
                  <span className="text-primary font-bold">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">HWID Limit</span>
                  <span className="text-primary font-bold">2</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fortress Owners */}
          <Card className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">🏰 Fortress Owners</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-accent/20">
                  <div>
                    <div className="font-bold text-accent">Jangan Fortress</div>
                    <div className="text-sm text-muted-foreground">Chinese Territory</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-red-400">[DragonKnights]</div>
                    <div className="text-xs text-muted-foreground">Level 7 Guild</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-accent/20">
                  <div>
                    <div className="font-bold text-accent">Bandit Fortress</div>
                    <div className="text-sm text-muted-foreground">European Territory</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-400">[SilkWarriors]</div>
                    <div className="text-xs text-muted-foreground">Level 6 Guild</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServerStatus;