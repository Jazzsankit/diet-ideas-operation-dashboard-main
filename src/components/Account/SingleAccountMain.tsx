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

const SingleAccountMain: FC = () => {
  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-4">
      <div className="flex flex-col gap-3 w-full">
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          Account Setting
        </h1>
      </div>

      <div className="flex w-full py-16 px-5 rounded-lg h-auto bg-white">
        <form className="flex flex-col mt-10 gap-3 h-full pb-16 w-80 bg-white rounded-lg">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-semibold">Username</label>
            <input
              type="text"
              className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-semibold">Confirm Password</label>
            <input
              type="password"
              className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
            />
          </div>
          <div className="flex gap-3 mt-5 w-full">
            <button className="bg-background-200 text-white rounded-md px-4 py-2">
              SAVE
            </button>
            <button className="bg-error text-white rounded-md px-4 py-2">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleAccountMain;
