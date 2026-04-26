"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link'
import { Star } from "lucide-react";
//import { Header } from "@/components/layout/Header";
type Tab = "tours" | "reviews";
export default function GuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("tours");

  return (
    <div className="">
      
      <div className="bg-gradient-to-r from-[#2D5A5A] to-[#234848] h-[301px] text-white p-6 rounded-2xl flex items-center gap-5">

        <div className="w-24 h-24 rounded-full bg-[#3a7070] flex items-center justify-center text-3xl font-bold flex-shrink-0">
          Д
        </div>

        <div className="flex-1">

          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">Дмитрий Соколов</h2>

            <button className="text-xs bg-[#FFFFFF50] px-3 py-1 rounded-full font-medium hover:bg-emerald-600 transition">
              Редактировать
            </button>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
            <span className="text-sm text-white/80">
              Гид эксперт · Онлайн
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
            <span>🏛️ Историк модерна</span>
            <span>·</span>
            <span>☕ Кофеман</span>
          </div>

        </div>
      </div>


      <div className="w-[1857] mx-auto">
      <div className="bg-white grid grid-cols-4 h-[97] items-center rounded-2xl shadow divide-x divide-gray-200 -mt-14 relative z-10 text-[#7F8C8D] text-lg">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-[#2D5A5A]">34</span>
          <p>Туров</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-[#2D5A5A]">4.9</span>
          <p>Рейтинг</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-[#2D5A5A]">156</span>
          <p>Гостей</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-[#2D5A5A]">12</span>
          <p>Отзывов</p>
        </div>
      </div>

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
          <div className="flex flex-col items-start ml-3 text-2xl font-bold text-[#2C3E50]">
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
          <div className="flex flex-col items-start ml-3 text-2xl font-bold text-[#2C3E50]">
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
    <div className="w-[1857]">
      <div className=" bg-linear-to-r from-[#FFF3E0] to-[#FFE7C3] rounded-2xl px-4 py-3.5">
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
          <div className="flex gap-2 text-[16] text-[#5D4037]">
            <span className="font-bold text-[#2D5A5A]">Доход:</span>
            <p>₽284,500</p>
            <span className="font-bold text-[#2D5A5A]">+18%</span>
            <p>к прошлому месяцу.</p>
            <p>Самый популярный тур —</p>
            <span className="font-bold text-[#2D5A5A]">Тихие дворы Васильевского</span>
          </div>
      </div>

      <div className="flex justify-between">
        <span>Aктивные туры</span>
        <Link href="/" className="flex justify-between gap-1.5">Все <p>34</p> →</Link>
      </div>

      <div className="p-4 font-sans">
      <div className=" mx-auto space-y-3">
 
        {/* ── Tours block ── */}
        <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
 
          {/* Tour 1 */}
          <div className="flex items-center gap-4 px-5 py-4">
            <div className="w-14 h-14 rounded-xl flex-shrink-0">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">Тихие дворы Васильевского</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[11px] text-gray-400">Создан с помощью AI</span>
                <span className="text-gray-300 text-[11px]">·</span>
                <span className="text-[11px] text-gray-400">3 часа</span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[11px] text-emerald-500 font-medium">↑ 12% броней</span>
                <span className="flex items-center gap-0.5 text-[11px] text-gray-500">
                  <span className="text-amber-400">★</span> 4.9
                </span>
                <span className="text-[11px] text-gray-500">🔥 40.8к ₽</span>
              </div>
            </div>
          </div>
 
          {/* Tour 2 */}
          <div className="flex items-center gap-4 px-5 py-4">
            <div className="w-14 h-14 rounded-xl flex-shrink-0">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-pink-400 to-rose-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">Модерн и кофе</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[11px] text-gray-400">Ручная сборка</span>
                <span className="text-gray-300 text-[11px]">·</span>
                <span className="text-[11px] text-gray-400">2.5 часа</span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[11px] text-gray-400 font-medium">→ Стабильно</span>
                <span className="flex items-center gap-0.5 text-[11px] text-gray-500">
                  <span className="text-amber-400">★</span> 4.8
                </span>
                <span className="text-[11px] text-gray-500">🔥 28.5к ₽</span>
              </div>
            </div>
          </div>
 
          {/* Tour 3 */}
          <div className="flex items-center gap-4 px-5 py-4">
            <div className="w-14 h-14 rounded-xl flex-shrink-0">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">Петербургские крыши</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[11px] text-gray-400">Создан с помощью AI</span>
                <span className="text-gray-300 text-[11px]">·</span>
                <span className="text-[11px] text-gray-400">2 часа</span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[11px] text-emerald-500 font-medium">↑ 8% броней</span>
                <span className="flex items-center gap-0.5 text-[11px] text-gray-500">
                  <span className="text-amber-400">★</span> 4.7
                </span>
                <span className="text-[11px] text-gray-500">🔥 35.2к ₽</span>
              </div>
            </div>
          </div>
        </div>
 
        {/* ── About block ── */}
        <div className="bg-white rounded-2xl border border-gray-200 px-5 py-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-tight">О себе</p>
                <p className="text-xs text-gray-400 leading-tight mt-0.5">Информация для гостей</p>
              </div>
            </div>
            <button className="text-sm text-blue-500 hover:text-blue-700 font-normal whitespace-nowrap mt-0.5">
              Редактировать →
            </button>
          </div>
 
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Профессиональный гид с 8-летним стажем. Специализируюсь на архитектуре Петербургского модерна и истории города. Провожу авторские экскурсии, которые открывают город с новой стороны.
          </p>
 
          <div className="flex flex-wrap gap-2 mt-3">
            {["Архитектура", "История", "Модерн", "Кофейная культура"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-[8px] justify-center bg-[#F0F7F7] w-[143] h-[47] flex items-center text-[#2D5A5A] text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
 
        {/* ── Education block ── */}
        <div className="bg-white rounded-2xl border border-gray-200 px-5 py-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-tight">Образование и опыт</p>
                <p className="text-xs text-gray-400 leading-tight mt-0.5">Квалификация</p>
              </div>
            </div>
            <button className="text-sm text-blue-500 hover:text-blue-700 font-normal whitespace-nowrap mt-0.5">
              Редактировать →
            </button>
          </div>
 
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-900">СПбГУ, Исторический факультет</p>
              <p className="text-xs text-gray-400 mt-0.5">2012–2016 · Специализация: История искусств</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Аккредитованный гид Санкт-Петербурга</p>
              <p className="text-xs text-gray-400 mt-0.5">2017 · Лицензия: МГ-2345</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Более 500 проведённых экскурсий</p>
              <p className="text-xs text-gray-400 mt-0.5">2017–2024 · Индивидуальные и групповые туры</p>
            </div>
          </div>
        </div>
 
      </div>
    </div>
    </div>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Анна Петрова",
      time: "2 дня назад",
      text: "Потрясающая экскурсия! Дмитрий очень увлекательно рассказывает об архитектуре модерна. Узнала много нового о Петербурге.",
      tour: "Модерн и кофе",
      rating: 5,
    },
    {
      name: "Михаил Иванов",
      time: "5 дней назад",
      text: "Отличный маршрут по дворам Васильевского острова. Гид показал места, о которых я не знал, хотя живу в городе 10 лет!",
      tour: "Тихие дворы Васильевского",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      time: "1 неделю назад",
      text: "Очень интересно, но хотелось бы чуть больше времени на каждой локации. В целом рекомендую!",
      tour: "Петербургские крыши",
      rating: 4,
    },
  ];

  return (
    <div className="space-y-3 text-[#2C3E50]">
      
      {/* Header */}
      <div className="flex justify-between">
        <span>Отзывы</span>
        <Link href="/" className="flex gap-1.5">
          Все <p>12</p> →
        </Link>
      </div>

      {/* Список отзывов */}
      {reviews.map((review, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-200 p-4"
        >
          {/* Верх */}
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">{review.name}</p>
              <p className="text-xs text-gray-400">{review.time}</p>
            </div>

            {/* Звезды */}
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={
                    index < review.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>

          {/* Текст */}
          <p className="text-sm text-gray-700 mt-2">
            {review.text}
          </p>

          {/* Тур */}
          <p className="text-xs text-gray-400 mt-2">
            Тур:{" "}
            <span className="text-gray-700 font-medium">
              {review.tour}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}