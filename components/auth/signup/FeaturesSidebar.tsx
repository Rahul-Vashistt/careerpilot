"use client";

import { FiBriefcase, FiUser, FiTrendingUp } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function FeaturesSidebar() {
  const features = [
    {
      icon: FiUser,
      title: "Create your profile",
      description: "Build a professional profile that represents who you are.",
    },
    {
      icon: FiBriefcase,
      title: "Organize your job search",
      description: "Keep your applications and opportunities in one place.",
    },
    {
      icon: FiTrendingUp,
      title: "Grow with insights",
      description: "Get smarter insights to improve your career journey.",
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
            <HiOutlineSparkles className="text-primary" />
            Start your career journey
          </div>

          <h1 className="max-w-lg text-3xl font-instrument leading-[1.08] tracking-tight text-text-primary xl:text-4xl">
            Your next opportunity
            <span className="mt-1 block font-semibold">starts here.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-text-secondary xl:text-lg xl:leading-8">
            Create your CareerPilot account and bring your job search,
            applications, and career growth together in one place.
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
