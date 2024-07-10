import React from "react";
import { IoMdAdd, IoIosArrowForward } from "react-icons/io";
import { FaRegCalendarDays } from "react-icons/fa6";

const Weekly = () => {
  const weeklyArrays = [
    {
      content: "07.01.2024 - 08.01.2024 için Haftalık Takip Formu",
      month: "Eylül",
    },
    {
      content: "07.01.2024 - 08.01.2024 için Haftalık Takip Formu",
      month: "Eylül",
    },
    {
      content: "07.01.2024 - 08.01.2024 için Haftalık Takip Formu",
      month: "Eylül",
    },
    {
      content: "07.01.2024 - 08.01.2024 için Haftalık Takip Formu",
      month: "Eylül",
    },
  ];
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg drop-shadow-xl px-[20px] py-[30px]">
        <div className="flex flex-row justify-between items-center mb-[30px]">
          <div className="font-bold text-[30px]">Haftalık Takip Formları</div>
          <div className="flex flex-row px-[20px] py-[10px] rounded-lg bg-gradient-success items-center justify-center text-white">
            <IoMdAdd size={25} />
            <div>{" Yeni Form Oluştur"}</div>
          </div>
        </div>
        {weeklyArrays.map((item, index) => (
          <div
            key={"Weekly Content" + index}
            className="flex flex-row justify-between items-center mb-[15px]"
          >
            <div className="flex flex-row items-center">
              <div className="w-[32px] h-[32px] rounded-xl flex items-center justify-center text-white bg-black mr-[5px]">
                <FaRegCalendarDays size={13} />
              </div>
              <div>{item.content}</div>
            </div>
            <IoIosArrowForward size={20} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Weekly;
