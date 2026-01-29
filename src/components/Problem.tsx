import { Flame, Wind, HeartPulse, Thermometer, Factory, Ban } from "lucide-react";

const problems = [
  {
    icon: Flame,
    title: "Farmers Burn Crop Waste",
    description: "After harvest, farmers burn leftover stalks and leaves. It's quick and cheap, but very harmful.",
    color: "secondary"
  },
  {
    icon: Wind,
    title: "Air Becomes Poisonous",
    description: "Burning creates thick smoke. This makes the air hard to breathe for millions of people.",
    color: "earth"
  },
  {
    icon: HeartPulse,
    title: "Health Problems",
    description: "Children, elderly, and farmers themselves get sick. Lung problems, eye issues, and allergies increase.",
    color: "destructive"
  },
  {
    icon: Thermometer,
    title: "Climate Gets Worse",
    description: "Burning releases harmful gases that heat up our planet. This makes weather unpredictable.",
    color: "earth"
  },
  {
    icon: Factory,
    title: "Industries Need This Waste",
    description: "Biofuel, biogas, compost, paper industries need crop waste as raw material, but can't find it easily.",
    color: "primary"
  },
  {
    icon: Ban,
    title: "No Easy Solution",
    description: "Farmers don't know where to sell waste. Buyers can't find farmers. Everyone loses.",
    color: "secondary"
  }
];

const Problem = () => {
  return (
    <section id="problem" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What is Crop Waste Burning?
          </h2>
          <p className="text-lg text-muted-foreground">
            Every year, farmers burn <strong>92 million tonnes</strong> of crop waste in India alone. 
            This causes <strong>massive pollution</strong> and <strong>wastes valuable resources</strong>.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="feature-card border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`icon-box${problem.color === 'earth' ? '-earth' : problem.color === 'secondary' ? '-accent' : ''} mb-4`}>
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Visual */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-3xl bg-destructive/5 border border-destructive/20">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                <Flame className="w-10 h-10 text-destructive" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                This is Preventable!
              </h3>
              <p className="text-muted-foreground text-lg">
                Crop waste is not garbage. It's a valuable resource worth <strong>₹6000+ crore</strong> every year. 
                Farmers just need a way to sell it, and industries need a way to buy it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
