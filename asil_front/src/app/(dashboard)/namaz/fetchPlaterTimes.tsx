/*

import axios from "axios";

const API_URL = "https://api.aladhan.com/v1";

interface PrayerTimesResponse {
  code: number;
  status: string;
  data: {
    timings: {
      Fajr: string;
      Dhuhr: string;
      Asr: string;
      Maghrib: string;
      Isha: string;
      [key: string]: string;
    };
  };
}

const fetchPrayerTimes = async (
  startDate: string,
  startHour: string,
  endDate: string,
  endHour: string
): Promise<PrayerTimesResponse | null> => {
  const startTime = new Date(`${startDate}T${startHour}:00`).getTime() / 1000;
  const endTime = new Date(`${endDate}T${endHour}:00`).getTime() / 1000;

  try {
    const response = await axios.get<PrayerTimesResponse>(
      `${API_URL}/timings`,
      {
        params: {
          latitude: 41.0082, // Istanbul coordinates
          longitude: 28.9784,
          method: 2, // Diyanet İşleri Başkanlığı
          start: startTime,
          end: endTime,
          tune: 0,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    return null;
  }
};

export default fetchPrayerTimes;

*/

import axios from "axios";

const API_URL = "https://namaz-vakti.vercel.app/api/timesFromPlace";

interface PrayerTimesResponse {
  times: {
    [key: string]: string[];
  };
}

const fetchPrayerTimes = async (
  date: string
): Promise<PrayerTimesResponse | null> => {
  try {
    const response = await axios.get<PrayerTimesResponse>(`${API_URL}`, {
      params: {
        country: "Turkey",
        region: "İzmir",
        city: "İzmir",
        date,
        days: 1,
        timezoneOffset: 180,
        calculationMethod: "Turkey",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    return null;
  }
};

export default fetchPrayerTimes;
