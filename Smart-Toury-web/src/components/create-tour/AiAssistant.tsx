interface Props {
  step: number;
}

const messages = [
  "Привет! Я помогу создать уникальный тур за 5 минут.",
  "Я построил маршрут на основе вашей тематики.",
  "Проверяю доступность выбранных точек.",
  "Финальный шаг — почти готово!",
];

export default function AiAssistant({
  step,
}: Props) {
  return (
    <div className="mx-5 mt-5 rounded-3xl border-2 border-[#2D5A5A] bg-gradient-to-br from-[#F0F7F7] to-[#ECEBFF] p-5">

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl text-white">
          🤖
        </div>

        <div>
          <h3 className="font-bold text-[#2D5A5A]">
            ИИ-ассистент
          </h3>

          <p className="text-sm text-green-500">
            Анализирует маршрут
          </p>
        </div>
      </div>

      <div className="mt-5 bg-white rounded-2xl p-4 border-l-4 border-yellow-400">
        <p className="text-gray-700 leading-relaxed">
          {messages[step - 1]}
        </p>
      </div>
    </div>
  );
}