import { Users, Factory, Leaf, Building2 } from "lucide-react";

const impactCards = [
  {
    icon: Users,
    title: "For Farmers",
    color: "primary",
    benefits: [
      "Extra income from waste",
      "No burning needed",
      "Easy to use app",
      "Voice support in local language"
    ],
    stat: "₹5000+",
    statLabel: "Potential extra income per harvest"
  },
  {
    icon: Factory,
    title: "For Industries",
    color: "earth",
    benefits: [
      "Reliable raw material supply",
      "Lower sourcing costs",
      "Quality verified waste",
      "Direct from farmers"
    ],
    stat: "30%",
    statLabel: "Cost savings on raw materials"
  },
  {
    icon: Leaf,
    title: "For Environment",
    color: "success",
    benefits: [
      "Less air pollution",
      "Reduced CO2 emissions",
      "Better soil health",
      "Cleaner cities"
    ],
    stat: "92M",
    statLabel: "Tonnes of waste can be saved"
  },
  {
    icon: Building2,
    title: "For Society",
    color: "accent",
    benefits: [
      "Healthier communities",
      "Rural employment",
      "Sustainable growth",
      "Government goals achieved"
    ],
    stat: "10Cr+",
    statLabel: "People benefit from clean air"
  }
];

const Impact = () => {
  return (
    <section id="impact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
            Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everyone Wins
          </h2>
          <p className="text-lg text-muted-foreground">
            AgroWasteX creates value for farmers, industries, environment, and society. 
            It's a win-win-win-win solution.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactCards.map((card, index) => {
            const IconComponent = card.icon;
            const bgClass = card.color === 'primary' ? 'icon-box' : 
                           card.color === 'earth' ? 'icon-box-earth' : 
                           card.color === 'accent' ? 'icon-box-accent' : 'icon-box';
            
            return (
              <div 
                key={index}
                className="feature-card border border-border/50 flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${bgClass} mb-4`}>
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {card.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-2xl font-bold text-foreground">{card.stat}</p>
                  <p className="text-sm text-muted-foreground">{card.statLabel}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Impact Numbers */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stat-card">
            <p className="text-3xl md:text-4xl font-bold mb-1">92M</p>
            <p className="text-sm opacity-80">Tonnes Saved</p>
          </div>
          <div className="stat-card">
            <p className="text-3xl md:text-4xl font-bold mb-1">₹6000Cr</p>
            <p className="text-sm opacity-80">Value Created</p>
          </div>
          <div className="stat-card">
            <p className="text-3xl md:text-4xl font-bold mb-1">50M+</p>
            <p className="text-sm opacity-80">Farmers Helped</p>
          </div>
          <div className="stat-card">
            <p className="text-3xl md:text-4xl font-bold mb-1">30%</p>
            <p className="text-sm opacity-80">Less Pollution</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
