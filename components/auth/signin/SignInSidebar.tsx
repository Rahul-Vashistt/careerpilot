"use client";

import {
  FiBriefcase,
  FiUser,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

export default function SignInSidebar() {
  const features = [
    {
      icon: FiBriefcase,
      title: "Track your applications",
      description: "Keep all your job applications organized",
    },
    {
      icon: FiUser,
      title: "Manage your profile",
      description: "Build and maintain your professional profile",
    },
    {
      icon: FiTrendingUp,
      title: "Improve your results",
      description: "Get insights that make your career better",
    },
  ];

  return (
    <section className="hidden lg:flex items-center px-10 py-12 xl:px-16">
      <div className="w-full max-w-xl">
        <div className="mb-12 flex items-center">
          <span className="text-2xl font-bold tracking-tighter text-text-primary font-geist">
            CareerPilot
          </span>
        </div>

        <div className="mb-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary shadow-sm">
            <FiCheckCircle className="text-primary" />
            Your career, on autopilot
          </div>

          <h1 className="max-w-lg text-3xl font-instrument leading-[1.08] tracking-tight text-text-primary xl:text-4xl">
            Welcome back,
            <span className="mt-1 block font-semibold">
              Let&apos;s get you hired.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-text-secondary xl:text-lg xl:leading-8">
            Take control of your job search with tools designed to help you stay
            organized, improve your profile, and move closer to your next
            opportunity.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface shadow-sm">
                  <Icon className="h-5 w-5 text-text-primary" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-text-primary">
                    {feature.title}
                  </h2>

                  <p className="mt-1 max-w-sm text-sm leading-6 text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-xs text-muted">
          © 2026 CareerPilot. Build your career with confidence.
        </p>
      </div>
    </section>
  );
}
