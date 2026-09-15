"use client";

import { useState } from "react";
import Header from "@/components/onBoarding/Header";
import OccupationStep from "@/components/onBoarding/step1/OccupationStep";
import CareerGoalStep from "@/components/onBoarding/step2/CareerGoalStep";
import SkillsStep from "@/components/onBoarding/step3/SkillsStep";

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
          <SkillsStep/>
        )}
      </main>
    </div>
  );
}
