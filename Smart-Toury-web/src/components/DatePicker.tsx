"use client";

import { useState } from "react";

export default function DatePicker() {
  const [activeDate, setActiveDate] = useState(25);

  const dates = [
    { day: "ПН", date: 24 },
    { day: "ВТ", date: 25 },
    { day: "СР", date: 26 },
    { day: "ЧТ", date: 27 },
    { day: "ПТ", date: 28 },
    { day: "СБ", date: 29 },
  ];

  return (
    <div className="bg-white p-3 rounded-xl shadow-sm">
      <p className="text-[32px] text-gray-400 mb-2">ВЫБЕРИТЕ ДАТУ</p>

      <div className="flex gap-3">
        {dates.map((item) => {
          const isActive = activeDate === item.date;

          return (
            <button
              key={item.date}
              onClick={() => setActiveDate(item.date)}
              className={`flex flex-col items-center justify-center rounded-xl px-3 py-2 transition ${
                isActive
                  ? "bg-[#2D5A5A] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {/* День недели */}
              <span
                className={`text-[20px] ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {item.day}
              </span>

              {/* Число */}
              <span className="text-[36px] font-semibold leading-none">
                {item.date}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}