"use client";

import { useEffect, useState } from "react";
import { PiCheck, PiX } from "react-icons/pi";
import { targetRoleOptions } from "./targetRoleOptions";
import StepHeader from "../StepHeader";
import StepNavigation from "../StepNavigation";

import type { OnboardingData } from "@/app/(onboarding)/onboarding/page";

type Props = {
  onNext: () => void;
  onBack: () => void;
  targetRole: OnboardingData["targetRole"];
  setTargetRole: (targetRole: string) => void;
};

export default function TargetRoleStep({
  onNext,
  onBack,
  targetRole,
  setTargetRole,
}: Props) {
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  const [customGoal, setCustomGoal] = useState("");

  const isOtherSelected = targetRole === "Other";

  const handleCareerSelect = (title: string) => {
    if (title === "Other") {
      setIsOtherOpen(true);
      return;
    }

    setTargetRole(title);
    setCustomGoal("");
  };

  const handleOtherSubmit = () => {
    const trimmedGoal = customGoal.trim();

    if (!trimmedGoal) return;

    setTargetRole(trimmedGoal);
    setIsOtherOpen(false);
  };

  const handleModalClose = () => {
    setIsOtherOpen(false);

    if (isOtherSelected) {
      setTargetRole("");
    }
  };

  useEffect(() => {
    if (!isOtherOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOtherOpen, isOtherSelected]);

  return (
    <>
      <div className="flex min-h-[90vh] items-center justify-center p-8 sm:p-0">
        <div className="flex w-full max-w-4xl flex-col items-center gap-6 p-4">
          <StepHeader
            currentStep={2}
            title="What do you want to become?"
            description={
              <>Choose the career path you&apos;re most interested in pursuing.</>
            }
          />

          {/* Career Options */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {targetRoleOptions.map((career) => {
              const Icon = career.icon;

              const isSelected =
                career.title === "Other"
                  ? isOtherSelected
                  : targetRole === career.title;

              return (
                <button
                  key={career.title}
                  type="button"
                  onClick={() => handleCareerSelect(career.title)}
                  className={`group relative flex cursor-pointer flex-col gap-4 rounded-xl border-2 p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-primary bg-surface-muted"
                      : "border-border bg-surface hover:border-border-hover hover:bg-surface-hover"
                  }`}
                >
                  {/* Selection indicator */}
                  <div
                    className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                      isSelected
                        ? "border-primary bg-primary"
                        : "border-border bg-transparent group-hover:border-border-hover"
                    }`}
                  >
                    {isSelected && (
                      <PiCheck
                        size={11}
                        strokeWidth={3}
                        className="text-primary-foreground"
                      />
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
                      isSelected
                        ? "bg-primary/10 text-primary"
                        : "bg-surface-muted text-muted group-hover:text-text-primary"
                    }`}
                  >
                    <Icon size={25} />
                  </div>

                  {/* Title */}
                  <h2 className="pr-6 font-semibold text-text-primary">
                    {career.title}
                  </h2>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <StepNavigation onNext={onNext} onBack={onBack} />
        </div>
      </div>

      {/* Other Career Modal */}
      {isOtherOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              handleModalClose();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="other-career-title"
            className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-border p-5">
              <div>
                <h2
                  id="other-career-title"
                  className="text-lg font-semibold text-text-primary"
                >
                  Tell us your career goal
                </h2>

                <p className="mt-1 text-sm text-muted">
                  What role or career path are you aiming for?
                </p>
              </div>

              <button
                type="button"
                onClick={handleModalClose}
                aria-label="Close"
                className="rounded-lg p-1.5 text-muted transition-colors hover:bg-surface-muted hover:text-text-primary"
              >
                <PiX size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-5 p-5">
              <div>
                <label
                  htmlFor="custom-career-goal"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  Career goal
                </label>

                <input
                  id="custom-career-goal"
                  type="text"
                  value={customGoal}
                  onChange={(event) => setCustomGoal(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleOtherSubmit();
                    }
                  }}
                  autoFocus
                  maxLength={60}
                  placeholder="e.g. Product Manager"
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-3 text-sm text-text-primary outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />

                <div className="mt-2 flex justify-between text-xs text-muted">
                  <span>Keep it specific</span>
                  <span>{customGoal.length}/60</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  disabled={!customGoal.trim()}
                  onClick={handleOtherSubmit}
                  className="rounded-lg bg-primary hover:bg-primary/90 px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
