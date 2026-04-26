"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function TouristPage() {

    
  return (
    <div className="bg-gray-100 min-h-screen pb-8">
      <div className="bg-gradient-to-r from-[#2D5A5A] to-[#234848] h-[301px] text-white p-6 rounded-2xl flex items-center gap-5">

        <div className="w-24 h-24 rounded-full bg-[#3a7070] flex items-center justify-center text-3xl font-bold flex-shrink-0">
          А
        </div>

        <div className="flex-1">
          
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">Анна Михайлова</h2>

            <button className="text-xs bg-emerald-500 px-3 py-1 rounded-full font-medium hover:bg-emerald-600 transition">
              Редактировать
            </button>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
            <span className="text-sm text-white/80">
              Путешественник · Оффлайн
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
            <span>✈ Часто путешествует</span>
            <span>·</span>
            <span>🌍 23 страны</span>
          </div>

        </div>
</div>

      {/* Stats row */}
      <div className="bg-white grid grid-cols-4 h-[97] items-center rounded-2xl shadow divide-x divide-gray-200 -mt-14 relative z-10 text-[#7F8C8D] text-lg">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-[#2D5A5A]">12</span>
          <p>Просмотр туров</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-[#2D5A5A]">8</span>
          <p>Активные отзывы</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-[#2D5A5A]">24</span>
          <p>Сообщения</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-[#2D5A5A]">3</span>
          <p>Для хранения</p>
        </div>
      </div>

      <div className="px-4 mt-4 space-y-4">
        {/* Travel Statistics */}
        <Section title="СТАТИСТИКА ПУТЕШЕСТВИЙ">
          <div className="bg-white rounded-2xl border divide-gray-200 border-gray-100 grid grid-cols-3 divide-x">

            {/* LEFT */}
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  🌍
                </div>
                <div>
                  <p className="font-semibold text-lg text-[#2C3E50]">3</p>
                  <p className="text-xs text-gray-400">Страны</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  🏙
                </div>
                <div>
                  <p className="font-semibold text-lg text-[#2C3E50]">5</p>
                  <p className="text-xs text-gray-400">Городов</p>
                </div>
              </div>
            </div>

            {/* CENTER */}
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  📏
                </div>
                <div>
                  <p className="font-semibold text-lg text-[#2C3E50]">47 км</p>
                  <p className="text-xs text-gray-400">Пройдено</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  ⏱
                </div>
                <div>
                  <p className="font-semibold text-lg text-[#2C3E50]">36 ч</p>
                  <p className="text-xs text-gray-400">В турах</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">Уровень активности</p>

              {/* Progress */}
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[65%] h-full bg-green-400 rounded-full" />
              </div>

              <p className="text-xs text-gray-400 mt-1">
                65% до следующего уровня
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <span className="font-semibold text-[#2C3E50]">4.8</span>
              </div>
            </div>

          </div>
        </Section>

        {/* My Bookings */}
        <Section title="МОИ БРОНИРОВАНИЯ" badge="3">
          <div className="space-y-3">
            <BookingCard
              color="bg-gradient-to-br from-emerald-600 to-teal-700"
              label="Moscow"
              title="Исторический центр Москвы"
              date="23 января 2024 · 11:05 · Маша Петрова"
              price="2500 ₽"
              status="Подтверждено"
              statusColor="text-emerald-600"
            />
            <BookingCard
              color="bg-gradient-to-br from-slate-500 to-slate-700"
              label="Peterhof"
              title="Петергоф и фонтаны"
              date="25 января 2024 · 11:00 · Иван Сидоров"
              price="3500 ₽"
              status="Сегодня"
              statusColor="text-orange-500"
            />
            <BookingCard
              color="bg-gradient-to-br from-sky-600 to-indigo-700"
              label="SPB"
              title="Ночной Санкт-Петербург"
              date="28 января 2024 · 21:08 · Дима Козлов"
              price="2000 ₽"
              status="Подтверждено"
              statusColor="text-emerald-600"
            />
          </div>
        </Section>

        {/* Upcoming Tours */}
        <Section title="ПРЕДСТОЯЩИЕ ТУРЫ">
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
            <UpcomingTourRow icon="🗺️" iconBg="bg-violet-100" title="Предстоящие" sub="2 активных бронирования" badge="3" />
            <UpcomingTourRow icon="🏛️" iconBg="bg-amber-100" title="История" sub="12 завершенных туров" />
            <UpcomingTourRow icon="↩️" iconBg="bg-rose-100" title="Возврат и споры" sub="нет активных запросов" />
          </div>
        </Section>

        {/* Preferences */}
        <Section title="ПРЕДПОЧТЕНИЯ">
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
            <ToggleRow label="Режим доступности" sub="Без субтитров, с поводырем" defaultOn={true} />
            <ToggleRow label="Тихие маршруты" sub="Без шумных площадок и толп" defaultOn={true} />
            <ToggleRow label="Уведомления о скидках" sub="Персональные предложения" defaultOn={false} />
          </div>
        </Section>

        {/* Account */}
        <Section title="АККАУНТ">
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
            <MenuRow icon="💳" title="Способы оплаты" sub="2 карты привязано" />
            <MenuRow icon="🔔" title="Уведомления" sub="Настроить каналы связи" />
            <MenuRow icon="🛡️" title="Безопасность" sub="Гроль, 2ФА" />
            <MenuRow icon="🌐" title="Язык и регион" sub="Русский · Россия · RUB" />
          </div>
        </Section>

        {/* Other */}
        <Section title="ДРУГОЕ">
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
            <MenuRow icon="❓" title="Помощь и поддержка" sub="" />
            <MenuRow icon="🗺️" title="Стать гидом" sub="Зарабатывайте на экскурсиях" />
            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer">
              <span className="text-red-500 text-lg">🚪</span>
              <span className="text-red-500 text-sm font-medium">Выйти</span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children, badge }: { title: string; children: React.ReactNode; badge?: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-[11px] font-semibold text-gray-400 tracking-wider">{title}</p>
        {badge && (
          <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-sm font-bold text-[#2C3E50]">{value}</p>
        <p className="text-[11px] text-gray-400">{label}</p>
      </div>
    </div>
  );
}

function BookingCard({
  label,
  title,
  date,
  price,
  status,
}: {
  label: string;
  title: string;
  date: string;
  price: string;
  status: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <div className="w-40 h-22 bg-[#2D5A5A] text-white flex items-center justify-center rounded-lg font-medium">
          {label}
        </div>

        <div>
          <p className="font-semibold text-[#2C3E50]">{title}</p>
          <p className="text-sm text-gray-500 mt-1">
            📅 {date}
          </p>
          <p className="text-lg font-semibold text-[#2D5A5A] mt-1">
            {price}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end gap-2">
        <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded">
          {status}
        </span>

        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-gray-100 rounded">
            Детали
          </button>
          <button className="px-3 py-1 text-sm bg-[#2D5A5A] text-white rounded">
            Связаться с гидом
          </button>
          <button className="px-3 py-1 text-sm bg-red-100 text-red-500 rounded">
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
}

function UpcomingTourRow({ icon, iconBg, title, sub, badge }: { icon: string; iconBg: string; title: string; sub: string; badge?: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <span className={`${iconBg} rounded-xl w-8 h-8 flex items-center justify-center text-base flex-shrink-0`}>{icon}</span>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-[11px] text-gray-400">{sub}</p>
      </div>
      {badge && (
        <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">{badge}</span>
      )}
      <span className="text-gray-300 text-sm">›</span>
    </div>
  );
}

function ToggleRow({ label, sub, defaultOn }: { label: string; sub: string; defaultOn: boolean }) {
  const [on, setOn] = useState(defaultOn);

  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-[11px] text-gray-400">{sub}</p>
      </div>

      <button
        onClick={() => setOn(!on)}
        className={`w-10 h-6 rounded-full transition-colors ${
          on ? "bg-[#2D5A5A]" : "bg-gray-200"
        } relative flex-shrink-0`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
            on ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

function MenuRow({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <span className="text-lg flex-shrink-0">{icon}</span>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        {sub && <p className="text-[11px] text-gray-400">{sub}</p>}
      </div>
      <span className="text-gray-300 text-sm">›</span>
    </div>
  );
}