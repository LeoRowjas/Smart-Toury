type Props = {
  ok: boolean;
  text: string;
};

export default function Rule({ ok, text }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm ">
      {/* КРУЖОК */}
      <div
        className={`
          w-5 h-5 flex my-0.5 items-center justify-center rounded-full transition
          ${ok ? "bg-[#2f5d59] text-white" : "bg-gray-300"}
        `}
      >
        {ok && "✓"}
      </div>

      {/* ТЕКСТ */}
      <span className={ok ? "text-[#2f5d59]" : "text-gray-400"}>
        {text}
      </span>
    </div>
  );
}