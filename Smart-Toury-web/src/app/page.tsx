"use client";
import { useState } from "react";
import Link from "next/link";
import {TrendCard} from "@/components/TrendCard"
import {HomeMap} from '@/components/HomeMap'
import { PersonalRouteHome } from "@/components/PersonalRouteHome";

const CATEGORIES = ["Все", "Музеи", "Дворцы", "Экстрим", "Еда", "Водные", "Театры", "Обзорные"];


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

      <HomeMap></HomeMap>

      <div className="px-4 mt-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[36px] font-bold text-gray-900">Ваш персональный маршрут</h2>
          <Link href="/" className="text-[28px] text-gray-500">Настроить →</Link>
        </div>

        <PersonalRouteHome></PersonalRouteHome>
        
      </div>

      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[36px] font-bold text-gray-900">Тренды этого месяца</h2>
          <Link href="/" className="text-[28px] text-gray-500">Все →</Link>
        </div>

      <div className="flex gap-7 overflow-x-auto pb-2 -mx-4 px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-7 py-2.5 rounded-full text-[32px] font-medium whitespace-nowrap transition ${
              activeCategory === cat
                ? "bg-[#2D5A5A] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      </div>
        <TrendCard></TrendCard>
    </div>
  );
}