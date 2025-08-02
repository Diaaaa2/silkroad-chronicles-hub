import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useSignup } from "@/hooks/api";

const Signup = () => {
  const [formData, setFormData] = useState({
    StrUserID: "",
    Email: "",
    Password: "",
    confirmPassword: "",
    agreeTerms: false,
    newsletter: false
  });

  const signupMutation = useSignup();
  const navigate = useNavigate();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      return;
    }

    if (formData.Password !== formData.confirmPassword) {
      return;
    }

    try {
      await signupMutation.mutateAsync({
        StrUserID: formData.StrUserID,
        Email: formData.Email,
        Password: formData.Password,
      });
      navigate("/login");
    } catch (error) {
      // Error handling is done in the mutation hook
    }
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
                   <Label htmlFor="StrUserID" className="text-foreground">Username</Label>
                   <Input
                     id="StrUserID"
                     name="StrUserID"
                     type="text"
                     placeholder="Choose your warrior name"
                     value={formData.StrUserID}
                     onChange={handleInputChange}
                     className="bg-muted/50 border-border focus:border-primary"
                     required
                   />
                 </div>
                 
                 <div className="space-y-2">
                   <Label htmlFor="Email" className="text-foreground">Email Address</Label>
                   <Input
                     id="Email"
                     name="Email"
                     type="email"
                     placeholder="your.email@example.com"
                     value={formData.Email}
                     onChange={handleInputChange}
                     className="bg-muted/50 border-border focus:border-primary"
                     required
                   />
                 </div>
                 
                 <div className="space-y-2">
                   <Label htmlFor="Password" className="text-foreground">Password</Label>
                   <Input
                     id="Password"
                     name="Password"
                     type="password"
                     placeholder="Create a strong password"
                     value={formData.Password}
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
                   disabled={!formData.agreeTerms || signupMutation.isPending}
                 >
                   {signupMutation.isPending ? "Creating Account..." : "Create My Account"}
                 </Button>
              </form>
              
               <div className="mt-6 text-center">
                 <p className="text-muted-foreground">
                   Already have an account?{" "}
                   <Link to="/login" className="text-primary hover:underline font-medium">
                     Sign In
                   </Link>
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