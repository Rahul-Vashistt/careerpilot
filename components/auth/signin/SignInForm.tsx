"use client";

import { useState } from "react";
import { FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { CiMail } from "react-icons/ci";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isEmailValid && password.trim().length > 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      return;
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:border-l lg:border-border lg:px-12 xl:px-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center lg:hidden">
          <div className="mb-3 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-text-primary font-geist">
              CareerPilot
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary">
            Sign in
          </h2>

          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
            Email address
            <div className="relative">
              <CiMail
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xl text-text-secondary"
                aria-hidden="true"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text-primary outline-none transition placeholder:text-muted-foreground focus:border-border-hover"
              />
            </div>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
            Password
            <div className="relative">
              <FiLock
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-text-secondary"
                aria-hidden="true"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-10 text-sm text-text-primary outline-none transition placeholder:text-muted-foreground focus:border-border-hover"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted transition hover:text-text-primary"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
          </label>

          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer select-none items-center gap-2 text-sm text-text-secondary">
              <input
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                type="checkbox"
                name="remember"
                className="h-4 w-4 cursor-pointer rounded border-border accent-primary"
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

          <button
            disabled={!isFormValid}
            type="submit"
            className={`group mt-1 flex w-full items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium shadow-sm transition-all duration-300 ${
              isFormValid
                ? "cursor-pointer bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.99]"
                : "cursor-not-allowed bg-disabled text-disabled-foreground"
            }`}
          >
            Continue
            {isFormValid ? (
              <span className="-translate-x-4 text-md opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                <FiArrowRight />
              </span>
            ) : (
              <span className="-translate-x-4 text-md opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0">
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

        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md border border-border bg-surface py-2.5 text-sm font-medium text-text-primary shadow-sm transition hover:bg-surface-hover"
        >
          <span className="text-base font-bold">G</span>
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-muted">
          Don&apos;t have an account?{" "}
          <a
            href="/sign-up"
            className="cursor-pointer font-medium text-text-primary hover:underline"
          >
            Create an account
          </a>
        </p>
      </div>
    </section>
  );
}
