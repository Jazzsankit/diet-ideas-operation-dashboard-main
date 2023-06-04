import type { FC } from "react";
import type { BlogType } from "@/types";
import { useState } from "react";

import StatusCards from "./StatusCards";

import { Inter } from "next/font/google";
import BlogCard from "./BlogCard";
import Calender from "../calender";
import Chart from "./Chart";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const DashboardMain: FC = () => {
  const [blogs, setblogs] = useState(
    Array.from({ length: 6 }, (_, i) => i + 1).map((i) => ({
      id: i,
      title: "How to stick to your diet on a holiday",
      uploaded_by: "Admin",
    }))
  );

  return (
    <div className="p-10 flex pt-20 gap-16">
      <div className="flex flex-col gap-3 w-7/12">
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          Dashboard
        </h1>
        <StatusCards />
        <div className="flex flex-col items-center gap-3 w-full h-auto p-5 rounded-lg bg-white mt-10">
          <div className="flex gap-3 h-10 justify-between w-full py-2">
            <p className="text-lg font-semibold">Total Clients</p>

            <div className="flex items-center justify-center gap-3">
              <p className="text-sm text-slate-400 font-semibold">Sort by</p>
              <select className="bg-success bg-opacity-40 px-3 py-2 border text-success font-bols border-success rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Month</option>
                <option>Year</option>
              </select>
            </div>
          </div>
          <Chart />
        </div>
      </div>
      <div className="flex flex-col pt-16 w-5/12 gap-3">
        <div className="gap-3 w-full rounded-lg bg-white h-auto flex justify-center items-center">
          {/* <p className="text-sm font-semibold"></p> */}
          <Calender />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Blogs
          </h1>

          {blogs.map((blog: BlogType, index: number) => (
            <BlogCard key={index * 556} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
