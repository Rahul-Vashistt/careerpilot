"use client";

import Header from "@/features/dashboard/components/Header";
import { authClient } from "@/lib/auth/auth-client";

import ProfileProgress from "@/features/dashboard/components/ProfileProgress";
import { LuArrowRight, LuTarget } from "react-icons/lu";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();
  console.log(session);
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) return null;

  return (
    <main className="min-h-screen bg-background ">
      <Header user={session.user} />

      <main className="grid grid-cols-12 p-4 sm:p-6 overflow-hidden space-y-6">
        <div className="col-span-12 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex flex-col gap-1">
            <h1 className="text-xl font-sans font-semibold tracking-tight sm:text-2xl">
              Good morning, {session.user.name ?? "Guest"}
            </h1>

            <p className="max-w-2xl text-sm leading-5 text-muted">
              Here's what you should focus on today to make progress towards
              your goal.
            </p>
          </div>

          <ProfileProgress />
        </div>

        <div className="col-span-12 flex flex-row items-center rounded-md border border-border/50 bg-surface-muted/70 px-6 py-5 shadow-sm">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <LuTarget className="h-4 w-4 text-foreground" />

              <span className="text-xs font-medium tracking-wide text-muted">
                YOUR CURRENT FOCUS
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <h1 className="text-xl font-semibold tracking-tight text-foreground">
                Build 2 production-ready projects
              </h1>

              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                You're currently in the Projects stage. Focus on building
                real-world projects to strengthen your portfolio and improve
                your job readiness.
              </p>
            </div>

            <button
              className="
        mt-1 flex items-center gap-2
        rounded-lg bg-foreground px-4 py-2.5
        text-sm font-medium text-background
        transition-colors hover:bg-foreground/90 cursor-pointer
      "
            >
              Continue Roadmap
              <LuArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div></div>
        </div>
      </main>
    </main>
  );
}
