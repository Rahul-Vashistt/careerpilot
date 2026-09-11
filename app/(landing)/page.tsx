import Features from "@/components/landing/Features/Features";
import Hero from "@/components/landing/Hero/Hero";


const steps = [
  {
    number: "01",
    title: "Build your profile",
    description:
      "Tell CareerPilot about your skills, experience, and the direction you want your career to take.",
  },
  {
    number: "02",
    title: "Find and apply",
    description:
      "Discover relevant opportunities and create stronger, more targeted applications.",
  },
  {
    number: "03",
    title: "Track and improve",
    description:
      "Track your progress, prepare for interviews, and learn from your results.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <Hero />

      <Features />


      {/* =====================================================
          How It Works
          ===================================================== */}

      <section id="how-it-works" className="scroll-mt-20">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              One system. Three simple steps.
            </h2>

          </div>


          <div className="relative mt-16 grid gap-12 md:grid-cols-3">

            {/* Connecting line */}

            <div className="absolute left-[16.66%] right-[16.66%] top-4 hidden h-px bg-border md:block" />

            {steps.map((step) => (

              <div
                key={step.number}
                className="relative"
              >

                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-primary">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-sm leading-7 text-muted">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="px-6 pb-24 lg:px-8">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-secondary px-6 py-16 text-center text-secondary-foreground sm:px-12">

          {/* Subtle brand glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Start moving forward
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Ready to take control of your career?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-secondary-foreground/60 sm:text-base">
              Stop juggling applications and start building a career system
              that works for you.
            </p>

            <a
              href="/sign-up"
              className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
            >
              Get started for free
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          Footer
          ===================================================== */}

      <footer className="border-t border-border">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <div className="flex items-center gap-2 font-semibold text-foreground">

            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-primary-foreground">
              C
            </span>

            CareerPilot

          </div>

          <p>
            © 2026 CareerPilot. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}