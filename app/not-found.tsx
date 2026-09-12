import Link from "next/link";
import { LuArrowLeft, LuCompass } from "react-icons/lu";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <div className="career-grid absolute inset-0 opacity-40" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_72%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface">
            <LuCompass
              size={17}
              strokeWidth={1.7}
              className="text-muted"
            />
          </div>

          <span className="text-sm font-semibold tracking-tight">
            CareerPilot
          </span>
        </div>

        <div className="relative">
          <p className="select-none text-[9rem] font-semibold leading-none tracking-[-0.09em] text-foreground/5 sm:text-[13rem]">
            404
          </p>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              Off course
            </span>
          </div>
        </div>

        <div className="mt-2 max-w-lg">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Looks like you took a wrong turn.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-muted sm:text-base">
            This page doesn&apos;t exist, but your career trajectory is still
            on track. Let&apos;s get you back to where you need to be.
          </p>
        </div>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            <LuArrowLeft
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to CareerPilot
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-surface px-5 text-sm font-medium text-foreground transition-all duration-300 hover:border-border-hover hover:bg-surface-hover"
          >
            Go to dashboard
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          <span>YOUR CAREER. YOUR DIRECTION.</span>
          <span className="h-px w-8 bg-border" />
        </div>
      </div>
    </main>
  );
}