"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import DatePicker from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";
import { Row } from "@/components/Row";

export default function BookingPage() {
  const { id } = useParams();

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [seniors, setSeniors] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState("");

  const ADULT_PRICE = 1200;
  const CHILD_DISCOUNT = 0.5;
  const SENIOR_DISCOUNT = 0.3;

  const adultsTotal = adults * ADULT_PRICE;
  const childrenTotal = children * ADULT_PRICE * (1 - CHILD_DISCOUNT);
  const seniorsTotal = seniors * ADULT_PRICE * (1 - SENIOR_DISCOUNT);

  const subtotal = adultsTotal + childrenTotal + seniorsTotal;
  const discount = Math.round(subtotal * 0.1);
  const total = subtotal - discount - promoDiscount;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "SUMMER10") {
      const pd = Math.round((subtotal - discount) * 0.1);
      setPromoDiscount(pd);
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Неверный промокод");
      setPromoApplied(false);
      setPromoDiscount(0);
    }
  };

  return (
    <div className="min-h-screen pb-28">

      {/* HEADER */}
      <div className="p-4 flex items-center gap-3 bg-white border-b">
        <button className="text-lg">←</button>
        <h1 className="font-semibold">Бронирование</h1>
      </div>

      <div className="p-4 space-y-4">

        {/* Тур */}
        <div className="bg-white p-3 rounded-xl shadow-sm flex gap-3.5 items-center">
          <div className="bg-fuchsia-500 w-24 aspect-square rounded-2xl"></div>
          <div>
            <p className="font-semibold text-[36px]">Тур #{id}</p>
            <p className="text-sm text-gray-400">⏱ 3 часа • 📍 5 точек</p>
            <p className="font-bold mt-1">1 200 ₽</p>
          </div>
        </div>

        {/* Даты */}
        <DatePicker />

        {/* Время */}
        <TimePicker />

        {/* Участники */}
        <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
          <p className="font-semibold text-lg">Участники</p>

          <Row
            label="Взрослые"
            sub="от 16 лет"
            value={adults}
            onMinus={() => setAdults(Math.max(1, adults - 1))}
            onPlus={() => setAdults(adults + 1)}
          />
          <Row
            label="Дети"
            sub="7–15 лет, скидка 50%"
            value={children}
            onMinus={() => setChildren(Math.max(0, children - 1))}
            onPlus={() => setChildren(children + 1)}
          />
          <Row
            label="Пенсионеры / Льготники"
            sub="Скидка 30%"
            value={seniors}
            onMinus={() => setSeniors(Math.max(0, seniors - 1))}
            onPlus={() => setSeniors(seniors + 1)}
          />
        </div>

        {/* Accessibility banner */}
        <div className="bg-white p-6 rounded-2xl">
        <div className="bg-[#E8F5E9] rounded-xl p-6">
          <div className="flex items-start gap-5">

            <div className="w-[100px] h-[100px] bg-[#58D68D] rounded-full flex items-center justify-center shrink-0">
              <span className="text-4xl">♿</span>
            </div>

            {/* Контент */}
            <div>
              <p className="text-4xl font-semibold text-[#2C3E50] mb-3 leading-tight">
                Маршрут подходит для вас
              </p>

              <ul className="space-y-2">
                {[
                  "Без ступеней и порогов",
                  "Туалеты доступны на 3 из 5 точках",
                  "Места для отдыха каждые 20 минут",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[18px] text-[#2E7D32]">
                    <span className="text-[#2E7D32]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Промокод */}
        <div className="mb-7">
          <p className="text-[32px] font-semibold text-gray-500 uppercase tracking-wider">Промокод</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Введите код"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100 transition"
            />
            <button
              onClick={handleApplyPromo}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition"
            >
              Применить
            </button>
          </div>
          {promoError && <p className="text-xs text-red-500 mt-1">{promoError}</p>}
          {promoApplied && <p className="text-xs text-green-500 mt-1">Промокод применён!</p>}
        </div>

        {/* Итог */}
        <div className="bg-white p-4 rounded-xl shadow-sm text-sm space-y-2">
          <div className="flex justify-between my-5">
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
            <span>Скидка раннего бронирования</span>
            <span>−{discount} ₽</span>
          </div>

          <div className="flex justify-between text-gray-400">
            <span>Комиссия платформы</span>
            <span>0 ₽</span>
          </div>

          {promoApplied && promoDiscount > 0 && (
            <div className="flex justify-between text-green-500">
              <span>Промокод</span>
              <span>−{promoDiscount} ₽</span>
            </div>
          )}

          <div className="flex justify-between font-bold pt-2 border-t text-base">
            <span>Итого</span>
            <span>{total} ₽</span>
          </div>
        </div>

      </div>
      </div>
      {/* FOOTER */}
      <div className="fixed bottom-[70px] left-0 w-full bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center shadow-sm">
        <div>
          <p className="text-sm text-gray-400">Бесплатная отмена за 24 часа</p>
          <p className="text-xl font-bold text-[#2C3E50]">{total} ₽</p>
        </div>
        <button className="bg-[#2D5A5A] text-white px-6 py-2 rounded-xl text-sm">
          Оплатить
        </button>
      </div>

    </div>
  );
}