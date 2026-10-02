import { 
  UserPlus, Camera, Brain, Mic, Truck, CreditCard,
  Store, Filter, ShoppingCart, Star, 
  RefreshCw, Shield, MapPin, BarChart3
} from "lucide-react";

const farmerFeatures = [
  { icon: UserPlus, title: "Easy Registration", desc: "Sign up with just phone number and OTP" },
  { icon: Camera, title: "Waste Listing", desc: "Take photo, add quantity, list in seconds" },
  { icon: Brain, title: "AI Suggestions", desc: "Get best reuse option and fair price" },
  { icon: Mic, title: "Voice Support", desc: "Use voice in Hindi, Punjabi, Tamil, more" },
  { icon: Truck, title: "Pickup Request", desc: "Schedule pickup from your field" },
  { icon: CreditCard, title: "Payment Tracking", desc: "See all payments in one place" },
];

const buyerFeatures = [
  { icon: Store, title: "Buyer Account", desc: "Register your business easily" },
  { icon: Filter, title: "Smart Search", desc: "Filter by waste type, location, quantity" },
  { icon: Brain, title: "AI Match", desc: "Get recommendations based on your needs" },
  { icon: ShoppingCart, title: "Quick Order", desc: "Order with one click, track status" },
  { icon: Star, title: "Quality Rating", desc: "Rate waste quality, build trust" },
];

const platformFeatures = [
  { icon: RefreshCw, title: "Real-time Matching", desc: "Instant connection between farmer and buyer" },
  { icon: Shield, title: "Secure Payments", desc: "Protected transactions (demo mode)" },
  { icon: MapPin, title: "Order Tracking", desc: "Track pickup and delivery live" },
  { icon: BarChart3, title: "Analytics", desc: "See your impact and earnings" },
];

const FeatureCard = ({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/50 card-hover">
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple tools for farmers. Powerful features for industries. Smart platform for everyone.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Farmer Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-box w-12 h-12">
                <UserPlus className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">For Farmers</h3>
                <p className="text-sm text-muted-foreground">Simple & easy to use</p>
              </div>
            </div>
            <div className="space-y-3">
              {farmerFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Buyer Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-box-earth w-12 h-12">
                <Store className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">For Buyers</h3>
                <p className="text-sm text-muted-foreground">Find what you need</p>
              </div>
            </div>
            <div className="space-y-3">
              {buyerFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Platform Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-box-accent w-12 h-12">
                <RefreshCw className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Platform</h3>
                <p className="text-sm text-muted-foreground">Smart & secure</p>
              </div>
            </div>
            <div className="space-y-3">
              {platformFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
