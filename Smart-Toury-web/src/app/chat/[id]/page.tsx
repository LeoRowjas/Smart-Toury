"use client";

import { ArrowLeft, MoreVertical, Send, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ChatPage({
    params,
  }: {
    params: { id: string };
  }) {
  const [message, setMessage] = useState("");

  return (
    <div className="h-screen bg-[#F5F5F3] flex flex-col">
      {/* HEADER */}
      <div className="bg-white border-b border-gray-200">
        <div className="h-[88px] px-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/tourist"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-[#E19B73] flex items-center justify-center text-white text-2xl font-semibold">
                  М
                </div>

                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
              </div>

              <div>
                <h2 className="text-[30px] font-semibold text-[#2C3E50] leading-none">
                  Мария Козлова
                </h2>

                <p className="text-[#4ADE80] text-lg mt-2">
                  В сети · Отвечает быстро
                </p>
              </div>
            </div>
          </div>

          <button>
            <MoreVertical
              size={30}
              className="text-[#2C3E50]"
            />
          </button>
        </div>

        {/* TOUR CARD */}
        <div className="bg-[#EEF3F3] px-5 py-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5EF9] to-[#6C63B5]" />

            <div>
              <h3 className="text-[22px] font-semibold text-[#2C3E50]">
                Тихие дворы и модные кофейни Васильевского
              </h3>

              <p className="text-[#7F8C8D] text-lg mt-1">
                3 часа · 5 локаций · 4.2 км
              </p>
            </div>
          </div>

          <span className="bg-[#E8F8EC] text-[#5BA36A] px-4 py-2 rounded-xl text-sm font-medium">
            Подтверждено
          </span>
        </div>
      </div>

      {/* CHAT */}
      <div className="flex-1 overflow-y-auto px-5 py-8 space-y-8">
        <div className="text-center text-[#9CA3AF] text-lg">
          Сегодня
        </div>

        {/* LEFT MESSAGE */}
        <div>
          <div className="max-w-[700px] bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-[24px] text-[#34495E] leading-relaxed">
              Привет! 👋 Я Мария, ваш гид. Подтверждаю встречу завтра
              в 10:00 у станции метро «Василеостровская», выход №3.
            </p>
          </div>

          <p className="text-[#9CA3AF] text-lg mt-3">
            14:30
          </p>
        </div>

        {/* RIGHT MESSAGE */}
        <div className="flex flex-col items-end">
          <div className="max-w-[700px] bg-[#2D5A5A] text-white rounded-2xl p-5 shadow-sm">
            <p className="text-[24px] leading-relaxed">
              Отлично! А есть ли места, где можно присесть по пути?
              Мы с мамой, ей 65 лет.
            </p>
          </div>

          <p className="text-[#9CA3AF] text-lg mt-3">
            14:30
          </p>
        </div>

        {/* LEFT MESSAGE */}
        <div>
          <div className="max-w-[620px] bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-[24px] text-[#34495E] leading-relaxed">
              Конечно! Маршрут адаптирован — у меня в плане 3 кафе с
              удобными креслами и пандусами. Вот точка встречи:
            </p>
          </div>

          <p className="text-[#9CA3AF] text-lg mt-3">
            14:30
          </p>
        </div>

        {/* LOCATION CARD */}
        <div>
          <div className="bg-white rounded-3xl p-5 w-[420px] shadow-sm">
            <div className="h-[130px] bg-[#D8E9F7] rounded-2xl flex items-center justify-center">
              <MapPin
                size={42}
                className="text-red-500"
              />
            </div>

            <p className="text-[22px] font-semibold text-[#34495E] mt-4">
              метро «Василеостровская», выход №3
            </p>
          </div>

          <p className="text-[#9CA3AF] text-lg mt-3">
            14:30
          </p>
        </div>

        {/* RIGHT MESSAGE */}
        <div className="flex flex-col items-end">
          <div className="max-w-[500px] bg-[#2D5A5A] text-white rounded-2xl p-5 shadow-sm">
            <p className="text-[24px] leading-relaxed">
              Супер, спасибо! А если пойдет дождь?
            </p>
          </div>

          <p className="text-[#9CA3AF] text-lg mt-3">
            14:30
          </p>
        </div>

        {/* FINAL MESSAGE */}
        <div>
          <div className="max-w-[640px] bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-[24px] text-[#34495E] leading-relaxed">
              У меня есть запасной маршрут с крытыми переходами через
              дворы. И зонтики на всякий случай ☔
            </p>

            <div className="flex gap-3 mt-5">
              <button className="bg-[#EEF3F3] px-4 py-2 rounded-xl text-[#2D5A5A] text-sm">
                👍 Отлично
              </button>

              <button className="bg-[#EEF3F3] px-4 py-2 rounded-xl text-[#2D5A5A] text-sm">
                🙏 Спасибо
              </button>
            </div>
          </div>

          <p className="text-[#9CA3AF] text-lg mt-3">
            14:30
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-white border-t border-gray-200 px-5 py-4">
        {/* ACTIONS */}
        <div className="flex gap-3 mb-4">
          <button className="bg-white border border-gray-200 rounded-full px-5 py-3 text-sm flex items-center gap-2 hover:bg-gray-50">
            📍 Отправить локацию
          </button>

          <button className="bg-white border border-gray-200 rounded-full px-5 py-3 text-sm flex items-center gap-2 hover:bg-gray-50">
            ⏰ Перенести время
          </button>

          <button className="bg-white border border-gray-200 rounded-full px-5 py-3 text-sm flex items-center gap-2 hover:bg-gray-50 text-red-500">
            ❌ Отменить
          </button>
        </div>

        {/* INPUT */}
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-[#F3F4F6] rounded-full h-[64px] px-6 flex items-center">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Написать сообщение..."
              className="bg-transparent outline-none w-full text-lg"
            />
          </div>

          <button className="w-16 h-16 rounded-full bg-[#2D5A5A] text-white flex items-center justify-center hover:bg-[#234848] transition">
            <Send size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}