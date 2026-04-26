"use client";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["Все", "Музеи", "Дворцы", "Экстрим", "Еда", "Водные", "Театры", "Обзорные"];

const TREND_CARDS = [
  { bg: "bg-gradient-to-br from-teal-300 to-cyan-400", title: "Эрмитаж", titleSize: "text-3xl", cat: "Музеи", color: "text-teal-800" },
  { bg: "bg-gradient-to-br from-blue-300 to-blue-400", title: "Петергоф", titleSize: "text-3xl", cat: "Дворцы", color: "text-blue-900" },
  { bg: "bg-gradient-to-br from-pink-200 to-purple-200", title: "Театр", titleSize: "text-4xl", cat: "Театры", color: "text-purple-700" },
  { bg: "bg-gradient-to-br from-orange-100 to-yellow-200", title: "Гастро-тур", titleSize: "text-2xl", cat: "Еда", color: "text-orange-700" },
];

// Floating map points
const MAP_POINTS = [
  { emoji: "🏛️", top: "28%", left: "27%" },
  { emoji: "🎡", top: "18%", left: "73%" },
  { emoji: "☕", top: "38%", left: "57%" },
  { emoji: "🎭", top: "52%", left: "42%" },
  { emoji: "🍕", top: "60%", left: "32%" },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Все");

  return (
    <div className="bg-gray-50 min-h-screen pb-4 font-sans">
      {/* Top bar */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 sticky top-0 z-20 shadow-sm">
        <button className="flex items-center gap-1 text-sm font-medium text-gray-800 whitespace-nowrap">
          <span className="text-red-500">📍</span>
          Санкт-Петербург
          <span className="text-gray-400 text-xs ml-0.5">▼</span>
        </button>
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-gray-400 text-sm">🔍</span>
          <span className="text-gray-400 text-sm">Куда пойдем сегодня?</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          A
        </div>
      </div>

      {/* Chips */}
      <div className="px-4 pt-3 flex gap-2">
        <span className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
          Сейчас популярно
        </span>
        <span className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
          🔥 16 человек на маршруте
        </span>
      </div>

      {/* Map area */}
      <div className="mx-4 mt-3 rounded-2xl overflow-hidden relative bg-gradient-to-b from-sky-200 to-blue-100" style={{ height: 200 }}>
        {MAP_POINTS.map((p, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{ top: p.top, left: p.left, transform: "translate(-50%,-50%)" }}
          >
            {/* Pulse blob */}
            <div className="absolute w-10 h-10 rounded-full bg-orange-300 opacity-30 animate-ping" style={{ animationDuration: `${2 + i * 0.4}s` }} />
            <div className="w-9 h-9 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center text-lg z-10">
              {p.emoji}
            </div>
          </div>
        ))}
      </div>

      {/* Personal Routes */}
      <div className="px-4 mt-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-gray-900">Ваш персональный маршрут</h2>
          <Link href="/" className="text-sm text-gray-500">Настроить →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-gradient-to-br from-violet-500 to-indigo-700 h-28 p-3 relative">
              <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">🤖 AI-генерация</span>
              <div className="absolute bottom-3 left-3 flex gap-1.5">
                <span className="bg-green-400 text-white text-[9px] px-2 py-0.5 rounded-full font-medium">♿ Без ступеней</span>
                <span className="bg-green-400 text-white text-[9px] px-2 py-0.5 rounded-full font-medium">🌿 Тихий маршрут</span>
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-1">
                <span>⏱ 3 часа</span>
                <span>📍 5 локаций</span>
                <span>🚶 4.2 км</span>
              </div>
              <p className="text-sm font-bold text-gray-900 leading-tight">Тихие дворы и модные кофейни Васильевского</p>
              <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">Маршрут создан специально для вас на основе предпочтений: пешие прогулки, архитектура, кофе.</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-orange-300 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-semibold text-gray-800">Мария К.</p>
                    <p className="text-[9px] text-green-500">● Онлайн</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">1 200 ₽</p>
                  <p className="text-[9px] text-gray-400">за человека</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-gradient-to-br from-fuchsia-600 to-rose-700 h-28 p-3 relative">
              <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">🤖 AI-генерация</span>
              <div className="absolute bottom-3 left-3 flex gap-1.5">
                <span className="bg-purple-400 text-white text-[9px] px-2 py-0.5 rounded-full font-medium">📸 Фотосессия</span>
                <span className="bg-purple-400 text-white text-[9px] px-2 py-0.5 rounded-full font-medium">🌙 Вечерний</span>
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-1">
                <span>⏱ 2.5 часа</span>
                <span>📍 4 локации</span>
                <span>🚶 3.8 км</span>
              </div>
              <p className="text-sm font-bold text-gray-900 leading-tight">Ночной Петербург: огни и легенды</p>
              <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">Вечерняя прогулка по самым атмосферным местам города с профессиональным фотографом.</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-teal-300 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-semibold text-gray-800">Дмитрий П.</p>
                    <p className="text-[9px] text-red-400">● Оффлайн</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">1 500 ₽</p>
                  <p className="text-[9px] text-gray-400">за человека</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trends */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-gray-900">Тренды этого месяца</h2>
          <Link href="/" className="text-sm text-gray-500">Все →</Link>
        </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
              activeCategory === cat
                ? "bg-[#2D5A5A] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
        

        <div className="flex gap-4 mt-4 overflow-x-auto">
  {TREND_CARDS.map((card, i) => (
    <div
      key={i}
      className="w-[431px] h-[529px] flex-shrink-0 bg-white rounded-[20px] shadow-md border border-gray-100 overflow-hidden"
    >

      {/* TOP */}
      <div className={`${card.bg} h-[240px] relative flex items-center justify-center`}>
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          🔥 Популярно
        </span>

        <p className="text-4xl font-extrabold text-[#2C3E50]">
          {card.title}
        </p>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col justify-between h-[calc(100%-240px)]">

        <div>
          <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-md">
            {card.cat}
          </span>

          <p className="text-base font-semibold text-[#2C3E50] mt-3 leading-snug">
            Эрмитаж: шедевры мировой живописи
          </p>

          <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
            <span>⏱ 2 часа</span>
            <span className="text-amber-400">★</span>
            <span>4.9 (234)</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-2xl font-bold text-[#2C3E50]">
            800 ₽
          </p>

          <button className="bg-[#2D5A5A] text-white text-sm px-5 py-2 rounded-xl">
            Забронировать
          </button>
        </div>

      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}