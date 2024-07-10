"use client";
import React, { useState } from "react";

const FormRules = () => {
  const [bestState, setBestState] = useState(0);
  const [bestStateScore, setBestStateScore] = useState(1);

  const [middleState, setMiddleState] = useState(0);
  const [middleStateScore, setMiddleStateScore] = useState(1);

  const [minPhotos, setMinPhotos] = useState(0);
  const [minPhotosScore, setMinPhotosScore] = useState(1);

  const [bestGroupsState, setBestGroupsState] = useState(1);
  const [bestGroupsStateScore, setBestGroupsStateScore] = useState(1);

  const [middleGroupsState, setMiddleGroupsState] = useState(2);
  const [middleGroupsStateScore, setMiddleGroupsStateScore] = useState(1);

  const [requiredEvents, setRequiredEvents] = useState(12);

  return (
    <>
      <div className="bg-[#FDFDFF] px-[10px] py-[20px] rounded-lg drop-shadow-lg">
        <div className="mb-[30px] font-bold">Form Kuralları</div>
        <div className="flex flex-col bg-[#FDFDFF] px-[10px] py-[20px] rounded-lg drop-shadow-lg my-[10px]">
          <div className="font-semibold">Form Gönderme Süresi</div>
          <div className="">
            {
              "Formun, etkinliğin bittiği günden itibaren kaç gün sonra iletildiğine bağlı olarak liderin alacağı puanı belirleyiniz (Örneğin en iyi durum 2 Gün -> 10 puan)"
            }
          </div>
          <div className="flex flex-row justify-around mt-[20px]">
            <div className="flex flex-col items-center">
              <div className="text-gray-400">En İyi Durum (Gün)</div>
              <input
                className="w-[60px] rounded-md px-[5px]"
                type="number"
                value={bestState}
                onChange={(e) => setBestState(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-400">Puan</div>
              <input
                className="bg-purple-500 text-white w-[60px] rounded-md px-[5px]"
                type="number"
                value={bestStateScore}
                onChange={(e) => setBestStateScore(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-400">Ortalama Durum (Gün)</div>
              <input
                className="w-[60px] rounded-md px-[5px]"
                type="number"
                value={middleState}
                onChange={(e) => setMiddleState(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-400">Puan</div>
              <input
                className="bg-purple-500 text-white w-[60px] rounded-md px-[5px]"
                type="number"
                value={middleStateScore}
                onChange={(e) => setMiddleStateScore(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#FDFDFF] px-[10px] py-[20px] rounded-lg drop-shadow-lg my-[10px]">
          <div className="font-semibold">Temizlik Fotoğrafları</div>
          <div className="">
            {
              "Liderin, Etkinlik bitiminde Asil'i düzenli bırakıp bırakmadığına dair forma eklemesi gereken fotoğrafların minimum sayısını ve gereken sayıda fotoğradı gönderirse alacağı puanı belirleyiniz."
            }
          </div>
          <div className="flex flex-row justify-around mt-[20px]">
            <div className="flex flex-col items-center">
              <div className="text-gray-400">
                Gönderilmesi Gereken Minimum Fotoğraf Sayısı
              </div>
              <input
                className="w-[60px] rounded-md px-[5px]"
                type="number"
                value={minPhotos}
                onChange={(e) => setMinPhotos(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-400">Puan</div>
              <input
                className="bg-purple-500 text-white w-[60px] rounded-md px-[5px]"
                type="number"
                value={minPhotosScore}
                onChange={(e) => setMinPhotosScore(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#FDFDFF] px-[10px] py-[20px] rounded-lg drop-shadow-lg my-[10px]">
          <div className="font-semibold">Grup Katılım Oranı</div>
          <div className="">
            {
              "Liderin, grubun etkinliğe katılım oranlarına göre alacağı puanları belirleyiniz."
            }
          </div>
          <div className="flex flex-row justify-around mt-[20px]">
            <div className="flex flex-col items-center">
              <div className="text-gray-400">En İyi Durum (%)</div>
              <input
                className="w-[60px] rounded-md px-[5px]"
                type="number"
                value={bestGroupsState}
                onChange={(e) => setBestGroupsState(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-400">Puan</div>
              <input
                className="bg-purple-500 text-white w-[60px] rounded-md px-[5px]"
                type="number"
                value={bestGroupsStateScore}
                onChange={(e) =>
                  setBestGroupsStateScore(parseInt(e.target.value))
                }
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-400">Ortalama Durum (%)</div>
              <input
                className="w-[60px] rounded-md px-[5px]"
                type="number"
                value={middleGroupsState}
                onChange={(e) => setMiddleGroupsState(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-400">Puan</div>
              <input
                className="bg-purple-500 text-white w-[60px] rounded-md px-[5px]"
                type="number"
                value={middleGroupsStateScore}
                onChange={(e) =>
                  setMiddleGroupsStateScore(parseInt(e.target.value))
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#FDFDFF] px-[10px] py-[20px] rounded-lg drop-shadow-lg my-[10px]">
          <div className="font-semibold">Zorunlu Etkinlikler</div>
          <div className="">
            {
              "Liderin, yapması gereken zorunlu etkinliklerin hepsini yapmışsa kaç puan alacağını belirleyiniz."
            }
          </div>
          <div className="flex flex-row justify-around mt-[20px]">
            <div className="flex flex-col items-center">
              <div className="text-gray-400">Puan</div>
              <input
                className="bg-purple-500 text-white w-[60px] rounded-md px-[5px]"
                type="number"
                value={requiredEvents}
                onChange={(e) => setRequiredEvents(parseInt(e.target.value))}
              />
            </div>
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="mt-[30px] mb-[10px] px-[80px] py-[10px] bg-blue-600 text-white w-fit rounded-full">
          Kuralları Güncelle
        </div>
      </div>
    </>
  );
};

export default FormRules;
