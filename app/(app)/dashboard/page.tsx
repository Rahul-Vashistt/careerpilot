"use client";

import Header from "@/features/dashboard/components/Header";
import DashboardGreeting from "@/features/dashboard/components/DashboardGreeting";
import CurrentFocus from "@/features/dashboard/components/CurrentFocus";
import CareerSummary from "@/features/dashboard/components/CareerSummary";
import QuickActions from "@/features/dashboard/components/QuickActions";
import NextSteps from "@/features/dashboard/components/NextSteps";
import CareerJourney from "@/features/dashboard/components/CareerJourney";
import YourProgress from "@/features/dashboard/components/YourProgress";
import RecommendedJobs from "@/features/dashboard/components/RecommendedJobs";

import { authClient } from "@/lib/auth/auth-client";
import RecentActivity from "@/features/dashboard/components/RecentActivity";
import ApplicationStats from "@/features/dashboard/components/ApplicationStats";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        Loading...
      </div>
    );
  }

  if (!session) return null;

  return (
    <main className="min-h-screen bg-background">
      <Header user={session.user} />

      <div className="space-y-6 p-4 sm:p-6">

        <DashboardGreeting userName={session.user.name} />

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[8fr_2fr]">

          {/*LEFT 70% */}
          <div className="flex min-w-0 flex-col gap-6">

            <CurrentFocus />

            <CareerSummary />

            <div className="grid grid-cols-12 gap-4">

              <div className="col-span-12 lg:col-span-5">
                <NextSteps/>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <CareerJourney/>
              </div>

            </div>

            <div className="grid grid-cols-12 gap-4">

              <div className="col-span-12 lg:col-span-7">
                <RecommendedJobs/>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <ApplicationStats/>
              </div>

            </div>

          </div>

          {/*RIGHT */}
          <div className="flex min-w-0 flex-col gap-4">

            <div>
              <QuickActions/>
            </div>

            <div>
              <YourProgress/>
            </div>

            <div>
              <RecentActivity/>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}