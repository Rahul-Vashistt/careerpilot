import {
  LuArrowRight,
  LuBriefcaseBusiness,
  LuCalendarCheck,
  LuCircleCheck,
  LuSend,
} from "react-icons/lu";

const stats = [
  {
    label: "Applied",
    value: 12,
    icon: LuSend,
  },
  {
    label: "Shortlisted",
    value: 3,
    icon: LuCircleCheck,
  },
  {
    label: "Interviews",
    value: 4,
    icon: LuCalendarCheck,
  },
  {
    label: "Offers",
    value: 1,
    icon: LuBriefcaseBusiness,
  },
];

export default function ApplicationStats() {
  const applications = stats[0].value;
  const interviews = stats[2].value;
  const offers = stats[3].value;

  const interviewRate = Math.round((interviews / applications) * 100);
  const offerRate = Math.round((offers / applications) * 100);

  return (
    <div className="rounded-xl border border-border/60 bg-surface p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            Application Stats
          </h2>

          <p className="mt-1 text-xs text-muted">
            Your job search at a glance.
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

      {/* Main Stat */}
      <div
        className="
          mt-5 flex items-end justify-between
          rounded-lg border border-border/60
          bg-background px-4 py-4
        "
      >
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
            Applications
          </p>

          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-semibold tracking-tight text-foreground">
              {applications}
            </span>

            <span className="text-xs text-muted">
              total applications
            </span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[10px] font-medium uppercase tracking-wide text-muted">
            Interview rate
          </p>

          <p className="mt-1 text-sm font-semibold text-foreground">
            {interviewRate}%
          </p>
        </div>
      </div>

      {/* Progress Funnel */}
      <div className="mt-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[11px] font-medium text-muted">
            Application pipeline
          </p>

          <span className="text-[10px] text-muted">
            {offerRate}% offer rate
          </span>
        </div>

        <div className="flex h-2 overflow-hidden rounded-full bg-surface-muted">
          <div className="w-full bg-foreground/90" />
          <div className="ml-[-20%] w-[20%] bg-emerald-500" />
        </div>
      </div>

      {/* Stage Stats */}
      <div className="mt-5 grid grid-cols-4 border-t border-border/60 pt-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={`
                min-w-0 px-2
                ${index > 0 ? "border-l border-border/60" : ""}
              `}
            >
              <div className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 shrink-0 text-muted" />

                <span className="truncate text-[10px] font-medium text-muted">
                  {stat.label}
                </span>
              </div>

              <p className="mt-1.5 text-lg font-semibold tracking-tight text-foreground">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}