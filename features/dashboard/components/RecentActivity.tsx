import {
  LuArrowRight,
  LuBookOpen,
  LuCheck,
  LuFileText,
  LuFolderKanban,
  LuMessageSquare,
} from "react-icons/lu";

const activities = [
  {
    title: "Completed skill analysis",
    time: "2h ago",
    icon: LuCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Started React course",
    time: "5h ago",
    icon: LuBookOpen,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Updated resume",
    time: "1d ago",
    icon: LuFileText,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Viewed 3 job opportunities",
    time: "1d ago",
    icon: LuFolderKanban,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "Joined interview prep session",
    time: "2d ago",
    icon: LuMessageSquare,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-border/60 bg-surface p-5 shadow-sm">
        
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-muted text-foreground">
            <LuFolderKanban className="h-4 w-4" />
          </div>

          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            Recent Activity
          </h2>
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

      <div className="mt-5 space-y-2 ">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          const isLast = index === activities.length - 1;

          return (
            <div key={`${activity.title}-${activity.time}`} className="flex">
              <div className="relative flex w-9 shrink-0 justify-center">
                {!isLast && (
                  <div className="absolute top-7 bottom-0 w-px bg-border/70 dark:bg-gray-300" />
                )}

                <div
                  className={`
                    relative z-10 flex h-7 w-7 shrink-0
                    items-center justify-center rounded-full
                    ${activity.iconBg}
                    ${activity.iconColor}
                  `}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
              </div>

              <div
                className={`
                  min-w-0 flex-1
                  ${isLast ? "pb-0" : "pb-4"}
                `}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="truncate text-xs font-medium text-foreground">
                    {activity.title}
                  </p>

                  <span className="shrink-0 text-[10px] text-muted">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}