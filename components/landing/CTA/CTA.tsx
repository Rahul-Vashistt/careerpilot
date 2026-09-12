export default function CTA() {
  return (
    <section
      id="solution"
      className="border-t border-border bg-surface px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="career-grid relative overflow-hidden rounded-3xl border border-border bg-background px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Start moving forward
            </p>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-5xl">
              Take control of your
              <br className="hidden sm:block" /> career journey.
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Stop juggling applications and start building a career system that
              keeps everything in one place.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/sign-up"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
              >
                Get started for free
              </a>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
