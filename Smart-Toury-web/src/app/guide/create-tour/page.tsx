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
import { createTour } from "@/lib/api/auth";

export default function CreateTourPage() {
  const [step, setStep] = useState(1);

  const [tourData, setTourData] = useState({
    name: "",
    description: "",
    price: 0,
    durationMinutes: 0,
    distanceKm: 0,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  
  // 👇 ДОБАВИТЬ: состояние для точек маршрута
  const [routePoints, setRoutePoints] = useState<any[]>([]);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      return;
    }
    generateTour();
  };

  const generateTour = async () => {
    // 👇 ДОБАВИТЬ: проверка наличия точек маршрута
    if (routePoints.length === 0) {
      alert("Добавьте хотя бы одну точку маршрута");
      setStep(2);
      return;
    }

    setIsGenerating(true);

    try {
      // 👇 ДОБАВИТЬ: преобразуем точки маршрута в формат tourStops
      const tourStops = routePoints.map((point, index) => ({
        locationId: point.locationId,
        order: index,
        offsetMinutes: index * 30,
        durationMinutes: 30,
        guideNotes: `Остановка ${index + 1}: ${point.title}`,
      }));

      const result = await createTour({
        name: tourData.name,
        description: tourData.description,
        price: tourData.price,
        durationMinutes: tourData.durationMinutes,
        distanceKm: tourData.distanceKm,
        tourStops: tourStops, // 👇 ДОБАВИТЬ: передаем остановки
      });

      console.log("Тур создан:", result);
      alert("Тур успешно создан 🚀");
      
      // Очищаем форму или редиректим
      setTourData({
        name: "",
        description: "",
        price: 0,
        durationMinutes: 0,
        distanceKm: 0,
      });
      setRoutePoints([]); // 👇 ДОБАВИТЬ: очищаем точки маршрута
      setStep(1);
      
    } catch (err: any) {
      console.error(err);
      alert("Ошибка при создании тура: " + err.message);
    } finally {
      setIsGenerating(false);
    }
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
          <StepBasic
            tourData={tourData}
            setTourData={setTourData}
          />
        )}

        {step === 2 && (
          // 👇 ИЗМЕНИТЬ: передаем пропсы в StepRoute
          <StepRoute 
            routePoints={routePoints}
            onAddPoint={(point) => setRoutePoints([...routePoints, point])}
          />
        )}

        {step === 3 && (
          <StepAccessibility />
        )}
        {step === 4 && (
          <StepPublish
            tourData={tourData}
            setTourData={setTourData}
          />
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