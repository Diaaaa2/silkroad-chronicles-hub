import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/silkroad-hero-new.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
            Silkroad Online
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Embark on an Epic Journey Along the Ancient Trade Routes
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate MMORPG adventure in a world inspired by the legendary Silk Road. 
            Trade, fight, and explore in this massive online universe where fortune favors the bold.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link to="/signup">
              <Button variant="hero" size="lg" className="text-xl px-12 py-4">
                Start Your Journey
              </Button>
            </Link>
            <Button variant="game" size="lg" className="text-xl px-12 py-4">
              Watch Trailer
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500K+</div>
              <div className="text-muted-foreground">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">15+</div>
              <div className="text-muted-foreground">Years Online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100+</div>
              <div className="text-muted-foreground">Kingdoms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;