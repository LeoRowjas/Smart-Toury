const themes = [
  "🏛️ Архитектура",
  "☕ Кулинария",
  "🎨 Искусство",
  "🌳 Природа",
  "📚 История",
  "🏙️ Современность",
];

export default function StepBasic() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <label className="text-sm font-bold uppercase text-gray-400 block mb-3">
        Название тура
      </label>

      <input
        type="text"
        placeholder="Например: Тайны петербургских дворов"
        className="w-full h-[60px] rounded-2xl border-2 border-gray-200 px-5 outline-none focus:border-[#2D5A5A]"
      />

      <div className="mt-6">
        <label className="text-sm font-bold uppercase text-gray-400 block mb-3">
          Тематика
        </label>

        <div className="flex flex-wrap gap-3">
          {themes.map((theme) => (
            <button
              key={theme}
              className="px-5 h-[48px] rounded-full bg-gray-100 hover:bg-[#2D5A5A] hover:text-white transition"
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="text-sm font-bold uppercase text-gray-400 block mb-3">
          Описание
        </label>

        <textarea
          placeholder="Расскажите о туре..."
          className="w-full min-h-[140px] rounded-2xl border-2 border-gray-200 p-5 outline-none resize-none focus:border-[#2D5A5A]"
        />
      </div>
    </div>
  );
}