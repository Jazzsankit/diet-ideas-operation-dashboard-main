import { FC, useState } from "react";
import { Inter } from "next/font/google";
type TableType = {
  client_name: string;
  service_name: string;
  assigned_expert: string;
  experience_rating: number;
  improvement: string;
  description: string;
};
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

interface TableProps {
  data: TableType[];
}

const Table: FC<TableProps> = ({ data }) => {
  return (
    <>
      <div className="max-w-full inline-block relative rounded-xl shadow-lg overflow-x-auto">
        <table className="max-w-full p-5 min-w-[1050px] overflow-x-auto w-[750px] shadow-md bg-white">
          <thead className="bg-white w-full">
            {Object.keys(data[0]).map((key: string, index: number) => (
              <td
                className={`capitalize w-56 text-xl py-4 px-5 text-center ${inter500.className} `}
                key={index}
              >
                {key.split("_").join(" ")}
              </td>
            ))}
          </thead>
          <tbody className="w-full">
            {data.map((item: TableType, index: number) => (
              <tr
                key={index * 5645}
                className={`w-full ${
                  index % 2 === 0 ? "bg-background-100" : "bg-white"
                }`}
              >
                {Object.keys(item as TableType).map(
                  (key: string, index: number) => (
                    <td
                      className={`capitalize w-56 text-center py-4 ${inter500.className} `}
                      key={index * 565}
                    >
                      {item[key as keyof TableType]}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-5 w-full h-10 px-5">
        <p className={`${inter400.className} text-sm `}>
          Showing 1 to 10 of 55 entries
        </p>

        <div className="flex gap-2">
          <button className="text-sm rounded-full">previous</button>
          {[1, 2, 3, 4, 5, 6].map((item: number) => (
            <button
              className={`p-2 rounded-lg ${
                item === 1 && "bg-background-200 text-white"
              } hover:bg-background-200 hover:text-white transition-all`}
              key={item / 561}
            >
              {item}
            </button>
          ))}
          <button className="text-sm rounded-full">Next</button>
        </div>
      </div>
    </>
  );
};

export default Table;
