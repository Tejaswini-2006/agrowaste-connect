import React, { useState } from "react";
import { Leaf, Menu, X, Mic, Brain, Truck, UserCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenAuth: (role: "farmer" | "buyer") => void;
  onOpenCalculator: () => void;
  onOpenTracker: () => void;
  onOpenVoice: () => void;
  currentUser?: { name: string; role: "farmer" | "buyer" } | null;
}

const navLinks = [
  { label: "Marketplace", href: "#marketplace" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "AI Valuation", href: "#ai" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
];

const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onOpenCalculator,
  onOpenTracker,
  onOpenVoice,
  currentUser,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60 transition-all">
      <div className="container-custom px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-foreground tracking-tight flex items-center gap-1">
                AgroWaste<span className="text-primary">Connect</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-semibold -mt-1">
                AI Crop Waste Marketplace
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-semibold text-xs tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Interactive Tools & Auth */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenVoice}
              title="Voice Assistant in Hindi / Punjabi"
              className="p-2.5 rounded-2xl bg-accent/15 text-accent-foreground hover:bg-accent/25 transition-all text-xs font-semibold flex items-center gap-1.5"
            >
              <Mic className="w-4 h-4 text-accent" />
              <span className="hidden lg:inline">Voice AI</span>
            </button>

            <button
              onClick={onOpenCalculator}
              title="AI Waste Pricing Calculator"
              className="p-2.5 rounded-2xl bg-primary/10 text-primary hover:bg-primary/20 transition-all text-xs font-semibold flex items-center gap-1.5"
            >
              <Brain className="w-4 h-4" />
              <span className="hidden lg:inline">AI Pricing</span>
            </button>

            <button
              onClick={onOpenTracker}
              title="Track Active Order Pickup"
              className="p-2.5 rounded-2xl bg-muted text-foreground hover:bg-muted/80 transition-all text-xs font-semibold flex items-center gap-1.5"
            >
              <Truck className="w-4 h-4 text-primary" />
              <span className="hidden lg:inline">Track Pickup</span>
            </button>

            {currentUser ? (
              <div className="px-3 py-1.5 bg-primary/15 text-primary rounded-2xl text-xs font-bold flex items-center gap-1.5">
                <UserCheck className="w-4 h-4" /> {currentUser.name} ({currentUser.role})
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth("farmer")}
                  className="btn-secondary-hero py-2 px-4 text-xs font-bold rounded-2xl"
                >
                  I'm a Farmer
                </button>
                <button
                  onClick={() => onOpenAuth("buyer")}
                  className="btn-primary-hero py-2 px-4 text-xs font-bold rounded-2xl"
                >
                  I'm a Buyer
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-2xl bg-muted flex items-center justify-center text-foreground"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in space-y-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-4 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-sm font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2">
              <button
                onClick={() => { setIsOpen(false); onOpenVoice(); }}
                className="py-2.5 px-2 bg-accent/15 text-accent-foreground rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1"
              >
                <Mic className="w-4 h-4 text-accent" /> Voice AI
              </button>
              <button
                onClick={() => { setIsOpen(false); onOpenCalculator(); }}
                className="py-2.5 px-2 bg-primary/10 text-primary rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1"
              >
                <Brain className="w-4 h-4" /> AI Pricing
              </button>
              <button
                onClick={() => { setIsOpen(false); onOpenTracker(); }}
                className="py-2.5 px-2 bg-muted text-foreground rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1"
              >
                <Truck className="w-4 h-4 text-primary" /> Track Order
              </button>
            </div>

            {!currentUser && (
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => { setIsOpen(false); onOpenAuth("farmer"); }}
                  className="btn-secondary-hero py-2.5 text-center text-xs font-bold"
                >
                  I'm a Farmer
                </button>
                <button
                  onClick={() => { setIsOpen(false); onOpenAuth("buyer"); }}
                  className="btn-primary-hero py-2.5 text-center text-xs font-bold"
                >
                  I'm a Buyer
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
