import React from "react";
import Link from "next/link";

const features = [
  {
    title: "Discover opportunities",
    description:
      "Find relevant roles and keep promising opportunities organized in one place.",
    icon: "↗",
  },
  {
    title: "Track applications",
    description:
      "Know exactly where every application stands without spreadsheets or scattered notes.",
    icon: "✓",
  },
  {
    title: "Tailor your resume",
    description:
      "Match your experience to the roles you actually want and build stronger applications.",
    icon: "✦",
  },
  {
    title: "Prepare for interviews",
    description:
      "Practice around the role, company, and skills that matter for your next interview.",
    icon: "◎",
  },
  {
    title: "Understand your progress",
    description:
      "See what's working, what's not, and where your job search needs improvement.",
    icon: "↗",
  },
  {
    title: "Build your career",
    description:
      "Turn your job search into a repeatable system for long-term career growth.",
    icon: "◆",
  },
];

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

      {/* =====================================================
          Hero
          ===================================================== */}

      <section className="relative overflow-hidden">

        {/* Subtle grid */}

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 career-grid" />

        {/* Brand glow */}

        <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center lg:px-8 lg:pb-28 lg:pt-32">

          {/* Eyebrow */}

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-sm text-muted shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Your intelligent career workspace
          </div>


          {/* Heading */}

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-text-primary sm:text-6xl lg:text-8xl lg:leading-[0.95]">

            Your career has a direction.

            <span className="mt-3 block text-primary">
              Let CareerPilot guide it.
            </span>

          </h1>


          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Discover opportunities, tailor your applications, track your
            progress, and prepare for interviews — all from one intelligent
            career workspace.
          </p>


          {/* Actions */}

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href="/sign-up"
              className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary-hover sm:w-auto"
            >
              Start for free
            </a>

            <a
              href="#how-it-works"
              className="w-full rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-border-hover hover:bg-surface-hover sm:w-auto"
            >
              See how it works
            </a>

          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            No credit card required
          </p>

        </div>
      </section>


      {/* =====================================================
          Product Preview
          ===================================================== */}

      <section
        id="product"
        className="mx-auto max-w-7xl scroll-mt-20 px-6 pb-28 lg:px-8"
      >

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">

          {/* Browser header */}

          <div className="flex items-center gap-2 border-b border-border bg-surface-muted/50 px-5 py-3.5">

            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />

            <div className="ml-4 flex h-7 flex-1 items-center rounded-md border border-border bg-background px-3">
              <span className="text-[10px] text-muted-foreground">
                app.careerpilot.com
              </span>
            </div>

          </div>


          {/* Dashboard */}

          <div className="grid min-h-125 grid-cols-12">

            {/* Sidebar */}

            <aside className="col-span-3 hidden border-r border-border bg-surface-muted/30 p-5 md:block">

              <div className="mb-8 flex items-center gap-2 text-sm font-semibold">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-primary-foreground">
                  C
                </span>

                CareerPilot
              </div>


              <div className="space-y-1 text-sm">

                <div className="rounded-md bg-primary/10 px-3 py-2 font-medium text-primary">
                  Dashboard
                </div>

                <div className="px-3 py-2 text-muted">
                  Applications
                </div>

                <div className="px-3 py-2 text-muted">
                  Jobs
                </div>

                <div className="px-3 py-2 text-muted">
                  Resume
                </div>

                <div className="px-3 py-2 text-muted">
                  Interview Prep
                </div>

              </div>


              {/* Sidebar bottom */}

              <div className="mt-10 border-t border-border pt-5">

                <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Career progress
                </p>

                <div className="mt-3 px-3">

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted">
                      Profile strength
                    </span>

                    <span className="font-medium text-foreground">
                      82%
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                    <div className="h-full w-[82%] rounded-full bg-primary" />
                  </div>

                </div>

              </div>

            </aside>


            {/* Main dashboard */}

            <div className="col-span-12 p-6 md:col-span-9 lg:p-8">

              {/* Header */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs text-muted">
                    Good morning
                  </p>

                  <h2 className="mt-1 text-xl font-semibold tracking-tight">
                    Your career overview
                  </h2>

                </div>

                <button
                  type="button"
                  className="hidden rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground sm:block"
                >
                  Add application
                </button>

              </div>


              {/* Stats */}

              <div className="mt-7 grid gap-3 sm:grid-cols-3">

                {[
                  ["24", "Applications"],
                  ["8", "Interviews"],
                  ["3", "Offers"],
                ].map(([number, label], index) => (

                  <div
                    key={label}
                    className="rounded-xl border border-border bg-surface p-5"
                  >

                    <div className="flex items-start justify-between">

                      <p className="text-2xl font-semibold tracking-tight">
                        {number}
                      </p>

                      {index === 2 && (
                        <span className="rounded-md bg-success/10 px-2 py-1 text-[10px] font-medium text-success">
                          +2 this month
                        </span>
                      )}

                    </div>

                    <p className="mt-1 text-xs text-muted">
                      {label}
                    </p>

                  </div>

                ))}

              </div>


              {/* Application progress */}

              <div className="mt-4 rounded-xl border border-border bg-surface p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-medium">
                      Application activity
                    </p>

                    <p className="mt-1 text-xs text-muted">
                      Your applications this month
                    </p>

                  </div>

                  <span className="rounded-md bg-success/10 px-2 py-1 text-xs font-medium text-success">
                    +24%
                  </span>

                </div>


                {/* Chart */}

                <div className="mt-8 flex h-32 items-end gap-2">

                  {[35, 50, 42, 65, 55, 78, 90, 72, 100, 82, 95, 110].map(
                    (height, index) => (

                      <div
                        key={index}
                        className="flex-1 rounded-t-sm bg-primary/70 transition hover:bg-primary"
                        style={{ height: `${height}px` }}
                      />

                    ),
                  )}

                </div>

                <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>

              </div>


              {/* Recent application */}

              <div className="mt-4 rounded-xl border border-border bg-surface p-5">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium">
                      Recent application
                    </p>

                    <p className="mt-1 text-xs text-muted">
                      Software Engineer · Acme
                    </p>
                  </div>

                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
                    Interview
                  </span>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          Features
          ===================================================== */}

      <section
        id="features"
        className="scroll-mt-20 border-y border-border bg-surface"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Everything in one place
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Stop managing your career across ten different tabs.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              CareerPilot brings the entire job search process into one
              intelligent workspace.
            </p>

          </div>


          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => (

              <div
                key={feature.title}
                className="group bg-surface p-7 transition hover:bg-surface-hover"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-muted text-sm font-semibold text-primary transition group-hover:border-primary/20 group-hover:bg-primary/10">
                  {feature.icon}
                </div>

                <h3 className="mt-6 font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


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