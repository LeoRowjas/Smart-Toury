interface Props {
  step: number;
}

const steps = [
  "Основное",
  "Маршрут",
  "Доступность",
  "Публикация",
];

export default function CreateTourStepper({
  step,
}: Props) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">

      {/* HEADER */}
      <div className="px-5 h-[72px] flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">
            Шаг{" "}
            <span className="font-semibold text-[#2D5A5A]">
              {step}
            </span>{" "}
            из 4 · {steps[step - 1]}
          </p>
        </div>

        <button className="text-[#2D5A5A] text-sm font-semibold">
          Сохранить черновик
        </button>
      </div>

      {/* PROGRESS */}
      <div className="flex gap-2 px-5 pb-5">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className={`flex-1 h-[5px] rounded-full transition-all ${
              item < step
                ? "bg-green-400"
                : item === step
                ? "bg-[#2D5A5A]"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}