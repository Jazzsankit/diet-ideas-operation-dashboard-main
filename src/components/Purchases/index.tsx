import { FC, useState } from "react";
import { Inter } from "next/font/google";

import { PurchasesData } from "@/assets/data";

import Table from "./Table";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

type TableType = {
  purchase_ID: string;
  patient_name: string;
  service_name: string;
  "price_(RM)": number;
  purchase_date: string;
  payment_method: string;
};

const PurchasesMain: FC = () => {
  const [data, setData] = useState<TableType[]>(PurchasesData);
  return (
    <div className="p-10 relative pb-20 px-16 flex flex-col pt-20 gap-16">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center w-full px-5 justify-between flex-row gap-3">
          <h1 className={`${inter500.className} text-xl my-2 text-black`}>
            Purchase Record
          </h1>
          <button className="bg-success text-white rounded-md px-4 py-2">
            EXPORT
          </button>
        </div>
      </div>
      <Table data={data} />
      <div className="w-full h-38" />
    </div>
  );
};

export default PurchasesMain;
