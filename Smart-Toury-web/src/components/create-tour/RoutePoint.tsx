interface Props {
  index: number;
  title: string;
  type: string;
  duration: string;
  ai?: boolean;
}

export default function RoutePoint({
  index,
  title,
  type,
  duration,
  ai,
}: Props) {
  return (
    <div className="flex gap-4">

      {/* NUMBER */}
      <div className="w-10 h-10 rounded-full bg-[#2D5A5A] text-white flex items-center justify-center font-bold flex-shrink-0">
        {index}
      </div>

      {/* CARD */}
      <div
        className={`flex-1 bg-white rounded-2xl p-5 shadow-sm relative border-2 ${
          ai
            ? "border-yellow-300"
            : "border-transparent"
        }`}
      >
        {ai && (
          <div className="absolute -top-3 right-4 bg-yellow-300 rounded-lg px-2 py-1 text-xs">
            🤖 AI
          </div>
        )}

        <h3 className="font-semibold text-[#2C3E50]">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {type} · {duration}
        </p>

        <div className="flex gap-2 mt-4">
          <button className="px-4 h-[36px] rounded-xl bg-[#F0F7F7] text-[#2D5A5A] text-sm">
            ✏️ Изменить
          </button>

          <button className="px-4 h-[36px] rounded-xl bg-red-50 text-red-500 text-sm">
            🗑️ Удалить
          </button>
        </div>
      </div>
    </div>
  );
}