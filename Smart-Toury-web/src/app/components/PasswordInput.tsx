"use client";

import { useState } from "react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
};

export default function PasswordInput({ value, onChange, placeholder }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative ">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-[#2f5d59]"
      />

      {/* <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      >
        👁
      </button> */}
    </div>
  );
}