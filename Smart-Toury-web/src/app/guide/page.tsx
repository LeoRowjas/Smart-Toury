"use client";

import { useState } from "react";
import Image from 'next/image';
import { Header } from "@/components/layout/Header";
type Tab = "tours" | "reviews";

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("tours");

  return (
    <div className="">
      <Header></Header>
      <div className="bg-linear-to-r from-[#2D5A5A] to-[#234848] h-[301] text-white p-6 rounded-2xl  flex gap-5 items-center" >
        <Image
          src="/logo.svg"
          width={120}
          height={120}
          alt="Логотип"
        />
        <div className="">
          <h2>Дмитрий Соколов</h2>
          <div className="flex items-center gap-2 text-white">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Гид эксперт · Онлайн</span>
          </div>
          <div className="flex items-center">
            <p>🏛️ Историк модерна</p>
            <p>· ☕ Кофеман</p>
          </div>
        </div>
      </div>


      <div className="w-[1857] mx-auto">
      <div className="  bg-white grid grid-cols-4 h-[97] items-center rounded-2xl shadow divide-x divide-gray-200 -mt-14 relative z-10">
        <div className="flex flex-col items-center">
          <span>34</span>
          <p>Туров</p>
        </div>

        <div className="flex flex-col items-center">
          <span>4.9</span>
          <p>Рейтинг</p>
        </div>

        <div className="flex flex-col items-center">
          <span>156</span>
          <p>Гостей</p>
        </div>

        <div className="flex flex-col items-center">
          <span>12</span>
          <p>Отзывов</p>
        </div>
      </div>

      {/* TABS */}
      <div className="grid grid-cols-2 gap-2 my-4">
        <div>
          <button
          onClick={() => setActiveTab("tours")}
          className={`w-full p-3 rounded-xl transition text-2xl ${
            activeTab === "tours"
              ? "bg-white shadow-lg"
              : "bg-white"
          }`}
        >
          <div className="flex flex-col items-start ml-3 text-2xl font-bold">
            <span className="rounded-xl p-1 bg-gray-200">🗺️</span>
            Мои туры
            <p className="text-[#7F8C8D] text-lg font-normal">Управление маршрутами</p>
          </div>
        </button>

        </div>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`w-full p-3 rounded-xl transition ${
            activeTab === "reviews"
              ? "bg-white shadow-lg"
              : "bg-white"
          }`}
        >
          <div className="flex flex-col items-start ml-3 text-2xl font-bold">
            <span className="bg-amber-200 rounded-xl p-1">⭐</span>
            Отзывы
            <p className="text-[#7F8C8D] text-lg font-normal">Мнения гостей</p>
          </div>
        </button>
      </div>
      </div>
      {/* CONTENT */}
      <div className=" w-[1857] mx-auto">
        {activeTab === "tours" ? <Tours /> : <Reviews />}
      </div>
    </div>
  );
}

function Tours() {
  return (
    <div>
      <div className="bg-linear-to-r from-[#FFF3E0] to-[#FFE7C3] rounded-2xl px-4 py-3.5">
        <div className="flex ml-3 text-[15] gap-1.5">
            <span className="bg-gray-100 rounded-xl p-1 px-3 items-center flex ">📈</span>
            <div className="">
              <p className="font-bold text-[#2C3E50]">Статистика за месяц</p>
              <p className="text-[#7F8C8D] font-normal">Ваши показатели</p>
            </div>
          </div>

          <div className=" w-full h-16 bg-white rounded-xl my-3">

          </div>

          {/* span к db */}
          <div className="flex gap-2 text-[16]">
            <p>Доход:</p>
            <span className="font-bold text-[#2D5A5A]">₽284,500</span>
            <span className="font-bold text-[#2D5A5A]">+18%</span>
            <p>к прошлому месяцу.</p>
            <p>Самый популярный тур —</p>
            <span className="font-bold text-[#2D5A5A]">Тихие дворы Васильевского</span>
          </div>

      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="space-y-3">
      <div className="p-4 bg-gray-100 rounded-xl">
        Анна: Очень крутая экскурсия!
      </div>
      <div className="p-4 bg-gray-100 rounded-xl">
        Михаил: Лучший гид 🔥
      </div>
      <div className="p-4 bg-gray-100 rounded-xl">
        Елена: Рекомендую!
      </div>
    </div>
  );
}