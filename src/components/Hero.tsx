import React from "react";
import { Leaf, Users, ArrowDown, Brain, Sparkles, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  onOpenAuth: (role: "farmer" | "buyer") => void;
  onOpenCalculator: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAuth, onOpenCalculator }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Floating Decorative Orbs */}
      <div className="absolute top-28 right-12 w-24 h-24 bg-accent/20 rounded-full animate-float hidden lg:block backdrop-blur-3xl" />
      <div className="absolute bottom-40 left-12 w-20 h-20 bg-secondary/20 rounded-full animate-float hidden lg:block backdrop-blur-3xl" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container-custom section-padding w-full">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 animate-fade-in">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-semibold text-primary-foreground tracking-wide">
              AgroWaste Connect • AI Stubble Marketplace
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.15] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Turn Crop Waste into Income,
            <span className="block text-accent mt-2">Not Smoke & Air Pollution</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed font-normal animate-fade-in" style={{ animationDelay: '0.2s' }}>
            An AI-powered marketplace connecting <strong>farmers</strong> directly with <strong>industries</strong> to monetize paddy straw & stubble. 
            No burning. Guaranteed fair pricing. Instant payments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => onOpenAuth("farmer")}
              className="btn-primary-hero flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-xl"
            >
              <Leaf className="w-5 h-5" />
              I am a Farmer (Sell Stubble)
            </button>

            <button
              onClick={() => onOpenAuth("buyer")}
              className="btn-secondary-hero flex items-center justify-center gap-2.5 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold shadow-xl"
            >
              <Users className="w-5 h-5" />
              I am a Buyer (Buy Raw Waste)
            </button>

            <button
              onClick={onOpenCalculator}
              className="px-6 py-4 rounded-2xl font-bold text-sm bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 backdrop-blur-md border border-primary-foreground/20 flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Brain className="w-4 h-4 text-accent" />
              AI Value Calculator
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-black text-accent">92M</p>
              <p className="text-xs md:text-sm text-primary-foreground/85 font-medium">Tonnes Burnt/Year</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-black text-accent">₹6000Cr+</p>
              <p className="text-xs md:text-sm text-primary-foreground/85 font-medium">Wasted Income</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-black text-accent">30%</p>
              <p className="text-xs md:text-sm text-primary-foreground/85 font-medium">Air Pollution Avoided</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-gentle hidden md:block">
        <a href="#marketplace" className="flex flex-col items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          <span className="text-xs font-semibold">Scroll to Live Marketplace</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
