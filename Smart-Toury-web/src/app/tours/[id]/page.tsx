"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
export default function TourPage() {
  const params = useParams();
  const id = params.id;
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="h-[220px] bg-gradient-to-br from-indigo-400 to-purple-500 relative">
        <button className="absolute top-4 left-4 bg-white rounded-full p-2">
          ←
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-800">
          Тур #{id}
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          ⏱ 3 часа • 📍 5 точек • ★ 4.9
        </p>

        {/* Автор */}
        <div className="bg-white p-3 rounded-xl mt-3 shadow-sm">
          <p className="font-semibold">Мария Козлова</p>
          <p className="text-xs text-gray-400">Историк, эксперт по модерну</p>
        </div>

        {/* Маршрут */}
        <div className="mt-4 space-y-3">
          {[1, 2, 3].map((step) => (
            <div key={step} className="bg-white p-3 rounded-xl shadow-sm">
              <p className="text-sm text-orange-500">10:00 – 10:30</p>
              <p className="font-semibold">Локация #{step}</p>
              <p className="text-xs text-gray-400">
                Описание точки маршрута
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <div className="sticky bottom-16  p-3 flex justify-between items-center">
        <p className="font-bold">1 200 ₽</p>
        <Link href={`/tours/${id}/booking`}>
          <button className="bg-[#2D5A5A] text-white px-5 py-2 rounded-xl">
            Забронировать
          </button>
        </Link>
      </div>
    </div>
  );
}