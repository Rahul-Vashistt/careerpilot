import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
     

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-24 pt-24 text-center lg:px-8 lg:pb-32 lg:pt-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted shadow-sm">
            <span className="h-2 w-2 rounded-full bg-success" />
            Your smarter career companion
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Your career,
            <span className="block text-primary">on autopilot.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Discover better opportunities, tailor your applications, track
            every job, and prepare for interviews — all from one intelligent
            career workspace.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/sign-up"
              className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary-hover sm:w-auto"
            >
              Start for free
            </a>

            <a
              href="#how-it-works"
              className="w-full rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold transition hover:bg-surface-hover sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            No credit card required
          </p>
        </div>
      </section>

      {/* Product Preview */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
          {/* Fake browser header */}
          <div className="flex items-center gap-2 border-b border-border px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-danger/70" />
            <span className="h-3 w-3 rounded-full bg-warning/70" />
            <span className="h-3 w-3 rounded-full bg-success/70" />

            <div className="ml-4 h-7 flex-1 rounded-md bg-background" />
          </div>

          {/* Dashboard preview */}
          <div className="grid min-h-[420px] grid-cols-12">
            <aside className="col-span-3 hidden border-r border-border p-5 md:block">
              <div className="mb-8 text-sm font-semibold">CareerPilot</div>

              <div className="space-y-2 text-sm">
                <div className="rounded-lg bg-primary/10 px-3 py-2 text-primary">
                  Dashboard
                </div>
                <div className="px-3 py-2 text-muted">Applications</div>
                <div className="px-3 py-2 text-muted">Jobs</div>
                <div className="px-3 py-2 text-muted">Resume</div>
                <div className="px-3 py-2 text-muted">Interview Prep</div>
              </div>
            </aside>

            <div className="col-span-12 p-6 md:col-span-9 lg:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">Good morning</p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    Your career overview
                  </h2>
                </div>

                <div className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground sm:block">
                  Add application
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["24", "Applications"],
                  ["8", "Interviews"],
                  ["3", "Offers"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border p-5"
                  >
                    <p className="text-3xl font-semibold">{number}</p>
                    <p className="mt-1 text-sm text-muted">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-border p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Application progress</p>
                    <p className="mt-1 text-sm text-muted">
                      Your applications this month
                    </p>
                  </div>

                  <span className="text-sm font-medium text-success">
                    +24%
                  </span>
                </div>

                <div className="mt-8 flex h-32 items-end gap-2">
                  {[35, 50, 42, 65, 55, 78, 90, 72, 100, 82, 95, 110].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-primary/70"
                        style={{ height: `${height}px` }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Everything in one place
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Stop managing your career across ten different tabs.
            </h2>

            <p className="mt-4 text-lg leading-8 text-muted">
              CareerPilot brings the entire job search process into one
              intelligent workspace.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Discover opportunities",
                description:
                  "Find relevant jobs and keep promising opportunities organized.",
                icon: "↗",
              },
              {
                title: "Track applications",
                description:
                  "Know exactly where every application stands without spreadsheets.",
                icon: "✓",
              },
              {
                title: "Tailor your resume",
                description:
                  "Match your resume and experience to the jobs you actually want.",
                icon: "✦",
              },
              {
                title: "Prepare for interviews",
                description:
                  "Practice smarter with preparation built around the role.",
                icon: "◎",
              },
              {
                title: "Understand your progress",
                description:
                  "See what's working and where your job search needs improvement.",
                icon: "↗",
              },
              {
                title: "Build your career",
                description:
                  "Turn your job search into a repeatable system for long-term growth.",
                icon: "◆",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-semibold text-primary">
                  {feature.icon}
                </div>

                <h3 className="mt-5 font-semibold">{feature.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              One system. Three simple steps.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              ["01", "Build your profile", "Tell CareerPilot about your skills, experience, and career goals."],
              ["02", "Find and apply", "Discover relevant opportunities and create stronger applications."],
              ["03", "Track and improve", "Track your progress, prepare for interviews, and learn from your results."],
            ].map(([number, title, description]) => (
              <div key={number}>
                <span className="text-sm font-semibold text-primary">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">{title}</h3>

                <p className="mt-3 leading-7 text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-secondary px-6 py-16 text-center text-secondary-foreground sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to take control of your career?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-secondary-foreground/70">
            Stop juggling applications and start building a career system that
            works for you.
          </p>

          <a
            href="/sign-up"
            className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
          >
            Get started for free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="font-semibold text-foreground">CareerPilot</div>

          <p>© 2026 CareerPilot. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}