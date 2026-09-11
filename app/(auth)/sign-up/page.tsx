import {
  FiBriefcase,
  FiUser,
  FiTrendingUp,
  FiLock,
  FiEye,
  FiArrowRight,
} from "react-icons/fi";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { HiOutlineSparkles } from "react-icons/hi2";

function SignUp() {
  const features = [
    {
      icon: FiUser,
      title: "Create your profile",
      description: "Build a professional profile that represents you",
    },
    {
      icon: FiBriefcase,
      title: "Organize your job search",
      description: "Keep your applications and opportunities in one place",
    },
    {
      icon: FiTrendingUp,
      title: "Grow with insights",
      description: "Get smarter insights to improve your career journey",
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground px-4 sm:px-8 py-10 lg:py-12">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
        <div className="hidden lg:flex lg:w-1/2 max-w-xl flex-col justify-between py-6 bg-background">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-text-primary flex items-center mb-8">
              <TbCircleLetterCFilled size={34} className="mr-1" />
              areerPilot
            </h1>

            <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-surface border border-border px-4 py-2 text-sm font-medium text-text-primary shadow-sm">
              <HiOutlineSparkles className="text-primary" />
              Start your career journey
            </span>

            <h2 className="text-5xl font-instrument tracking-tight leading-[1.1] text-text-primary">
              Your next opportunity
            </h2>

            <h2 className="mt-2 text-5xl font-semibold tracking-tight leading-[1.1] text-text-primary">
              starts here.
            </h2>

            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Create your CareerPilot account and bring your job search,
              applications, and career growth together in one place.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex items-start gap-4">
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

        <div className="w-full lg:w-1/2 max-w-lg py-6 bg-background">
          <div className="flex items-center justify-center mb-9 lg:hidden">
            <TbCircleLetterCFilled size={32} className="text-text-primary" />
            <span className="text-xl font-semibold tracking-tight text-text-primary">
              areerPilot
            </span>
          </div>

          <div className="mb-7">
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-text-secondary">
              Get started with CareerPilot in just a few steps.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Full name
              <div className="relative">
                <FiUser
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-text-secondary pointer-events-none"
                  aria-hidden="true"
                />

                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="John Doe"
                  className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-muted-foreground shadow-sm outline-none transition focus:outline-none focus:ring-0 focus:border-border-hover"
                />
              </div>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Email address
              <div className="relative">
                <CiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-text-secondary pointer-events-none"
                  aria-hidden="true"
                />

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-muted-foreground shadow-sm outline-none transition focus:outline-none focus:ring-0 focus:border-border-hover"
                />
              </div>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Password
              <div className="relative">
                <FiLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-text-secondary pointer-events-none"
                  aria-hidden="true"
                />

                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-10 text-sm text-text-primary placeholder:text-muted-foreground shadow-sm outline-none transition focus:outline-none focus:ring-0 focus:border-border-hover"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-text-primary cursor-pointer"
                  aria-label="Show password"
                >
                  <FiEye />
                </button>
              </div>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Confirm password
              <div className="relative">
                <FiLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-text-secondary pointer-events-none"
                  aria-hidden="true"
                />

                <input
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                  className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-10 text-sm text-text-primary placeholder:text-muted-foreground shadow-sm outline-none transition focus:outline-none focus:ring-0 focus:border-border-hover"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-text-primary cursor-pointer"
                  aria-label="Show password"
                >
                  <FiEye />
                </button>
              </div>
            </label>

            <label className="flex items-start gap-2 mt-1 text-sm text-text-secondary cursor-pointer select-none">
              <input
                type="checkbox"
                name="terms"
                className="mt-0.5 h-4 w-4 rounded border-border accent-primary cursor-pointer"
              />

              <span>
                I agree to the{" "}
                <a
                  href="/terms"
                  className="font-medium text-text-primary hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="font-medium text-text-primary hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary-hover active:scale-[0.99] cursor-pointer"
            >
              Create account
              <FiArrowRight />
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted">OR</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-surface py-2.5 text-sm font-medium text-text-primary shadow-sm transition hover:bg-surface-hover cursor-pointer"
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
      </div>
    </div>
  );
}

export default SignUp;