import Image from "next/image";

export default function Problem() {
  return (
    <section id="problem" className="scroll-mt-20 border-y border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 sm:py-24 lg:flex-row lg:gap-16 lg:px-8">
        {/* Content */}
        <div className="flex-1">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center rounded-full bg-surface-muted px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-danger">
            The Problem
          </div>

          {/* Heading */}
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Job hunting shouldn&apos;t
            <br />
            feel like chaos.
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-xl text-sm leading-7 tracking-tight text-muted sm:text-base sm:leading-8">
            You&apos;re juggling multiple applications, scattered logins,
            missed follow-ups, and losing track of important details. It&apos;s
            stressful, time-consuming, and easy to fall behind.
          </p>
        </div>

        {/* Visual */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src="/landing-userIssues.png"
            alt="Common challenges faced during a job search"
            width={700}
            height={500}
            className="h-auto w-full max-w-lg object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
