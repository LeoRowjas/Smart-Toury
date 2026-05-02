export function Row({ label, sub, value, onMinus, onPlus }) {
  return (
    <div className="flex justify-between items-center pt-2">
      <div>
        <p className="font-medium text-[32px]">{label}</p>
        <p className="text-[24px] text-gray-400">{sub}</p>
      </div>

      <div className="flex items-center gap-2 text-5xl">
        <button
          onClick={onMinus}
          className="w-14 h-14 flex items-center justify-center border border-gray-200 rounded-full"
        >
          −
        </button>

        <span className="w-6 text-center">{value}</span>

        <button
          onClick={onPlus}
          className="w-14 h-14 flex items-center justify-center border border-gray-200 rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
}