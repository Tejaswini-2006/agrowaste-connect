import { AlertTriangle, Lightbulb, TrendingUp, Sparkles, Quote } from "lucide-react";

const Pitch = () => {
  return (
    <section id="pitch" className="section-padding bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            🏆 Hackathon Pitch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our 1-Minute Story
          </h2>
          <p className="text-lg opacity-90">
            The problem, solution, impact, and what makes us different - in 60 seconds.
          </p>
        </div>

        {/* Pitch Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-in">
            <AlertTriangle className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Problem</h3>
            <p className="opacity-90">
              92 million tonnes of crop waste burnt every year. Causes pollution, wastes money, harms health.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Lightbulb className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Solution</h3>
            <p className="opacity-90">
              AI marketplace connecting farmers with industries. Waste becomes income, not smoke.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <TrendingUp className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Impact</h3>
            <p className="opacity-90">
              ₹6000Cr+ value created. 30% less pollution. 50M+ farmers can benefit.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Sparkles className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="opacity-90">
              AI-powered matching, voice support in local languages, real-time logistics integration.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic">
            "We're not just solving a waste problem. We're creating a circular economy where everyone wins."
          </blockquote>
          <p className="font-semibold">— Team AgroWasteX</p>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
