interface Props {
  isGenerating: boolean;
}

export default function GeneratingOverlay({
  isGenerating,
}: Props) {
  if (!isGenerating) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white/95 flex flex-col items-center justify-center">

      {/* SPINNER */}
      <div className="w-[90px] h-[90px] rounded-full border-4 border-[#E6F0F0] border-t-[#2D5A5A] animate-spin" />

      {/* TEXT */}
      <h2 className="mt-8 text-3xl font-bold text-[#2C3E50]">
        ИИ создаёт ваш тур...
      </h2>

      <p className="mt-3 text-gray-500 text-lg">
        Анализируем лучшие локации
      </p>

    </div>
  );
}