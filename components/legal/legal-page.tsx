import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

type LegalSection = {
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="font-geist text-lg font-semibold tracking-tight transition-opacity duration-200 hover:opacity-60"
          >
            CareerPilot
          </Link>

          <Link
            href="/"
            className="group inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            <span className="flex -translate-x-1 items-center opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
              <FiArrowLeft className="text-[15px]" />
            </span>

            <span className="-translate-x-2 transition-transform duration-300 ease-out group-hover:translate-x-0">
              Back to home
            </span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-14 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            CareerPilot
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-base leading-7 text-text-secondary sm:mt-6 sm:text-lg sm:leading-8">
            {description}
          </p>

          <p className="mt-5 text-sm text-muted">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="border-t border-border pt-7 sm:pt-8"
            >
              <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-6">
                <div>
                  <span className="text-xs font-medium text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="mt-2 text-lg font-semibold tracking-tight text-text-primary">
                    {section.title}
                  </h2>
                </div>

                <div className="text-[15px] leading-7 text-text-secondary [&_a]:font-medium [&_a]:text-text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-border [&_a]:transition-colors [&_a]:hover:decoration-text-primary [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-text-primary">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-border pt-8 sm:mt-20">
          <div className="flex flex-col justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} CareerPilot</p>

            <nav className="flex gap-5">
              <Link
                href="/privacy"
                className="transition-colors hover:text-text-primary"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-text-primary"
              >
                Terms
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}
