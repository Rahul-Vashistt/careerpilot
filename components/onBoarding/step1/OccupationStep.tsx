"use client";

import { useState } from "react";
import { PiCheck } from "react-icons/pi";
import { occupationOptions } from "./occuptationOptions";

type Props = {
    onNext : ()=> void;
}

export default function OccupationStep({onNext} : Props) {
  const [selectedOccupation, setSelectedOccupation] = useState<string | null>(
    "Student",
  );
  return (
    <div className="flex min-h-[90vh] items-center justify-center p-8 sm:p-0">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-text-primary">
            Step 1 of 6
          </p>

          <h1 className="text-center font-geist text-4xl font-bold text-text-primary">
            First, tell us about yourself
          </h1>

          <p className="max-w-xl text-center text-sm text-muted">
            This helps us personalize your experience and create the right
            career roadmap for you.
          </p>
        </div>

        {/* Occupation Map */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {occupationOptions.map((career) => {
            const Icon = career.icon;
            const isSelected = selectedOccupation === career.title;

            return (
              <button
                key={career.title}
                type="button"
                onClick={() => setSelectedOccupation(career.title)}
                className={`relative flex flex-col space-y-2 rounded-lg border-2 p-6 text-left transition ${
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
                    <PiCheck size={14} className="text-primary-foreground" />
                  )}
                </div>

                <Icon
                  size={30}
                  className={isSelected ? "text-text-primary" : "text-muted"}
                />

                <h2 className="font-semibold text-text-primary">
                  {career.title}
                </h2>

                <p className="text-sm leading-5 text-text-secondary">
                  {career.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex w-full justify-between gap-8">
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-lg border border-disabled px-8 py-3 text-sm font-semibold text-disabled-foreground"
          >
            Back
          </button>

          <button
            type="button"
            disabled={!selectedOccupation}
            onClick={onNext}
            className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
