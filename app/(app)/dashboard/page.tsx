"use client";

import Header from "@/features/dashboard/components/Header";
import { authClient } from "@/lib/auth/auth-client";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) return null;

  return (
    <main className="min-h-screen bg-background">
      <Header userDetails={session.user} />
    </main>
  );
}