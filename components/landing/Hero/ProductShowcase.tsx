export default function ProductShowcase() {
  return (
    <div
      id="product"
      className="scroll-mt-20 w-full"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
        {/* Browser header */}

        <div className="flex items-center gap-2 border-b border-border bg-surface-muted/50 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />

          <div className="ml-4 flex h-7 flex-1 items-center rounded-md border border-border bg-background px-3">
            <span className="text-[10px] text-muted-foreground">
              app.careerpilot.com
            </span>
          </div>
        </div>

        {/* Dashboard */}

        <div className="grid min-h-125 grid-cols-12">
          {/* Sidebar */}

          <aside className="col-span-3 hidden border-r border-border bg-surface-muted/30 p-5 md:block">
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-primary-foreground">
                C
              </span>
              CareerPilot
            </div>

            <div className="space-y-1 text-sm">
              <div className="rounded-md bg-primary/10 px-3 py-2 font-medium text-primary">
                Dashboard
              </div>

              <div className="px-3 py-2 text-muted">Applications</div>

              <div className="px-3 py-2 text-muted">Jobs</div>

              <div className="px-3 py-2 text-muted">Resume</div>

              <div className="px-3 py-2 text-muted">Interview Prep</div>
            </div>

            {/* Sidebar bottom */}

            <div className="mt-10 border-t border-border pt-5">
              <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Career progress
              </p>

              <div className="mt-3 px-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted">Profile strength</span>

                  <span className="font-medium text-foreground">82%</span>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                  <div className="h-full w-[82%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </aside>

          {/* Main dashboard */}

          <div className="col-span-12 p-6 md:col-span-9 lg:p-8">
            {/* Header */}

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted">Good morning</p>

                <h2 className="mt-1 text-xl font-semibold tracking-tight">
                  Your career overview
                </h2>
              </div>

              <button
                type="button"
                className="hidden rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground sm:block"
              >
                Add application
              </button>
            </div>

            {/* Stats */}

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["24", "Applications"],
                ["8", "Interviews"],
                ["3", "Offers"],
              ].map(([number, label], index) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-2xl font-semibold tracking-tight">
                      {number}
                    </p>

                    {index === 2 && (
                      <span className="rounded-md bg-success/10 px-2 py-1 text-[10px] font-medium text-success 2xl:translate-x-0 translate-x-3 ">
                        +2 this month
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>

            {/* Application progress */}

            <div className="mt-4 rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Application activity</p>

                  <p className="mt-1 text-xs text-muted">
                    Your applications this month
                  </p>
                </div>

                <span className="rounded-md bg-success/10 px-2 py-1 text-xs font-medium text-success">
                  +24%
                </span>
              </div>

              {/* Chart */}

              <div className="mt-8 flex h-32 items-end gap-2">
                {[35, 50, 42, 65, 55, 78, 90, 72, 100, 82, 95, 110].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-sm bg-primary/70 transition hover:bg-primary"
                      style={{ height: `${height}px` }}
                    />
                  ),
                )}
              </div>

              <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* Recent application */}

            <div className="mt-4 rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Recent application</p>

                  <p className="mt-1 text-xs text-muted">
                    Software Engineer · Acme
                  </p>
                </div>

                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
                  Interview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
