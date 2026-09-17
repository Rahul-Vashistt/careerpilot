"use client";

import { useState } from "react";
import Header from "@/components/onBoarding/Header";
import OccupationStep from "@/components/onBoarding/step1/OccupationStep";
import CareerGoalStep from "@/components/onBoarding/step2/CareerGoalStep";
import SkillsStep from "@/components/onBoarding/step3/SkillsStep";
import GoalStep from "@/components/onBoarding/step4/GoalStep";
import TimeStep from "@/components/onBoarding/step5/TimeStep";
import TimelineStep from "@/components/onBoarding/step6/TimelineStep";

export type onBoardingProps = {
  occupation: string | null;
  careerGoal: string | null;
  skills: string[];
  mainGoal: string | null;
  weeklyTime: string | null;
  timeline: string | null;
};

export default function OnBoarding() {
  const [currentStep, setCurrentStep] = useState(1);

  const [onBoardingData, setOnBoardingData] = useState<onBoardingProps>({
    occupation: "Student",
    careerGoal: "Frontend Developer",
    skills: [],
    mainGoal: null,
    weeklyTime: null,
    timeline: "I'm flexible",
  });

  const submitOnBoardingData = () => {
    if (
      !onBoardingData.occupation?.trim() ||
      !onBoardingData.careerGoal?.trim() ||
      !onBoardingData.timeline
    ) {
      return;
    }

    console.log("Data submitted");
    console.log(onBoardingData);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentStep={currentStep} />

      <main className="flex-1">
        {currentStep === 1 && (
          <OccupationStep
            occupation={onBoardingData.occupation}
            setOccupation={(occupation) =>
              setOnBoardingData((prev) => ({
                ...prev,
                occupation,
              }))
            }
            onNext={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <CareerGoalStep
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
            careerGoal={onBoardingData.careerGoal}
            setCareerGoal={(careerGoal) =>
              setOnBoardingData((prev) => ({
                ...prev,
                careerGoal,
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
            onSubmit={() => submitOnBoardingData()}
            onBack={() => setCurrentStep(5)}
            timeline={onBoardingData.timeline}
            setTimeline={(timeline) =>
              setOnBoardingData((prev) => ({
                ...prev,
                timeline,
              }))
            }
          />
        )}
      </main>
    </div>
  );
}
