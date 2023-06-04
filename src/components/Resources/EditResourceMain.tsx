import type { FC } from "react";
import { Inter } from "next/font/google";
import Table from "./Table";
import { useRouter } from "next/router";
import Form from "./Form";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const EditResourceMain: FC = () => {
  const router = useRouter();
  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-16">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center w-full justify-between">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Edit Resource
          </h1>
        </div>
        <Form isEdit />
      </div>
    </div>
  );
};

export default EditResourceMain;
