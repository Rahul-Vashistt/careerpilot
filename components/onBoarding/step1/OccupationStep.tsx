"use client";

import { useState } from "react";
import { PiCheck } from "react-icons/pi";
import { occupationOptions } from "./occuptationOptions";
import { FiArrowRight } from "react-icons/fi";

import type { onBoardingProps } from "@/app/onboarding/page";

import StepHeader from "../StepHeader";

type Props = {
  onNext: () => void;
  occupation: onBoardingProps["occupation"];
  setOccupation: (occupation: string | null) => void;
};

export default function OccupationStep({
  onNext,
  occupation,
  setOccupation,
}: Props) {
  return (
    <div className="flex min-h-[90vh] items-center justify-center p-8 sm:p-0">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6">
        <StepHeader
          currentStep={1}
          title="First, tell us about yourself"
          description={
            <>
              This helps us personalize your experience and <br /> create the
              right career roadmap for you.
            </>
          }
        />

        {/* Occupation Map */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {occupationOptions.map((career) => {
            const Icon = career.icon;
            const isSelected = occupation === career.title;

            return (
              <button
                key={career.title}
                type="button"
                onClick={() => setOccupation(career.title)}
                className={`relative flex flex-col space-y-2 rounded-lg border-2 p-6 text-left cursor-pointer transition ${
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
        <div className="mt-8 flex w-full justify-center gap-8 ">
          <button
            type="button"
            disabled={!occupation}
            onClick={onNext}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground cursor-pointer"
          >
            Continue
            <span className="inline-flex -translate-x-2 items-center text-base opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
              <FiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
