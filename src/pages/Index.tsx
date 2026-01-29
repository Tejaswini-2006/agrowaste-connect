import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import Impact from "@/components/Impact";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import Pitch from "@/components/Pitch";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <AISection />
        <HowItWorks />
        <Impact />
        <TechStack />
        <Pitch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
