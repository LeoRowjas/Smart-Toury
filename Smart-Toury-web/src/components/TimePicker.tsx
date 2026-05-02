"use client";

import { useState } from "react";

export default function TimePicker() {
  const [activeTime, setActiveTime] = useState("10:00");

  const times = ["10:00","11:00","12:00","14:00","15:00","16:00"];

  return (
    <div className="bg-white p-3 rounded-xl shadow-sm ">
      <p className="text-[32px] text-gray-400 mb-2">
        ВРЕМЯ НАЧАЛА
      </p>

      <div className="grid grid-cols-3 gap-3">
        {times.map((t) => {
          const isActive = activeTime === t;

          return (
            <button
              key={t}
              onClick={() => setActiveTime(t)}
              className={`py-3 flex justify-center items-center rounded-xl text-[32px] transition h-[53px] ${
                isActive
                  ? "bg-[#2D5A5A] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}