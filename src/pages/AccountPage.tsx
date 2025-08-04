import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Navigate, Link } from "react-router-dom";

const AccountPage = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  // Mock character data - replace with real API call
  const characters = [
    {
      CharID: 1,
      CharName16: "TestWarrior",
      CurLevel: 75,
      Strength: 120,
      Intellect: 45,
      HP: 2500,
      MP: 800,
      silks: 15000,
      giftSilks: 2500,
      honorPoints: 8750,
      visible: true
    },
    {
      CharID: 2,
      CharName16: "MageTest",
      CurLevel: 68,
      Strength: 35,
      Intellect: 180,
      HP: 1800,
      MP: 3200,
      silks: 22000,
      giftSilks: 5000,
      honorPoints: 12000,
      visible: true
    }
  ];

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      toast({
        title: "Error",
        description: "New passwords don't match",
        variant: "destructive"
      });
      return;
    }
    
    // TODO: Implement password change API call
    toast({
      title: "Password Changed",
      description: "Your password has been updated successfully.",
    });
    setShowChangePassword(false);
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const toggleCharacterVisibility = (charId: number) => {
    // TODO: Implement character visibility toggle
    toast({
      title: "Character Visibility Updated",
      description: "Character visibility has been changed.",
    });
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
                  Account Panel
                </h1>
                <p className="text-lg text-muted-foreground">
                  Welcome back, {user?.StrUserID}!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Account Info */}
                <div className="lg:col-span-1">
                  <Card className="bg-gradient-card border border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary">Account Info</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Username</Label>
                        <div className="font-medium">{user?.StrUserID}</div>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Email</Label>
                        <div className="font-medium">{user?.Email}</div>
                      </div>
                      <div className="space-y-2 pt-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => setShowChangePassword(!showChangePassword)}
                        >
                          Change Password
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          className="w-full"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {showChangePassword && (
                    <Card className="bg-gradient-card border border-primary/20 mt-4">
                      <CardHeader>
                        <CardTitle className="text-sm text-primary">Change Password</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleChangePassword} className="space-y-4">
                          <div>
                            <Label htmlFor="current">Current Password</Label>
                            <Input
                              id="current"
                              type="password"
                              value={passwords.current}
                              onChange={(e) => setPasswords(prev => ({ ...prev, current: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="new">New Password</Label>
                            <Input
                              id="new"
                              type="password"
                              value={passwords.new}
                              onChange={(e) => setPasswords(prev => ({ ...prev, new: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="confirm">Confirm Password</Label>
                            <Input
                              id="confirm"
                              type="password"
                              value={passwords.confirm}
                              onChange={(e) => setPasswords(prev => ({ ...prev, confirm: e.target.value }))}
                              required
                            />
                          </div>
                          <Button type="submit" size="sm" className="w-full">
                            Update Password
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Characters */}
                <div className="lg:col-span-3">
                  <Card className="bg-gradient-card border border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary">Your Characters</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {characters.map((character) => (
                          <Card key={character.CharID} className="bg-muted/30 border border-primary/10">
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg text-foreground">
                                  {character.CharName16}
                                </CardTitle>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => toggleCharacterVisibility(character.CharID)}
                                >
                                  {character.visible ? "Hide" : "Show"}
                                </Button>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Level:</span>
                                  <span className="ml-2 font-medium">{character.CurLevel}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">STR:</span>
                                  <span className="ml-2 font-medium">{character.Strength}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">INT:</span>
                                  <span className="ml-2 font-medium">{character.Intellect}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">HP:</span>
                                  <span className="ml-2 font-medium">{character.HP}</span>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-2 text-xs pt-2 border-t border-primary/10">
                                <div className="text-center">
                                  <div className="text-yellow-400 font-medium">{character.silks.toLocaleString()}</div>
                                  <div className="text-muted-foreground">Silks</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-purple-400 font-medium">{character.giftSilks.toLocaleString()}</div>
                                  <div className="text-muted-foreground">Gift Silks</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-blue-400 font-medium">{character.honorPoints.toLocaleString()}</div>
                                  <div className="text-muted-foreground">Honor</div>
                                </div>
                              </div>
                              
                              <Link to={`/character/${character.CharID}`}>
                                <Button variant="outline" size="sm" className="w-full">
                                  View Details
                                </Button>
                              </Link>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;