// components/Groups.tsx
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { MdAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaGraduationCap, FaBed, FaBook } from "react-icons/fa";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/service/hook/hook";
import { getGroups, addGroup } from "@/service/thunk/group";
import { RootState } from "@/service/store";
import { Group } from "@/service/models/group";

const Groups: React.FC = () => {
  const dispatch = useAppDispatch();
  const { groups, loading, error } = useSelector(
    (state: RootState) => state.groups
  );

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  useEffect(() => {
    console.log("Groups state in component:", groups);
  }, [groups]);

  const handleAddGroup = () => {
    Swal.fire({
      title: "Grup Ekle",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Grup Adı">
        <input id="swal-input2" class="swal2-input" placeholder="Öğrenci Sayısı">
        <input id="swal-input3" class="swal2-input" placeholder="Öğrenci Tipi">
        <input id="swal-input4" class="swal2-input" placeholder="Gün">
        <input id="swal-input5" class="swal2-input" placeholder="Yatılı/Gündüzlü">
        <input id="swal-input6" class="swal2-input" placeholder="Etkinlik Tipi">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: (document.getElementById("swal-input1") as HTMLInputElement)
            .value,
          studentCounter: parseInt(
            (document.getElementById("swal-input2") as HTMLInputElement).value
          ),
          studentType: (document.getElementById(
            "swal-input3"
          ) as HTMLInputElement).value,
          selectedDay: (document.getElementById(
            "swal-input4"
          ) as HTMLInputElement).value,
          accomodation: (document.getElementById(
            "swal-input5"
          ) as HTMLInputElement).value,
          type: (document.getElementById("swal-input6") as HTMLInputElement)
            .value,
        };
      },
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div
        onClick={handleAddGroup}
        className="bg-[#FDFDFF] px-[10px] py-[5px] rounded-md border-solid border-[1px] border-[#a5a5a5] flex flex-row items-center w-fit cursor-pointer text-gray-700 mb-[30px]"
      >
        Grup Ekle <MdAdd size={15} /> <FaUsers size={15} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {groups.map((group: Group, index: number) => (
          <div
            key={group._id}
            className="bg-group-card w-[530px] lg:w-full h-[500px] rounded-lg border-solid border-[1px] border-[rgba(0, 0, 0, 0.125)] flex flex-col items-center justify-end"
          >
            <img
              src={group.photo}
              width={155}
              height={155}
              alt="Profile Photo"
              className="rounded-full w-[154px] h-[154px]"
            />
            <div className="font-bold mt-[20px] mb-[30px]">{group.name}</div>
            <div className="flex flex-row justify-center items-center mb-[20px]">
              <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px] text-gray-800">
                <FaUsers className="mb-[3px]" size={30} />
                <div>{`${group._id} Öğrenci`}</div>
              </div>
              <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px] text-gray-800">
                <FaRegCalendarDays className="mb-[3px]" size={25} />
                <div>{`${group.selectedDay}`}</div>
              </div>
              <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px] text-gray-800">
                <FaGraduationCap className="mb-[3px]" size={28} />
                <div>{`${group._id}`}</div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mb-[40px]">
              <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px] text-gray-800">
                <FaBed className="mb-[3px]" size={30} />
                <div>{`${group.accomodation}`}</div>
              </div>
              <div className="flex flex-col items-center justify-start h-[80px] w-[88px] mx-[13px] text-gray-800 text-center">
                <FaBook className="mb-[3px]" size={23} />
                <div>{`${group.type}`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Groups;
