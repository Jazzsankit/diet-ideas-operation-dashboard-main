import type { FC } from "react";
import { Poppins } from "next/font/google";
import { DateType } from "@/types";

const poppins500 = Poppins({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

interface CalenderBlockProps {
  date: DateType[];
}

const CalenderBlock: FC<CalenderBlockProps> = ({ date }) => {
  return (
    <div className="flex w-full h-32 border border-[#F2F2F2]">
      {date.map((day, index: number) => (
        <div
          key={index}
          className={`${
            index !== date.length - 1 && "border-r border-r-[#F2F2F2]"
          }
        ${day.isToday && "bg-success bg-opacity-20"}
          flex flex-1 flex-col hover:bg-success hover:bg-opacity-20
          ${(day.isPrev || day.isNext) && "bg-[#ecedf09a] hover:bg-[#dadce09a]"}
          `}
        >
          <p className={`${poppins500.className} text-[#333333] text-xs p-3`}>
            {(day.date as number) < 10 ? `0${day.date}` : day.date}
          </p>

          {!day.isPrev && !day.isNext && (
            <div className="flex flex-col w-full h-full justify-end">
              <div className="flex justify-between items-center w-full px-1">
                <div className="flex gap-2 items-center">
                  <div className={`h-2 w-2 rounded-full bg-success`} />
                  <p
                    className={`${poppins500.className} text-success text-[8px] font-extralight`}
                  >
                    Event name
                  </p>
                </div>
                <p
                  className={`${poppins500.className} text-[#333333] text-[8px]`}
                >
                  13:00
                </p>
              </div>
              <div className="flex justify-between items-center w-full px-1">
                <div className="flex gap-2 items-center">
                  <div className={`h-2 w-2 rounded-full bg-danger`} />
                  <p
                    className={`${poppins500.className} text-danger text-[8px]  font-extralight`}
                  >
                    Event name
                  </p>
                </div>
                <p
                  className={`${poppins500.className} text-[#333333] text-[8px]`}
                >
                  13:00
                </p>
              </div>
              <div className="flex justify-center items-center w-full px-1">
                <p
                  className={`${poppins500.className} text-primary font-bold text-[8px]`}
                >
                  + 2 more
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CalenderBlock;
