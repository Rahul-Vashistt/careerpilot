import { features } from "./features";

export default function Features() {
  return (
    <>
      <section
        id="features"
        className="scroll-mt-20 border-t border-border"
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
              workspace.
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
    </>
  );
}
