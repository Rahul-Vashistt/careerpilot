"use client";

import {
  FiBriefcase,
  FiUser,
  FiTrendingUp,
  FiCheckCircle,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    isEmailValid && password.trim().length > 0;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground px-4 sm:px-8 py-10 lg:py-12">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
        {/* Left Section */}
        <div className="hidden lg:flex lg:w-1/2 max-w-xl flex-col justify-between py-6 bg-background">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-text-primary flex items-center mb-8">
              <TbCircleLetterCFilled size={34} className="mr-1" />
              areerPilot
            </h1>

            <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-surface border border-border px-4 py-2 text-sm font-medium text-text-primary shadow-sm">
              <FiCheckCircle className="text-primary" />
              Your career, on autopilot
            </span>

            <h2 className="text-5xl font-instrument tracking-tight leading-[1.1] text-text-primary">
              Welcome back,
            </h2>

            <h2 className="mt-2 text-5xl font-semibold tracking-tight leading-[1.1] text-text-primary">
              Let's get you hired.
            </h2>

            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Take control of your job search with tools designed to help you
              stay organized, improve your profile, and move closer to your next
              opportunity.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-text-primary" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-text-primary">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-10 text-sm text-muted">
            © 2026 CareerPilot. Build your career with confidence.
          </p>
        </div>

        {/* Section SignIN */}
        <div className="w-full lg:w-1/2 max-w-lg py-6 bg-background">
          {/* Mobile Logo */}
          <div className="flex items-center justify-center mb-8 lg:hidden">
            <TbCircleLetterCFilled
              size={32}
              className="text-text-primary"
            />

            <span className="text-xl font-semibold tracking-tight text-text-primary">
              areerPilot
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
              Sign in
            </h1>

            <p className="mt-2 text-sm text-text-secondary">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            {/* Email */}
            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Email address

              <div className="relative">
                <CiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-text-secondary pointer-events-none"
                  aria-hidden="true"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-muted-foreground shadow-sm outline-none transition focus:border-border-hover"
                />
              </div>
            </label>

            {/* Password */}
            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Password

              <div className="relative">
                <FiLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-text-secondary pointer-events-none"
                  aria-hidden="true"
                />

                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-10 text-sm text-text-primary placeholder:text-muted-foreground shadow-sm outline-none transition focus:border-border-hover"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-text-primary cursor-pointer"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </button>
              </div>
            </label>

            {/* Remember + Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer select-none">
                <input
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-border accent-primary cursor-pointer"
                />

                Remember me
              </label>

              <a
                href="/forgot-password"
                className="text-sm font-medium text-text-primary hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In */}
            <button
              disabled={!isFormValid}
              type="submit"
              className={`group mt-1 flex w-full items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium shadow-sm transition-all duration-300 cursor-pointer ${
                isFormValid
                  ? "bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.99]"
                  : "bg-disabled text-disabled-foreground"
              }`}
            >
              Continue

              {isFormValid && (
                <span className="-translate-x-4 text-md opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                  <FiArrowRight />
                </span>
              )}
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs text-muted">OR</span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-surface py-2.5 text-sm font-medium text-text-primary shadow-sm transition hover:bg-surface-hover cursor-pointer"
          >
            <span className="text-base font-bold">G</span>
            Continue with Google
          </button>

          {/* Sign Up */}
          <p className="mt-8 text-center text-sm text-muted">
            Don't have an account?{" "}
            <a
              href="/sign-up"
              className="font-medium text-text-primary hover:underline cursor-pointer"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;