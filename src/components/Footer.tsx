import { Leaf, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">AgroWasteX</span>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              An AI-powered marketplace connecting farmers with industries to reuse crop waste. 
              Turning pollution into prosperity, one harvest at a time.
            </p>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
              🏆 Hackathon Project 2024
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#problem" className="text-background/70 hover:text-accent transition-colors">The Problem</a></li>
              <li><a href="#solution" className="text-background/70 hover:text-accent transition-colors">Our Solution</a></li>
              <li><a href="#features" className="text-background/70 hover:text-accent transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-background/70 hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#impact" className="text-background/70 hover:text-accent transition-colors">Impact</a></li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Team</h3>
            <p className="text-background/70 mb-4">
              Built with ❤️ by passionate developers and sustainability enthusiasts.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 mb-8">
          <div className="flex items-start gap-3">
            <ExternalLink className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-background">This is a Demo</p>
              <p className="text-sm text-background/70">
                This website is a hackathon MVP. No real transactions or payments are processed. 
                Built to demonstrate the concept and potential of AgroWasteX.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2024 AgroWasteX. Made for Hackathon.
          </p>
          <p className="text-sm text-background/60">
            🌱 For a cleaner, greener future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
