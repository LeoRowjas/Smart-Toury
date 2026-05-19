"use client";

import { X, Check } from "lucide-react";
import { useState } from "react";

const hobbiesList = [
  {
    id: 1,
    title: "История модерна",
    description: "Эксперт по истории модерна",
    emoji: "🏛️",
  },
  {
    id: 2,
    title: "Кофехан",
    description: "Знаю лучшие кофейни города",
    emoji: "☕",
  },
  {
    id: 3,
    title: "Любитель искусства",
    description: "Галереи и искусство",
    emoji: "🎨",
  },
  {
    id: 4,
    title: "Фотограф",
    description: "Покажу лучшие ракурсы",
    emoji: "📷",
  },
  {
    id: 5,
    title: "Знаток вин",
    description: "Винные дегустации и подача",
    emoji: "🍷",
  },
  {
    id: 6,
    title: "Натуралист",
    description: "Парки, сады, природа города",
    emoji: "🌿",
  },
  {
    id: 7,
    title: "Гастроном",
    description: "Местная кухня и рестораны",
    emoji: "🍽️",
  },
  {
    id: 8,
    title: "Театрал",
    description: "Знаю всё о театрах",
    emoji: "🎭",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
}: Props) {
  const [selected, setSelected] = useState<number[]>([
    1, 2,
  ]);

  const toggleHobby = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-[760px] max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* HEADER */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between">
          <div>
            <h2 className="text-[32px] font-semibold text-[#2C3E50]">
              Редактировать профиль
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <X />
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 mb-[max(20px,env(safe-area-inset-bottom))] overflow-y-auto">
          {/* NAME */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
              Имя и фамилия
            </p>

            <input
              defaultValue="Дмитрий Соколов"
              className="w-full h-[56px] rounded-2xl bg-[#F5F5F5] px-5 outline-none border border-gray-200"
            />
          </div>

          {/* HOBBIES */}
          <div className="mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
              Выберите хобби
            </p>

            <div className="space-y-3">
              {hobbiesList.map((hobby) => {
                const active = selected.includes(hobby.id);

                return (
                  <button
                    key={hobby.id}
                    onClick={() => toggleHobby(hobby.id)}
                    className={`w-full rounded-2xl px-4 py-3 flex items-center justify-between transition border ${
                      active
                        ? "bg-[#DDF4EC] border-[#6FAE95]"
                        : "bg-[#EAF8F3] border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">
                        {hobby.emoji}
                      </div>

                      <div className="text-left">
                        <p className="font-semibold text-[#2C3E50]">
                          {hobby.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          {hobby.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        active
                          ? "bg-[#2D5A5A] text-white"
                          : "border border-gray-300"
                      }`}
                    >
                      {active && <Check size={16} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="sticky bottom-0 bg-white pt-4 flex gap-4 mt-8">
            <button
              onClick={onClose}
              className="flex-1 h-[52px] rounded-xl bg-[#F5F5F5] text-[#2C3E50]"
            >
              Отмена
            </button>

            <button className="flex-1 h-[52px] rounded-xl bg-[#2D5A5A] text-white">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}