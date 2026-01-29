import { Smartphone, Brain, Handshake, Truck, Banknote, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Farmer Lists",
    description: "Open app, add waste details",
    color: "primary"
  },
  {
    icon: Brain,
    title: "AI Analyzes",
    description: "Best use & price suggested",
    color: "accent"
  },
  {
    icon: Handshake,
    title: "Buyer Orders",
    description: "Industry places order",
    color: "secondary"
  },
  {
    icon: Truck,
    title: "Pickup Done",
    description: "Waste collected from farm",
    color: "earth"
  },
  {
    icon: Banknote,
    title: "Payment Sent",
    description: "Money to farmer's account",
    color: "success"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            5 Simple Steps
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From farm to industry in 5 easy steps. No complex process, no middlemen, no hassle.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                        <IconComponent className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-md">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-[140px]">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-primary mx-2 flex-shrink-0" />
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
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                          <IconComponent className="w-8 h-8 text-primary-foreground" />
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
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
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
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ready to get started?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary-hero">
              Register as Farmer
            </a>
            <a href="#" className="btn-secondary-hero">
              Register as Buyer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
