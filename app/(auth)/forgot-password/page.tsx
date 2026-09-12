"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiMail } from "react-icons/fi";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const sendResetLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) return;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground px-4 sm:px-8 py-10 lg:py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-10">
          <span className="text-2xl font-bold tracking-tighter text-text-primary font-geist">
            CareerPilot
          </span>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-muted">
              <FiMail className="h-5 w-5 text-text-primary" />
            </div>

            <h1 className="mt-5 text-2xl font-semibold tracking-tight text-text-primary">
              Forgot your password ?
            </h1>

            <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">
              No worries. Enter the email address associated with your account
              and we&apos;ll help you reset your password.
            </p>
          </div>

          <form onSubmit={sendResetLink} className="mt-7 flex flex-col gap-5">
            {/* Email */}
            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Email address
              <div className="relative">
                <FiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-text-secondary pointer-events-none"
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

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary-hover active:scale-[0.99] cursor-pointer"
            >
              Send reset link
              <span className="-translate-x-4 text-md opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                <FiArrowRight />
              </span>
            </button>
          </form>

          <div className="mt-7 flex justify-center">
            <a
              href="/sign-in"
              className="group flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-text-primary"
            >
              <FiArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
              Back to sign in
            </a>
          </div>
        </div>

        <p className="mt-7 text-center text-xs text-muted">
          © 2026 CareerPilot. Build your career with confidence.
        </p>
      </div>
    </div>
  );
}
