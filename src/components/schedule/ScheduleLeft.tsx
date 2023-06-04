import type { FC } from "react";
import { Poppins } from "next/font/google";
import { DateType } from "@/types";

interface ScheduleLeftProps {
  month: string;
  dates: DateType[][];
}

const poppins500 = Poppins({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

const ScheduleLeft: FC<ScheduleLeftProps> = ({ month, dates }) => {
  const todaysEvents = [
    {
      id: 1,
      title: "Meeting with John",
      time: "10:00",
      isCanceled: false,
    },
    {
      id: 2,
      title: "Website Completion",
      time: "10:00",
      isCanceled: false,
    },
    {
      id: 3,
      title: "Updates in Documents",
      time: "10:00",
      isCanceled: false,
    },
    {
      id: 4,
      title: "Meeting with Google",
      time: "10:00",
      isCanceled: true,
    },
  ];

  return (
    <div className="flex px-4 py-2 flex-col w-1/4 border-r border-r-[#DADCE0] h-full bg-white rounded-l-lg">
      <h1 className={`${poppins500.className} pb-3 text-lg text-[#29292B]`}>
        {month}
      </h1>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          {["m", "t", "w", "t", "f", "s", "s"].map((day, index: number) => (
            <p
              key={index}
              className={`${poppins500.className} text-[#29292B] text-xs w-8 text-center`}
            >
              {day}
            </p>
          ))}
        </div>

        <div className="flex flex-col mt-2">
          {dates.map((subDates: DateType[], index: number) => (
            <div className="flex flex-row justify-between" key={index * 456}>
              {subDates.map((date: DateType, id: number) => (
                <p
                  key={id * 123 + index}
                  className={`${poppins500.className} ${
                    date.isToday && "text-white bg-background"
                  } ${
                    (date.isPrev || date.isNext) && "text-[#333333]"
                  } h-8 w-8 flex text-xs items-center rounded-full justify-center text-center`}
                >
                  {date.date}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <h1 className={`${poppins500.className} pb-3 text-lg text-[#29292B]`}>
          Today
        </h1>

        <div className="flex flex-col w-full">
          {todaysEvents.map((event) => (
            <div
              className="flex justify-between items-center w-full"
              key={event.id}
            >
              <div className="flex gap-2 items-center">
                <div
                  className={`h-2 w-2 rounded-full ${
                    event.isCanceled ? "bg-danger" : "bg-success"
                  }`}
                />
                <p
                  className={`${poppins600.className} ${
                    event.isCanceled ? "text-danger" : "text-success"
                  } text-xs py-2 font-extralight`}
                >
                  {event.title}
                </p>
              </div>
              <p
                className={`${poppins500.className} text-[#333333] text-xs py-2`}
              >
                {event.time}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h1 className={`${poppins500.className} pb-3 text-lg text-[#29292B]`}>
          Tomorrow
        </h1>

        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <div className={`h-2 w-2 rounded-full bg-success`} />
              <p
                className={`${poppins600.className} text-success text-xs py-2 font-extralight`}
              >
                Meeting with John
              </p>
            </div>
            <p
              className={`${poppins500.className} text-[#333333] text-xs py-2`}
            >
              13:00
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <h1 className={`${poppins500.className} pb-3 text-lg text-[#29292B]`}>
          Vacations
        </h1>

        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <div className={`h-2 w-2 rounded-full bg-success`} />
              <p
                className={`${poppins600.className} text-success text-xs py-2 font-extralight`}
              >
                Weekend
              </p>
            </div>
            <p
              className={`${poppins500.className} text-[#333333] text-xs py-2`}
            >
              20/01 to 21/01
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleLeft;
