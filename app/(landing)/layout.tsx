"use client";

import ThemeToggle from "@/components/Theme/ThemeToggle";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>

      <div className="fixed bottom-8 right-5 z-50">
        <ThemeToggle />
      </div>
    </>
  );
}
