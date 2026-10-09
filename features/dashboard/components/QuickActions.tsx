import {
  LuBriefcaseBusiness,
  LuFileText,
  LuMessageSquare,
  LuBookOpen,
  LuArrowUpRight,
} from "react-icons/lu";

const quickActions = [
  {
    title: "Explore Jobs",
    description: "Find your next opportunity",
    icon: LuBriefcaseBusiness,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Update Resume",
    description: "Make it ATS friendly",
    icon: LuFileText,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Take a Mock Interview",
    description: "Practice and improve",
    icon: LuMessageSquare,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "View Resources",
    description: "Guides, notes, and tools",
    icon: LuBookOpen,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-xl border border-border/60 bg-surface p-4 shadow-sm">
      {/* Header */}
      <div className="mb-3">
        <h2 className="text-sm font-semibold tracking-tight text-foreground">
          Quick Actions
        </h2>

        <p className="mt-0.5 text-xs text-muted">
          Jump back into your career tools
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                group flex w-full cursor-pointer items-center gap-3
                rounded-lg border border-border/50
                bg-background px-3 py-2.5
                text-left
                transition-all duration-200
                hover:border-border
                hover:bg-surface-hover
              "
            >
              {/* Icon */}
              <div
                className={`
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-lg
                  ${action.iconBg}
                  ${action.iconColor}
                `}
              >
                <Icon className="h-4 w-4" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-foreground">
                  {action.title}
                </p>

                <p className="mt-0.5 truncate text-[11px] text-muted">
                  {action.description}
                </p>
              </div>

              {/* Arrow */}
              <LuArrowUpRight
                className="
                  h-4 w-4 shrink-0
                  text-muted
                  transition-transform duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:text-foreground
                "
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}