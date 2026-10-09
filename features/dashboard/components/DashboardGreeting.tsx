import ProfileProgress from "./ProfileProgress";

interface DashboardGreetingProps {
  userName?: string | null;
}

export default function DashboardGreeting({
  userName,
}: DashboardGreetingProps) {
  return (
    <div className="col-span-12 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0 flex flex-col gap-1">
        <h1 className="text-xl font-sans font-semibold tracking-tight sm:text-2xl">
          Good morning, {userName ?? "Guest"}
        </h1>

        <p className="max-w-2xl text-sm leading-5 text-muted">
          Here's what you should focus on today to make progress towards your
          goal.
        </p>
      </div>

      <ProfileProgress />
    </div>
  );
}