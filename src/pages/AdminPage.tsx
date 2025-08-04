import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminPage = () => {
  const { toast } = useToast();
  const [eventTimer, setEventTimer] = useState({
    name: "",
    endDate: "",
    description: ""
  });
  const [newsArticle, setNewsArticle] = useState({
    title: "",
    content: "",
    category: "Event"
  });
  const [downloadLink, setDownloadLink] = useState({
    name: "",
    url: "",
    version: ""
  });

  const handleEventTimerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement event timer creation API
    toast({
      title: "Event Timer Created",
      description: "Event timer has been added successfully.",
    });
    setEventTimer({ name: "", endDate: "", description: "" });
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement news creation API
    toast({
      title: "News Article Published",
      description: "News article has been published successfully.",
    });
    setNewsArticle({ title: "", content: "", category: "Event" });
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement download link creation API
    toast({
      title: "Download Link Added",
      description: "Download link has been added successfully.",
    });
    setDownloadLink({ name: "", url: "", version: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  Admin Panel
                </h1>
                <p className="text-lg text-muted-foreground">
                  Manage game content and configurations
                </p>
              </div>

              <Tabs defaultValue="events" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="events">Event Timers</TabsTrigger>
                  <TabsTrigger value="news">Latest News</TabsTrigger>
                  <TabsTrigger value="downloads">Downloads</TabsTrigger>
                  <TabsTrigger value="rankings">Rankings</TabsTrigger>
                </TabsList>

                <TabsContent value="events" className="space-y-6">
                  <Card className="bg-gradient-card border border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary">Manage Event Timers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleEventTimerSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="eventName">Event Name</Label>
                          <Input
                            id="eventName"
                            value={eventTimer.name}
                            onChange={(e) => setEventTimer(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Winter Festival Event"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="eventDate">End Date & Time</Label>
                          <Input
                            id="eventDate"
                            type="datetime-local"
                            value={eventTimer.endDate}
                            onChange={(e) => setEventTimer(prev => ({ ...prev, endDate: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="eventDescription">Description</Label>
                          <Textarea
                            id="eventDescription"
                            value={eventTimer.description}
                            onChange={(e) => setEventTimer(prev => ({ ...prev, description: e.target.value }))}
                            placeholder="Event description..."
                            rows={3}
                          />
                        </div>
                        <Button type="submit" className="w-full">Create Event Timer</Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="news" className="space-y-6">
                  <Card className="bg-gradient-card border border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary">Manage Latest News</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleNewsSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="newsTitle">Article Title</Label>
                          <Input
                            id="newsTitle"
                            value={newsArticle.title}
                            onChange={(e) => setNewsArticle(prev => ({ ...prev, title: e.target.value }))}
                            placeholder="Winter Festival Event"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="newsCategory">Category</Label>
                          <select
                            id="newsCategory"
                            value={newsArticle.category}
                            onChange={(e) => setNewsArticle(prev => ({ ...prev, category: e.target.value }))}
                            className="w-full px-3 py-2 border border-input bg-background rounded-md"
                          >
                            <option value="Event">Event</option>
                            <option value="Update">Update</option>
                            <option value="Tournament">Tournament</option>
                            <option value="Maintenance">Maintenance</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="newsContent">Article Content</Label>
                          <Textarea
                            id="newsContent"
                            value={newsArticle.content}
                            onChange={(e) => setNewsArticle(prev => ({ ...prev, content: e.target.value }))}
                            placeholder="Article content..."
                            rows={6}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">Publish Article</Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="downloads" className="space-y-6">
                  <Card className="bg-gradient-card border border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary">Manage Downloads</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleDownloadSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="downloadName">Download Name</Label>
                          <Input
                            id="downloadName"
                            value={downloadLink.name}
                            onChange={(e) => setDownloadLink(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Game Client"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="downloadUrl">Download URL</Label>
                          <Input
                            id="downloadUrl"
                            type="url"
                            value={downloadLink.url}
                            onChange={(e) => setDownloadLink(prev => ({ ...prev, url: e.target.value }))}
                            placeholder="https://example.com/download"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="downloadVersion">Version</Label>
                          <Input
                            id="downloadVersion"
                            value={downloadLink.version}
                            onChange={(e) => setDownloadLink(prev => ({ ...prev, version: e.target.value }))}
                            placeholder="1.0.0"
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">Add Download Link</Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="rankings" className="space-y-6">
                  <Card className="bg-gradient-card border border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary">Rankings Management</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full">Refresh Player Rankings</Button>
                      <Button className="w-full">Refresh Guild Rankings</Button>
                      <Button variant="outline" className="w-full">Export Rankings Data</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;