import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-custom px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AgroWasteX</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#how-it-works" className="btn-secondary-hero py-2.5 px-5 text-sm">
              I'm a Farmer
            </a>
            <a href="#features" className="btn-primary-hero py-2.5 px-5 text-sm">
              I'm a Buyer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/50">
                <a href="#how-it-works" className="btn-secondary-hero py-3 text-center">
                  I'm a Farmer
                </a>
                <a href="#features" className="btn-primary-hero py-3 text-center">
                  I'm a Buyer
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
