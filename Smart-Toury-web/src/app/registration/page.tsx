
"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Header } from "@/app/components/layout/Header";
import { useState } from "react";
import Stepper from "@/app/components/Stepper";
import { PatternFormat } from "react-number-format";
import Rule from "@/app/components/Rule";
import { validatePassword } from "@/lib/utils/validatePassword";
import PasswordInput from "@/app/components/PasswordInput";
export default function RegisterPage() {

  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [news, setNews] = useState(false);

  const { hasLength, hasUpper, hasNumber } = validatePassword(password);

  const match = password === confirm && password.length > 0;

  const isValid = hasLength && hasUpper && hasNumber && match;

  return (
    <div>
    <Header></Header>
    <div className="max-w-md mx-auto p-6 min-w-[806] bg-white rounded-xl shadow text-[#2C3E50]">
      <Stepper step={step} />
      {/* ШАГ 1 */}
      {step === 1 && (
        <div className="">
          <h2 className=" text-[#2C3E50] font-bold text-3xl">Основная информация</h2>
          <p className="text-gray-400 text-sm mb-4">
            Расскажите нам о себе
          </p>

          <p className='text-[#2C3E50] font-bold text-2xl mb-2'>Как вас зовут?</p>
          <input
            placeholder="Введите имя"
            className="w-full border p-3 rounded mb-3"
          />
          <p className='text-[#2C3E50] font-bold text-2xl mb-2'>Email адрес</p>
          <input
            placeholder="example@mail.com"
            className="w-full border p-3 rounded mb-3"
          />

          <div className="flex items-center gap-2 text-[#2C3E50] font-bold text-2xl mb-2">
            <p>Телефон</p>
            <p className="text-[#7F8C8D] text-[14px]">(необязательно)</p>
          </div>
        <PatternFormat
          format="+7 (###) ###-##-##"
          placeholder="+7 (___) ___-__-__"
          mask="_"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg"
        />

          <button
            onClick={() => setStep(2)}
            className="w-full bg-[#2f5d59] text-white py-3 rounded-xl mt-2 font-semibold text-2xl"
          >
            Продолжить
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-300" />

            <span className="text-gray-400 text-sm whitespace-nowrap">
              ИЛИ ВОЙТИ ЧЕРЕЗ
            </span>

            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <div className="grid grid-cols-3 gap-3 ">
            <button className="border border-black/15 py-3 px-7 rounded-2xl flex justify-center items-center gap-3">
            <Image width={30} 
            height={30}
            alt='G'
            src='google.svg'/>
            Google
            </button>
            <button className="border border-black/15 py-3 px-7 rounded-2xl flex justify-center items-center gap-3">
            <Image width={30} 
            height={30}
            alt='G'
            src='vk.svg'/>VK</button>
            <button className="border border-black/15 py-3 px-7 rounded-2xl flex justify-center items-center gap-3">
            <Image width={30} 
            height={30}
            alt='G'
            src='yn.svg'/>Яндекс</button>
          </div>
        </div>
      )}

      {/* ШАГ 2 */}
      {step === 2 && (
        <div className="">
          <h2 className="text-lg font-semibold">Создайте пароль</h2>
          <p className="text-gray-500 text-sm mb-4">
            Защитите свой аккаунт
          </p>

        <h2 className="text-[#2C3E50] font-bold text-2xl mb-2">Пароль</h2>

          <PasswordInput
            value={password}
            onChange={setPassword}
            placeholder="Минимум 8 символов"
          />

          <div className=" space-y-2 my-6 ">
            <Rule ok={hasLength} text="Минимум 8 символов" />
            <Rule ok={hasUpper} text="Одна заглавная буква" />
            <Rule ok={hasNumber} text="Одна цифра" />
          </div>

          <h2 className="text-[#2C3E50] font-bold text-2xl mb-2">Подтвердите пароль</h2>

          <PasswordInput 
            value={confirm}
            onChange={setConfirm}
            placeholder="Повторите пароль"
          />
          {confirm.length > 0 && (
            <div className="mt-2 text-sm">
              {match ? (
                <p className="text-[#2f5d59] flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full text-[#2f5d59] text-xs">
                    ✓
                  </span>
                  Пароли совпадают
                </p>
              ) : (
                <p className="text-red-500 flex items-center gap-2">
                  <span>⚠</span>
                  Пароли не совпадают
                </p>
              )}
            </div>
          )}
          {confirm.length < 0 && !match && (
            <p className="text-[#2E7D32] text-sm mt-2">
              ✓ Пароли совпадают
            </p>
          )}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setStep(1)}
              className="w-[210] border border-gray-300 py-3 rounded-xl"
            >
              Назад
            </button>

            <button
              disabled={!isValid}
              onClick={() => {
                if (!isValid) return;
                setStep(3);
              }}
              className={`w-full rounded-xl py-3 text-white  ${
                isValid
                  ? "bg-[#2f5d59]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Продолжить
            </button>
          </div>
        </div>
      )}

      {/* ШАГ 3 */}
{step === 3 && (
  <div className="">

    <h2 className="text-[#2C3E50] font-bold text-3xl">Последний шаг!</h2>
    <p className="text-gray-400 text-sm mb-4">
      Настройте свои предпочтения
    </p>

    <div className="flex items-center gap-3 p-4 bg-[#eef4f3] rounded-xl border border-[#d7e6e4]">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2f5d59] text-white">
        🎯
      </div>
      <div className="flex-1">
        <p className="font-medium">Персонализация маршрутов</p>
        <p className="text-sm text-gray-500">
          Мы используем AI для создания уникальных экскурсий
        </p>
      </div>
    </div>

    <label
      className={`flex items-start gap-3 mt-4 p-4 border rounded-xl cursor-pointer transition-colors duration-200 ${
        agree
          ? "bg-[#ebf5ee] border-[#5dad7a]"
          : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`mt-1 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
          agree
            ? "bg-[#3a8a57] border-[#3a8a57]"
            : "border-2 border-gray-300"
        }`}
      >
        {agree && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path
              d="M1 5l3.5 3.5L11 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        checked={agree}
        onChange={() => setAgree(!agree)}
        className="hidden"
      />
      <div>
        <p className={`font-medium ${agree ? "text-[#1e5c38]" : "text-gray-800"}`}>
          Я согласен с условиями
        </p>
        <p className={`text-sm ${agree ? "text-[#2d7a4f]" : "text-gray-500"}`}>
          Принимаю <Link className='text-[#2D5A5A] underline' href="/user-agreement">пользовательское соглашение</Link> и <Link className='text-[#2D5A5A] underline' href="/privacy-policy">политику конфиденциальности</Link>
        </p>
      </div>
    </label>

    <label
      className={`flex items-start gap-3 mt-3 p-4 border rounded-xl cursor-pointer transition-colors duration-200 ${
        news
          ? "bg-[#fdf8e7] border-[#d4a934]"
          : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`mt-1 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
          news
            ? "bg-[#c9961f] border-[#c9961f]"
            : "border-2 border-gray-300"
        }`}
      >
        {news && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path
              d="M1 5l3.5 3.5L11 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        checked={news}
        onChange={() => setNews(!news)}
        className="hidden"
      />
      <div>
        <p className={`font-medium ${news ? "text-[#7a5a10]" : "text-gray-800"}`}>
          Получать новости и спецпредложения
        </p>
        <p className={`text-sm ${news ? "text-[#9a7215]" : "text-gray-500"}`}>
          Эксклюзивные маршруты, скидки и новости
        </p>
      </div>
    </label>

    <button
      disabled={!agree}
      className={`w-full mt-6 py-4 rounded-xl text-white text-lg transition-colors duration-200 ${
        agree
          ? "bg-[#2f5d59]"
          : "bg-gray-300 cursor-not-allowed"
      }`}
    >
      Подтвердить
    </button>
    </div>
      )}
    </div>
    </div>
  );
}
