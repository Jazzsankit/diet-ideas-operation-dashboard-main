import type { FC } from "react";
import { Inter } from "next/font/google";
import Table from "./Table";
import { useRouter } from "next/router";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const ResourcesMain: FC = () => {
  const router = useRouter();
  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-16">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center w-full justify-between">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Resources
          </h1>

          <button
            onClick={() => router.push("/resources/new")}
            className={`${inter500.className} shadow bg-primary text-white rounded-lg text-md px-6 py-1`}
          >
            ADD RESOURCE
          </button>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default ResourcesMain;
