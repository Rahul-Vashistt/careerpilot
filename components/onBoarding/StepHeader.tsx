type Props = {
  currentStep: number;
  title: string;
  description: string;
};

export default function StepHeader({ currentStep, title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <p className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-text-primary">
        Step {currentStep} of 6
      </p>

      <h1 className="text-center font-geist text-4xl font-bold text-text-primary">
        {title}
      </h1>

      <div className="max-w-xl text-center text-sm text-muted">
        {description}
      </div>
    </div>
  );
}
