"use client";

import { useState } from "react";
import Header from "@/components/onBoarding/Header";
import OccupationStep from "@/components/onBoarding/step1/OccupationStep";
import CareerGoalStep from "@/components/onBoarding/step2/CareerGoalStep";
import SkillsStep from "@/components/onBoarding/step3/SkillsStep";
import GoalStep from "@/components/onBoarding/step4/GoalStep";
import TimeStep from "@/components/onBoarding/step5/TimeStep";
import TimelineStep from "@/components/onBoarding/step6/TimelineStep";

export default function OnBoarding() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentStep={currentStep} />

      <main className="flex-1">
        {currentStep === 1 && (
          <OccupationStep onNext={() => setCurrentStep(2)} />
        )}

        {currentStep === 2 && (
          <CareerGoalStep
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
          />
        )}
        {currentStep === 3 && (
          <SkillsStep
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
          />
        )}
        {currentStep === 4 && (
          <GoalStep
            onNext={() => setCurrentStep(5)}
            onBack={() => setCurrentStep(3)}
          />
        )}
        {currentStep === 5 && (
          <TimeStep
            onNext={() => setCurrentStep(6)}
            onBack={() => setCurrentStep(4)}
          />
        )}
        {currentStep === 6 && (
          <TimelineStep
            onNext={() => setCurrentStep(7)}
            onBack={() => setCurrentStep(5)}
          />
        )}
      </main>
    </div>
  );
}
