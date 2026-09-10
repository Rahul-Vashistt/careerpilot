import ProductShowcase from "./ProductShowcase";

import { GoArrowRight } from "react-icons/go";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 career-grid" />

      <div className="pointer-events-none absolute left-[42%] top-20 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto grid max-w-[90%] items-center gap-12 px-6 pb-24 pt-20 xl:grid-cols-[0.90fr_1.10fr] justify-center xl:px-8 xl:pb-32 xl:pt-28">
        {/* Left */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-sm text-muted shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            One workspace for your career
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-[-0.045em] text-foreground sm:text-6xl xl:text-[4.5rem] xl:leading-[0.98]">
            Your career has a direction.
            <span className="mt-2 block">
              Let{" "}
              <span className="font-serif font-normal text-[1.05em] italic text-primary">
                CareerPilot
              </span>{" "}
              guide it.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            Discover opportunities, tailor your applications, track your
            progress, and prepare for interviews — all from one
            career workspace.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/sign-up"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors duration-300 hover:bg-primary-hover"
            >
              Get Started
              <span className="relative flex h-5 w-0 items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-5">
                <GoArrowRight
                  className="
                    absolute left-0 h-5 w-5
                    -translate-x-3 opacity-0
                    transition-all duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />
              </span>
            </Link>

            <a
              href="https://github.com/Rahul-Vashistt/careerpilot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-border bg-surface px-5 py-3.5 text-sm font-semibold text-foreground transition hover:border-border-hover hover:bg-surface-hover"
            >
              View GitHub
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            From first application to next opportunity.
          </p>
        </div>

        {/* Right — Product */}
        <div className="relative xl:translate-x-4 min-w-0">
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
}
