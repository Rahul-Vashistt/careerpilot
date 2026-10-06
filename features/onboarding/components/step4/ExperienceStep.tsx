"use client";

import { PiCheck } from "react-icons/pi";
import StepHeader from "../StepHeader";
import StepNavigation from "../StepNavigation";

import { experienceOptions, projectCountOptions, relevantExperienceOptions } from "./experienceOptions";

type Props = {
  onNext: () => void;
  onBack: () => void;
  experienceTypes: string[];
  projectCount: string | null;
  relevantExperience: string | null;
  setExperienceTypes: (experienceTypes: string[]) => void;
  setProjectCount: (projectCount: string | null) => void;
  setRelevantExperience: (relevantExperience: string | null) => void;
};

export default function ExperienceStep({
  onNext,
  onBack,
  experienceTypes,
  projectCount,
  relevantExperience,
  setExperienceTypes,
  setProjectCount,
  setRelevantExperience,
}: Props) {
  const hasProjects = experienceTypes.some(
    (type) => type === "Personal projects" || type === "Academic projects",
  );

  const hasRelevantExperience = experienceTypes.some(
    (type) => type === "Internship" || type === "Professional work",
  );

  const handleSelectExperience = (experience: string) => {
    if (experience === "Nothing yet") {
      if (experienceTypes.includes("Nothing yet")) {
        setExperienceTypes([]);
      } else {
        setExperienceTypes(["Nothing yet"]);
        setProjectCount(null);
        setRelevantExperience(null);
      }

      return;
    }

    const withoutNothing = experienceTypes.filter(
      (type) => type !== "Nothing yet",
    );

    if (withoutNothing.includes(experience)) {
      setExperienceTypes(withoutNothing.filter((type) => type !== experience));
    } else {
      setExperienceTypes([...withoutNothing, experience]);
    }
  };

  const handleProjectCount = (count: string) => {
    setProjectCount(projectCount === count ? null : count);
  };

  const handleRelevantExperience = (experience: string) => {
    setRelevantExperience(
      relevantExperience === experience ? null : experience,
    );
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center p-8 sm:p-4">
      <div className="flex w-full max-w-4xl flex-col gap-8">
        <StepHeader
          currentStep={4}
          title="What have you worked on so far?"
          description={
            <>
              Tell us about the experience you&apos;ve built so far.
              <br />
              Select everything that applies to you.
            </>
          }
        />

        {/* Experience Options */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {experienceOptions.map((experience) => {
            const isSelected = experienceTypes.includes(experience);

            return (
              <button
                key={experience}
                type="button"
                onClick={() => handleSelectExperience(experience)}
                className={`relative flex min-h-20 cursor-pointer items-center rounded-lg border-2 px-5 py-4 text-left transition ${
                  isSelected
                    ? "border-primary bg-surface-muted"
                    : "border-border bg-surface hover:border-border-hover hover:bg-surface-hover"
                }`}
              >
                <span className="pr-8 font-medium text-text-primary">
                  {experience}
                </span>

                <div
                  className={`absolute right-4 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border-2 ${
                    isSelected
                      ? "border-primary bg-primary"
                      : "border-border bg-transparent"
                  }`}
                >
                  {isSelected && (
                    <PiCheck size={13} className="text-primary-foreground" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Project Count */}
        {hasProjects && (
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold text-text-primary">
                How many projects have you completed?
              </h2>

              <p className="mt-1 text-sm text-text-secondary">
                Include personal and academic projects you&apos;ve finished.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {projectCountOptions.map((count) => {
                const isSelected = projectCount === count;

                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => handleProjectCount(count)}
                    className={`relative flex min-h-16 cursor-pointer items-center justify-center rounded-lg border-2 px-4 transition ${
                      isSelected
                        ? "border-primary bg-surface-muted"
                        : "border-border bg-surface hover:border-border-hover hover:bg-surface-hover"
                    }`}
                  >
                    <span className="font-medium text-text-primary">
                      {count}
                    </span>

                    <div
                      className={`absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
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
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Relevant Experience */}
        {hasRelevantExperience && (
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold text-text-primary">
                How much relevant experience do you have?
              </h2>

              <p className="mt-1 text-sm text-text-secondary">
                Include internships and professional work related to your target
                career.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relevantExperienceOptions.map((experience) => {
                const isSelected = relevantExperience === experience;

                return (
                  <button
                    key={experience}
                    type="button"
                    onClick={() => handleRelevantExperience(experience)}
                    className={`relative flex min-h-16 cursor-pointer items-center rounded-lg border-2 px-5 py-4 text-left transition ${
                      isSelected
                        ? "border-primary bg-surface-muted"
                        : "border-border bg-surface hover:border-border-hover hover:bg-surface-hover"
                    }`}
                  >
                    <span className="pr-7 font-medium text-text-primary">
                      {experience}
                    </span>

                    <div
                      className={`absolute right-3 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border-2 ${
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
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Buttons */}
        <StepNavigation
          onNext={onNext}
          onBack={onBack}
          nextLabel={experienceTypes.length > 0 ? "Continue" : "Skip"}
        />
      </div>
    </div>
  );
}
