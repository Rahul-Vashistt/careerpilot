"use client";

import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import {
  LuClipboardCheck,
  LuFileText,
  LuMessagesSquare,
  LuUser,
  LuSettings,
} from "react-icons/lu";
import { GiJourney, GiRoad, GiSkills } from "react-icons/gi";
import { NavigationButton } from "./NavigationButton";

const careerNavigation = [
  { title: "Career Path", icon: GiJourney, value: "careerPath" },
  { title: "Skill Gap", icon: GiSkills, value: "skillGap" },
  { title: "Roadmap", icon: GiRoad, value: "roadmap" },
];

const jobsNavigation = [
  { title: "Job Search", icon: MdWorkOutline, value: "jobSearch" },
  { title: "Applications", icon: LuClipboardCheck, value: "applications" },
];

const toolsNavigation = [
  { title: "Resume", icon: LuFileText, value: "resume" },
  { title: "Interview Prep", icon: LuMessagesSquare, value: "interviewPrep" },
];

const accountNavigation = [
  { title: "Profile", icon: LuUser, value: "profile" },
  { title: "Settings", icon: LuSettings, value: "settings" },
];

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <aside className="min-h-screen bg-primary w-72 hidden lg:block">
      <div className="flex flex-col gap-9 p-5">
        <h1 className="mt-3 mb-4 px-1 font-geist text-2xl font-bold tracking-tighter text-background">
          CareerPilot
        </h1>

        <NavigationButton
          icon={FaHome}
          title="Dashboard"
          active={activeNav === "dashboard"}
          onClick={() => setActiveNav("dashboard")}
        />

        <div className="text-background/70">
          Career
          <div className="mt-3 space-y-3">
            {careerNavigation.map((nav) => {
              const Icon = nav.icon;

              return (
                <NavigationButton
                  key={nav.value}
                  icon={Icon}
                  title={nav.title}
                  active={activeNav === nav.value}
                  onClick={() => setActiveNav(nav.value)}
                />
              );
            })}
          </div>
        </div>

        <div className="text-background/70">
          Jobs
          <div className="mt-3 space-y-3">
            {jobsNavigation.map((nav) => {
              const Icon = nav.icon;

              return (
                <NavigationButton
                  key={nav.value}
                  icon={Icon}
                  title={nav.title}
                  active={activeNav === nav.value}
                  onClick={() => setActiveNav(nav.value)}
                />
              );
            })}
          </div>
        </div>

        <div className="text-background/70">
          Tools
          <div className="mt-3 space-y-3">
            {toolsNavigation.map((nav) => {
              const Icon = nav.icon;

              return (
                <NavigationButton
                  key={nav.value}
                  icon={Icon}
                  title={nav.title}
                  active={activeNav === nav.value}
                  onClick={() => setActiveNav(nav.value)}
                />
              );
            })}
          </div>
        </div>

        <div className="text-background/70 border-t border-border/10">
          <div className="mt-3 space-y-1">
            {accountNavigation.map((nav) => {
              const Icon = nav.icon;

              return (
                <NavigationButton
                  key={nav.value}
                  icon={Icon}
                  title={nav.title}
                  active={activeNav === nav.value}
                  onClick={() => setActiveNav(nav.value)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
