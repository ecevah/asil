import React from "react";
import { HiIdentification } from "react-icons/hi2";
import { FaUser, FaUsers, FaQuestionCircle } from "react-icons/fa";

const Homepage = () => {
  const table = [
    {
      title: "Gruplar",
      counter: 3,
      subtitle: "Grup",
      icon: <HiIdentification />,
    },
    { title: "Liderler", counter: 4, subtitle: "Lider", icon: <FaUser /> },
    { title: "Öğrenciler", counter: 5, subtitle: "Öğrenci", icon: <FaUsers /> },
  ];

  return (
    <>
      <div className="flex flex-row justify-between">
        {table.map((item, index) => (
          <div
            className="flex flex-row justify-between bg-white rounded-xl p-[16px] h-[100px] w-[32%]"
            key={"Table Item" + index}
          >
            <div className="flex flex-col justify-between">
              <div className="font-semibold text-[20px]">{item.title}</div>
              <div className="flex flex-row">
                <div className="font-semibold">{item.counter}</div>
                <div className="ml-[3px]">{item.subtitle}</div>
              </div>
            </div>
            <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center text-white bg-[#10294E]">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
