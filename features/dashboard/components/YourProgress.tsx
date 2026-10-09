const progressItems = [
  {
    label: "Skills",
    value: 60,
    color: "bg-emerald-500",
  },
  {
    label: "Projects",
    value: 30,
    color: "bg-blue-500",
  },
  {
    label: "Interview Prep",
    value: 20,
    color: "bg-violet-500",
  },
  {
    label: "Career Readiness",
    value: 40,
    color: "bg-orange-500",
  },
];

const overallProgress = 42;

export default function YourProgress() {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const progressOffset =
    circumference - (overallProgress / 100) * circumference;

  return (
    <div className="rounded-xl border border-border/60 bg-surface p-5 shadow-sm">
        
      <h2 className="text-sm font-semibold tracking-tight text-foreground">
        Your Progress
      </h2>

      <div className="mt-5 flex items-center gap-6">

        {/* Circular Progress */}
        <div className="flex shrink-0 flex-col items-center">
          <div className="relative h-32 w-32">
            <svg
              viewBox="0 0 120 120"
              className="h-full w-full -rotate-90"
            >
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-surface-muted"
              />

              {/* Progress ring */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                className="text-emerald-500 transition-all duration-700"
              />
            </svg>

            {/* Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                {overallProgress}%
              </span>
            </div>
          </div>

          <span className="mt-2 text-[11px] font-medium text-muted">
            Overall Progress
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="divide-y divide-border/50">
            {progressItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`}
                  />

                  <span className="truncate text-xs font-medium text-muted">
                    {item.label}
                  </span>
                </div>

                <span className="shrink-0 text-[11px] font-medium text-muted">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}