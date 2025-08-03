import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DownloadPage = () => {
  const downloadLinks = [
    {
      name: "Direct Download",
      description: "Download directly from our servers",
      url: "#",
      size: "8.5 GB",
      speed: "High Speed"
    },
    {
      name: "Torrent Download",
      description: "P2P download via BitTorrent",
      url: "#",
      size: "8.5 GB",
      speed: "Variable Speed"
    },
    {
      name: "Mirror 1 - USA",
      description: "US Mirror Server",
      url: "#",
      size: "8.5 GB",
      speed: "High Speed"
    },
    {
      name: "Mirror 2 - EU",
      description: "European Mirror Server",
      url: "#",
      size: "8.5 GB",
      speed: "High Speed"
    },
    {
      name: "Mirror 3 - Asia",
      description: "Asian Mirror Server",
      url: "#",
      size: "8.5 GB",
      speed: "High Speed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                Download Silkroad Online
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose your preferred download method and begin your epic journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {downloadLinks.map((link, index) => (
                <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{link.name}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Size:</span>
                      <span>{link.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Speed:</span>
                      <span>{link.speed}</span>
                    </div>
                    <Button variant="hero" className="w-full">
                      Download Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="bg-gradient-card border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-primary">System Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-4">Minimum Requirements</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Windows 10 (64-bit)</li>
                        <li>• Intel Core i3 / AMD Ryzen 3</li>
                        <li>• 4 GB RAM</li>
                        <li>• DirectX 11 compatible</li>
                        <li>• 15 GB available space</li>
                        <li>• Broadband internet connection</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-4">Recommended Requirements</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Windows 11 (64-bit)</li>
                        <li>• Intel Core i5 / AMD Ryzen 5</li>
                        <li>• 8 GB RAM</li>
                        <li>• DirectX 12 compatible</li>
                        <li>• 20 GB available space</li>
                        <li>• High-speed internet connection</li>
                      </ul>
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

export default DownloadPage;