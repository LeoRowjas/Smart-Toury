"use client";

type Props = {
  step: number;
};

export default function Stepper({ step }: Props) {
  const steps = [1, 2, 3];

  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((s, index) => {
        const isCompleted = step > s;
        const isCurrent = step === s;

        return (
          <div key={s} className="flex items-center w-full">
            <div
              className={`
                w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition
                ${
                  isCompleted || isCurrent
                    ? "bg-[#2f5d59] text-white"
                    : "bg-gray-200 text-gray-400"
                }
              `}
            >
              {s}
            </div>

            {/* ЛИНИЯ */}
            {index !== steps.length - 1 && (
              <div
                className={`
                  flex-1 h-[6px] mx-2 transition rounded-2xl
                  ${step > s ? "bg-[#2f5d59]" : "bg-gray-200"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}