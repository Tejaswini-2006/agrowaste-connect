import { Brain, Lightbulb, TrendingUp, Leaf, Zap } from "lucide-react";

const aiFeatures = [
  {
    icon: Brain,
    title: "Smart Waste Analysis",
    description: "AI looks at your crop waste photo and tells you exactly what it can be used for - compost, biofuel, cattle feed, or paper making."
  },
  {
    icon: TrendingUp,
    title: "Fair Price Suggestion",
    description: "Based on waste type, quantity, location, and market demand, AI suggests the best price. Farmers get fair value, buyers get good deals."
  },
  {
    icon: Leaf,
    title: "Pollution Score",
    description: "Every transaction shows how much CO2 emissions were prevented. See your real environmental impact!"
  }
];

const ImpactMeter = () => (
  <div className="p-6 rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
    <div className="flex items-center gap-3 mb-4">
      <Zap className="w-6 h-6" />
      <h4 className="font-semibold text-lg">Your Impact Score</h4>
    </div>
    
    <div className="space-y-4">
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm opacity-80">CO2 Prevented</span>
          <span className="text-sm font-bold">2.5 Tonnes</span>
        </div>
        <div className="h-3 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-accent rounded-full" />
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm opacity-80">Air Quality Saved</span>
          <span className="text-sm font-bold">85%</span>
        </div>
        <div className="h-3 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div className="h-full w-[85%] bg-success rounded-full" />
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm opacity-80">Waste Recycled</span>
          <span className="text-sm font-bold">500 kg</span>
        </div>
        <div className="h-3 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div className="h-full w-[60%] bg-secondary rounded-full" />
        </div>
      </div>
    </div>

    <p className="text-sm opacity-80 mt-4 text-center">
      🌱 You helped save 3 trees this month!
    </p>
  </div>
);

const AISection = () => {
  return (
    <section id="ai" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Smart Technology, Simple for You
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI does the hard work. You just need to take a photo and answer a few simple questions. 
              The system figures out the best use for your crop waste and connects you with buyers.
            </p>

            <div className="space-y-6">
              {aiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="icon-box w-12 h-12 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Impact Visualization */}
          <div className="space-y-6">
            <ImpactMeter />

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-success/10 border border-success/30 text-center">
                <Leaf className="w-8 h-8 text-success mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">₹500</p>
                <p className="text-sm text-muted-foreground">Per Tonne Value</p>
              </div>
              <div className="p-4 rounded-2xl bg-accent/10 border border-accent/30 text-center">
                <Lightbulb className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">3 Uses</p>
                <p className="text-sm text-muted-foreground">Suggested Options</p>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              * These are demo values. Real values depend on waste type and location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
