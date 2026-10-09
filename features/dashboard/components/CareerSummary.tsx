import {
  LuArrowRight,
  LuUserRound,
  LuBriefcaseBusiness,
  LuCode,
} from "react-icons/lu";
import { GoGoal } from "react-icons/go";


const careerSummary = [
  {
    label: "Target Role",
    value: "Full Stack Developer",
    icon: LuCode,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Current Status",
    value: "Student",
    icon: LuUserRound,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    label: "Career Goal",
    value: "Senior Full Stack Developer",
    icon: LuBriefcaseBusiness,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    label: "Main Goal",
    value: "Get a high-paying job & work remotely",
    icon: GoGoal,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export default function CareerSummary() {
  return (
    <div className="col-span-12 rounded-xl border border-border/60 bg-surface shadow-sm">
      <div className="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {careerSummary.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                group flex min-w-0 items-center gap-4
                px-5 py-4
                transition-colors
                hover:bg-surface-hover
                sm:px-5 cursor-pointer
              "
            >
              <div
                className={`
                  flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-lg
                  ${item.iconBg}
                  ${item.iconColor}
                  transition-all
                  group-hover:scale-105
             `}
              >
                <Icon className="h-4 w-4" />
              </div>
              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium tracking-wide text-muted">
                  {item.label}
                </p>

                <p
                  className="
                    mt-1 truncate
                    text-sm font-semibold
                    tracking-tight
                    text-foreground
                  "
                  title={item.value}
                >
                  {item.value}
                </p>
              </div>

              {/* Arrow */}
              <LuArrowRight
                className="
                  hidden h-4 w-4 shrink-0
                  text-muted-foreground
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
