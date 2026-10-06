import Footer from "@/components/landing/Footer";
import CTA from "@/components/landing/CTA/CTA";
import Features from "@/components/landing/Features/Features"
import Hero from "@/components/landing/Hero/Hero";
import HowItWorks from "@/components/landing/HowItWorks/HowItWorks";
import Problem from "@/components/landing/Problem/Problem";
import Header from "@/components/landing/Header";
import { Reveal } from "@/components/Animation/Reveal";
import CustomCursor from "@/components/cursor/CustomCursor";

export default function LandingPage() {
  return (
    <>
      <CustomCursor />
      
      <main className="custom-cursor-page min-h-screen bg-background text-foreground">
        <Header />
        <Hero />

        <Reveal>
          <Problem />
        </Reveal>

        <Reveal>
          <Features />
        </Reveal>

        <Reveal>
          <HowItWorks />
        </Reveal>

        <Reveal>
          <CTA />
        </Reveal>

        <Reveal>
          <Footer />
        </Reveal>
      </main>
    </>
  );
}
