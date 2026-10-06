import { headers } from "next/headers";
import Sidebar from "@/features/dashboard/components/Navigation/Sidebar";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { db } from "@/prisma/db";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const onboarding = await db.onboarding.findUnique({
    where: {
      userId: session.user.id
    }
  })

  if (!onboarding?.completed) {
    redirect("/onboarding")
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar user={session.user} />

      <main className="min-w-0 flex-1">
        {children}
      </main>
    </div>
  );
}