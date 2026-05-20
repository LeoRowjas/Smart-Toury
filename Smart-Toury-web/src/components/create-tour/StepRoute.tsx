import RoutePoint from "./RoutePoint";

const routePoints = [
  {
    title: "Меншиковский дворец",
    type: "🏛️ Достопримечательность",
    duration: "30 мин",
  },
  {
    title: "Кофейня «ДоМо»",
    type: "☕ Перерыв",
    duration: "45 мин",
    ai: true,
  },
  {
    title: "Университетская набережная",
    type: "🌳 Прогулка",
    duration: "20 мин",
  },
];

export default function StepRoute() {
  return (
    <div className="space-y-5">

      {/* MAP */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-sm font-bold uppercase text-gray-400 mb-5">
          Маршрут на карте
        </p>

        <div className="h-[240px] rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">

          {/* LINE */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-[5px] bg-[#2D5A5A] rounded-full" />

          {/* DOTS */}
          {[15, 40, 65, 85].map((item) => (
            <div
              key={item}
              style={{ left: `${item}%` }}
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white bg-[#2D5A5A]"
            />
          ))}
        </div>
      </div>

      {/* ROUTE BUILDER */}
      <div className="bg-[#F0F7F7] rounded-3xl p-5 space-y-5">

        {routePoints.map((point, index) => (
          <RoutePoint
            key={index}
            index={index + 1}
            title={point.title}
            type={point.type}
            duration={point.duration}
            ai={point.ai}
          />
        ))}

        {/* ADD BUTTON */}
        <button className="w-full h-[64px] rounded-2xl border-2 border-dashed border-[#2D5A5A] text-[#2D5A5A] font-semibold hover:bg-[#E6F0F0] transition">
          + Добавить точку вручную
        </button>

        {/* AI BUTTON */}
        <button className="w-full rounded-2xl bg-white p-4 text-gray-500 hover:text-[#2D5A5A] transition">
          Или{" "}
          <span className="font-semibold text-[#2D5A5A]">
            попросить ИИ подобрать
          </span>{" "}
          следующую локацию
        </button>
      </div>
    </div>
  );
}