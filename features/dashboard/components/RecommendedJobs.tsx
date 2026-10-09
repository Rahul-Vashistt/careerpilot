import {
  LuArrowRight,
  LuBriefcaseBusiness,
  LuMapPin,
  LuClock3,
} from "react-icons/lu";

const jobs = [
  {
    company: "Razorpay",
    role: "Full Stack Developer",
    match: 92,
    location: "Remote",
    experience: "0–2 yrs",
    tags: ["React", "Node.js", "MongoDB"],
    logo: "✈",
    logoBg: "bg-emerald-500",
  },
  {
    company: "Zomato",
    role: "Junior Software Engineer",
    match: 89,
    location: "Bangalore",
    experience: "0–2 yrs",
    tags: ["React", "JavaScript", "Node.js"],
    logo: "Z",
    logoBg: "bg-red-500",
  },
  {
    company: "XYZ Tech",
    role: "React Developer",
    match: 86,
    location: "Remote",
    experience: "0–1 yrs",
    tags: ["React", "JavaScript", "TypeScript"],
    logo: "A",
    logoBg: "bg-violet-500",
  },
];

export default function RecommendedJobs() {
  return (
    <div className="rounded-xl border border-border/60 bg-surface p-5 shadow-sm">
        
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <LuBriefcaseBusiness className="h-4 w-4" />
          </div>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold tracking-tight text-foreground">
              Recommended Jobs
            </h2>

            <p className="mt-0.5 text-xs text-muted">
              Based on your profile, skills and career goals.
            </p>
          </div>
        </div>

        <button className="flex shrink-0 cursor-pointer items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-foreground">
          View all jobs
          <LuArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={`${job.company}-${job.role}`}
            className="
              group flex min-w-0 flex-col rounded-lg
              border border-border/60
              bg-background
              p-3
              transition-all duration-200
              hover:border-border
              hover:shadow-sm
            "
          >
            <div className="flex items-start justify-between gap-2">
              <div
                className={`
                  flex h-8 w-8 shrink-0 items-center justify-center
                  rounded-lg text-xs font-bold text-white
                  ${job.logoBg}
                `}
              >
                {job.logo}
              </div>

              <span className="shrink-0 text-[10px] font-semibold text-emerald-600">
                {job.match}% match
              </span>
            </div>

            <div className="mt-3 min-w-0">
              <h3 className="truncate text-xs font-semibold text-foreground">
                {job.role}
              </h3>

              <p className="mt-0.5 truncate text-[11px] text-muted">
                {job.company}
              </p>
            </div>

            <div className="mt-3 flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-[10px] text-muted">
                <LuMapPin className="h-3 w-3 shrink-0" />
                <span className="truncate">{job.location}</span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-muted">
                <LuClock3 className="h-3 w-3 shrink-0" />
                <span>{job.experience}</span>
              </div>
            </div>

            <div className="mt-3 flex min-w-0 flex-wrap gap-1">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-md
                    bg-surface-muted
                    px-1.5 py-1
                    text-[9px]
                    font-medium
                    text-muted
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              className="
                mt-3 flex w-full cursor-pointer items-center
                justify-center gap-1.5
                rounded-md
                bg-foreground
                px-2 py-2
                text-[10px] font-medium
                text-background
                transition-colors
                hover:bg-foreground/90
              "
            >
              View Job
              <LuArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}