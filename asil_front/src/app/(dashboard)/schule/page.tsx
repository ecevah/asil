"use client";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Ensuring this code runs only on the client side
    setIsClient(typeof window !== "undefined");
    setIsLoading(false);
  }, []);

  const mockedSchedulerData = [
    {
      id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
      label: {
        icon: "https://picsum.photos/24",
        title: "Joe Doe",
        subtitle: "Frontend Developer",
      },
      data: [
        {
          id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
          startDate: new Date("2023-04-13T15:31:24.272Z"),
          endDate: new Date("2023-08-28T10:28:22.649Z"),
          occupancy: 3600,
          title: "Project A",
          subtitle: "Subtitle A",
          description: "array indexing Salad West Account",
          bgColor: "rgb(254,165,177)",
        },
        // Additional data omitted for brevity
      ],
    },
  ];

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[1000px] h-[600px] relative">
      <Scheduler
        isLoading={isLoading}
        data={mockedSchedulerData}
        onItemClick={(clickedItem) => console.log(clickedItem)}
        onFilterData={() => {}}
        onClearFilterData={() => {}}
        config={{
          filterButtonState: 0,
          zoom: 1,
          lang: "tr",
          maxRecordsPerPage: 20,
        }}
      />
    </div>
  );
}
