import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Signup from "@/components/Signup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-6">
        <Card className="w-full max-w-md bg-gradient-card border border-primary/20 shadow-epic">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join the Adventure
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Create your Silkroad Online account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Signup />
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;