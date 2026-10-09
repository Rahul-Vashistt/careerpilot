import {
  LuArrowRight,
  LuCircleCheck,
  LuCircle,
  LuClock3,
} from "react-icons/lu";

const nextSteps = [
  {
    title: "Complete your portfolio project",
    description: "Finish the authentication and dashboard flow",
    status: "in-progress",
  },
  {
    title: "Improve your resume",
    description: "Add your latest project and measurable impact",
    status: "pending",
  },
  {
    title: "Practice frontend interview questions",
    description: "React, JavaScript and web fundamentals",
    status: "pending",
  },
];

export default function NextSteps() {
  const completed = nextSteps.filter(
    (step) => step.status === "completed",
  ).length;

  return (
    <div className="rounded-xl border border-border/60 bg-surface p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            Next Steps
          </h2>

          <p className="mt-1 text-xs leading-5 text-muted">
            Focus on these tasks to keep moving toward your goal.
          </p>
        </div>

        <button
          className="
            flex shrink-0 cursor-pointer items-center gap-1
            text-xs font-medium text-muted
            transition-colors hover:text-foreground
          "
        >
          View all
          <LuArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-muted">
          <div
            className="h-full rounded-full bg-emerald-500"
            style={{
              width: `${(completed / nextSteps.length) * 100}%`,
            }}
          />
        </div>

        <span className="shrink-0 text-[11px] font-medium text-muted">
          {completed}/{nextSteps.length} done
        </span>
      </div>

      {/* Steps */}
      <div className="mt-4 divide-y divide-border/50">
        {nextSteps.map((step, index) => {
          const isCompleted = step.status === "completed";
          const isActive = step.status === "in-progress";

          return (
            <div
              key={step.title}
              className="
                group flex items-start gap-3
                py-3.5 first:pt-0 last:pb-0
              "
            >
              <div className="mt-0.5 shrink-0">
                {isCompleted ? (
                  <LuCircleCheck className="h-5 w-5 text-emerald-500" />
                ) : isActive ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-emerald-500">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                ) : (
                  <LuCircle className="h-5 w-5 text-border" />
                )}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xs font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <span
                    className={`
                      shrink-0 text-[10px] font-medium
                      ${
                        isActive
                          ? "text-emerald-600"
                          : "text-muted"
                      }
                    `}
                  >
                    {isActive ? "In progress" : step.status}
                  </span>
                </div>

                <p className="mt-1 text-[11px] leading-4 text-muted">
                  {step.description}
                </p>

              
              </div>

              <LuArrowRight
                className="
                  mt-0.5 hidden h-4 w-4 shrink-0
                  text-muted
                  transition-transform
                  group-hover:translate-x-0.5
                  sm:block
                "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}