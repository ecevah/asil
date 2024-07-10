"use client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Logo from "../../../public/png/anasayfalogo.png";
import { MenuItem, menuItems } from "@/constant/constant";
import { usePathname } from "next/navigation";
import { IoMdSettings, IoIosNotifications } from "react-icons/io";
import { FaUser, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const [isShow, setIsShow] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const currentPath = usePathname();
  const pathname = currentPath.split("/");

  const activeMenuItem = menuItems.find((item: MenuItem) =>
    currentPath.startsWith("/" + item.path.split("/")[1])
  );

  const isMenuItemActive = (path: string) => {
    return currentPath.startsWith(path);
  };

  const isPathCheck = () => {
    if (pathname.length < 3) {
      return activeMenuItem?.text;
    } else {
      const pageName = pathname[2];
      const formattedPageName =
        pageName.charAt(0).toUpperCase() + pageName.slice(1);

      return formattedPageName.replace(/%20/g, " ");
    }
  };

  return (
    <>
      <div className="w-full h-screen relative overflow-y-auto overflow-x-hidden">
        <div
          className={`${
            isShow ? "hidden" : "fixed"
          } bottom-[50px] right-[50px] w-[50px] h-[50px] rounded-full bg-white drop-shadow-xl flex flex-row items-center justify-center cursor-pointer z-[199]`}
        >
          <IoMdSettings
            size={20}
            className="mx-[5px]"
            onClick={() => setIsShow(true)}
          />
        </div>
        <div className="bg-gradient-hompage text-white absolute top-0 left-0 w-full h-[300px] z-0" />
        <div
          className={`${
            isShow ? "w-[300px] px-[15px] py-[20px]" : "w-0"
          } bg-white h-screen absolute flex flex-col drop-shadow-lg top-0 right-0 z-[101] transition-all duration-500 ease-in-out `}
        >
          <div className={`${isShow ? "block" : "hidden"}`}>
            <div className={`flex flex-row justify-end`}>
              <div onClick={() => setIsShow(false)}>
                <IoClose size={20} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="cursor-pointer w-[150px] py-[10px] leading-1 rounded-lg bg-red-500 text-center text-white">
                Çıkış Yap
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row h-full w-full justify-between">
          <div className="w-[250px] h-[96%] my-[1%] mx-[20px] rounded-[1rem] bg-white flex flex-col items-center justify-start  drop-shadow-md overflow-hidden fixed z-[99]">
            <Image
              src={Logo}
              width={150}
              height={150}
              alt="Logo"
              className="cursor-pointer mt-[50px] mb-[50px]"
            />
            <div className="flex flex-col items-start w-full ">
              {menuItems.map((item, index) => (
                <a
                  className={`flex flex-row items-center text-[#67758E] w-[230px] mx-[10px] ${
                    isMenuItemActive(item.path)
                      ? "bg-[#F6F9FC] text-[#2f3541] font-semibold"
                      : "text-[#67758E]"
                  } rounded-[8px] px-[16px] py-[11px] mt-[5px]`}
                  href={item.path}
                  key={"Navbar Item " + index}
                >
                  {item.icon}
                  <div className="ml-[10px]">{item.text}</div>
                </a>
              ))}
            </div>
          </div>
          <div className="w-header flex flex-col ml-[270px] z-[99]">
            <div className="w-full h-[50px] mt-[1%] pl-[30px] flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className=" text-[#FFFFFF50] mr-[5px]">Sayfalar /</div>
                  <div className="text-white">
                    {activeMenuItem?.text ?? "Profil"}
                  </div>
                </div>
                <div className="text-white">{isPathCheck() ?? "Profil"}</div>
              </div>
              <div className="flex flex-row items-center">
                <div className="relative mr-[10px]">
                  <input
                    type="search"
                    className="pl-10 pr-5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400"
                    placeholder="Ne arıyorsun?"
                  />
                  <span className="absolute inset-y-0 left-0 pb-[0px] flex items-center pl-3 text-gray-500 pointer-events-none">
                    <FaSearch />
                  </span>
                </div>
                <div className="flex flex-row text-white items-center mr-[50px] cursor-pointer">
                  <IoMdSettings
                    size={20}
                    className="mx-[5px]"
                    onClick={() => setIsShow(true)}
                  />
                  <div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setIsTooltipOpen(true)}
                    onMouseLeave={() => setIsTooltipOpen(false)}
                  >
                    <IoIosNotifications size={20} className="mx-[5px]" />
                    {isTooltipOpen && (
                      <div className="absolute -bottom-[210px] -left-[337px] z-[101] rounded-xl flex flex-col items-center">
                        <div className="triangle"></div>
                        <div className="w-[400px] h-[200px] bg-white drop-shadow-2xl rounded-2xl"></div>
                      </div>
                    )}
                  </div>
                  <FaUser
                    size={15}
                    className="mx-[5px] cursor-pointer"
                    onClick={() => router.push("/profile")}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full h-full mt-[40px] px-[30px]">
                {children}
              </div>
              <div className="mx-[20px] mt-[10px] bg-white mb-[1.5%] items-center px-[10px] py-[15px] rounded-md drop-shadow-md text-[10px] text-[#00000080]">
                2024 © Tüm hakları Asil Gençlik Spor Kulübüne aittir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
