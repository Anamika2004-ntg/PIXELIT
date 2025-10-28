
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
    { name: "Freelancer Profile", path: "/freelancer-profile" }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="flex items-center">
              <span className="text-brand-purple font-heading text-2xl font-bold">PIXEL</span>
              <span className="text-brand-pink font-heading text-2xl font-bold">IT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-brand-pink"
                      : "text-gray-600 hover:text-brand-purple"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="outline" className="border-brand-purple text-brand-purple hover:text-brand-purple">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-brand-purple text-white hover:bg-brand-purple/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="outline-none focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-brand-purple" />
              ) : (
                <Menu className="h-6 w-6 text-brand-purple" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 shadow-md">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 font-medium ${
                  isActive(link.path)
                    ? "text-brand-pink"
                    : "text-gray-600 hover:text-brand-purple"
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-3 flex flex-col space-y-2">
              <Link to="/login" className="w-full" onClick={closeMenu}>
                <Button variant="outline" className="w-full border-brand-purple text-brand-purple">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="w-full" onClick={closeMenu}>
                <Button className="w-full bg-brand-purple text-white hover:bg-brand-purple/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
