"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Profile = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  return (
    <>
      <div className="bg-white rounded-lg drop-shadow-lg px-[20px] py-[30px]">
        <div className="font-bold text-[20px] mb-[20px]">Şifreni Güncelle</div>
        <div className="flex flex-row">
          <div className="flex flex-row w-[170px] mt-[10px]">
            <div className="">Eski Şifre</div>
            <div className="text-red-600">*</div>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="block w-[400px] px-3 py-2 text-base font-normal leading-normal text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-[24px] right-4 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row w-[170px] mt-[10px]">
            <div className="">Yeni Şifre</div>
            <div className="text-red-600">*</div>
          </div>
          <div className="relative">
            <input
              type={showPassword1 ? "text" : "password"}
              className="block w-[400px] px-3 py-2 text-base font-normal leading-normal text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out mb-4"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-[24px] right-4 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPassword1(!showPassword)}
            >
              {showPassword1 ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-row w-[170px] mt-[10px]">
            <div className="">Yeni Şifre Tekrar</div>
            <div className="text-red-600">*</div>
          </div>
          <div className="relative">
            <input
              type={showPassword2 ? "text" : "password"}
              className="block w-[400px] px-3 py-2 text-base font-normal leading-normal text-gray-900 bg-white border border-gray-300 rounded transition duration-150 ease-in-out mb-4"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-[24px] right-4 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPassword2(!showPassword)}
            >
              {showPassword2 ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <div className="rounded-full bg-gradient-secondary text-white text-center w-full py-[15px] mt-[15px]">
          Şifreyi Değiştir
        </div>
      </div>
    </>
  );
};

export default Profile;
