"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/features/onboarding/components/Header";
import OccupationStep from "@/features/onboarding/components/step1/OccupationStep";
import TargetRoleStep from "@/features/onboarding/components/step2/TargetRoleStep";
import SkillsStep from "@/features/onboarding/components/step3/SkillsStep";
import ExperienceStep from "@/features/onboarding/components/step4/ExperienceStep";
import GoalStep from "@/features/onboarding/components/step5/GoalStep";
import TimeStep from "@/features/onboarding/components/step6/TimeStep";

import { useCompleteOnboarding } from "@/features/onboarding/hooks/useCompleteOnboarding";

export type OnboardingData = {
  currentStatus: string | null;
  targetRole: string | null;
  skills: string[];

  experienceTypes: string[];
  projectCount: string | null;
  relevantExperience: string | null;

  mainGoal: string | null;
  weeklyTime: string | null;
};

export default function OnBoarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const { mutateAsync } = useCompleteOnboarding();

  const [onBoardingData, setOnBoardingData] = useState<OnboardingData>({
    currentStatus: "Student",
    targetRole: "Frontend Developer",
    skills: [],

    experienceTypes: [],
    projectCount: null,
    relevantExperience: null,

    mainGoal: null,
    weeklyTime: null,
  });

  const submitOnBoardingData = async () => {
    if (
      !onBoardingData.currentStatus?.trim() ||
      !onBoardingData.targetRole?.trim()
    ) {
      return;
    }

    try {
      const data = await mutateAsync({
        currentStatus: onBoardingData.currentStatus,
        targetRole: onBoardingData.targetRole,
        skills: onBoardingData.skills,

        experienceTypes: onBoardingData.experienceTypes,
        projectCount: onBoardingData.projectCount ?? undefined,
        relevantExperience: onBoardingData.relevantExperience ?? undefined,

        mainGoal: onBoardingData.mainGoal ?? undefined,
        weeklyTime: onBoardingData.weeklyTime ?? undefined,
      });

      console.log(data);
      router.push("/dashboard");
    } catch (error) {
      console.error("Failed to complete onboarding:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentStep={currentStep} />

      <main className="flex-1">
        {/* Step 1 */}
        {currentStep === 1 && (
          <OccupationStep
            currentStatus={onBoardingData.currentStatus}
            setOccupation={(currentStatus) =>
              setOnBoardingData((prev) => ({
                ...prev,
                currentStatus,
              }))
            }
            onNext={() => setCurrentStep(2)}
          />
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <TargetRoleStep
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
            targetRole={onBoardingData.targetRole}
            setTargetRole={(targetRole) =>
              setOnBoardingData((prev) => ({
                ...prev,
                targetRole,
              }))
            }
          />
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <SkillsStep
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
            skills={onBoardingData.skills}
            setSkills={(skills) =>
              setOnBoardingData((prev) => ({
                ...prev,
                skills,
              }))
            }
          />
        )}

        {/* Step 4 - Experience */}
        {currentStep === 4 && (
          <ExperienceStep
            onNext={() => setCurrentStep(5)}
            onBack={() => setCurrentStep(3)}
            experienceTypes={onBoardingData.experienceTypes}
            projectCount={onBoardingData.projectCount}
            relevantExperience={onBoardingData.relevantExperience}
            setExperienceTypes={(experienceTypes) =>
              setOnBoardingData((prev) => ({
                ...prev,
                experienceTypes,
              }))
            }
            setProjectCount={(projectCount) =>
              setOnBoardingData((prev) => ({
                ...prev,
                projectCount,
              }))
            }
            setRelevantExperience={(relevantExperience) =>
              setOnBoardingData((prev) => ({
                ...prev,
                relevantExperience,
              }))
            }
          />
        )}

        {/* Step 5 - Goal */}
        {currentStep === 5 && (
          <GoalStep
            onNext={() => setCurrentStep(6)}
            onBack={() => setCurrentStep(4)}
            mainGoal={onBoardingData.mainGoal}
            setMainGoal={(mainGoal) =>
              setOnBoardingData((prev) => ({
                ...prev,
                mainGoal,
              }))
            }
          />
        )}

        {/* Step 6 - Weekly Time */}
        {currentStep === 6 && (
          <TimeStep
            onSubmit={submitOnBoardingData}
            onBack={() => setCurrentStep(5)}
            weeklyTime={onBoardingData.weeklyTime}
            setWeeklyTime={(weeklyTime) =>
              setOnBoardingData((prev) => ({
                ...prev,
                weeklyTime,
              }))
            }
          />
        )}
      </main>
    </div>
  );
}
