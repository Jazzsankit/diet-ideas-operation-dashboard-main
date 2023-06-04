import { FC, useState } from "react";
import { Inter } from "next/font/google";

import { FeedbacksData } from "@/assets/data";

import Table from "./Table";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

type TableType = {
  client_name: string;
  service_name: string;
  assigned_expert: string;
  experience_rating: number;
  improvement: string;
  description: string;
};

const FeedbacksMain: FC = () => {
  const [data, setData] = useState<TableType[]>(FeedbacksData);
  return (
    <div className="p-10 relative pb-20 px-16 flex flex-col pt-20 gap-16">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center w-full px-5 justify-between flex-row gap-3">
          <h1 className={`${inter500.className} text-xl my-2 text-black`}>
            Feedback
          </h1>
          <button className="bg-success text-white rounded-md px-4 py-2">
            EXPORT
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 min-w-full overflow-x-auto">
        <Table data={data} />
      </div>
      <div className="w-full h-38" />
    </div>
  );
};

export default FeedbacksMain;
