"use client";

import { useState } from "react";
import { X, AlertTriangle, CheckCircle2, AlertCircle } from "lucide-react";

type CancelReason = "plans" | "better" | "guide" | "health" | "other";

const reasons = [
  { id: "plans", title: "Изменились планы", description: "Не смогу присутствовать в указанное время" },
  { id: "better", title: "Нашел более выгодное предложение", description: "Другой тур или более низкая цена" },
  { id: "guide", title: "Проблемы с гидом", description: "Не устраивает выбранный гид" },
  { id: "health", title: "Проблемы со здоровьем", description: "Не смогу участвовать по состоянию здоровья" },
  { id: "other", title: "Другая причина", description: "Укажу свою причину" },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingCancelPopups({ isOpen, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [selectedReason, setSelectedReason] = useState<CancelReason | null>(null);

  if (!isOpen) return null;

  const selectedTitle = reasons.find((item) => item.id === selectedReason)?.title;

  const handleClose = () => {
    setStep(1);
    setSelectedReason(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-[480px] rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">

        {/* ШАГ 1 — выбор причины */}
        {(step === 1 || step === 2) && (
          <>
            <Header title="Отменить бронирование" onClose={handleClose} />
            <div className="p-6">
              <p className="text-[15px] text-[#334155] mb-5">Пожалуйста, укажите причину отмены:</p>
              <div className="space-y-3">
                {reasons.map((item) => (
                  <ReasonCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    selected={item.id === selectedReason}
                    onClick={() => setSelectedReason(item.id as CancelReason)}
                  />
                ))}
              </div>
              <RefundBlock />
              <div className="flex gap-3 mt-7">
                <SecondaryButton onClick={handleClose}>Назад</SecondaryButton>
                <PrimaryButton disabled={!selectedReason} onClick={() => setStep(3)}>
                  Продолжить
                </PrimaryButton>
              </div>
            </div>
          </>
        )}

        {/* ШАГ 2 — подтверждение */}
        {step === 3 && (
          <>
            <Header title="Отменить бронирование" onClose={handleClose} />
            <div className="p-6 text-center">
              <div className="w-[52px] h-[52px] rounded-full bg-[#FCE7F3] flex items-center justify-center mx-auto">
                <AlertTriangle size={26} className="text-[#EAB308]" />
              </div>
              <h3 className="mt-5 text-[28px] font-semibold text-[#334155]">Вы уверены?</h3>
              <p className="text-[#94A3B8] mt-3 text-[15px]">Это действие нельзя будет отменить</p>
              <p className="text-[#94A3B8] text-[15px]">Бронирование будет полностью удалено</p>
              <div className="bg-[#F8FAFC] rounded-xl p-5 mt-6">
                <p className="text-[#94A3B8] text-[13px]">Причина отмены:</p>
                <p className="text-[#334155] font-semibold mt-2">{selectedTitle}</p>
              </div>
              <div className="flex gap-3 mt-7">
                <SecondaryButton onClick={() => setStep(1)}>Назад</SecondaryButton>
                <PrimaryButton onClick={() => setStep(4)}>Подтвердить отмену</PrimaryButton>
              </div>
            </div>
          </>
        )}

        {/* ШАГ 3 — успех */}
        {step === 4 && (
          <>
            <Header title="Бронирование отменено" onClose={handleClose} success />
            <div className="p-10 text-center">
              <div className="w-[60px] h-[60px] rounded-full bg-[#DCFCE7] flex items-center justify-center mx-auto">
                <CheckCircle2 size={34} className="text-[#22C55E]" />
              </div>
              <h3 className="mt-6 text-[30px] font-semibold text-[#334155]">Бронирование успешно отменено</h3>
              <p className="text-[#94A3B8] mt-4 text-[16px]">Средства будут возвращены в течение 3-5 рабочих дней</p>
              <p className="text-[#22C55E] font-semibold mt-3 text-[18px]">Возврат: 2500 ₽</p>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Header({ title, success = false, onClose }: { title: string; success?: boolean; onClose: () => void }) {
  return (
    <div className="h-[82px] border-b border-[#E2E8F0] flex items-center justify-between px-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#FCE7F3] flex items-center justify-center">
          <X className="text-[#E11D48]" size={24} />
        </div>
        <div>
          <h2 className="text-[18px] font-semibold text-[#334155] leading-none">{title}</h2>
          {!success && <p className="text-[#94A3B8] text-[13px] mt-1">Исторический центр Москвы</p>}
        </div>
      </div>
      <button onClick={onClose} className="w-9 h-9 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#F8FAFC] transition">
        <X size={18} />
      </button>
    </div>
  );
}

function ReasonCard({ title, description, selected = false, onClick }: { title: string; description: string; selected?: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`w-full rounded-xl border p-4 text-left transition ${selected ? "border-[#94A3B8] bg-[#F8FAFC]" : "border-[#E2E8F0] hover:border-[#CBD5E1]"}`}>
      <p className="font-semibold text-[#334155] text-[15px]">{title}</p>
      <p className="text-[#94A3B8] text-[13px] mt-1">{description}</p>
    </button>
  );
}

function RefundBlock() {
  return (
    <div className="mt-4 rounded-xl border border-[#FDBA74] bg-[#FFF7ED] p-4">
      <div className="flex items-start gap-3">
        <AlertCircle className="text-[#F59E0B] mt-[2px]" size={18} />
        <div>
          <p className="font-semibold text-[#334155] text-[15px]">Условия возврата</p>
          <p className="text-[#64748B] text-[14px] mt-1 leading-relaxed">При отмене за 24 часа до начала тура возврат составит 100%. При отмене менее чем за 24 часа возврат не предусмотрен.</p>
          <p className="text-[#0F766E] font-semibold mt-3 text-[15px]">Ожидаемый возврат: 2500 ₽</p>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton({ children, disabled, onClick }: { children: React.ReactNode; disabled?: boolean; onClick?: () => void }) {
  return (
    <button onClick={onClick} disabled={disabled} className={`h-[48px] flex-1 rounded-xl font-medium transition ${disabled ? "bg-[#F1F5F9] text-[#CBD5E1] cursor-not-allowed" : "bg-[#EF4444] text-white hover:bg-[#DC2626]"}`}>
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="h-[48px] flex-1 rounded-xl bg-[#F8FAFC] text-[#334155] font-medium hover:bg-[#F1F5F9] transition">
      {children}
    </button>
  );
}