import { useEffect, useState } from "react";
import type { FC } from "react";

import styles from "./index.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { DateType } from "@/types";

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

const Calender: FC = () => {
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
      //   datesCells.push({
      //     date: prevMonthDays - x + 1,
      //     isNext: false,
      //     isToday: false,
      //   });
      datesCells.push({
        date: "" as string,
        isNext: false,
        isToday: false,
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
        });
      } else {
        datesCells.push({
          date: i,
          isToday: false,
          isNext: false,
        });
      }
    }
    const nextDays = 7 * Math.ceil(datesCells.length / 7) - datesCells.length;
    for (let x = 1; x <= nextDays; x++) {
      //   datesCells.push({
      //
      //     date: x,
      //     isNext: true,
      //     isToday: false,
      //   });
      datesCells.push({
        date: "" as string,
        isNext: true,
        isToday: false,
      });
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
    setMonth(MONTHS[dt.getMonth()] + " " + dt.getFullYear());
  }, [dt]);

  const handlePrev = () => {
    setDt(new Date(dt.getFullYear(), dt.getMonth() - 1, 1));
  };

  const handleNext = () => {
    setDt(new Date(dt.getFullYear(), dt.getMonth() + 1, 1));
  };

  return (
    <div className="flex flex-col bg-white rounded-lg p-3">
      <div className="flex justify-between items-center py-3">
        <button
          onClick={handlePrev}
          className="border-success border-2 rounded-full p-2 text-success"
        >
          <FaAngleLeft />
        </button>
        <h1 className="text-lg font-bold text-[#081131]">{month}</h1>
        <button
          onClick={handleNext}
          className="border-success border-2 rounded-full p-2 text-success"
        >
          <FaAngleRight />
        </button>
      </div>
      <div className="flex text-[#081131] items-center justify-between px-2 mt-2">
        {["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"].map(
          (day, index: number) => (
            <p key={index} className="text-[#081131] w-12 text-center">
              {day}
            </p>
          )
        )}
      </div>
      <div className="flex flex-col flex-wrap items-center justify-between mt-2">
        {dates.map((date, index: number) => (
          <div className="flex" key={index * 456}>
            {date.map((date, id: number) => (
              <p
                key={id * 123 + index}
                className={`${
                  date.isToday && "bg-success text-white"
                } w-12 flex items-center justify-center rounded-full text-center h-12`}
              >
                {date?.date === ""
                  ? ""
                  : (date?.date as number) < 10
                  ? `0${date.date}`
                  : date.date}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
