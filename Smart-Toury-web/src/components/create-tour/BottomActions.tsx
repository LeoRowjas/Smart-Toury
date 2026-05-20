interface Props {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

export default function BottomActions({
  step,
  nextStep,
  prevStep,
}: Props) {
  return (
    <div className="fixed bottom-[50px] left-0 right-0   p-5 flex gap-3 z-50">

      {step > 1 && (
        <button
          onClick={prevStep}
          className="h-[56px] px-6 rounded-2xl bg-gray-100 hover:bg-gray-200 transition"
        >
          Назад
        </button>
      )}

      <button
        onClick={nextStep}
        className="flex-1 h-[56px] rounded-2xl bg-[#2D5A5A] hover:bg-[#234848] transition text-white font-semibold"
      >
        {step === 4
          ? "🚀 Опубликовать тур"
          : "Далее →"}
      </button>
    </div>
  );
}