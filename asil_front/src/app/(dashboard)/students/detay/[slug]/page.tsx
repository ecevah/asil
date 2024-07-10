"use client";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaUserXmark } from "react-icons/fa6";
import Image from "next/image";
import Photo from "@/../public/png/asilarkaplan.jpg";
import { GrUpdate } from "react-icons/gr";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Student } from "@/service/models/student";
import axios from "axios";

export default function LeadersDetail({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();

  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!params.slug) return;

    const fetchStudent = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3003/api/student/${params.slug}`
        );
        setStudent(response.data.data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
        setLoading(false);
      }
    };

    fetchStudent();
  }, [params.slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!student) return <div>No student data available.</div>;

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-row px-[20px] py-[10px] bg-gradient-warning text-white rounded-lg items-center">
          <FiEdit className="mr-[3px]" />
          <div>Öğrenci Bilgilerini Güncelle</div>
        </div>
        <div className="flex flex-row px-[20px] py-[10px] bg-[#f5365c] text-white rounded-lg ml-[20px] items-center">
          <FaUserXmark className="mr-[3px]" />
          <div>Öğrenciyi Sil</div>
        </div>
      </div>
      <div className="px-[28px] py-[16px] bg-[#10294E] border-solid border-[1px] border-white rounded-lg mt-[30px] drop-shadow-lg">
        <div className="flex flex-row items-center justify-around text-white">
          <Image
            src={Photo}
            width={100}
            height={100}
            alt="Profile Photo"
            className="rounded-full border-[1.5px] border-white w-[100px] h-[100px]"
          />
          <div className="flex flex-col mt-[30px]">
            <div className="flex flex-col ">
              <div className="font-semibold">Ad Soyad</div>
              <div className="">{student?.name}</div>
            </div>
            <div className="flex flex-col mt-[20px] mb-[30px]">
              <div className="font-semibold">Son 3 Yıl Not Ortalaması</div>
              <div className="">{student?.last3Points}</div>
            </div>
          </div>
          <div className="flex flex-col mt-[30px]">
            <div className="flex flex-col">
              <div className="font-semibold">Okul</div>
              <div className="">{student?.school}</div>
            </div>
            <div className="flex flex-col mt-[20px] mb-[30px]">
              <div className="font-semibold">Doğum Tarihi</div>
              <div className="">{student?.dateOfBirth}</div>
            </div>
          </div>
          <div className="flex flex-col mt-[30px]">
            <div className="flex flex-col">
              <div className="font-semibold">Sınıf</div>
              <div className="">{student?.classroom}</div>
            </div>
            <div className="flex flex-col mt-[20px] mb-[30px]">
              <div className="font-semibold">Baba Mesleği</div>
              <div className="">{student?.fathersProfession}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-[30px] bg-white drop-shadow-xl rounded-lg">
        <table className="table-auto mx-auto">
          <thead>
            <tr className="border-b-[1px] border-solid border-gray-200 text-gray-400">
              <th className="px-4 py-2">Tarih</th>
              <th className="px-4 py-2">Başarı Puanı</th>
              <th className="px-4 py-2">Ceza Puanı</th>
              <th className="px-4 py-2">Katılım Durumu</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="px-4 py-2">2024-05-13</td>
              <td className="px-4 py-2">Evet</td>
              <td className="px-4 py-2">Evet</td>
              <td className="px-4 py-2">Hayır</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2024-05-14</td>
              <td className="px-4 py-2">Evet</td>
              <td className="px-4 py-2">Hayır</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto mt-[30px] bg-white drop-shadow-xl rounded-lg">
        <div className="flex flex-row px-[16px] py-[16px]">
          <div className="flex flex-col">
            <div className="font-bold text-[25px] mb-[10px]">
              Sureler ve Dualar
            </div>
            <div className="px-[20px] py-[10px] rounded-md flex flex-row items-center justify-center text-white bg-gradient-warning w-fit">
              <div className="mr-[3px]">Güncelle</div>
              <GrUpdate />
            </div>
          </div>
        </div>
        <table className="table-auto mx-auto w-[90%] mt-[20px]">
          <thead>
            <tr className="border-b-[1px] border-solid border-gray-200 text-gray-400">
              <th className="px-4 py-2">Fatiha</th>
              <th className="px-4 py-2">İhlas</th>
              <th className="px-4 py-2">Kevser</th>
              <th className="px-4 py-2">Fil</th>
              <th className="px-4 py-2">Kureyş</th>
              <th className="px-4 py-2">Tebbet</th>
              <th className="px-4 py-2">Maun</th>
              <th className="px-4 py-2">İnşirah</th>
            </tr>
          </thead>
          <tbody>
            <td className="px-4 py-2">
              {student?.fatiha ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.ihlas ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.kevser ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.fil ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.kureys ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.tebbet ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.maun ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.insirah ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
          </tbody>
        </table>
        <table className="table-auto mx-auto w-[90%] mt-[20px]">
          <thead>
            <tr className="border-b-[1px] border-solid border-gray-200 text-gray-400">
              <th className="px-4 py-2">Nasr</th>
              <th className="px-4 py-2">Kafirun</th>
              <th className="px-4 py-2">Amentu</th>
              <th className="px-4 py-2">Duha</th>
              <th className="px-4 py-2">Tın</th>
              <th className="px-4 py-2">Kadr</th>
              <th className="px-4 py-2">Zılzal</th>
              <th className="px-4 py-2">Humeze</th>
              <th className="px-4 py-2">Tekasur</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <td className="px-4 py-2">
              {student?.nasr ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.kafirun ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.amentu ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.duha ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.tin ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.kadr ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.zılzal ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.hümeze ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.tekasur ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
          </tbody>
        </table>
        <table className="table-auto mx-auto w-[90%] mt-[20px]">
          <thead>
            <tr className="border-b-[1px] border-solid border-gray-200 text-gray-400">
              <th className="px-4 py-2">Subhaneke</th>
              <th className="px-4 py-2">Tahiyyat</th>
              <th className="px-4 py-2">Salli Barik</th>
              <th className="px-4 py-2">Rabbena</th>
              <th className="px-4 py-2">Kunut</th>
              <th className="px-4 py-2">Mezzinlik</th>
              <th className="px-4 py-2">İmamlık</th>
              <th className="px-4 py-2">Ezan Duası</th>
              <th className="px-4 py-2">Yemek Duası</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <td className="px-4 py-2">
              {student?.subhaneke ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.tahiyyat ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.salliBarik ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.rabbena ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.kunut ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.muezzinlik ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.imamlık ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.ezanDuası ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
            <td className="px-4 py-2">
              {student?.yemekDuası ? (
                <FaCheck className="text-green-600 mx-auto" />
              ) : (
                <FaTimes className="text-red-600 mx-auto" />
              )}
            </td>
          </tbody>
        </table>
      </div>
    </>
  );
}
