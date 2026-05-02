"use client";

export default function FavoritesPage() {
  const FAVORITES = [
    {
      title: "Тихие дворы и модные кофейни Васильевского",
      time: "3 часа",
      points: "5 точек",
      price: "1 200 ₽",
      tag: "AI",
      tagColor: "bg-green-600",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Литературный Петербург: от Достоевского до современности",
      time: "2.5 часа",
      points: "4 точки",
      price: "1 500 ₽",
      tag: "Тренд",
      tagColor: "bg-pink-500",
      gradient: "from-pink-400 to-orange-400",
    },
    {
      title: "Невские парадные и секретные дворы",
      time: "4 часа",
      points: "6 точек",
      price: "1 800 ₽",
      tag: "Доступный",
      tagColor: "bg-blue-500",
      gradient: "from-cyan-400 to-blue-400",
    },
  ];

  return (
    <div className="p-4  w-full">

      <h1 className="text-xl font-bold text-gray-800 mb-3">
        Избранное
      </h1>

      <div className="flex gap-2 mb-4">
        <button className="bg-[#2D5A5A] text-white px-4 py-1.5 rounded-full text-sm">
          Все (3)
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm">
          СПБ (3)
        </button>
      </div>

      {/* Список */}
      <div className="flex flex-col gap-3">
        {FAVORITES.map((item, i) => (
          <div
            key={i}
            className="flex items-center bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >

            <div className={` bg-gradient-to-br from-pink-300 to-indigo-200 w-44 h-44 relative`}>
              <span className={`absolute top-2 left-2 text-white text-[10px] px-2 py-0.5 rounded ${item.tagColor}`}>
                {item.tag}
              </span>
            </div>

            <div className="flex-1 p-3">

              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-3 text-xs text-gray-400">
                    <span>⏱ {item.time}</span>
                    <span>📍 {item.points}</span>
                  </div>

                  <p className="font-semibold text-gray-800 mt-1 leading-snug text-4xl">
                    {item.title}
                  </p>
                </div>

                <button className="text-gray-400 hover:text-gray-600">
                  ✕
                </button>
              </div>

              {/* Низ */}
              <div className="flex items-center justify-between mt-2">
                <p className="font-bold text-[#2C3E50] text-4xl">
                  {item.price}
                </p>

                <button className="bg-[#2D5A5A] text-2xl text-white text-xs px-4 py-1.5 rounded-lg">
                  Забронировать
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}