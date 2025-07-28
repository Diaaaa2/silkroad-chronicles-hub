import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    newsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be implemented with Supabase integration
    console.log("Signup attempt:", formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-card border-2 border-primary/30 shadow-epic">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-full"></div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Silkroad Online
                </span>
              </div>
              <CardTitle className="text-3xl text-primary">Create Account</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Join the epic adventure and become a legend
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-foreground">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Choose your warrior name"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="bg-muted/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-muted/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-muted/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-muted/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                      className="border-border"
                    />
                    <Label htmlFor="agreeTerms" className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">Terms of Service</a>
                      {" "}and{" "}
                      <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleCheckboxChange("newsletter", checked as boolean)}
                      className="border-border"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to updates about events and news
                    </Label>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  variant="epic"
                  size="lg"
                  className="w-full text-lg"
                  disabled={!formData.agreeTerms}
                >
                  Create My Account
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <a href="#" className="text-primary hover:underline font-medium">
                    Sign In
                  </a>
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <h3 className="font-bold text-primary mb-2">Account Benefits:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Access to all game features</li>
                  <li>• Guild creation and management</li>
                  <li>• Character progression tracking</li>
                  <li>• Exclusive member events</li>
                  <li>• Community forums access</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Signup;