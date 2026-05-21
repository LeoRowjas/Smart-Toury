"use client";

import { useState } from "react";
import { createLocation } from "@/lib/api/auth";

interface AddLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (location: any) => void;
}

export default function AddLocationModal({ isOpen, onClose, onAdd }: AddLocationModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !description.trim()) {
      alert("Пожалуйста, заполните название и описание");
      return;
    }

    setIsLoading(true);

    try {
      // Генерируем рандомные координаты
      const latitude = 55.75 + (Math.random() - 0.5) * 0.2;
      const longitude = 37.62 + (Math.random() - 0.5) * 0.2;

      // Создаем локацию через API
      const newLocation = await createLocation({
        name: name.trim(),
        description: description.trim(),
        latitude,
        longitude,
      });

      onAdd(newLocation);
      setName("");
      setDescription("");
      onClose();
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось добавить локацию");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-bold text-[#2C3E50] mb-4">Добавить локацию</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Название локации *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A5A]"
                placeholder="Например: Эрмитаж"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Описание *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A5A]"
                placeholder="Краткое описание локации..."
                rows={3}
                required
              />
            </div>

            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
              ℹ️ Координаты будут определены автоматически
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Отмена
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-[#2D5A5A] text-white rounded-lg hover:bg-[#234848] disabled:opacity-50"
            >
              {isLoading ? "Добавление..." : "Добавить"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}