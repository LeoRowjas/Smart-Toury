"use client";

import { usePathname } from "next/navigation";
import { Home, Map, Heart, User } from "lucide-react";

export default function BottomNavbar() {
  const pathname = usePathname();


  const items = [
    { icon: Home, label: "Главная" },
    { icon: Map, label: "Карта" },
    { icon: Heart, label: "Избранное" },
    { icon: User, label: "Профиль" },
  ];

  return (
    <>
      {pathname === "/guide" && (
        <div className="fixed bottom-[70px] left-0 w-full px-4 z-50">
          <button className="w-full bg-yellow-400 text-black py-2 rounded-lg shadow-md text-sm font-medium">
            ✨ Создать новый тур за 5 минут
          </button>
        </div>
      )}

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-4 text-center text-xs">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`py-2 flex flex-col items-center border-gray-200 ${
                  i !== items.length - 1 ? "border-r" : ""
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}