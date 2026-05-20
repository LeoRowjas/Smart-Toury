const accessibilityOptions = [
  {
    icon: "♿",
    title: "Без ступеней",
    description: "Пандусы и ровные дорожки",
  },
  {
    icon: "🪑",
    title: "Места отдыха",
    description: "Скамейки и кафе",
  },
  {
    icon: "🔇",
    title: "Тихий маршрут",
    description: "Без шумных дорог",
  },
  {
    icon: "🚻",
    title: "Туалеты",
    description: "WC по пути",
  },
];

export default function StepAccessibility() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <p className="text-sm font-bold uppercase text-gray-400 mb-5">
        Доступность маршрута
      </p>

      <div className="grid grid-cols-2 gap-4">

        {accessibilityOptions.map((option) => (
          <button
            key={option.title}
            className="border-2 border-gray-200 rounded-3xl p-6 hover:border-green-400 hover:bg-green-50 transition text-center"
          >
            <div className="text-4xl mb-3">
              {option.icon}
            </div>

            <h3 className="font-semibold text-[#2C3E50]">
              {option.title}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              {option.description}
            </p>
          </button>
        ))}

      </div>
    </div>
  );
}