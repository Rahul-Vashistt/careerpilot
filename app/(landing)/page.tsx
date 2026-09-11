import Footer from "@/components/landing/Footer";
import CTA from "@/components/landing/CTA/CTA";
import Features from "@/components/landing/Features/Features";
import Hero from "@/components/landing/Hero/Hero";
import HowItWorks from "@/components/landing/HowItWorks/HowItWorks";
import Problem from "@/components/landing/Problem/Problem";


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <CTA />


      {/* =====================================================
          Footer
          ===================================================== */}
          <Footer/>

    </main>
  );
}