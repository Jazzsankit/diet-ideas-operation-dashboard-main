import { FC, useState } from "react";
import { Inter } from "next/font/google";

type TableType = {
  title: string;
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

const Table: FC = () => {
  const [data, setData] = useState<TableType[]>([
    {
      title: "New Client",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      title: "New Appointment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      title: "New Client",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      title: "New Client",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      title: "New Appointment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      title: "New Client",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
  ]);

  return (
    <>
      <div className="w-full relative rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full p-5 shadow-md bg-white">
          <thead className="bg-white">
            {Object.keys(data[0]).map((key: string, index: number) => (
              <td
                className={`capitalize w-56 text-xl py-4 px-5 text-center ${inter500.className} `}
                key={index}
              >
                {key.split("_").join(" ")}
              </td>
            ))}
            <td key={5462123} className="w-20 text-xl py-4 px-5 text-center">
              Actions
            </td>
          </thead>
          <tbody>
            {data.map((item: TableType, index: number) => (
              <tr
                key={index * 5645}
                className={`${
                  index % 2 === 0 ? "bg-background-100" : "bg-white"
                }`}
              >
                {Object.keys(item as TableType).map(
                  (key: string, index: number) => (
                    <td
                      className={`capitalize text-center py-4 ${inter500.className} `}
                      key={index * 565}
                    >
                      {item[key as keyof TableType]}
                    </td>
                  )
                )}
                <td key={874531532} className="text-center px-5 ">
                  <button className="bg-background-200 text-white px-2 py-1 rounded-md">
                    COMPLETED
                  </button>
                </td>
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
