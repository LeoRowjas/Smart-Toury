"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import DatePicker from "@/components/DatePicker"
import TimePicker from "@/components/TimePicker"
import { Row } from "@/components/Row";

export default function BookingPage() {
  const { id } = useParams();

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [seniors, setSeniors] = useState(0);

  const ADULT_PRICE = 1200;
  const CHILD_DISCOUNT = 0.5;
  const SENIOR_DISCOUNT = 0.3;

  const adultsTotal = adults * ADULT_PRICE;
  const childrenTotal = children * ADULT_PRICE * (1 - CHILD_DISCOUNT);
  const seniorsTotal = seniors * ADULT_PRICE * (1 - SENIOR_DISCOUNT);

  const subtotal = adultsTotal + childrenTotal + seniorsTotal;
  const discount = Math.round(subtotal * 0.1);
  const total = subtotal - discount;

  return (
    <div className="min-h-screen  pb-28">

      {/* HEADER */}
      <div className="p-4 flex items-center gap-3 bg-white border-b">
        <button className="text-lg">←</button>
        <h1 className="font-semibold">Бронирование</h1>
      </div>

      <div className="p-4 space-y-4">

        {/* Тур */}
        <div className="bg-white p-3 rounded-xl shadow-sm flex gap-3.5 items-center">
          <div className="bg-fuchsia-500 w-24 aspect-square rounded-2xl" ></div>
          <div>
          <p className="font-semibold text-[36px]">
            Тур #{id}
          </p>
          <p className="text-sm text-gray-400">
            ⏱ 3 часа • 📍 5 точек
          </p>
          <p className="font-bold mt-1">1 200 ₽</p>
          </div>
        </div>

        {/* Даты */}
        <DatePicker></DatePicker>

        {/* Время */}
        <TimePicker></TimePicker>

        {/* Участники */}
        <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
          <p className="font-semibold uppercase text-4xl text-[Участники]">Участники</p>

          {/* Взрослые */}
          <Row
            label="Взрослые" 
            sub="от 16 лет"
            value={adults}
            onMinus={() => setAdults(Math.max(1, adults - 1))}
            onPlus={() => setAdults(adults + 1)}
          />

          {/* Дети */}
          <Row
            label="Дети"
            sub="7–15 лет, скидка 50%"
            value={children}
            onMinus={() => setChildren(Math.max(0, children - 1))}
            onPlus={() => setChildren(children + 1)}
          />

          {/* Пенсионеры */}
          <Row
            label="Пенсионеры / Льготники"
            sub="Скидка 30%"
            value={seniors}
            onMinus={() => setSeniors(Math.max(0, seniors - 1))}
            onPlus={() => setSeniors(seniors + 1)}
          />
        </div>

        {/* Итог */}
        <div className="bg-white p-4 rounded-xl shadow-sm text-sm space-y-2">
          <div className="flex justify-between">
            <span>{adults} взрослых × {ADULT_PRICE} ₽</span>
            <span>{adultsTotal} ₽</span>
          </div>

          {children > 0 && (
            <div className="flex justify-between text-green-600">
              <span>{children} детей (−50%)</span>
              <span>{childrenTotal} ₽</span>
            </div>
          )}

          {seniors > 0 && (
            <div className="flex justify-between text-green-600">
              <span>{seniors} пенсионеров (−30%)</span>
              <span>{seniorsTotal} ₽</span>
            </div>
          )}

          <div className="flex justify-between text-green-500">
            <span>Скидка</span>
            <span>−{discount} ₽</span>
          </div>

          <div className="flex justify-between font-bold pt-2 border-t">
            <span>Итого</span>
            <span>{total} ₽</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="fixed bottom-[70px] left-0 w-full bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center shadow-sm">
  <div>
    <p className="text-sm text-gray-400">
      Бесплатная отмена за 24 часа
    </p>
    <p className="text-xl font-bold text-[#2C3E50]">
      {total} ₽
    </p>
  </div>

  <button className="bg-[#2D5A5A] text-white px-6 py-2 rounded-xl text-sm">
    Оплатить
  </button>
</div>

    </div>
  );
}