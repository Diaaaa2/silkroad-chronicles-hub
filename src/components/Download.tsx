import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <section id="download" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Start Your Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download Silkroad Online and begin your epic journey through the ancient trade routes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-2 border-primary/30 shadow-epic">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl text-primary mb-4">Free to Play</CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                No subscription fees • No pay-to-win mechanics • Pure skill-based gameplay
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">Windows</div>
                  <div className="text-muted-foreground">Windows 10/11</div>
                  <div className="text-sm text-muted-foreground">4GB RAM • 15GB Storage</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-secondary">Download Size</div>
                  <div className="text-muted-foreground">8.5 GB</div>
                  <div className="text-sm text-muted-foreground">Additional patches: ~2GB</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">Players Online</div>
                  <div className="text-muted-foreground">50,000+</div>
                  <div className="text-sm text-muted-foreground">Peak hours: 80,000+</div>
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <Link to="/download">
                  <Button variant="hero" size="lg" className="text-2xl px-16 py-6">
                    Download Game Client
                  </Button>
                </Link>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup">
                    <Button variant="epic">Create Account</Button>
                  </Link>
                  <Button variant="game">System Requirements</Button>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">Quick Start Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-secondary mb-2">1. Download</div>
                    <div className="text-muted-foreground">Install the game client</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-secondary mb-2">2. Register</div>
                    <div className="text-muted-foreground">Create your free account</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-secondary mb-2">3. Play</div>
                    <div className="text-muted-foreground">Begin your adventure!</div>
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

export default Download;