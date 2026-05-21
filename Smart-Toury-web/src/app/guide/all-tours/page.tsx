"use client";


import Link from 'next/link'
//import { Header } from "@/components/layout/Header";
import { useState } from "react";
import { useEffect } from "react";
import { getMyTours } from "@/lib/api/auth";

export default function AllToursPage() {

  const [tours, setTours] = useState<any[]>([]);

  useEffect(() => {

    const loadTours = async () => {

      try {

        const data = await getMyTours();

        console.log(data);

        setTours(data);

      } catch (err) {

        console.error(err);

      }
    };

    loadTours();

  }, []);

  const deleteTour = (id: number) => {
  setTours((prev) =>
    prev.filter((tour) => tour.id !== id)
  );
};

  return (
    <div >
      
      <div className="bg-gradient-to-r from-[#2D5A5A] to-[#234848] h-[301px] text-white p-6 ">


        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Link href='/guide' className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              ←
            </Link>

            <h1 className="text-white text-3xl font-semibold">
              Все туры
            </h1>
          </div>

          <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
            ⚙
          </button>

        </div>

        {/* SEARCH */}
        <div className="mt-19">
          <input
            type="text"
            placeholder="Поиск по названию, городу или тематике..."
            className="w-full h-[48px] rounded-2xl px-4 bg-white outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* FILTERS */}
        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">

          <button className="px-3 h-[30px] rounded-lg bg-[#5F8B8B] text-white text-sm whitespace-nowrap">
            Все 3
          </button>

          <button className="px-3 h-[30px] rounded-lg bg-white/10 text-white text-sm whitespace-nowrap">
            Активные 3
          </button>

          <button className="px-3 h-[30px] rounded-lg bg-white/10 text-white text-sm whitespace-nowrap">
            Черновики 1
          </button>

          <button className="px-3 h-[30px] rounded-lg bg-white/10 text-white text-sm whitespace-nowrap">
            Архив 1
          </button>

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
      </div>

    <div className="w-[1857] mx-auto">
      <div className='flex justify-between items-center mt-10'>
      <p className='text-[#2C3E50] font-bold text-3xl '>Активные туры</p>
      <div className="relative ">

        <select
          className="appearance-none h-[38px] pl-3 pr-10 rounded-xl bg-[#fff] text-sm outline-none border border-[#D7E7E7]"
        >
          <option>По популярности</option>
          <option>По рейтингу</option>
          <option>По цене ↑</option>
          <option>По цене ↓</option>
          <option>Сначала новые</option>
        </select>

        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#2D5A5A]">
          ▼
        </div>

      </div>

      </div>
      <div className="py-4 font-sans">
      <div className=" mx-auto space-y-5">
 
        {/* ── Tours block ── */}
        <div className=" gap-3 flex flex-col overflow-hidden">

          {tours.length === 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center text-gray-400">
              У вас пока нет созданных туров
            </div>
          )}
          {tours.map((tour) => (
  <div
    key={tour.id}
    className="bg-white rounded-2xl border border-gray-200 flex items-center gap-4 px-5 py-4"
  >

    {/* IMAGE */}
    <div className="w-14 h-14 rounded-xl flex-shrink-0">
      <div
        className={`w-full h-full rounded-xl bg-gradient-to-br ${tour.gradient}`}
      />
    </div>

    {/* CONTENT */}
    <div className="flex-1 min-w-0">

      <p className="text-sm font-semibold text-gray-900">
        {tour.name}
      </p>

      <div className="flex items-center gap-1 mt-0.5">

        <span className="text-[11px] text-gray-400">
          AI тур
        </span>

        <span className="text-gray-300 text-[11px]">
          ·
        </span>

        <span className="text-[11px] text-gray-400">
          2 часа
        </span>

      </div>

      <div className="flex items-center gap-3 mt-1">

        <span className="text-[11px] text-emerald-500 font-medium">
          Популярный
        </span>

        <span className="flex items-center gap-0.5 text-[11px] text-gray-500">
          <span className="text-amber-400">
            ★
          </span>

          4.9
        </span>

        <span className="text-[11px] text-gray-500">
          🔥 {tour.price} ₽
        </span>

      </div>

    </div>

    {/* ACTIONS */}
    <div className="flex gap-2">

      <button className="h-[34px] px-4 rounded-xl bg-[#F5F5F5] text-[#2C3E50] text-xs font-medium hover:bg-[#DCECEC] transition">
        Редактировать
      </button>

      <button
        onClick={() => deleteTour(tour.id)}
        className="h-[34px] px-4 rounded-xl bg-[#FCE4EC] text-[#E74C3C] text-xs font-medium hover:bg-red-100 transition"
      >
        Удалить
      </button>

    </div>

  </div>
))}
          
        </div>

      </div>
      </div>
      </div>
    </div>
  );
}