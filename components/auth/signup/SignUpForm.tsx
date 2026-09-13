"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiUser,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { useSignup } from "@/features/hooks";

export default function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasSymbol = /[!@#$%^&*]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = hasMinLength && hasSymbol && hasUppercase;

  const isFormValid =
    fullName.trim().length > 0 &&
    email.trim().length > 0 &&
    isEmailValid &&
    isPasswordValid &&
    termsAccepted;

  const router = useRouter();
  const signupMutation = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormValid) {
      signupMutation.mutate(
        {
          name: fullName,
          email,
          password,
        },
        {
          onSuccess: () => {
            router.push("/sign-in");
          },
        },
      );
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
            Create your account
          </h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Get started with CareerPilot in just a few steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
            Full name
            <div className="relative">
              <FiUser
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-text-secondary"
                aria-hidden="true"
              />
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="John Doe"
                className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text-primary outline-none transition placeholder:text-muted-foreground focus:border-border-hover duration-300 hover:border-border-hover focus:ring-2 ring-primary/10"
              />
            </div>
          </label>

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
                className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text-primary outline-none transition placeholder:text-muted-foreground focus:border-border-hover duration-300 hover:border-border-hover focus:ring-2 ring-primary/10"
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
                autoComplete="new-password"
                placeholder="Create a password"
                className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-10 text-sm text-text-primary outline-none transition placeholder:text-muted-foreground focus:border-border-hover duration-300 hover:border-border-hover focus:ring-2 ring-primary/10"
              />
              <button
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted transition hover:text-text-primary"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
              <span
                className={`flex items-center gap-1.5 ${hasMinLength ? "text-success" : ""}`}
              >
                <FiCheckCircle /> 8 characters
              </span>
              <span
                className={`flex items-center gap-1.5 ${hasSymbol ? "text-success" : ""}`}
              >
                <FiCheckCircle /> 1 symbol
              </span>
              <span
                className={`flex items-center gap-1.5 ${hasUppercase ? "text-success" : ""}`}
              >
                <FiCheckCircle /> 1 uppercase letter
              </span>
            </div>
          </label>

          <label className="mt-5 flex cursor-pointer select-none items-start gap-2 text-sm text-text-secondary">
            <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
              <input
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                type="checkbox"
                name="terms"
                className="peer absolute inset-0 h-4 w-4 cursor-pointer appearance-none rounded border border-border bg-surface transition-all duration-200 checked:border-primary checked:bg-primary focus:outline-none"
              />

              <svg
                viewBox="0 0 12 12"
                fill="none"
                className="pointer-events-none relative z-10 h-3 w-3 scale-50 opacity-0 transition-all duration-200 ease-out peer-checked:scale-100 peer-checked:opacity-100"
              >
                <path
                  d="M2.5 6L5 8.5L9.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-foreground"
                />
              </svg>
            </span>

            <span>
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-text-primary hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <button
            disabled={!isFormValid}
            type="submit"
            className={`group mt-2 flex w-full items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium shadow-sm transition-all duration-300 ${
              isFormValid
                ? "cursor-pointer bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.99]"
                : "cursor-not-allowed bg-disabled text-disabled-foreground"
            }`}
          >
            Get Started
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

        <div className="my-6 flex items-center gap-4">
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

        <p className="mt-7 text-center text-sm text-muted">
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="font-medium text-text-primary hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </section>
  );
}
