const languages = [
  "🇷🇺 Русский",
  "🇬🇧 English",
  "🇩🇪 Deutsch",
  "🇫🇷 Français",
];

export default function StepPublish() {
  return (
    <div className="space-y-5">

      {/* PHOTO */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <p className="text-sm font-bold uppercase text-gray-400 mb-5">
          Фото тура
        </p>

        <button className="w-full h-[220px] border-2 border-dashed border-gray-300 rounded-3xl hover:border-[#2D5A5A] hover:bg-[#F0F7F7] transition flex flex-col items-center justify-center">

          <div className="text-5xl">
            📷
          </div>

          <p className="font-semibold mt-4">
            Загрузить фото
          </p>

          <p className="text-sm text-gray-400 mt-1">
            До 10 МБ
          </p>
        </button>
      </div>

      {/* PRICE */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <p className="text-sm font-bold uppercase text-gray-400 mb-5">
          Цена за человека
        </p>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="number"
            placeholder="1200"
            className="h-[60px] rounded-2xl border-2 border-gray-200 px-5 outline-none focus:border-[#2D5A5A]"
          />

          <select className="h-[60px] rounded-2xl border-2 border-gray-200 px-5 outline-none focus:border-[#2D5A5A]">
            <option>₽ Рубли</option>
            <option>$ Доллары</option>
            <option>€ Евро</option>
          </select>

        </div>

        <div className="mt-5">

          <p className="text-sm font-bold uppercase text-gray-400 mb-3">
            Максимальная группа
          </p>

          <input
            type="number"
            defaultValue={8}
            className="w-full h-[60px] rounded-2xl border-2 border-gray-200 px-5 outline-none focus:border-[#2D5A5A]"
          />
        </div>

      </div>

      {/* LANGUAGES */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <p className="text-sm font-bold uppercase text-gray-400 mb-5">
          Языки экскурсии
        </p>

        <div className="flex flex-wrap gap-3">

          {languages.map((language) => (
            <button
              key={language}
              className="h-[48px] px-5 rounded-full bg-gray-100 hover:bg-[#2D5A5A] hover:text-white transition"
            >
              {language}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}