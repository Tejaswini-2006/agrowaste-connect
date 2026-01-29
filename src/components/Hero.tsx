import { Leaf, Users, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-secondary/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container-custom section-padding w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Hackathon Project 2024</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            AgroWasteX
            <span className="block text-accent mt-2">Turn Crop Waste into Income, Not Smoke</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            An AI-powered marketplace connecting <strong>farmers</strong> with <strong>industries</strong> to reuse crop waste. 
            No burning. No pollution. Just extra income for farmers and raw materials for businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#how-it-works" 
              className="btn-primary-hero flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Leaf className="w-5 h-5" />
              I am a Farmer
            </a>
            <a 
              href="#features" 
              className="btn-secondary-hero flex items-center justify-center gap-3 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Users className="w-5 h-5" />
              I am a Buyer / Industry
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">92M</p>
              <p className="text-sm text-primary-foreground/80">Tonnes Burnt/Year</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">₹6000Cr+</p>
              <p className="text-sm text-primary-foreground/80">Wasted Income</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">30%</p>
              <p className="text-sm text-primary-foreground/80">Of Air Pollution</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <a href="#problem" className="flex flex-col items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          <span className="text-sm">Scroll to learn more</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
