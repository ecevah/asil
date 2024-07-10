"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "../../public/png/anasayfalogo.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    return false;
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="lg:w-1/3 bg-gray-100 flex flex-col justify-center items-center px-8 h-screen">
          <Image
            src={Logo}
            width={200}
            height={100}
            alt="logo"
            className="flex lg:hidden"
          />
          <form onSubmit={handleSubmit} className="w-full max-w-md mt-8">
            <label className="block mb-2">E Posta</label>
            <input
              type="email"
              className="block w-full px-3 py-2 text-base font-normal leading-normal text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block mb-2">Şifre</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full px-3 py-2 text-base font-normal leading-normal text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-[#324B71] px-[20px] py-[10px] rounded-md text-white w-[110px] h-[60px]"
                type="submit"
              >
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-2/3 lg:flex hidden h-screen bg-asilarkaplan bg-cover"></div>
      </div>
    </>
  );
}
