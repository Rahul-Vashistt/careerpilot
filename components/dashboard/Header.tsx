import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";

const user = {
  name: "Rahul Vashist",
  initials: "RV",
  plan: "Free plan",
};

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-30
        h-16
        border-b border-border/40
        bg-surface/80
        backdrop-blur-xl
        supports-backdrop-filter:bg-surface/70
      "
    >
      <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-8">
        {/* Search */}
        <div className="group relative w-full max-w-146.25">
          <FaSearch
            size={13}
            className="
              pointer-events-none
              absolute left-4 top-1/2
              -translate-y-1/2
              text-muted-foreground
              transition-colors duration-200
              group-focus-within:text-text-primary
            "
          />

          <input
            type="text"
            placeholder="Search jobs, skills, or anything"
            className="
              h-10 w-full
              rounded-xl
              border border-border/60
              bg-surface-muted/60
              pl-11 pr-16
              text-[13px] tracking-[-0.005em]
              text-text-primary
              placeholder:text-muted-foreground
              outline-none
              transition-all duration-200
              hover:border-border-hover
              hover:bg-surface-muted
              focus:border-primary/40
              focus:bg-surface
              focus:shadow-sm
              focus:ring-4 focus:ring-primary/10
            "
          />

          <kbd
            className="
              pointer-events-none
              absolute right-3 top-1/2
              hidden -translate-y-1/2
              items-center gap-0.5
              rounded-md
              border border-border/70
              bg-surface
              px-1.5 py-0.5
              text-[10px] font-medium
              text-muted
              transition-opacity duration-200
              group-focus-within:opacity-0
              sm:flex
            "
          >
            <span className="text-[11px]">⌘</span>
            <span>K</span>
          </kbd>
        </div>

        {/* Right Section */}
        <div className="flex shrink-0 items-center gap-1">
          {/* Notifications */}
          <button
            aria-label="Notifications"
            className="
              relative
              flex h-10 w-10
              cursor-pointer
              items-center justify-center
              rounded-xl
              text-text-secondary
              outline-none
              transition-all duration-200
              hover:bg-surface-hover
              hover:text-text-primary
              focus-visible:ring-2 focus-visible:ring-primary/30
            "
          >
            <IoNotificationsOutline size={19} />

            <span
              className="
                absolute right-2.5 top-2.5
                h-2 w-2
                rounded-full
                bg-success
                ring-2 ring-surface
              "
            />
          </button>

          {/* Divider */}
          <div className="mx-2 h-6 w-px bg-border/60" />

          {/* User */}
          <button
            className="
              group
              flex cursor-pointer
              items-center gap-3
              rounded-xl
              py-1.5 pl-1.5 pr-2.5
              outline-none
              transition-all duration-200
              hover:bg-surface-hover
              focus-visible:ring-2 focus-visible:ring-primary/30
            "
          >
            {/* Avatar */}
            <div
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-linear-to-br from-primary to-primary/70
                text-[11px]
                font-semibold
                tracking-wide
                text-primary-foreground
                ring-1 ring-border/60
                ring-offset-2 ring-offset-surface
              "
            >
              {user.initials}
            </div>

            {/* Name */}
            <div className="hidden text-left sm:block">
              <p className="text-[13px] font-medium leading-tight text-text-primary">
                {user.name}
              </p>
              <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                {user.plan}
              </p>
            </div>

            <FiChevronDown
              size={14}
              className="
                hidden text-muted-foreground
                transition-transform duration-200
                group-hover:translate-y-px
                sm:block
              "
            />
          </button>
        </div>
      </div>
    </header>
  );
}
