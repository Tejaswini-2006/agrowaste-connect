import { Code, Server, Database, Brain, MapPin } from "lucide-react";

const techItems = [
  {
    icon: Code,
    title: "Frontend",
    tech: "React / Flutter",
    description: "Beautiful, fast, works on any device"
  },
  {
    icon: Server,
    title: "Backend",
    tech: "Node.js",
    description: "Reliable server for all operations"
  },
  {
    icon: Database,
    title: "Database",
    tech: "MongoDB",
    description: "Stores all user and waste data"
  },
  {
    icon: Brain,
    title: "AI Engine",
    tech: "Python ML",
    description: "Smart waste analysis & pricing"
  },
  {
    icon: MapPin,
    title: "Logistics",
    tech: "Maps API",
    description: "Location & route optimization"
  }
];

const TechStack = () => {
  return (
    <section id="tech" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-earth/10 text-earth text-sm font-medium mb-4">
            Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built with Modern Tech
          </h2>
          <p className="text-lg text-muted-foreground">
            We use reliable, scalable technology to ensure the platform works smoothly for millions of users.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {techItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="feature-card border border-border/50 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-primary font-medium text-sm mb-1">{item.tech}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
