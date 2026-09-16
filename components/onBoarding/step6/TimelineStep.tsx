"use client";

import { useState } from "react";
import { PiCheck } from "react-icons/pi";

import StepHeader from "../StepHeader";
import StepNavigation from "../StepNavigation";
import { timelineOptions } from "./timelineOptions";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function TimelineStep({ onNext, onBack }: Props) {
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(
    "Within 3 months",
  );

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
          {timelineOptions.map((timeline) => {
            const Icon = timeline.icon;
            const isSelected = selectedTimeline === timeline.title;

            return (
              <button
                key={timeline.title}
                type="button"
                onClick={() => setSelectedTimeline(timeline.title)}
                className={`relative flex min-h-27 flex-col space-y-3 rounded-lg border-2 p-5 text-left cursor-pointer transition ${
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
                  size={24}
                  className={isSelected ? "text-text-primary" : "text-muted"}
                />

                <div className="space-y-1">
                  <h2 className="font-semibold text-text-primary">
                    {timeline.title}
                  </h2>

                  <p className="text-sm leading-5 text-text-secondary">
                    {timeline.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* buttons */}
        <StepNavigation
          onNext={onNext}
          onBack={onBack}
          disabled={!selectedTimeline}
          nextLabel="Submit"
        />
      </div>
    </div>
  );
}
