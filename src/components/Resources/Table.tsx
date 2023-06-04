import { FC, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

type TableType = {
  client_name: string;
  service_name: string;
  resource_title: string;
  submitted_time: string;
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
  const router = useRouter();

  const [data, setData] = useState<TableType[]>([
    {
      client_name: "George R.R Martin",
      service_name: "Service 1",
      resource_title: "Resource 1",
      submitted_time: "10:00 AM",
    },
    {
      client_name: "Markus Suzak",
      service_name: "Service 2",
      resource_title: "Resource 2",
      submitted_time: "12:30 PM",
    },
    {
      client_name: "Ankur Warikoo",
      service_name: "Service 3",
      resource_title: "Resource 3",
      submitted_time: "16:45 PM",
    },
  ]);

  return (
    <>
      <div className="w-full relative overflow-hidden overflow-x-auto h-80">
        <table className="w-full p-5 border shadow-md h-80 bg-white">
          <thead className="bg-white">
            {Object.keys(data[0]).map((key: string, index: number) => (
              <td
                className={`capitalize w-56 text-xl py-3 text-center border ${inter500.className} `}
                key={index}
              >
                {key.split("_").join(" ")}
              </td>
            ))}
            <td className=" text-xl w-44 py-3 text-center border">Actions</td>
          </thead>
          <tbody>
            {data.map((item: TableType, index: number) => (
              <tr
                key={index * 5645}
                className={`${index % 2 === 0 ? "bg-secondary" : "bg-white"}`}
              >
                {Object.keys(item as TableType).map(
                  (key: string, index: number) => (
                    <td
                      className={`capitalize text-center border ${inter500.className} `}
                      key={index * 565}
                    >
                      {item[key as keyof TableType]}
                    </td>
                  )
                )}
                <td className="text-center flex  items-center justify-center h-full gap-2 px-5 border">
                  <button
                    className={` text-white px-2 py-1 rounded-md bg-primary`}
                    onClick={() => {
                      router.push("/resources/1/edit");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className={` text-white px-2 py-1 rounded-md bg-danger`}
                    onClick={() => {
                      router.push("/resources/1");
                    }}
                  >
                    Delete
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
                item === 1 && "bg-primary text-white"
              } hover:bg-primary hover:text-white transition-all`}
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
