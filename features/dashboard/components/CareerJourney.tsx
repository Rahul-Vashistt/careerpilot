import {
  LuCircleCheck,
  LuBriefcaseBusiness,
  LuCode,
  LuRocket,
  LuGraduationCap,
} from "react-icons/lu";

const journey = [
  {
    title: "Profile",
    description: "Get started",
    status: "completed",
    icon: LuGraduationCap,
  },
  {
    title: "Skills",
    description: "Build foundation",
    status: "completed",
    icon: LuCode,
  },
  {
    title: "Projects",
    description: "Build & showcase",
    status: "current",
    icon: LuRocket,
  },
  {
    title: "Job Ready",
    description: "Prepare & apply",
    status: "upcoming",
    icon: LuBriefcaseBusiness,
  },
];

export default function CareerJourney() {
  return (
    <div className="rounded-xl border border-border/60 bg-surface p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            Your Career Journey
          </h2>

          <p className="mt-1 text-xs leading-5 text-muted">
            Your progress from learning to landing your next role.
          </p>
        </div>

        <span className="shrink-0 text-xs font-medium text-emerald-600">
          3 of 4 stages
        </span>
      </div>

      {/* Journey */}
      <div className="mt-6 overflow-x-auto pb-1">
        <div className="flex min-w-130 items-start">
          {journey.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = step.status === "completed";
            const isCurrent = step.status === "current";
            const isLast = index === journey.length - 1;

            return (
              <div key={step.title} className="flex min-w-0 flex-1 items-start">
                {/* Stage */}
                <div className="flex min-w-0 flex-col items-center text-center">
                  <div
                    className={`
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-full border
                      ${
                        isCompleted
                          ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                          : isCurrent
                            ? "border-foreground bg-foreground text-background"
                            : "border-border bg-background text-muted"
                      }
                    `}
                  >
                    {isCompleted ? (
                      <LuCircleCheck className="h-5 w-5" />
                    ) : (
                      <Icon className="h-4 w-4" />
                    )}
                  </div>

                  <p
                    className={`
                      mt-2 text-xs font-semibold
                      ${
                        isCurrent
                          ? "text-foreground"
                          : isCompleted
                            ? "text-foreground"
                            : "text-muted"
                      }
                    `}
                  >
                    {step.title}
                  </p>

                  <p className="mt-0.5 text-[10px] text-muted">
                    {step.description}
                  </p>

                  {isCurrent && (
                    <span className="mt-2 rounded-full bg-foreground/5 px-2 py-0.5 text-[9px] font-medium text-foreground">
                      Current
                    </span>
                  )}
                </div>

                {!isLast && (
                  <div
                    className={`
                      mt-5 mx-2 h-px flex-1
                      ${isCompleted ? "bg-emerald-300" : "bg-border"}
                    `}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-background px-4 py-3.5">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
              Current stage
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>

          <p className="mt-1 truncate text-xs font-semibold text-foreground">
            Build & showcase your projects
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-border/60">
            <div className="h-full w-3/4 rounded-full bg-emerald-500" />
          </div>

          <span className="text-xs font-semibold tabular-nums text-foreground">
            75%
          </span>
        </div>
      </div>
    </div>
  );
}
