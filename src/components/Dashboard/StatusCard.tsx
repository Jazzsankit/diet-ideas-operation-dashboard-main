import type { IStatusCard } from "@/types";
import type { FC } from "react";
import { Inter } from "next/font/google";

import ScholarIcon from "../icons/ScholarIcon";

interface Props {
  key: number;
  data: IStatusCard;
}

const Inter500 = Inter({
  weight: "500",
  subsets: ["latin"],
  style: "normal",
});

const Inter600 = Inter({
  weight: "600",
  subsets: ["latin"],
  style: "normal",
});

const StatusCard: FC<Props> = ({ data }) => (
  <div
    className={`h-48 mx-4 w-36 px-2 ${data.color} flex flex-col pt-8 items-center bg-opacity-20 rounded-md`}
  >
    <div
      className={`flex ${data.color} relative items-center justify-center h-12 w-12
          before:absolute before:content-[''] before:border-b-[25rem] before:border-b-${data.color}
        `}
    >
      <ScholarIcon />
    </div>
    <p
      className={`text-sm mt-5 font-bold text-center ${Inter500.className} mt-4`}
    >
      {data.title}
    </p>
    <p className={`text-lg mt-3 font-bold ${Inter600.className} mt-2`}>
      {data.count}
    </p>
  </div>
);

export default StatusCard;
