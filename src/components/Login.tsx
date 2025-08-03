import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/api";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const { login: authLogin } = useAuth();
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.usernameOrEmail || !formData.password) {
      return;
    }

    loginMutation.mutate(formData, {
      onSuccess: (response) => {
        authLogin(response.user);
        navigate("/account");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="usernameOrEmail" className="text-foreground">
          Username or Email
        </Label>
        <Input
          id="usernameOrEmail"
          name="usernameOrEmail"
          type="text"
          value={formData.usernameOrEmail}
          onChange={handleInputChange}
          className="bg-input border-border focus:border-primary"
          placeholder="Enter your username or email"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password" className="text-foreground">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          className="bg-input border-border focus:border-primary"
          placeholder="Enter your password"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        variant="epic"
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? "Signing In..." : "Sign In"}
      </Button>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:text-primary-glow transition-colors"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;