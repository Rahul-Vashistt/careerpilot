import Footer from "@/components/landing/Footer";
import CTA from "@/components/landing/CTA/CTA";
import Features from "@/components/landing/Features/Features";
import Hero from "@/components/landing/Hero/Hero";
import HowItWorks from "@/components/landing/HowItWorks/HowItWorks";
import Problem from "@/components/landing/Problem/Problem";
import Header from "@/components/landing/Header";
import { Reveal } from "@/components/Animation/Reveal";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
  );
}
