"use client";

import { useState } from "react";
import { PiCheck } from "react-icons/pi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { goalOptions } from "./goalOptions";
import StepHeader from "../StepHeader";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function GoalStep({ onNext, onBack }: Props) {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(
    "Get an Internship",
  );

  return (
    <div className="flex min-h-[90vh] items-center justify-center p-8 sm:p-0">
      <div className="flex w-full max-w-4xl flex-col items-center gap-6">
        
        <StepHeader
          currentStep={4}
          title="What's your main goal?"
          description="Choose the career path you're most interested in pursuing.Choose what you want to achieve right now.
            You can always update this later."
        />
     
        {/* Goal Options */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goalOptions.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selectedGoal === goal.title;

            return (
              <button
                key={goal.title}
                type="button"
                onClick={() => setSelectedGoal(goal.title)}
                className={`relative flex min-h-41.25 flex-col space-y-3 rounded-lg border-2 p-6 text-left cursor-pointer transition ${
                  isSelected
                    ? "border-primary bg-surface-muted"
                    : "border-border bg-surface hover:border-border-hover hover:bg-surface-hover"
                }`}
              >
                {/* Check */}
                <div
                  className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                    isSelected
                      ? "border-primary bg-primary"
                      : "border-border bg-transparent"
                  }`}
                >
                  {isSelected && (
                    <PiCheck size={13} className="text-primary-foreground" />
                  )}
                </div>

                {/* Icon */}
                <Icon
                  size={30}
                  className={isSelected ? "text-text-primary" : "text-muted"}
                />

                {/* Content */}
                <div className="space-y-1">
                  <h2 className="font-semibold text-text-primary">
                    {goal.title}
                  </h2>

                  <p className="text-sm leading-5 text-text-secondary">
                    {goal.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex w-full items-center justify-between gap-8">
          <button
            type="button"
            onClick={onBack}
            className="group flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-all duration-300 hover:border-border-hover hover:bg-surface-hover cursor-pointer"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back
          </button>

          <button
            type="button"
            disabled={!selectedGoal}
            onClick={onNext}
            className="group flex items-center text-center justify-center gap-2 rounded-lg bg-primary py-3 px-8 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground cursor-pointer"
          >
            Continue
            <span className="inline-flex -translate-x-2 items-center text-base opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 ">
              <FiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
