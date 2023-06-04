import { FC } from "react";

import { Inter } from "next/font/google";

import ProfileImage from "@/assets/images/profile_image.png";
import Image from "next/image";
import Form from "./Form";
import { FaAngleLeft } from "react-icons/fa";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const AccountMain: FC = () => {
  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-4">
      <div className="flex flex-col gap-3 w-full">
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          Experts Management
        </h1>
      </div>

      <div className="flex w-full py-16 px-5 rounded-lg h-[732px] bg-white">
        <div className="flex flex-col items-center h-full border-r border-r-[#0F46B3] border-opacity-50 w-1/2">
          <div className="flex items-center gap-4 w-full">
            <FaAngleLeft className="h-5 ml-10 w-5 text-black cursor-pointer" />
            <h1 className="text-2xl -ml-16 font-semibold w-full text-center">
              Expert Account
            </h1>
          </div>

          <div className="w-48 h-48 border-4 mt-10 border-success rounded-full">
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="w-full h-ful rounded-full"
              loading="lazy"
            />
          </div>
          <p className="text-lg font-semibold mt-2">Masfarah Wahidah</p>
          <p className="text-sm text-slate-400 mt-1 font-semibold">Dietition</p>
          <p className="text-base w-4/5 mx-auto p-5 mt-16 bg-background-100 rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className="flex flex-col items-center h-full px-5 w-1/2">
          <div className="flex items-center pb-6 border-b-2 border-b-primary justify-between gap-3 w-full">
            <h1 className="text-2xl font-semibold ">BASIC INFO</h1>
            <div className="flex items-center justify-center gap-3">
              <button className="bg-background-200 text-white text-sm px-5 py-2 rounded-lg">
                Save
              </button>
              <button className="bg-danger text-white text-sm px-5 py-2 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default AccountMain;
