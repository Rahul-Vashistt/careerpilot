import { FaGithub, FaLinkedinIn, FaArrowUp, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-block text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
            >
              CareerPilot<span className="text-muted-foreground">.</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              CareerPilot helps you organize your job search, track
              applications, and stay focused on landing your next opportunity.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/Rahul-Vashistt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all duration-300 hover:border-border-hover hover:bg-surface-hover hover:text-foreground"
              >
                <FaGithub
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all duration-300 hover:border-border-hover hover:bg-surface-hover hover:text-foreground"
              >
                <FaLinkedinIn
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-muted">
            <h3 className="text-sm font-semibold text-foreground">
              Navigation
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="#features"
                className="w-fit text-sm transition-colors duration-200 hover:text-foreground"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="w-fit text-sm  transition-colors duration-200 hover:text-foreground"
              >
                How it works
              </a>

              <a
                href="#problem"
                className="w-fit text-sm transition-colors duration-200 hover:text-foreground"
              >
                Problem
              </a>

              <a
                href="#solution"
                className="w-fit text-sm transition-colors duration-200 hover:text-foreground"
              >
                Solution
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Let&apos;s connect
            </h3>

            <p className="mt-5 text-sm leading-6 text-muted">
              Have an idea, project, or opportunity? I&apos;d love to hear about
              it.
            </p>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Rahul-Vashistt"
              className="group mt-5 inline-flex items-center text-sm font-semibold text-foreground"
            >
              Get in touch
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CareerPilot. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <span>Built with</span>
            <FaHeart size={10} className="mx-1" />
            <span>Next & Tailwind CSS</span>
          </div>

          <a
            href="#"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
          >
            Back to top
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border transition-all duration-300 group-hover:-translate-y-1 group-hover:border-border-hover group-hover:bg-surface-hover">
              <FaArrowUp size={10} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
