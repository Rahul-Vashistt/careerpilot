import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type Props = {
  onNext?: () => void;
  onBack?: () => void;
  onSubmit?: () => void;
  disabled?: boolean;
  nextLabel?: string;
};

export default function StepNavigation({
  onNext,
  onBack,
  onSubmit,
  disabled = false,
  nextLabel = "Continue",
}: Props) {
  return (
    <div className="mt-8 flex w-full items-center justify-between gap-8">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="group flex cursor-pointer items-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-all duration-300 hover:border-border-hover hover:bg-surface-hover"
        >
          <span className="flex w-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:mr-2 group-hover:w-4 group-hover:opacity-100">
            <FiArrowLeft className="shrink-0" />
          </span>
          Back
        </button>
      ) : (
        <div />
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={onSubmit ?? onNext}
        className="group flex cursor-pointer items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground"
      >
        {nextLabel}

        <span className="flex w-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:ml-2 group-hover:w-4 group-hover:opacity-100">
          <FiArrowRight className="shrink-0" />
        </span>
      </button>
    </div>
  );
}
