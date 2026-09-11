const navItems = [
  { label: "Problem", href: "#problem"},
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
];

export default function Header() {
  
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[96%] items-center justify-between px-6 lg:px-8">
         <a
      href="#"
      className="flex items-center gap-2 font-semibold tracking-tight"
    >
      <span className="font-geist text-2xl font-bold tracking-tighter">
        CareerPilot
      </span>
    </a>

    <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-text-secondary hover:text-text-primary transition-all duration-100 hover:font-semibold hover:tracking-wide"
        >
          {item.label}
        </a>
      ))}
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
}
