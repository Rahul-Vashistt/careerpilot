"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/onBoarding/Header";
import OccupationStep from "@/components/onBoarding/step1/OccupationStep";
import TargetRoleStep from "@/components/onBoarding/step2/TargetRoleStep";
import SkillsStep from "@/components/onBoarding/step3/SkillsStep";
import GoalStep from "@/components/onBoarding/step4/GoalStep";
import TimeStep from "@/components/onBoarding/step5/TimeStep";
import TimelineStep from "@/components/onBoarding/step6/TimelineStep";

import { useCompleteOnboarding } from "@/hooks/onboarding/useCompleteOnboarding";

export type OnboardingData = {
  currentStatus: string | null;
  targetRole: string | null;
  skills: string[];
  mainGoal: string | null;
  weeklyTime: string | null;
  goalTimeline: string | null;
};

export default function OnBoarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const { mutateAsync } = useCompleteOnboarding();

  const [onBoardingData, setOnBoardingData] = useState<OnboardingData>({
    currentStatus: "Student",
    targetRole: "Frontend Developer",
    skills: [],
    mainGoal: null,
    weeklyTime: null,
    goalTimeline: "I'm flexible",
  });

  const submitOnBoardingData = async () => {
    if (
      !onBoardingData.currentStatus?.trim() ||
      !onBoardingData.targetRole?.trim() ||
      !onBoardingData.goalTimeline
    ) {
      return;
    }

    try {
      const data = await mutateAsync({
        currentStatus: onBoardingData.currentStatus,
        targetRole: onBoardingData.targetRole,
        skills: onBoardingData.skills,
        mainGoal: onBoardingData.mainGoal ?? undefined,
        weeklyTime: onBoardingData.weeklyTime ?? undefined,
        goalTimeline: onBoardingData.goalTimeline,
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

        {currentStep === 4 && (
          <GoalStep
            onNext={() => setCurrentStep(5)}
            onBack={() => setCurrentStep(3)}
            mainGoal={onBoardingData.mainGoal}
            setMainGoal={(mainGoal) =>
              setOnBoardingData((prev) => ({
                ...prev,
                mainGoal,
              }))
            }
          />
        )}

        {currentStep === 5 && (
          <TimeStep
            onNext={() => setCurrentStep(6)}
            onBack={() => setCurrentStep(4)}
            weeklyTime={onBoardingData.weeklyTime}
            setWeeklyTime={(weeklyTime) =>
              setOnBoardingData((prev) => ({
                ...prev,
                weeklyTime,
              }))
            }
          />
        )}

        {currentStep === 6 && (
          <TimelineStep
            onSubmit={submitOnBoardingData}
            onBack={() => setCurrentStep(5)}
            goalTimeline={onBoardingData.goalTimeline}
            setTimeline={(goalTimeline) =>
              setOnBoardingData((prev) => ({
                ...prev,
                goalTimeline,
              }))
            }
          />
        )}
      </main>
    </div>
  );
}
