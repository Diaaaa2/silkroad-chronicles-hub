import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServerStatus from "@/components/ServerStatus";
import Features from "@/components/Features";
import GameTimers from "@/components/GameTimers";

import Rankings from "@/components/Rankings";
import News from "@/components/News";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import DiscordEmbed from "@/components/DiscordEmbed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServerStatus />
      <Features />
      <GameTimers />
      
      <Rankings />
      <News />
      <DiscordEmbed />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
