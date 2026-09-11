import {
  FiBriefcase,
  FiUser,
  FiTrendingUp,
  FiCheckCircle,
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
    <div className="min-h-screen flex bg-white">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 min-h-screen bg-linear-to-br from-indigo-50 via-white to-indigo-200 px-12 py-10 flex-col">
        {/* Logo */}
        <div className="max-w-2xl mx-auto w-full">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 flex items-center">
            <TbCircleLetterCFilled size={34} className="mr-1" />
            areerPilot
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl mx-auto w-full flex items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-foreground">
              <HiOutlineSparkles />
              Start your career journey
            </span>

            {/* Heading */}
            <h2 className="text-5xl font-instrument tracking-tight leading-[1.1] text-gray-900">
              Your next opportunity
            </h2>

            <h2 className="mt-2 text-5xl font-semibold tracking-tight leading-[1.1] text-foreground">
              starts here.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Create your CareerPilot account and bring your job search,
              applications, and career growth together in one place.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-100 border border-indigo-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-2xl mx-auto w-full">
          <p className="text-sm text-gray-500">
            © 2026 CareerPilot. Build your career with confidence.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-6 sm:px-12 py-10">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center mb-9">
            <TbCircleLetterCFilled size={32} />
            <span className="text-xl font-semibold tracking-tight">
              areerPilot
            </span>
          </div>

          {/* Heading */}
          <div className="mb-7">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Get started with CareerPilot in just a few steps.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Full Name */}
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
              Full name

              <div className="relative">
                <FiUser
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-800"
                  aria-hidden="true"
                />

                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="John Doe"
                  className="w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400"
                />
              </div>
            </label>

            {/* Email */}
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
              Email address

              <div className="relative">
                <CiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-800"
                  aria-hidden="true"
                />

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400"
                />
              </div>
            </label>

            {/* Password */}
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
              Password

              <div className="relative">
                <FiLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-500"
                  aria-hidden="true"
                />

                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  className="w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                  aria-label="Show password"
                >
                  <FiEye />
                </button>
              </div>
            </label>

            {/* Confirm Password */}
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
              Confirm password

              <div className="relative">
                <FiLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-500"
                  aria-hidden="true"
                />

                <input
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                  className="w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                  aria-label="Show password"
                >
                  <FiEye />
                </button>
              </div>
            </label>

            {/* Terms */}
            <label className="flex items-start gap-2 mt-1 text-sm text-gray-500 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-primary"
              />

              <span>
                I agree to the{" "}
                <a
                  href="/terms"
                  className="font-medium text-primary hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="font-medium text-primary hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {/* Create Account */}
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:scale-[0.99] cursor-pointer"
            >
              Create account
              <FiArrowRight />
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 cursor-pointer" 
          >
            <span className="text-base font-bold">G</span>
            Continue with Google
          </button>

          {/* Sign In */}
          <p className="mt-7 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/sign-in"
              className="font-medium text-primary hover:underline"
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
