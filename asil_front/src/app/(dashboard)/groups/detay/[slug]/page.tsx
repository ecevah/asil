"use client";
import React from "react";
import Image from "next/image";
import { MdAdd } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaGraduationCap, FaBed, FaBook } from "react-icons/fa";
import Photo from "../../../../../../public/png/asilarkaplan.jpg";
import Swal from "sweetalert2";
import { HiIdentification } from "react-icons/hi2";
import { FaUser, FaUsers, FaQuestionCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";

export default function GroupsDetail({ params }: { params: { slug: string } }) {
  const item = {
    image: Photo,
    name: "Fatih Sultan Mehmet",
    studentCounter: 4,
    studentType: "Lise",
    day: "Salı",
    accomodation: "Yatılı",
    type: "Ders Grubu",
  };

  const studentList = [
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
    {
      photo: Photo,
      name: "Fatih Sultan Mehmet",
    },
  ];

  const studentDetail = [
    {
      name: "Ensar",
      one: "İptal",
      two: "Mazeretli",
      three: "Geldi",
      four: "Gelmedi",
      mount: "Eylül",
    },
    {
      name: "Ensar",
      one: "İptal",
      two: "Mazeretli",
      three: "Geldi",
      four: "Gelmedi",
      mount: "Eylül",
    },
    {
      name: "Ensar",
      one: "İptal",
      two: "Mazeretli",
      three: "Geldi",
      four: "Gelmedi",
      mount: "Eylül",
    },
    {
      name: "Ensar",
      one: "İptal",
      two: "Mazeretli",
      three: "Geldi",
      four: "Gelmedi",
      mount: "Eylül",
    },
  ];

  function handleSelection(selection: string) {
    switch (selection) {
      case "İptal":
        return (
          <div className="px-[10px] py-[6px] rounded-md bg-[#10294E] text-white w-fit mx-[3px]">
            İptal
          </div>
        );
      case "Mazeretli":
        return (
          <div className="px-[10px] py-[6px] rounded-md bg-gradient-warning text-white w-fit mx-[3px]">
            Mazeretli
          </div>
        );
      case "Geldi":
        return (
          <div className="px-[10px] py-[6px] rounded-md bg-gradient-success text-white w-fit mx-[3px]">
            Geldi
          </div>
        );

      case "Gelmedi":
        return (
          <div className="px-[10px] py-[6px] rounded-md bg-gradient-danger text-white w-fit mx-[3px]">
            Gelmedi
          </div>
        );

      default:
        console.log("Geçersiz seçim");
    }
  }

  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="bg-gradient-card w-[530px] max-w-[530px] lg:w-full h-[620px] rounded-lg border-solid border-[1px] border-[rgba(0, 0, 0, 0.125)] flex flex-col items-center justify-end text-white">
          <Image
            src={item.image}
            width={155}
            height={155}
            alt="Profile Photo"
            className="rounded-full w-[154px] h-[154px]"
          />
          <div className="font-bold mt-[20px] mb-[0px]">{item.name}</div>
          <div className="flex flex-row justify-center items-center mb-[20px]">
            <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px]">
              <FaUsers className="mb-[3px]" size={30} />
              <div>{`${item.studentCounter} Öğrenci`}</div>
            </div>
            <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px]">
              <FaRegCalendarDays className="mb-[3px]" size={25} />
              <div>{`${item.day}`}</div>
            </div>
            <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px]">
              <FaGraduationCap className="mb-[3px]" size={28} />
              <div>{`${item.studentType}`}</div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px]">
              <FaBed className="mb-[3px]" size={30} />
              <div>{`${item.accomodation}`}</div>
            </div>
            <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px] text-center">
              <FaBook className="mb-[3px]" size={23} />
              <div>{`${item.type}`}</div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center items-center px-[20px] py-[10px] rounded-md bg-[#e9ecef] text-gray-700 ">
              <HiIdentification className="mr-[3px]" size={20} />
              <div>Haftalık Takip Formları</div>
            </div>
            <div className="flex flex-row justify-center items-center px-[20px] py-[10px] rounded-md bg-[#fb6340] text-white my-[10px]">
              <FiEdit className="mr-[3px]" size={20} />
              <div>Grup Gilgilerini Güncelle</div>
            </div>

            <div className="flex flex-row justify-center items-center px-[20px] py-[10px] rounded-md bg-[#f5365c] text-white mb-[20px]">
              <IoMdCloseCircle className="mr-[3px]" size={20} />
              <div>Grubu Sil</div>
            </div>
          </div>
        </div>
        <div className="w-full ml-[20px] bg-white rounded-lg drop-shadow-lg flex flex-col  overflow-y-scroll px-[20px] py-[20px] h-[620px]">
          <div className="flex items-center justify-center mb-[20px]">
            <div className="flex flex-col min-w-[200px] justify-center items-center px-[30px] py-[30px] rounded-lg border-[1px] border-solid border-white drop-shadow-lg w-fit bg-[#2274a8]">
              <Image
                src={Photo}
                width={80}
                height={80}
                alt="Leader's Photo"
                className="w-[80px] h-[80px] rounded-full"
              />
              <div className="font-bold text-[20px] mt-[20px] mb-[10px]">
                Lider
              </div>
              <div className="">Ad Soyad</div>
            </div>
          </div>
          <div className="font-semibold">Öğrenciler</div>
          <div className="grid grid-cols-5 gap-1">
            {studentList.map((item, index) => (
              <div
                key={"Student " + index}
                className="flex flex-col justify-center items-center px-[30px] py-[30px] rounded-lg border-[1px] border-solid border-white drop-shadow-lg w-[180px] h-fit bg-white mb-[10px]"
              >
                <Image
                  src={item.photo}
                  width={100}
                  height={100}
                  alt="Leader's Photo"
                  className="w-[100px] h-[100px] rounded-full"
                />
                <div className="mt-[30px] text-center">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white px-[10px] py-[20px] rounded-lg drop-shadow-xl mt-[20px]">
        <div className="flex flex-row justify-between items-center">
          <div className="font-bold text-[25px]">Grup Karnesi</div>
          <select className="p-2 border border-gray-300 rounded-md px-[5px]">
            <option value="january">Ocak</option>
            <option value="february">Şubat</option>
            <option value="march">Mart</option>
            <option value="april">Nisan</option>
            <option value="may">Mayıs</option>
            <option value="june">Haziran</option>
            <option value="july">Temmuz</option>
            <option value="august">Ağustos</option>
            <option value="september">Eylül</option>
            <option value="october">Ekim</option>
            <option value="november">Kasım</option>
            <option value="december">Aralık</option>
          </select>
        </div>
        <table className="table-auto mx-auto w-[99%]">
          <thead>
            <tr className="border-b-[1px] border-solid border-gray-200 text-gray-400">
              <th className="px-4 py-2">Öğrenci</th>
              <th className="px-4 py-2">Katılım Durumu</th>
              <th className="px-4 py-2">Tarih</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {studentDetail.map((item, index) => (
              <tr key={"Table Detail" + index}>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-row justify-center items-center">
                    {handleSelection(item.one)}
                    {handleSelection(item.two)}
                    {handleSelection(item.three)}
                    {handleSelection(item.four)}
                  </div>
                </td>
                <td className="px-4 py-2">{item.mount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row justify-between px-[100px] mt-[30px] mb-[20px]">
          <div className="font-semibold text-[24px]">
            Grup Toplam Katılım Durumu
          </div>
          <div className="px-[15px] py-[10px] w-fit bg-[#2274a8] rounded-md text-white">
            {"% " + "75"}
          </div>
          <div className="text-gray-500">Eylül</div>
        </div>
      </div>
    </>
  );
}
