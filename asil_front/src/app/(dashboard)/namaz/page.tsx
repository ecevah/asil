"use client";
/*
import { useState } from "react";
import fetchPrayerTimes from "./fetchPlaterTimes";

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  [key: string]: string;
}

export default function Home() {
  const [startDate, setStartDate] = useState<string>("");
  const [startHour, setStartHour] = useState<string>("00:00");
  const [endDate, setEndDate] = useState<string>("");
  const [endHour, setEndHour] = useState<string>("23:59");
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);

  const handleFetchPrayerTimes = async () => {
    const data = await fetchPrayerTimes(startDate, startHour, endDate, endHour);
    if (data) {
      setPrayerTimes(data.data.timings);
    }
  };

  return (
    <div>
      <h1>Namaz Vakitleri</h1>
      <div>
        <label>Başlangıç Tarihi: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="time"
          value={startHour}
          onChange={(e) => setStartHour(e.target.value)}
        />
      </div>
      <div>
        <label>Bitiş Tarihi: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="time"
          value={endHour}
          onChange={(e) => setEndHour(e.target.value)}
        />
      </div>
      <button onClick={handleFetchPrayerTimes}>Namaz Vakitlerini Getir</button>
      {prayerTimes && (
        <div>
          <h2>Namaz Vakitleri</h2>
          <ul>
            {Object.keys(prayerTimes).map((time) => (
              <li key={time}>
                {time}: {prayerTimes[time]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


import { useState } from "react";
import fetchPrayerTimes from "./fetchPlaterTimes";

interface PrayerTimes {
  [key: string]: string[];
}

export default function Home() {
  const [startDate, setStartDate] = useState<string>("");
  const [startHour, setStartHour] = useState<string>("00:00");
  const [endDate, setEndDate] = useState<string>("");
  const [endHour, setEndHour] = useState<string>("23:59");
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);

  const handleFetchPrayerTimes = async () => {
    const baslangicTarihSaat = `${startDate}T${startHour}`;
    const bitisTarihSaat = `${endDate}T${endHour}`;

    const baslangicTarih = new Date(baslangicTarihSaat);
    const bitisTarih = new Date(bitisTarihSaat);

    let tarih = new Date(baslangicTarih);
    const allPrayerTimes: PrayerTimes = {};

    while (tarih <= bitisTarih) {
      const tarihString = tarih.toISOString().split("T")[0];
      const data = await fetchPrayerTimes(tarihString);

      if (data && data.times) {
        allPrayerTimes[tarihString] = data.times[tarihString];
      }

      tarih.setDate(tarih.getDate() + 1);
    }

    setPrayerTimes(allPrayerTimes);
  };

  return (
    <div>
      <h1>Namaz Vakitleri</h1>
      <div>
        <label>Başlangıç Tarihi: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="time"
          value={startHour}
          onChange={(e) => setStartHour(e.target.value)}
        />
      </div>
      <div>
        <label>Bitiş Tarihi: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="time"
          value={endHour}
          onChange={(e) => setEndHour(e.target.value)}
        />
      </div>
      <button onClick={handleFetchPrayerTimes}>Namaz Vakitlerini Getir</button>
      {prayerTimes && (
        <div>
          <h2>Namaz Vakitleri</h2>
          {Object.keys(prayerTimes).map((date) => (
            <div key={date}>
              <h3>{date}</h3>
              <ul>
                {prayerTimes[date].map((time, index) => (
                  <li key={index}>{time}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
*/

import { useState } from "react";

interface PrayerTimes {
  [key: string]: string[];
}

