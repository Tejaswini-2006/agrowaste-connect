import React from "react";
import { Smartphone, Brain, Handshake, Truck, Banknote, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenAuth: (role: "farmer" | "buyer") => void;
}

const steps = [
  {
    icon: Smartphone,
    title: "1. Farmer Lists Stubble",
    description: "Farmer adds crop type, estimated volume, and location in under 2 minutes.",
    color: "primary"
  },
  {
    icon: Brain,
    title: "2. AI Pricing & Match",
    description: "System recommends optimum pricing and top regional bio-energy buyers.",
    color: "accent"
  },
  {
    icon: Handshake,
    title: "3. Buyer Places Order",
    description: "Industries confirm tonnage, pickup schedule, and delivery factory address.",
    color: "secondary"
  },
  {
    icon: Truck,
    title: "4. Automated Pickup",
    description: "Transport vehicle dispatched directly to field location for loading.",
    color: "earth"
  },
  {
    icon: Banknote,
    title: "5. Instant Payment",
    description: "Funds disbursed straight into farmer's bank account upon weight verification.",
    color: "success"
  }
];

const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenAuth }) => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
            5 Simple Steps
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">
            How AgroWaste Connect Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            From farm field to industrial boiler in 5 transparent steps. Zero burning, zero hassle.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-start justify-between gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                        <IconComponent className="w-9 h-9 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow-md">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground max-w-[150px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-primary/40 mx-2 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    {/* Step Number & Line */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                          <IconComponent className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow-md">
                          {index + 1}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 h-8 bg-primary/30 mt-2" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-base font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-sm font-semibold text-muted-foreground">Ready to monetize your stubble or source raw material?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onOpenAuth("farmer")}
              className="btn-primary-hero px-6 py-3 rounded-2xl text-xs font-bold"
            >
              Register as Farmer
            </button>
            <button
              onClick={() => onOpenAuth("buyer")}
              className="btn-secondary-hero px-6 py-3 rounded-2xl text-xs font-bold"
            >
              Register as Industry Buyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
