import { LuChevronRight, LuUserRound } from "react-icons/lu";

export default function ProfileProgress() {
  return (
    <div
      role="button"
      tabIndex={0}
      className="
        group flex w-full cursor-pointer items-center gap-3
        rounded-xl border border-border/60
        bg-surface px-3 py-3
        shadow-sm transition-all duration-200
        hover:border-border hover:bg-surface-hover
        hover:shadow-md
        focus:outline-none

        sm:max-w-[320px] sm:gap-3.5 sm:px-3.5
      "
    >
      <div
        className="
          flex h-10 w-10 shrink-0 items-center justify-center
          rounded-lg border border-border/50
          bg-background
          text-text-primary
        "
      >
        <LuUserRound size={18} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h2 className="truncate text-xs font-semibold text-text-primary">
            Complete your profile
          </h2>

          <span
            className="
              shrink-0 text-xs font-semibold
              text-success
            "
          >
            80%
          </span>
        </div>

        <div className="mt-1.5 flex items-center gap-2">
          <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-surface-muted">
            <div
              className="
                h-full rounded-full bg-success
                transition-[width] duration-500 ease-out
              "
              style={{ width: "80%" }}
            />
          </div>

          <span className="shrink-0 text-[11px] text-muted">2 left</span>
        </div>
      </div>

      <div
        className="
          flex h-8 w-8 shrink-0 items-center justify-center
          rounded-md text-muted
          transition-all duration-200
          group-hover:translate-x-0.5
          group-hover:text-text-primary
        "
      >
        <LuChevronRight size={18} />
      </div>
    </div>
  );
}
