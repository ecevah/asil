"use client";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaUserXmark } from "react-icons/fa6";
import Image from "next/image";
import Photo from "@/../public/png/asilarkaplan.jpg";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Leader } from "@/service/models/leader";

export default function LeadersDetail({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();

  const [leader, setLeader] = useState<Leader | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!params.slug) {
      setLoading(false);
      return;
    }

    const fetchLeader = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/api/leader/${params.slug}`
        );
        setLeader(response.data.data);
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

    fetchLeader();
  }, [params.slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!leader) return <div>No leader data available.</div>;
  return (
    <>
      {/*<div>My Post: {params.slug.replace(/%20/g, " ")}</div>*/}
      <div className="flex flex-row">
        <div className="flex flex-row px-[20px] py-[10px] bg-gradient-warning text-white rounded-lg items-center">
          <FiEdit className="mr-[3px]" />
          <div>Lider Bilgilerini Güncelle</div>
        </div>
        <div className="flex flex-row px-[20px] py-[10px] bg-[#f5365c] text-white rounded-lg ml-[20px] items-center">
          <FaUserXmark className="mr-[3px]" />
          <div>Lideri Sil</div>
        </div>
      </div>
      <div className="px-[28px] py-[16px] bg-[#10294E] border-solid border-[1px] border-white rounded-lg mt-[30px]">
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
              <div className="font-semibold">Adı Soyadı</div>
              <div className="">{leader.name}</div>
            </div>
            <div className="flex flex-col mt-[20px] mb-[30px]">
              <div className="font-semibold">Bölümü</div>
              <div className="">{leader.department}</div>
            </div>
          </div>
          <div className="flex flex-col mt-[30px]">
            <div className="flex flex-col">
              <div className="font-semibold">Doğum Yılı</div>
              <div className="">{leader.dateOfBirth}</div>
            </div>
            <div className="flex flex-col mt-[20px] mb-[30px]">
              <div className="font-semibold">Sınıf</div>
              <div className="">{leader.classroom}</div>
            </div>
          </div>
          <div className="flex flex-col mt-[30px]">
            <div className="flex flex-col">
              <div className="font-semibold">Üniversite</div>
              <div className="">{leader.classroom}</div>
            </div>
            <div className="flex flex-col mt-[20px] mb-[30px]">
              <div className="font-semibold">Asil ile Tanışma Yılı</div>
              <div className="">{leader.datingDate}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-[30px] bg-white drop-shadow-xl rounded-lg">
        <table className="table-auto mx-auto">
          <thead>
            <tr className="border-b-[1px] border-solid border-gray-200 text-gray-400">
              <th className="px-4 py-2">Tarih</th>
              <th className="px-4 py-2">Temizlik</th>
              <th className="px-4 py-2">Katılım</th>
              <th className="px-4 py-2">Etkinlik</th>
              <th className="px-4 py-2">Gönderme Zamanı</th>
              <th className="px-4 py-2">Fuara Gidildi</th>
              <th className="px-4 py-2">Ekstra Veri İletişim</th>
              <th className="px-4 py-2">Dış Etkinlik</th>
              <th className="px-4 py-2">Toplam</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="px-4 py-2">2024-05-13</td>
              <td className="px-4 py-2">Evet</td>
              <td className="px-4 py-2">Evet</td>
              <td className="px-4 py-2">Hayır</td>
              <td className="px-4 py-2">2024-05-13 09:30</td>
              <td className="px-4 py-2">Hayır</td>
              <td className="px-4 py-2">-</td>
              <td className="px-4 py-2">Evet</td>
              <td className="px-4 py-2">4</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2024-05-14</td>
              <td className="px-4 py-2">Evet</td>
              <td className="px-4 py-2">Hayır</td>
              <td className="px-4 py-2">Evet</td>
              <td className="px-4 py-2">2024-05-14 10:00</td>
              <td className="px-4 py-2">Evet</td>
              <td className="px-4 py-2">-</td>
              <td className="px-4 py-2">Hayır</td>
              <td className="px-4 py-2">4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
