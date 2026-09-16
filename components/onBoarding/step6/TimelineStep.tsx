"use client";

import { PiCheck } from "react-icons/pi";

import StepHeader from "../StepHeader";
import StepNavigation from "../StepNavigation";
import { timelineOptions } from "./timelineOptions";

import type { onBoardingProps } from "@/app/onboarding/page";

type Props = {
  onNext: () => void;
  onBack: () => void;
  timeline: onBoardingProps["timeline"];
  setTimeline: (timeline: string) => void;
};

export default function TimelineStep({
  onNext,
  onBack,
  timeline,
  setTimeline,
}: Props) {
  return (
    <div className="flex min-h-[90vh] items-center justify-center p-8 sm:p-0">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6">
        <StepHeader
          currentStep={6}
          title="When do you want to reach your goal?"
          description={
            <>
              Choose a timeline that feels right for you.
              <br />
              You can always change it later.
            </>
          }
        />

        {/* Options */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {timelineOptions.map((timelineOption) => {
            const Icon = timelineOption.icon;
            const isSelected = timeline === timelineOption.title;

            return (
              <button
                key={timelineOption.title}
                type="button"
                onClick={() => setTimeline(timelineOption.title)}
                className={`relative flex min-h-27 cursor-pointer flex-col space-y-3 rounded-lg border-2 p-5 text-left transition ${
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
                    <PiCheck
                      size={10}
                      className="text-primary-foreground"
                    />
                  )}
                </div>

                <Icon
                  size={24}
                  className={
                    isSelected ? "text-text-primary" : "text-muted"
                  }
                />

                <div className="space-y-1">
                  <h2 className="font-semibold text-text-primary">
                    {timelineOption.title}
                  </h2>

                  <p className="text-sm leading-5 text-text-secondary">
                    {timelineOption.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Buttons */}
        <StepNavigation
          onNext={onNext}
          onBack={onBack}
          disabled={!timeline}
          nextLabel="Submit"
        />
      </div>
    </div>
  );
}