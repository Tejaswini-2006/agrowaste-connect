import React from "react";
import { Leaf, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground shadow-md">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight">
                AgroWaste<span className="text-accent">Connect</span>
              </span>
            </div>
            <p className="text-background/70 text-xs md:text-sm max-w-md leading-relaxed">
              An AI-powered marketplace connecting farmers with industries to monetize agricultural crop waste, 
              eliminate stubble burning, and drive a sustainable circular economy.
            </p>
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-bold">
              🌱 AgroWaste Connect Platform
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm tracking-wider uppercase text-background">Platform Navigation</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#marketplace" className="text-background/70 hover:text-accent transition-colors font-medium">Live Marketplace</a></li>
              <li><a href="#problem" className="text-background/70 hover:text-accent transition-colors font-medium">The Stubble Problem</a></li>
              <li><a href="#solution" className="text-background/70 hover:text-accent transition-colors font-medium">Our AI Solution</a></li>
              <li><a href="#features" className="text-background/70 hover:text-accent transition-colors font-medium">Features</a></li>
              <li><a href="#how-it-works" className="text-background/70 hover:text-accent transition-colors font-medium">5-Step Process</a></li>
              <li><a href="#impact" className="text-background/70 hover:text-accent transition-colors font-medium">Environmental Impact</a></li>
            </ul>
          </div>

          {/* Team / Author */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm tracking-wider uppercase text-background">Developed By</h3>
            <p className="text-background/70 text-xs leading-relaxed">
              Developed by <strong className="text-background font-semibold">Tejaswini Rakhunde</strong> for clean air and farmer prosperity.
            </p>
            <div className="flex gap-2.5 pt-1">
              <a
                href="https://github.com/Tejaswini-2006/agrowaste-connect"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@agrowasteconnect.org"
                className="w-9 h-9 rounded-xl bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                title="Contact Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Platform Notice */}
        <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 mb-8">
          <div className="flex items-start gap-3">
            <ExternalLink className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-xs text-background">AgroWaste Connect MVP Marketplace</p>
              <p className="text-xs text-background/70 mt-0.5">
                Demonstrating direct farmer-to-industry stubble trading, AI quality pricing, and automated field logistics.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-background/60">
          <p>© 2026 AgroWaste Connect by Tejaswini Rakhunde. All rights reserved.</p>
          <p className="flex items-center gap-1">
            🌱 Stop Burning • Start Monetizing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
