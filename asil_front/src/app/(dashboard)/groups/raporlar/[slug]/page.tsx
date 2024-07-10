"use client";
import Image from "next/image";
import React from "react";
import Photo from "@/../public/png/asilarkaplan.jpg";

export default function RaportDetail({ params }: { params: { slug: string } }) {
  const leaders = [
    { name: "Ali" },
    { name: "Mehmet" },
    { name: "Muhammet" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
    { name: "Ali" },
  ];

  const students = [
    {
      photo: Photo,
      namaz: 123,
      success: [
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
      ],
      punishment: [
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
      ],
    },
    {
      photo: Photo,
      namaz: 123,
      success: [
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
      ],
      punishment: [
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
      ],
    },
    ,
    {
      photo: Photo,
      namaz: 123,
      success: [
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
      ],
      punishment: [
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
      ],
    },
    {
      photo: Photo,
      namaz: 123,
      success: [
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
      ],
      punishment: [
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
        "Arkadaşına yardım ediyor.",
      ],
    },
  ];
  return (
    <>
      <>
        <div className="bg-white rounded-lg drop-shadow-xl px-[10px] py-[20px] flex flex-col">
          <div className="font-semibold text-[30px]">Haftalık Takip Formu</div>
          <div className="flex flex-row mt-[30px] mb-[20px]">
            <div className="bg-group-card rounded-lg flex items-center justify-center h-[300px] w-[500px] mr-[20px] drop-shadow-lg">
              <Image
                src={Photo}
                width={125}
                height={125}
                alt="Photo"
                className="w-[125px] h-[125px] rounded-full"
              />
            </div>
            <div className="bg-white rounded-lg flex flex-col px-[20px] py-[30px] justify-center drop-shadow-lg w-full">
              <div className="font-bold text-[25px]">
                Program Başlangıç Tarih ve Saati
              </div>
              <div className="mt-[5px]">TArih</div>
              <div className="font-bold text-[25px] mt-[20px]">
                Program Bitiş Tarih ve Saati
              </div>
              <div className="mt-[5px]">TArih</div>
            </div>
          </div>
          <div className="bg-white rounded-lg drop-shadow-xl px-[10px] pt-[10px] pb-[20px] flex flex-col overflow-x-scroll relative mb-[25px]">
            <div className="font-semibold text-[30px] sticky top-[0px] left-[16px] ">
              Liderler
            </div>
            <div className="flex flex-row items-center justify-start ">
              {leaders.map((item, index) => (
                <div
                  key={"Leaders " + index}
                  className="flex flex-row items-center px-[20px] py-[20px] min-w-[400px] bg-white rounded-lg drop-shadow-lg mx-[10px]"
                >
                  <Image
                    src={Photo}
                    width={75}
                    height={75}
                    alt="Photo"
                    className="w-[75px] h-[75px] rounded-full"
                  />
                  <div className="flex flex-col justify-center ml-[10px] ">
                    <div className="font-semibold text-[15px] mb-[5px]">
                      Lider
                    </div>
                    <div>{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg flex flex-col px-[20px] py-[30px] drop-shadow-lg">
            <div className="font-semibold text-[30px]">Öğrenciler</div>
            {students.map((item, index) => (
              <div
                key={"Student " + index}
                className="bg-white rounded-lg flex flex-row justify-between px-[40px] py-[30px] drop-shadow-xl my-[9px]"
              >
                <Image
                  src={Photo}
                  width={100}
                  height={100}
                  alt="photo"
                  className="w-[100px] h-[100px] rounded-full my-auto mx-[40px]"
                />
                <div />
                <div className="flex flex-col">
                  <div className="font-semibold text-[20px]">
                    Haftalık Kılınan Namaz Sayısı
                  </div>
                  <div>12</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-[20px]">Başarımlar</div>
                  {item?.success.map((item, index) => (
                    <div key={"Success " + index}>{item}</div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-[20px] mb-[5px]">
                    Cezalı Hareketler
                  </div>
                  {item?.punishment.map((item, index) => (
                    <div key={"Punishment " + index}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between">
            <div className="bg-white rounded-lg flex flex-col px-[20px] py-[30px] drop-shadow-lg mt-[30px] w-[49.5%]">
              <div className="font-semibold text-[20px] mb-[20px]">
                Faliyetler
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row">
                  <div className="">Zorunlu Etkinlik</div>
                  <div className="text-red-600">*</div>
                </div>
                <div className="ml-[50px] text-gray-500">Namaz</div>
              </div>
              <div className="flex flex-row">
                <div className="">Zorunlu Etkinlik</div>
                <div className="ml-[57px] text-gray-500">Namaz</div>
              </div>
              <div className="font-semibold text-[20px] mb-[20px] mt-[30px]">
                Ekstralar
              </div>
              <div className="flex flex-row items-center">
                <div className="">Puan Ver:</div>
                <input
                  type="number"
                  className="border-solid rounded-md border-gray-300 border-[1px] px-[3px] py-[3px] ml-[15px]"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg flex flex-col px-[20px] py-[30px] drop-shadow-lg mt-[30px] w-[49.5%]">
              <div className="font-semibold text-[20px] mb-[20px]">
                Cemaatle Namaz Kılma Durumu
              </div>
              <div>Hayır</div>
            </div>
          </div>
          <div className="bg-white rounded-lg flex flex-col px-[20px] py-[30px] drop-shadow-lg mt-[30px] overflow-x-scroll relative">
            <div className="font-semibold text-[20px] sticky top-[0px] left-[16px]">
              Temizlik Fotoğrafları
            </div>
            <div className="flex flex-row mt-[20px]">
              {leaders.map((item, index) => (
                <Image
                  key={`Photo ${index}`}
                  src={Photo}
                  alt="photo"
                  width={100}
                  height={100}
                  className="mx-[10px]"
                />
              ))}
            </div>
          </div>
          <div className="cursor-pointer w-full rounded-lg bg-gradient-primary py-[10px] text-white text-center mt-[30px] mb-[20px] font-semibold">
            Formu Güncelle
          </div>
        </div>
      </>
    </>
  );
}
