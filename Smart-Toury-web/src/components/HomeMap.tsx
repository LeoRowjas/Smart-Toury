export function HomeMap() {

  const MAP_POINTS = [
  { emoji: "🏛️", top: "28%", left: "27%" },
  { emoji: "🎡", top: "18%", left: "73%" },
  { emoji: "☕", top: "38%", left: "57%" },
  { emoji: "🎭", top: "52%", left: "42%" },
  { emoji: "🍕", top: "60%", left: "32%" },
  ];

  return (
      <div className="mx-4 mt-3 rounded-2xl overflow-hidden relative bg-gradient-to-b from-sky-200 to-blue-100" style={{ height: 450 }}>
        {MAP_POINTS.map((p, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{ top: p.top, left: p.left, transform: "translate(-50%,-50%)" }}
          >
            {/* Pulse blob */}
            <div className="absolute w-10 h-10 rounded-full bg-orange-300 opacity-30 animate-ping" style={{ animationDuration: `${2 + i * 0.4}s` }} />
            <div className="w-9 h-9 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center text-lg z-10">
              {p.emoji}
            </div>
          </div>
        ))}
      </div>
  )
}