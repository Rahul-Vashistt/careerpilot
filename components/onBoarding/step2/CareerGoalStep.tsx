"use client";

import { PiCheck } from "react-icons/pi";
import { careerGoalOptions } from "./careerGoalOptions";
import StepHeader from "../StepHeader";
import StepNavigation from "../StepNavigation";

import type { onBoardingProps } from "@/app/onboarding/page";

type Props = {
  onNext: () => void;
  onBack: () => void;
  careerGoal : onBoardingProps["careerGoal"]
  setCareerGoal : (careerGoal : string) => void
};

export default function CareerGoalStep({
  onNext,
  onBack,
  careerGoal,
  setCareerGoal,
}: Props) {

  return (
    <div className="flex min-h-[90vh] items-center justify-center p-8 sm:p-0">
      <div className="flex w-full max-w-4xl p-4 flex-col items-center gap-6">
        <StepHeader
          currentStep={2}
          title="What do you want to become?"
          description={
            <>Choose the career path you're most interested in pursuing.</>
          }
        />

        {/* Career Options */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {careerGoalOptions.map((career) => {
            const Icon = career.icon;
            const isSelected = careerGoal === career.title;

            return (
              <button
                key={career.title}
                type="button"
                onClick={() => setCareerGoal(career.title)}
                className={`relative flex gap-4 flex-col rounded-lg border-2 p-3 text-left cursor-pointer transition ${
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

                <h2 className="pr-5 font-semibold text-text-primary">
                  {career.title}
                </h2>
              </button>
            );
          })}
        </div>

        {/* Buttons */}
        <StepNavigation onNext={onNext} onBack={onBack} />
      </div>
    </div>
  );
}
