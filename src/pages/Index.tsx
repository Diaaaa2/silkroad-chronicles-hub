import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Classes from "@/components/Classes";
import News from "@/components/News";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Classes />
      <News />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
