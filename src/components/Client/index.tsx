import type { FC } from "react";

import { Inter } from "next/font/google";
import { FaAngleLeft } from "react-icons/fa";
import Image from "next/image";

import ImagePlaceholder from "@/assets/images/profile_placeholder.png";
import Table from "./Table";
import { useRouter } from "next/router";

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
const inter600 = Inter({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

const ClientDash: FC = () => {
  const router = useRouter();
  return (
    <div className="p-10 pb-20 px-16 flex flex-col pt-20 gap-16">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center flex-row gap-3">
          <button className="text-black" onClick={() => router.back()}>
            <FaAngleLeft />
          </button>
          <h1 className={`${inter500.className} text-xl my-2 text-black`}>
            Client Profile
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-8 rounded-xl w-full ">
        <div className="flex justify-between w-full">
          <div className="h-full w-auto rounded-xl bg-gray-200">
            <Image
              src={ImagePlaceholder}
              alt="Profile Picture"
              loading="lazy"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col p-10 py-5 h-auto w-[450px] gap-4 rounded-lg bg-white">
            <p className={`${inter600.className} text-background-200 text-lg`}>
              About Patient
            </p>

            <p className={`${inter400.className} mt-3 mb-0 text-black text-md`}>
              <span className="font-bold">Name:</span> Sarah Johnson
            </p>
            <p className={`${inter400.className} text-black text-md`}>
              <span className="font-bold">Gender:</span> Female
            </p>
            <p className={`${inter400.className} text-black text-md`}>
              <span className="font-bold">Date Of Birth:</span> 1/3/1990
            </p>
            <p className={`${inter400.className} text-black text-md`}>
              <span className="font-bold">Identification Number:</span>{" "}
              900301-00-8888
            </p>
            <p className={`${inter400.className} text-black text-md`}>
              <span className="font-bold">Blood Group:</span> A+
            </p>
            <p className={`${inter400.className} text-black text-md`}>
              <span className="font-bold">Email Address:</span> sarah@gmail.com
            </p>
            <p className={`${inter400.className} text-black text-md`}>
              <span className="font-bold">Phone:</span> 900301-00-8888
            </p>
            <p className={`${inter400.className} text-black text-md`}>
              <span className="font-bold">Address:</span> 123, Jalan ABC, Taman
              ABC, Kuala Lumpur, Malaysia.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-8 rounded-xl w-full ">
        <div className="flex justify-end my-3  w-full">
          <button className="bg-success text-white rounded-lg px-4 py-2">
            UPLOAD REPORT
          </button>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default ClientDash;
