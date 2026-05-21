"use client";

import { useState } from "react";
import RoutePoint from "./RoutePoint";
import AddLocationModal from "../modals/AddLocationModal";

interface StepRouteProps {
  routePoints?: any[];
  onAddPoint?: (point: any) => void;
}

export default function StepRoute({ routePoints = [], onAddPoint }: StepRouteProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [points, setPoints] = useState(routePoints);

  const handleAddLocation = (newLocation: any) => {
    // Добавляем точку маршрута
    const newPoint = {
      id: newLocation.id,
      title: newLocation.name,
      type: "📍 Локация",
      duration: "30 мин",
      locationId: newLocation.id,
    };

    setPoints([...points, newPoint]);
    
    if (onAddPoint) {
      onAddPoint(newPoint);
    }
    
    alert(`Локация "${newLocation.name}" успешно добавлена!`);
  };

  return (
    <div className="space-y-5">
      {/* MAP */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-sm font-bold uppercase text-gray-400 mb-5">
          Маршрут на карте
        </p>
        <div className="h-[240px] rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
          <div className="absolute top-1/2 left-[15%] right-[15%] h-[5px] bg-[#2D5A5A] rounded-full" />
          {[15, 40, 65, 85].map((item) => (
            <div
              key={item}
              style={{ left: `${item}%` }}
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white bg-[#2D5A5A]"
            />
          ))}
        </div>
      </div>

      {/* ROUTE BUILDER */}
      <div className="bg-[#F0F7F7] rounded-3xl p-5 space-y-5">
        {points.map((point, index) => (
          <RoutePoint
            key={point.id || index}
            index={index + 1}
            title={point.title}
            type={point.type}
            duration={point.duration}
            ai={point.ai}
          />
        ))}

        {/* ADD BUTTON */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full h-[64px] rounded-2xl border-2 border-dashed border-[#2D5A5A] text-[#2D5A5A] font-semibold hover:bg-[#E6F0F0] transition"
        >
          + Добавить точку вручную
        </button>

        {/* AI BUTTON */}
        <button className="w-full rounded-2xl bg-white p-4 text-gray-500 hover:text-[#2D5A5A] transition">
          Или{" "}
          <span className="font-semibold text-[#2D5A5A]">
            попросить ИИ подобрать
          </span>{" "}
          следующую локацию
        </button>
      </div>

      <AddLocationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddLocation}
      />
    </div>
  );
}