async function fetchPrayerTimes(date: string): Promise<any> {
  const baseUrl = "https://namaz-vakti.vercel.app/api/timesFromPlace";
  const queryParams = `country=Turkey&region=İzmir&city=İzmir&date=${date}&days=1&timezoneOffset=180&calculationMethod=Turkey`;
  const url = `${baseUrl}?${queryParams}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export default function Home() {
  const [startDateTime, setStartDateTime] = useState<string>("");
  const [endDateTime, setEndDateTime] = useState<string>("");
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes>({});
  const [checkedTimes, setCheckedTimes] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [error, setError] = useState<string | null>(null);

  const handleFetchPrayerTimes = async () => {
    const baslangicTarih = new Date(startDateTime);
    const bitisTarih = new Date(endDateTime);

    let tarih = new Date(baslangicTarih);
    const allPrayerTimes: PrayerTimes = {};

    setError(null); // Reset error before fetching

    while (tarih <= bitisTarih || tarih.getDate() === bitisTarih.getDate()) {
      const tarihString = tarih.toISOString().split("T")[0];

      try {
        const data = await fetchPrayerTimes(tarihString);

        if (data && data.times) {
          const namazVakitleri = data.times[tarihString];
          namazVakitleri.shift(); // Remove the first time if needed
          allPrayerTimes[tarihString] = namazVakitleri;
        }
      } catch (error) {
        setError(
          "Namaz vakitleri alınırken bir hata oluştu. Lütfen tekrar deneyin."
        );
        console.error("Fetching prayer times failed:", error);
        break;
      }

      tarih.setDate(tarih.getDate() + 1);
    }

    setPrayerTimes(allPrayerTimes);
  };

  const findPrayerTime = (
    hour: number,
    minute: number,
    prayerTimes: string[]
  ) => {
    const totalMinutes = hour * 60 + minute;

    const prayerTimesInMinutes = prayerTimes.map((time) => {
      const [h, m] = time.split(":").map(Number);
      return h * 60 + m;
    });

    for (let i = 0; i < prayerTimesInMinutes.length - 1; i++) {
      const startTime = prayerTimesInMinutes[i];
      const endTime = prayerTimesInMinutes[i + 1];
      if (totalMinutes >= startTime && totalMinutes < endTime) {
        return i === 0 ? null : prayerTimes[i];
      }
    }

    return prayerTimes[prayerTimes.length - 1];
  };

  const NamazAraligiKontrolEt = (namaz_vakitleri: string[]) => {
    const selectedDate = new Date(startDateTime);
    const hour = selectedDate.getHours();
    const minute = selectedDate.getMinutes();

    return findPrayerTime(hour, minute, namaz_vakitleri);
  };

  const handleCheckboxChange = (prayer: string, checked: boolean) => {
    setCheckedTimes((prev) => ({
      ...prev,
      [prayer]: checked,
    }));
  };

  return (
    <div>
      <h1>Namaz Vakitleri</h1>
      <div>
        <label>Başlangıç Tarihi ve Saati: </label>
        <input
          type="datetime-local"
          value={startDateTime}
          onChange={(e) => setStartDateTime(e.target.value)}
        />
      </div>
      <div>
        <label>Bitiş Tarihi ve Saati: </label>
        <input
          type="datetime-local"
          value={endDateTime}
          onChange={(e) => setEndDateTime(e.target.value)}
        />
      </div>
      <button onClick={handleFetchPrayerTimes}>Namaz Vakitlerini Getir</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {Object.keys(prayerTimes).length > 0 && (
        <div id="grubun_namaz_vakitleri">
          {Object.keys(prayerTimes).map((date) => (
            <div key={date}>
              <h3>{date}</h3>
              <ul>
                {prayerTimes[date].map((time, index) => {
                  const namazAdlari = [
                    "Sabah",
                    "Öğle",
                    "İkindi",
                    "Akşam",
                    "Yatsı",
                  ];
                  const ilknamazresult = NamazAraligiKontrolEt(
                    prayerTimes[date]
                  );
                  const isChecked = checkedTimes[`checkbox_${time}`] || false;
                  return (
                    <li key={time}>
                      {time === ilknamazresult ? (
                        <>
                          <span className="text-m">
                            {namazAdlari[index]} Namazı
                          </span>
                          <input
                            type="checkbox"
                            id={`checkbox_${time}`}
                            checked={isChecked}
                            onChange={(e) =>
                              handleCheckboxChange(
                                `checkbox_${time}`,
                                e.target.checked
                              )
                            }
                            className="ms-2"
                          />
                          <input
                            type="hidden"
                            name="allPrayers[]"
                            value={`checkbox_${time}`}
                          />
                        </>
                      ) : (
                        <>
                          <span>{namazAdlari[index]} Namazı</span>
                          <input
                            type="checkbox"
                            id={`checkbox_${time}`}
                            checked={isChecked}
                            onChange={(e) =>
                              handleCheckboxChange(
                                `checkbox_${time}`,
                                e.target.checked
                              )
                            }
                            className="ms-2"
                          />
                          <input
                            type="hidden"
                            name="allPrayers[]"
                            value={`checkbox_${time}`}
                          />
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
