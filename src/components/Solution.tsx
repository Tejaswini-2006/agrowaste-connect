import { Smartphone, Brain, Search, Truck, Wallet, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Smartphone,
    title: "Farmer Lists Waste",
    description: "Farmer opens app, takes photo of crop waste, enters quantity. Voice support in local language available.",
    color: "primary"
  },
  {
    number: "2",
    icon: Brain,
    title: "AI Suggests Best Use",
    description: "Our AI analyzes waste type and suggests: Compost? Biofuel? Cattle feed? Shows best price too.",
    color: "accent"
  },
  {
    number: "3",
    icon: Search,
    title: "Buyer Finds & Orders",
    description: "Industries, compost units, biogas plants search and find the waste they need. Place order in one click.",
    color: "secondary"
  },
  {
    number: "4",
    icon: Truck,
    title: "Pickup Arranged",
    description: "Logistics partner picks up waste from farmer's field. Real-time tracking for both parties.",
    color: "earth"
  },
  {
    number: "5",
    icon: Wallet,
    title: "Payment to Farmer",
    description: "Once delivered, money goes directly to farmer's bank account. Safe and secure.",
    color: "success"
  }
];

const Solution = () => {
  return (
    <section id="solution" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            AgroWasteX Makes It Simple
          </h2>
          <p className="text-lg text-muted-foreground">
            We connect farmers who have crop waste with industries who need it. 
            <strong> AI helps find the best use and price.</strong> Everyone wins.
          </p>
        </div>

        {/* Step by Step Flow */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary via-accent to-success rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const bgClass = step.color === 'primary' ? 'icon-box' : 
                             step.color === 'accent' ? 'icon-box-accent' : 
                             step.color === 'earth' ? 'icon-box-earth' : 'icon-box';
              
              return (
                <div 
                  key={index}
                  className="relative flex flex-col items-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step Number */}
                  <div className="relative z-10 mb-4">
                    <div className={`${bgClass} relative`}>
                      <IconComponent className="w-7 h-7 text-primary-foreground" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="feature-card border border-border/50 flex-1 w-full">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (Mobile & Tablet) */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-primary mt-4 lg:hidden" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Summary */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/20">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">No Burning Needed</h4>
              <p className="text-sm text-muted-foreground">Farmers get paid to NOT burn waste</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-accent/10 border border-accent/30">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">AI-Powered Pricing</h4>
              <p className="text-sm text-muted-foreground">Fair prices for farmers, good deals for buyers</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-success/10 border border-success/30">
            <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">Easy to Use</h4>
              <p className="text-sm text-muted-foreground">Voice support, local language, simple design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
