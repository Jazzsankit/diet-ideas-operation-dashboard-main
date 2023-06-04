import { FC, useEffect, useState } from "react";
import { Inter } from "next/font/google";

import ScheduleLeft from "./ScheduleLeft";
import ScheduleRight from "./ScheduleRight";
import { DateType } from "@/types";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ScheduleMain: FC = () => {
  const [dt, setDt] = useState(new Date());
  const [month, setMonth] = useState(
    MONTHS[dt.getMonth()] + " " + dt.getFullYear()
  );
  const [dates, setDates] = useState<DateType[][]>([]);

  const cal = () => {
    dt.setDate(1);
    const today = new Date();
    const day = dt.getDay();

    const datesCells = [];
    const thisMonthDays = new Date(
      dt.getFullYear(),
      dt.getMonth() + 1,
      0
    ).getDate();
    const prevMonthDays = new Date(
      dt.getFullYear(),
      dt.getMonth(),
      0
    ).getDate();

    for (let x = day; x > 0; x--) {
      datesCells.push({
        date: prevMonthDays - x + 1,
        isNext: false,
        isToday: false,
        isPrev: true,
      });
    }
    for (let i = 1; i <= thisMonthDays; i++) {
      if (
        today.getDate() == i &&
        dt.getMonth() == today.getMonth() &&
        dt.getFullYear() == today.getFullYear()
      ) {
        datesCells.push({
          date: i,
          isToday: true,
          isNext: false,
          isPrev: false,
        });
      } else {
        datesCells.push({
          date: i,
          isToday: false,
          isNext: false,
          isPrev: false,
        });
      }
    }
    const nextDays = 7 * Math.ceil(datesCells.length / 7) - datesCells.length;
    for (let x = 1; x <= nextDays; x++) {
      datesCells.push({
        date: x,
        isNext: true,
        isToday: false,
        isPrev: false,
      });
      // datesCells.push({
      //   date: "" as string,
      //   isNext: true,
      //   isToday: false,
      //     isPrev: false,
      // });
    }

    const datesFinal = [];
    for (let i = 0; i < thisMonthDays + day + nextDays; i++) {
      datesFinal.push(datesCells[i]);
    }

    // create clustors of 7

    const total_clusters = datesFinal.length / 7;

    const clusters = [];

    for (let i = 0; i < total_clusters; i++) {
      clusters.push(datesFinal.slice(i * 7, i * 7 + 7));
    }

    setDates(clusters);
  };

  useEffect(() => {
    cal();
    setMonth(MONTHS[dt.getMonth()]);
  }, [dt]);

  return (
    <div className="p-10 relative pb-20 flex flex-col pt-20 gap-16">
      <div className="flex flex-col gap-3 w-full">
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          Schedule
        </h1>
      </div>

      <div className="flex w-full h-full pb-5 bg-white rounded-xl">
        <ScheduleLeft month={month} dates={dates} />
        <ScheduleRight month={month} dates={dates} />
      </div>
    </div>
  );
};

export default ScheduleMain;
