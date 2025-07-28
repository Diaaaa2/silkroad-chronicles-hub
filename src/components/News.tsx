import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const News = () => {
  const news = [
    {
      title: "Winter Festival Event",
      date: "December 15, 2024",
      description: "Join the magical winter festival with exclusive rewards, new costumes, and special dungeons available for a limited time.",
      category: "Event"
    },
    {
      title: "New Guild System Update",
      date: "December 10, 2024", 
      description: "Enhanced guild features including new ranks, guild halls, and territorial control mechanics now live.",
      category: "Update"
    },
    {
      title: "PvP Tournament Championship",
      date: "December 5, 2024",
      description: "The ultimate PvP tournament begins! Compete for the title of Silkroad Champion and massive prize pools.",
      category: "Tournament"
    }
  ];

  return (
    <section id="news" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Latest News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest events, updates, and tournaments in Silkroad Online
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
                <CardTitle className="text-xl text-primary">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {article.description}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="epic" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;