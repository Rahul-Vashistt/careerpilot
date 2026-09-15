import Link from "next/link";

type Props = {
  currentStep: number;
};


export default function Header({currentStep} : Props) {

  return (
    <header className="h-16 border-b border-border/50 bg-surface">
      <nav className="flex h-full w-full items-center justify-around ">

        <Link href="/" className="font-geist text-2xl font-bold text-text-primary">
          CareerPilot
        </Link>

        <div className="flex items-center flex-col sm:flex-row gap-4">
          <p className="text-xs sm:text-sm text-muted ">Step {currentStep} of 6</p>

          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div
                key={step}
                className={`h-1.5 w-6 sm:w-8 rounded-full transition-colors ${
                  step <= currentStep ? "bg-primary" : "bg-disabled"
                }`}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
