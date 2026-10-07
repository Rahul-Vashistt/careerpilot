"use client";

import { IoNotificationsOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { LuArrowUpRight } from "react-icons/lu";

type HeaderProps = {
  name: string;
  image?: string | null;
};

type SessionProps = {
  user: HeaderProps;
};

export default function Header({ user }: SessionProps) {
  const initials =
    user.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "G";

  return (
    <header
      className="
        sticky top-0 z-30
        h-16
        border-b border-border
        bg-surface/95
        backdrop-blur-md
      "
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          <h1 className="text-[17px] font-semibold tracking-tight text-text-primary">
            Dashboard
          </h1>

          <div className="h-5 w-px bg-border" />

          <button
            className="
              group flex cursor-pointer items-center gap-2.5
              rounded-lg px-2.5 py-1.5 text-left
              transition-colors duration-150
              hover:bg-surface-hover
            "
          >
            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full w-[68%] rounded-full bg-primary" />
            </div>

            <span className="text-[11px] font-medium text-text-secondary">
              68% ready
            </span>

            <LuArrowUpRight
              size={13}
              className="
                text-muted-foreground
                transition-transform duration-150
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </button>
        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-1">
          {/* Notifications */}
          <button
            aria-label="Notifications"
            className="
              relative flex h-10 w-10 cursor-pointer
              items-center justify-center rounded-xl
              text-text-secondary outline-none
              transition-colors duration-150
              hover:bg-surface-hover
              hover:text-text-primary
            "
          >
            <IoNotificationsOutline size={19} />

            <span
              className="
                absolute right-2.5 top-2.5
                h-2 w-2 rounded-full
                bg-success ring-2 ring-surface
              "
            />
          </button>

          <div className="mx-2 h-6 w-px bg-border" />

          {/* User */}
          <button
            className="
              group flex cursor-pointer items-center gap-3
              rounded-xl py-1.5 pl-1.5 pr-2.5
              outline-none transition-colors duration-150
              hover:bg-surface-hover
            "
          >
            {/* Avatar */}
            <div
              className="
                flex h-9 w-9 items-center justify-center
                overflow-hidden rounded-full
                bg-primary text-[11px] font-semibold
                tracking-wide text-primary-foreground
                ring-1 ring-border
              "
            >
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                initials
              )}
            </div>

            {/* User */}
            <div className="hidden text-left sm:block">
              <p className="text-[13px] font-medium leading-tight text-text-primary">
                {user.name || "Guest"}
              </p>

              <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                Free plan
              </p>
            </div>

            <FiChevronDown
              size={14}
              className="
                hidden text-muted-foreground
                transition-transform duration-150
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
