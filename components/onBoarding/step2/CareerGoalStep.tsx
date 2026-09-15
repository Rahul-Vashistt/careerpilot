"use client";

import { useState } from "react";
import { PiCheck } from "react-icons/pi";
import { careerGoalOptions } from "./careerGoalOptions";
import StepHeader from "../StepHeader";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function CareerGoalStep({ onNext, onBack }: Props) {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  return (
    <div className="flex min-h-[90vh] items-center justify-center p-8 sm:p-0">
      <div className="flex w-full max-w-4xl p-4 flex-col items-center gap-6">
   
        <StepHeader
          currentStep={2}
          title="What do you want to become?"
          description="Choose the career path you&apos;re most interested in pursuing."
        />

        {/* Career Options */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {careerGoalOptions.map((career) => {
            const Icon = career.icon;
            const isSelected = selectedCareer === career.title;

            return (
              <button
                key={career.title}
                type="button"
                onClick={() => setSelectedCareer(career.title)}
                className={`relative flex gap-4 flex-col rounded-lg border-2 p-3 text-left transition ${
                  isSelected
                    ? "border-primary bg-surface-muted"
                    : "border-border bg-surface hover:border-border-hover hover:bg-surface-hover"
                }`}
              >
                <div
                  className={`absolute right-4 top-4 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    isSelected
                      ? "border-primary bg-primary"
                      : "border-border bg-transparent"
                  }`}
                >
                  {isSelected && (
                    <PiCheck size={10} className="text-primary-foreground" />
                  )}
                </div>

                <Icon
                  size={28}
                  className={isSelected ? "text-text-primary" : "text-muted"}
                />

                {/* Title */}
                <h2 className="pr-5 font-semibold text-text-primary">
                  {career.title}
                </h2>
              </button>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex w-full justify-between gap-8">
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-border px-8 py-3 text-sm font-semibold text-text-primary transition hover:border-border-hover hover:bg-surface-hover cursor-pointer"
          >
            Back
          </button>

          <button
            type="button"
            disabled={!selectedCareer}
            onClick={onNext}
            className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
