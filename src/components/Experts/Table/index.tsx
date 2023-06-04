import { FC } from "react";
import { Inter } from "next/font/google";
import { TableActionTypes } from "@/types";

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
  data: unknown[];
  actions?: TableActionTypes[];
}

const Table: FC<TableProps> = ({ data, actions = [] }) => {
  return (
    <>
      <div className="w-full relative rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full rounded-2xl p-5 bg-white">
          <thead className="bg-white">
            {Object.keys(data[0] as object)
              .slice(1)
              .map((key: string, index: number) => (
                <td
                  className={`capitalize w-56 text-xl py-5 text-center ${inter500.className} `}
                  key={index}
                >
                  {key.split("_").join(" ")}
                </td>
              ))}
            {actions?.length > 0 && (
              <td className="w-20 text-xl py-3 text-center">Actions</td>
            )}
          </thead>
          <tbody>
            {data.map((item: any, index: number) => (
              <tr
                key={index * 5645}
                className={`${
                  index % 2 === 0 ? "bg-background-100" : "bg-white"
                }`}
              >
                {Object.keys(item as object)
                  .slice(1)
                  .map((key: string, index: number) => (
                    <td
                      className={`capitalize py-5 text-center ${inter500.className} `}
                      key={index * 565}
                    >
                      {item[key as string]}
                    </td>
                  ))}
                {actions?.length > 0 && (
                  <td className="flex mt-5 gap-2 h-full items-center px-5">
                    {actions?.map((action: TableActionTypes, ida: number) => (
                      <button
                        key={ida * 565}
                        onClick={() => {
                          action.onClick(
                            (
                              data.find(
                                (_: any, id: number) => id === index
                              ) as any
                            )?.id
                          );
                        }}
                        className={`text-white px-6 py-1 rounded-md ${action.bgColor} ${inter400.className}`}
                      >
                        {action.name}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
