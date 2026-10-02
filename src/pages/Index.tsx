import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Marketplace } from "@/components/Marketplace";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import Impact from "@/components/Impact";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import Pitch from "@/components/Pitch";
import Footer from "@/components/Footer";

import { AuthModal } from "@/components/AuthModals";
import { WasteCalculatorModal } from "@/components/WasteCalculatorModal";
import { VoiceAssistantModal } from "@/components/VoiceAssistantModal";
import { OrderTrackerModal } from "@/components/OrderTrackerModal";

const Index = () => {
  // Modal States
  const [authModalRole, setAuthModalRole] = useState<"farmer" | "buyer" | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);

  // Authenticated User State (Demo)
  const [currentUser, setCurrentUser] = useState<{ name: string; role: "farmer" | "buyer" } | null>(null);

  const handleOpenAuth = (role: "farmer" | "buyer") => {
    setAuthModalRole(role);
  };

  const handleAuthSuccess = (user: { name: string; role: "farmer" | "buyer"; phone: string }) => {
    setCurrentUser(user);
    setAuthModalRole(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Navbar */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenVoice={() => setIsVoiceOpen(true)}
        currentUser={currentUser}
      />

      <main className="space-y-4">
        {/* Hero Section */}
        <Hero
          onOpenAuth={handleOpenAuth}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* Live Marketplace */}
        <Marketplace />

        {/* Problem */}
        <Problem />

        {/* Solution */}
        <Solution />

        {/* Features */}
        <Features />

        {/* AI Valuation Section */}
        <AISection onOpenCalculator={() => setIsCalculatorOpen(true)} />

        {/* How It Works */}
        <HowItWorks onOpenAuth={handleOpenAuth} />

        {/* Impact */}
        <Impact />

        {/* Tech Stack */}
        <TechStack />

        {/* Pitch */}
        <Pitch />
      </main>

      {/* Footer */}
      <Footer />

      {/* INTERACTIVE MODALS */}
      {authModalRole && (
        <AuthModal
          isOpen={!!authModalRole}
          onClose={() => setAuthModalRole(null)}
          defaultRole={authModalRole}
          onSuccess={handleAuthSuccess}
        />
      )}

      <WasteCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <VoiceAssistantModal
        isOpen={isVoiceOpen}
        onClose={() => setIsVoiceOpen(false)}
      />

      <OrderTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
      />
    </div>
  );
};

export default Index;
