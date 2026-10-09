"use client";

import Image from "next/image";
import { FaHome } from "react-icons/fa";
import {
  LuRoute,
  LuChartNoAxesCombined,
  LuMap,
  LuSearch,
  LuClipboardCheck,
  LuFileText,
  LuMessagesSquare,
  LuSettings,
} from "react-icons/lu";
import { NavigationButton } from "./NavigationButton";

type SidebarProps = {
  user: {
    name: string;
    image?: string | null;
  };
};

const careerNavigation = [
  { title: "Career Path", icon: LuRoute, value: "careerPath" },
  { title: "Skill Gap", icon: LuChartNoAxesCombined, value: "skillGap" },
  { title: "Roadmap", icon: LuMap, value: "roadmap" },
];

const jobsNavigation = [
  { title: "Job Search", icon: LuSearch, value: "jobSearch" },
  { title: "Applications", icon: LuClipboardCheck, value: "applications" },
];

const toolsNavigation = [
  { title: "Resume", icon: LuFileText, value: "resume" },
  { title: "Interview Prep", icon: LuMessagesSquare, value: "interviewPrep" },
];

const accountNavigation = [
  { title: "Settings", icon: LuSettings, value: "settings" },
];

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Sidebar({ user }: SidebarProps) {
  const initials = user ? getInitials(user.name) : "G";

  return (
    <aside className="hidden sticky top-0 h-screen w-72 shrink-0 bg-[#111111] border-r border-border lg:block">
      <div className="flex min-h-screen flex-col gap-8 p-5">
        <h1 className="mt-3 mb-3 px-1 font-geist text-2xl font-bold tracking-tighter text-white">
          CareerPilot
        </h1>

        <NavigationButton
          icon={FaHome}
          title="Dashboard"
          active={true}
          onClick={() => {}}
        />

        <nav className="space-y-8">
          <div>
            <p className="text-sm font-medium text-white/50">Career</p>

            <div className="mt-3 space-y-2">
              {careerNavigation.map((nav) => {
                const Icon = nav.icon;

                return (
                  <NavigationButton
                    key={nav.value}
                    icon={Icon}
                    title={nav.title}
                    active={false}
                    onClick={() => {}}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white/50">Jobs</p>

            <div className="mt-3 space-y-2">
              {jobsNavigation.map((nav) => {
                const Icon = nav.icon;

                return (
                  <NavigationButton
                    key={nav.value}
                    icon={Icon}
                    title={nav.title}
                    active={false}
                    onClick={() => {}}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white/50">Tools</p>

            <div className="mt-3 space-y-2">
              {toolsNavigation.map((nav) => {
                const Icon = nav.icon;

                return (
                  <NavigationButton
                    key={nav.value}
                    icon={Icon}
                    title={nav.title}
                    active={false}
                    onClick={() => {}}
                  />
                );
              })}
            </div>
          </div>
        </nav>

        <nav className="mt-auto border-t border-white/10 pt-4">
          <div className="space-y-2">
            {accountNavigation.map((nav) => {
              const Icon = nav.icon;

              return (
                <NavigationButton
                  key={nav.value}
                  icon={Icon}
                  title={nav.title}
                  active={false}
                  onClick={() => {}}
                />
              );
            })}

            <button
              type="button"
              className="
                flex w-full cursor-pointer items-center gap-3
                rounded-xl px-2 py-2
                text-left transition-colors duration-150
                hover:bg-white/8
              "
            >
              {user?.image ? (
                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={36}
                    height={36}
                    priority
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className="
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-full
                    bg-white/10
                    text-[11px] font-semibold
                    tracking-wide text-white
                    ring-1 ring-white/10
                  "
                >
                  {initials}
                </div>
              )}

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  {user?.name ?? "Guest"}
                </p>

                <p className="truncate text-xs text-white/50">Free plan</p>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}
