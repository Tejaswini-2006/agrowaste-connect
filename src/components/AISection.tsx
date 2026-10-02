import React from "react";
import { Brain, Lightbulb, TrendingUp, Leaf, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AISectionProps {
  onOpenCalculator: () => void;
}

const aiFeatures = [
  {
    icon: Brain,
    title: "Smart Stubble Quality Analysis",
    description: "AI analyzes crop waste type, moisture content, and density to recommend the ideal commercial application - Bio-CNG, Pellets, Cattle Feed, or Eco-Paper."
  },
  {
    icon: TrendingUp,
    title: "Dynamic Fair Price Suggestion",
    description: "Based on real-time market demand from regional bio-energy plants and paper mills, AI suggests the optimum price per tonne so farmers get maximum income."
  },
  {
    icon: Leaf,
    title: "Emissions Prevention Tracking",
    description: "Every transaction calculates the exact metric tonnes of CO2 and particulate matter (PM2.5) kept out of the atmosphere."
  }
];

const ImpactMeter = () => (
  <div className="p-6 rounded-3xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-xl border border-primary-foreground/20">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-2xl bg-accent/20 flex items-center justify-center">
        <Zap className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h4 className="font-bold text-lg">Live Community Impact Dashboard</h4>
        <p className="text-xs text-primary-foreground/80">Aggregated real-time metrics across Punjab & Haryana</p>
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <div className="flex justify-between mb-1 text-xs">
          <span className="opacity-80">CO2 Emissions Prevented</span>
          <span className="font-bold">4,850 Metric Tonnes</span>
        </div>
        <div className="h-3 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div className="h-full w-4/5 bg-accent rounded-full" />
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1 text-xs">
          <span className="opacity-80">Stubble Burning Reductions</span>
          <span className="font-bold">88% in Target Districts</span>
        </div>
        <div className="h-3 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div className="h-full w-[88%] bg-success rounded-full" />
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1 text-xs">
          <span className="opacity-80">Farmer Income Generated</span>
          <span className="font-bold">₹1.42 Crore Disbursed</span>
        </div>
        <div className="h-3 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div className="h-full w-[72%] bg-secondary rounded-full" />
        </div>
      </div>
    </div>

    <p className="text-xs opacity-80 mt-4 text-center">
      🌱 Over 32,000 trees equivalent saved this harvest season!
    </p>
  </div>
);

const AISection: React.FC<AISectionProps> = ({ onOpenCalculator }) => {
  return (
    <section id="ai" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                AI-Powered Valuation Engine
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                Smart Technology, Simple for Farmers
              </h2>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our machine learning models analyze regional stubble supply, moisture, and transport distance to provide instant pricing valuation and buyer matching.
            </p>

            <div className="space-y-5">
              {aiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="icon-box w-12 h-12 flex-shrink-0 rounded-2xl">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Button
                onClick={onOpenCalculator}
                className="btn-primary-hero px-6 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-lg"
              >
                <Brain className="w-5 h-5 text-accent" /> Launch AI Pricing Calculator <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right - Impact Visualization */}
          <div className="space-y-6">
            <ImpactMeter />

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-3xl bg-success/10 border border-success/30 text-center">
                <Leaf className="w-7 h-7 text-success mx-auto mb-2" />
                <p className="text-2xl font-black text-foreground">₹1,800-₹2,400</p>
                <p className="text-xs text-muted-foreground font-medium">Avg Value / Tonne</p>
              </div>
              <div className="p-4 rounded-3xl bg-accent/10 border border-accent/30 text-center">
                <Lightbulb className="w-7 h-7 text-accent mx-auto mb-2" />
                <p className="text-2xl font-black text-foreground">5 Industries</p>
                <p className="text-xs text-muted-foreground font-medium">Buyer Matching Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
