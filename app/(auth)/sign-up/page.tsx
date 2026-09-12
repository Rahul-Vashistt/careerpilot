"use client";

import FeaturesSidebar from "@/components/auth/signup/FeaturesSidebar";
import SignUpForm from "@/components/auth/signup/SignUpForm";

export default function SignUp() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 lg:grid-cols-2">
        <FeaturesSidebar />
        <SignUpForm />
      </div>
    </main>
  );
}
