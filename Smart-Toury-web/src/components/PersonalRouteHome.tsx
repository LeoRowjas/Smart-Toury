export function PersonalRouteHome() {
  return (
    <div className="grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-gradient-to-br from-violet-500 to-indigo-700 h-[180px] p-3 relative">
              <span className="bg-white/20 text-white text-[15px] px-2 py-0.5 rounded-full font-medium">🤖 AI-генерация</span>
              <div className="absolute bottom-3 left-3 flex gap-1.5 ">
                <span className="bg-[#58D68DE5] text-white text-[15px] px-2 py-0.5 rounded-full font-medium">♿ Без ступеней</span>
                <span className="bg-[#58D68DE5] text-white text-[15px] px-2 py-0.5 rounded-full font-medium">🌿 Тихий маршрут</span>
              </div>
            </div>
            <div className="p-3">

              <div className="flex items-center gap-2 text-[20px] text-[#7F8C8D] mb-1">
                <span>⏱ 3 часа</span>
                <span>📍 5 локаций</span>
                <span>🚶 4.2 км</span>
              </div>

              <p className="text-[32px] font-bold text-gray-900 leading-tight">Тихие дворы и модные кофейни Васильевского</p>
              <p className="text-[20px] text-gray-400 mt-1 leading-relaxed">Маршрут создан специально для вас на основе предпочтений: пешие прогулки, архитектура, кофе.</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-orange-300 flex-shrink-0" />
                  <div>
                    <p className="text-[22px] font-semibold text-gray-800">Мария К.</p>
                    <p className="text-[18px] text-green-500">● Онлайн</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[32px] font-bold ">1 200 ₽</p>
                  <p className="text-[18px] text-gray-400">за человека</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-gradient-to-br from-fuchsia-600 to-rose-700 h-28 p-3 relative h-[180px]">
              <span className="bg-white/20 text-white text-[15px] px-2 py-0.5 rounded-full font-medium">🤖 AI-генерация</span>
              <div className="absolute bottom-3 left-3 flex gap-1.5">
                <span className="bg-purple-400 text-white text-[15px] px-2 py-0.5 rounded-full font-medium">📸 Фотосессия</span>
                <span className="bg-purple-400 text-white text-[15px] px-2 py-0.5 rounded-full font-medium">🌙 Вечерний</span>
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2 text-[20px] text-gray-400 mb-1">
                <span>⏱ 2.5 часа</span>
                <span>📍 4 локации</span>
                <span>🚶 3.8 км</span>
              </div>
              <p className="text-[32px] font-bold text-gray-900 leading-tight">Ночной Петербург: огни и легенды</p>
              <p className="text-[20px] text-gray-400 mt-1 leading-relaxed">Вечерняя прогулка по самым атмосферным местам города с профессиональным фотографом.</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-teal-300 flex-shrink-0" />
                  <div>
                    <p className="text-[22px] font-semibold text-gray-800">Дмитрий П.</p>
                    <p className="text-[18px] text-red-400">● Оффлайн</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[32px] font-bold text-gray-900">1 500 ₽</p>
                  <p className="text-[18px] text-gray-400">за человека</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}