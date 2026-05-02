import Link from "next/link";

export function TrendCard() {

  const TREND_CARDS = [
  {
    bg: "bg-gradient-to-br from-teal-300 to-cyan-400",
    title: "Эрмитаж",
    titleSize: "text-3xl",
    cat: "Музеи",
    color: "text-teal-800",
    description: "Эрмитаж: шедевры мировой живописи и атмосфера императорской эпохи",
  },
  {
    bg: "bg-gradient-to-br from-blue-300 to-blue-400",
    title: "Петергоф",
    titleSize: "text-3xl",
    cat: "Дворцы",
    color: "text-blue-900",
    description: "Петергоф: фонтаны, дворцы и прогулка по царским садам",
  },
  {
    bg: "bg-gradient-to-br from-pink-200 to-purple-200",
    title: "Театр",
    titleSize: "text-4xl",
    cat: "Театры",
    color: "text-purple-700",
    description: "Лучшие театры города: от классики до современных постановок",
  },
  {
    bg: "bg-gradient-to-br from-orange-100 to-yellow-200",
    title: "Гастро-тур",
    titleSize: "text-2xl",
    cat: "Еда",
    color: "text-orange-700",
    description: "Гастро-тур: попробуй город на вкус — от street food до ресторанов",
  },
  ];

  return (
    <div className="flex justify-around mt-4 overflow-x-auto">
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

                <p className=" font-semibold text-[#2C3E50] text-4xl mt-3 leading-snug line-clamp-2">
                  {card.description}
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

                <Link href={`/tours/${i}`}>
                  <button className="bg-[#2D5A5A] text-white text-sm px-5 py-2 rounded-xl">
                    Забронировать
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
  )
}