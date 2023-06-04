import { useRouter } from "next/router";
import type { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Inter } from "next/font/google";
import Table from "./Table";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const NotificationsDash: FC = () => {
  return (
    <div className="p-10 relative pb-20 px-16 flex flex-col pt-20 gap-16">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center flex-row gap-3">
          <h1 className={`${inter500.className} text-xl my-2 text-black`}>
            Notifications
          </h1>
        </div>
      </div>
      <Table />
      <div className="w-full h-38" />
    </div>
  );
};

export default NotificationsDash;
