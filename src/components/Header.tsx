import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-full"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Silkroad Online
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
                <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
                <a href="#news" className="text-foreground hover:text-primary transition-colors">News</a>
                <a href="#download" className="text-foreground hover:text-primary transition-colors">Download</a>
              </>
            ) : (
              <>
                <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/rankings" className="text-foreground hover:text-primary transition-colors">Rankings</Link>
                <Link to="/download" className="text-foreground hover:text-primary transition-colors">Download</Link>
              </>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/account">
                  <Button variant="outline">Account Panel</Button>
                </Link>
                <Button variant="destructive" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="epic">Sign Up Free</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;