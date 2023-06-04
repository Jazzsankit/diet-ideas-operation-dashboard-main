import type { FC } from "react";

import { Inter } from "next/font/google";
import { FaAngleLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const inter600 = Inter({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});
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

const ClientCard: FC = () => {
  const router = useRouter();
  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-16">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center flex-row gap-3">
          <button className="text-black" onClick={() => router.back()}>
            <FaAngleLeft />
          </button>
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Client Card
          </h1>
        </div>
        <button
          className={`${inter500.className} bg-primary text-white rounded-lg text-xl px-6 py-1`}
        >
          Add New
        </button>
      </div>

      <div className="flex flex-col px-8 gap-20 rounded-xl shadow-lg py-4 w-full bg-white">
        <p
          className={`${inter400.className} leading-7 text-xl text-left my-2 text-black`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p
          className={`${inter400.className} leading-7 pb-4 text-xl text-left my-2 text-black`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col mt-4 px-8 gap-20 rounded-xl shadow-lg py-4 w-full bg-white">
        <p
          className={`${inter400.className} leading-7 text-xl text-left my-2 text-black`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="flex flex-row items-center justify-center gap-4 pb-4">
          <button
            className={`${inter600.className} bg-primary text-white rounded-md text-base px-10 py-1`}
          >
            Save
          </button>
          <button
            className={`${inter600.className} bg-danger text-white rounded-md text-base px-10 py-1`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
