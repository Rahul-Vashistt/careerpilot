import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[96%] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            C
          </span>

          <span>CareerPilot</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a href="#features" className="transition hover:text-foreground">
            Features
          </a>

          <a href="#how-it-works" className="transition hover:text-foreground">
            How it works
          </a>

          <a href="#product" className="transition hover:text-foreground">
            Product
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/sign-in"
            className="hidden px-3 py-2 text-sm font-medium text-muted transition hover:text-foreground sm:block"
          >
            Sign in
          </a>

          <a
            href="/sign-up"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
