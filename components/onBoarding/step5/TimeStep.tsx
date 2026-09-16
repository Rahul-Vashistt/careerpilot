"use client";

import { useState } from "react";
import { PiCheck } from "react-icons/pi";

import StepHeader from "../StepHeader";
import StepNavigation from "../StepNavigation";
import { timeOptions } from "./timeOptions";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function TimeStep({ onNext, onBack }: Props) {
  const [selectedTime, setSelectedTime] = useState<string | null>("");

  const handleSelectedTime = (time : string)=>{
    setSelectedTime((prev) => (prev === time ? "" : time))
  }

  return (
    <div className="flex min-h-[90vh] items-center justify-center p-8 sm:p-0">
      <div className="flex w-full max-w-4xl flex-col items-center gap-6">
        <StepHeader
          currentStep={5}
          title="How much time can you dedicate?"
          description={
            <>
              This helps us create a realistic plan that fits your schedule
              <br />
              and availability.
            </>
          }
        />

        {/* Time Options */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {timeOptions.map((time) => {
            const Icon = time.icon;
            const isSelected = selectedTime === time.title;

            return (
              <button
                key={time.title}
                type="button"
                onClick={() => handleSelectedTime(time.title)}
                className={`relative flex min-h-33 flex-col space-y-3 rounded-lg border-2 p-5 text-left cursor-pointer transition ${
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
                  size={26}
                  className={
                    isSelected ? "text-text-primary" : "text-muted"
                  }
                />

                <div className="space-y-1">
                  <h2 className="font-semibold text-text-primary">
                    {time.title}
                  </h2>

                  <p className="text-sm leading-5 text-text-secondary">
                    {time.description}
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
          nextLabel={selectedTime ? "Continue" : "Skip"}
        />
      </div>
    </div>
  );
}