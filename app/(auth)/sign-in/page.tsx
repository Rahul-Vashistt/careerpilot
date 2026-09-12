"use client";

import SignInSidebar from "@/components/auth/signin/SignInSidebar";
import SignInForm from "@/components/auth/signin/SignInForm";

export default function SignIn() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 lg:grid-cols-2">
        <SignInSidebar />
        <SignInForm />
      </div>
    </main>
  );
}
