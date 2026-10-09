import Image from "next/image";
import { LuArrowRight, LuTarget } from "react-icons/lu";

import YourCurrentFocusImage from "@/public/dashboard/yourCurrentFocus.png";

export default function CurrentFocus() {
  return (
    <div className="col-span-12 flex items-center justify-between overflow-hidden rounded-md border border-border/50 bg-surface-muted/70 px-6 py-5 shadow-sm">
    
      <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <LuTarget className="h-4 w-4 text-foreground" />

          <span className="text-xs font-medium tracking-wide text-muted">
            YOUR CURRENT FOCUS
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Build 2 production-ready projects
          </h2>

          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            You're currently in the Projects stage. Focus on building real-world
            projects to strengthen your portfolio and improve your job
            readiness.
          </p>
        </div>

        <button
          className="
            mt-1 flex cursor-pointer items-center gap-2
            rounded-lg bg-foreground px-4 py-2.5
            text-sm font-medium text-background
            transition-colors hover:bg-foreground/90
          "
        >
          Continue Roadmap
          <LuArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="hidden h-full w-90 shrink-0 sm:block">
        <Image
          src={YourCurrentFocusImage}
          alt="Career roadmap illustration"
          width={480}
          height={240}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
