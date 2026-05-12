"use client";

import Image from 'next/image'
import { Header } from "@/components/layout/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      console.log({
        email,
        password,
      });

      router.push("/tourist");

    } catch (err: any) {
      setError("Ошибка входа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="max-w-md mx-auto p-6 min-w-[806] bg-white rounded-xl shadow text-[#2C3E50]">
                <h2 className=" text-[#2C3E50] font-bold text-3xl mb-1.5">Добро пожаловать!</h2>
                <p className="text-gray-400 text-sm mb-4">
                  Войдите в свой аккаунт
                </p>
      
                <p className='text-[#2C3E50] font-bold text-2xl mb-2'>Email адрес</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full border p-3 rounded mb-3"
                />
                <p className='text-[#2C3E50] font-bold text-2xl mb-2'>Пароль</p>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль"
                  type='password'
                  className="w-full border p-3 rounded mb-3"
                />
              
                {error && (
                  <p className="text-red-500 text-sm mb-4">
                    {error}
                  </p>
                )}
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full bg-[#2f5d59] text-white py-3 rounded-xl mt-2 font-semibold text-2xl"
                >
                  {loading ? "Вход..." : "Продолжить"}
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
    </div>
  )
}