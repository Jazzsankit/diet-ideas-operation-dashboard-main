import { FC, useState } from "react";
import { Inter } from "next/font/google";
import { MealsTableType } from "@/types";

interface Props {
  data: MealsTableType[];
}

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const inter400 = Inter({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const MealsTable: FC<Props> = ({ data }) => {
  return (
    <div className="w-full relative overflow-hidden mt-3 overflow-x-auto h-auto">
      <table className="w-full p-5 border shadow-lg bg-white">
        <thead className="bg-white py-3">
          <td className=" text-xl w-44 py-4 text-center border">Client Name</td>
          <td className=" text-xl w-44 py-4 text-center border">
            Service Name
          </td>
          <td className=" text-xl w-44 py-4 text-center border">
            Application Date
          </td>
          <td className=" text-xl w-44 py-4 text-center border">Expiry Date</td>
          <td className=" text-xl w-44 py-4 text-center border">Actions</td>
        </thead>
        <tbody>
          {data.map((item: MealsTableType, index: number) => (
            <tr
              key={index * 5645}
              className={`${index % 2 === 0 ? "bg-secondary" : "bg-white"}`}
            >
              {Object.keys(item as MealsTableType).map(
                (key: string, index: number) => (
                  <td
                    className={`capitalize py-4 text-center border ${inter500.className} `}
                    key={index * 565}
                  >
                    {item[key as keyof MealsTableType]}
                  </td>
                )
              )}
              <td className="text-center flex py-4 items-center justify-center h-full gap-2 px-5 border">
                <button
                  key={index * 564}
                  className={`bg-primary text-white px-2 py-1 rounded-md ${inter400.className}`}
                >
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealsTable;
