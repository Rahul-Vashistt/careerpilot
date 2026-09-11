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

function SignIn() {
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
    <div className="min-h-screen flex bg-background text-foreground">
    
      <div
        className="
          hidden lg:flex
          w-1/2 min-h-screen
          px-12 py-10
          flex-col

          bg-linear-to-br
          from-surface
          via-surface-muted
          to-border
          
          dark:from-background
          dark:via-surface
          dark:to-surface-muted
        "
      >
      
        <div className="max-w-2xl mx-auto w-full">
          <h1 className="text-2xl font-semibold tracking-tight text-text-primary flex items-center">
            <TbCircleLetterCFilled size={34} className="mr-1" />
            areerPilot
          </h1>
        </div>

    
        <div className="flex-1 max-w-2xl mx-auto w-full flex items-center">
          <div className="max-w-xl">
           
            <span
              className="
                inline-flex items-center gap-2 mb-6
                rounded-full
                bg-surface
                border border-border
                px-4 py-2
                text-sm font-medium
                text-text-primary
                shadow-sm
              "
            >
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
              stay organized, improve your profile, and move closer to your
              next opportunity.
            </p>

          
            <div className="mt-10 space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div
                      className="
                        shrink-0
                        w-11 h-11
                        rounded-xl
                        bg-surface
                        border border-border
                        flex items-center justify-center
                        shadow-sm
                      "
                    >
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
        </div>

     
        <div className="max-w-2xl mx-auto w-full">
          <p className="text-sm text-muted">
            © 2026 CareerPilot. Build your career with confidence.
          </p>
        </div>
      </div>

     
 
    
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-6 sm:px-12 py-10 bg-background">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center mb-10">
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

          {/* Form */}
          <form className="flex flex-col gap-5">
            {/* Email */}
            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Email address

              <div className="relative">
                <CiMail
                  className="
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    text-xl
                    text-text-secondary
                  "
                  aria-hidden="true"
                />

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="
                    w-full
                    rounded-md
                    border border-border
                    bg-surface
                    py-2.5 pl-10 pr-4
                    text-sm
                    text-text-primary
                    placeholder:text-muted-foreground
                    shadow-sm
                    outline-none
                    transition

                    focus:outline-none
                    focus:ring-0
                    focus:border-border-hover
                  "
                />
              </div>
            </label>

            {/* Password */}
            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Password

              <div className="relative">
                <FiLock
                  className="
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    text-lg
                    text-text-secondary
                  "
                  aria-hidden="true"
                />

                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="
                    w-full
                    rounded-md
                    border border-border
                    bg-surface
                    py-2.5 pl-10 pr-10
                    text-sm
                    text-text-primary
                    placeholder:text-muted-foreground
                    shadow-sm
                    outline-none
                    transition

                    focus:outline-none
                    focus:ring-0
                    focus:border-border-hover
                  "
                />

                <button
                  type="button"
                  className="
                    absolute right-3 top-1/2
                    -translate-y-1/2
                    text-muted
                    transition
                    hover:text-text-primary
                    cursor-pointer
                  "
                  aria-label="Show password"
                >
                  <FiEye />
                </button>
              </div>
            </label>

           
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
                <input
                  type="checkbox"
                  name="remember"
                  className="
                    h-4 w-4
                    rounded
                    border-border
                    accent-primary
                    cursor-pointer
                  "
                />

                Remember me
              </label>

              <a
                href="/forgot-password"
                className="
                  text-sm
                  font-medium
                  text-text-primary
                  hover:underline
                "
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="
                flex w-full
                items-center justify-center gap-2
                rounded-md
                bg-primary
                py-2.5
                text-sm font-medium
                text-primary-foreground
                shadow-sm
                transition
                hover:bg-primary-hover
                active:scale-[0.99]
                cursor-pointer
              "
            >
              Sign in
              <FiArrowRight />
            </button>
          </form>

         
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs text-muted">
              OR
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="
              flex w-full
              items-center justify-center gap-3
              rounded-md
              border border-border
              bg-surface
              py-2.5
              text-sm font-medium
              text-text-primary
              shadow-sm
              transition
              hover:bg-surface-hover
              cursor-pointer
            "
          >
            <span className="text-base font-bold">
              G
            </span>

            Continue with Google
          </button>

          {/* Sign Up */}
          <p className="mt-8 text-center text-sm text-muted">
            Don't have an account?{" "}
            <a
              href="/sign-up"
              className="
                font-medium
                text-text-primary
                hover:underline
                cursor-pointer
              "
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
