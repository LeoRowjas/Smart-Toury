"use client";

import { useState } from "react";

import AiAssistant from "@/components/create-tour/AiAssistant";
import BottomActions from "@/components/create-tour/BottomActions";
import CreateTourStepper from "@/components/create-tour/CreateTourStepper";
import StepRoute from "@/components/create-tour/StepRoute";
import StepBasic from "@/components/create-tour/StepBasic";
import StepAccessibility from "@/components/create-tour/StepAccessibility";
import StepPublish from "@/components/create-tour/StepPublish";
import GeneratingOverlay from "@/components/create-tour/GeneratingOverlay";

export default function CreateTourPage() {
  const [step, setStep] = useState(1);

  const [isGenerating, setIsGenerating] =
  useState(false);

  const nextStep = () => {

    if (step < 4) {
      setStep(step + 1);
      return;
    }

    generateTour();
  };

  const generateTour = async () => {
    setIsGenerating(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 3500)
    );

    setIsGenerating(false);

    alert("Тур успешно создан 🚀");
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-[120px]">

      <CreateTourStepper step={step} />

      <AiAssistant step={step} />

      <div className="p-5">

        {step === 1 && (
          <StepBasic />
        )}

        {step === 2 && (
          <StepRoute />
        )}

        {step === 3 && (
          <StepAccessibility />
        )}
        {step === 4 && (
          <StepPublish />
        )}

      </div>

      <div className="">
        <BottomActions
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
      />
      </div>


      <GeneratingOverlay
        isGenerating={isGenerating}
      />
    </div>
  );
}