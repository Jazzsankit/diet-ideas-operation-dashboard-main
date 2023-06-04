import { FC, useState } from "react";

import { Inter } from "next/font/google";
import Table from "./Table";
import { useRouter } from "next/router";
import { CreatedMealsData, SuggestedMealsData } from "@/assets/data";
import { FaTimes, FaTrashAlt } from "react-icons/fa";

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

const MealsMain: FC = () => {
  const [createdMeals, setCreatedMeals] = useState(CreatedMealsData);
  const [suggestedData, setSuggestedData] = useState(SuggestedMealsData);
  const [deleteId, setDeleteId] = useState<number>();

  const handleClientDeleteClick = () => {
    setCreatedMeals(createdMeals.filter((blog) => blog.id !== deleteId));
    setDeleteId(undefined);
  };

  const router = useRouter();

  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-16">
      {deleteId && (
        <div className="fixed flex items-center justify-center top-0 left-0 w-full bg-black-100 bg-opacity-20 h-full z-50">
          <div className="w-96 bg-white shadow rounded-xl h-64">
            <div className="flex items-center justify-between w-full px-8 py-5">
              <div className="rounded-full h-12 w-12 bg-danger bg-opacity-10 flex items-center justify-center">
                <FaTrashAlt className="h-5 w-5 text-danger" />
              </div>
              <FaTimes
                onClick={() => setDeleteId(undefined)}
                className="h-5 w-5 cursor-pointer font-extralight"
              />
            </div>
            <div className="flex flex-col px-8 w-full">
              <h1 className={`${inter600.className} text-lg text-black`}>
                Delete Meal
              </h1>
              <p className={`${inter400.className} pr-5 text-sm mt-2`}>
                Are you sure you want to delete this meal? This action cannot be
                undone.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 mt-5 px-8">
              <button
                onClick={() => handleClientDeleteClick()}
                className="flex items-center gap-2  text-white px-14 py-3 rounded-lg bg-background-200 text-black"
              >
                Confirm
              </button>
              <button
                onClick={() => setDeleteId(undefined)}
                className="flex items-center gap-2 py-3 rounded-lg px-14 bg-danger text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center w-full justify-between">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Suggested Meals
          </h1>
        </div>
        <Table
          data={suggestedData}
          columns={Object.keys(suggestedData[0])}
          paginate
          actions={[
            {
              id: "completed",
              name: "Completed",
            },
            {
              id: "delete",
              name: "Delete",
              // handleClick: (id: string) => {
              //   setDeleteId(id);
              // },
            },
          ]}
        />
      </div>
      <div className="flex relative flex-col mt-10 gap-3 w-full">
        <div className="flex items-center w-full justify-between">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Created Meals
          </h1>

          <button
            onClick={() => router.push("/meal/add")}
            className={`${inter500.className} shadow bg-background-200 text-white rounded-lg text-md px-6 py-1`}
          >
            CREATE MEAL
          </button>
        </div>
        <Table
          data={createdMeals}
          columns={Object.keys(createdMeals[0])}
          paginate
          actions={[
            {
              id: "edit",
              name: "Edit",
            },
            {
              id: "delete",
              name: "Delete",
              handleClick: (id: number) => {
                setDeleteId(id);
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MealsMain;
