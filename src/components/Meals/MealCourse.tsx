import { Dispatch, FC, useState } from "react";
import {
  FaAngleDown,
  FaAngleRight,
  FaMinusCircle,
  FaPlusCircle,
} from "react-icons/fa";

import ProteinsIcon from "@/assets/icons/proteins.svg";
import FatsIcon from "@/assets/icons/fats.svg";
import CarbsIcon from "@/assets/icons/carbs.svg";
import Image from "next/image";

interface Props {
  title: string;
  kcal: number;
  data: any[];
  setData: Dispatch<any>;
}

const MealCourse: FC<Props> = ({ title, kcal, data, setData }) => {
  const [open, setOpen] = useState(false);

  const [openMeal, setOpenMeal] = useState(
    data.map((meal) => ({ id: meal.id, open: false }))
  );

  return (
    <>
      <div className="w-full flex flex-col p-4 px-5 items-center relative bg-white  rounded-2xl overflow-hidden mt-3 overflow-x-auto h-auto">
        <div
          onClick={() => setOpen(!open)}
          className="flex cursor-pointer items-center justify-between w-full"
        >
          <p className="text-xl">{title}</p>

          <div className="flex items-center gap-2">
            <p className="text-lg py-1 px-3 rounded-xl bg-background text-white">
              {kcal} kcal
            </p>
            {open ? <FaAngleDown /> : <FaAngleRight />}
          </div>
        </div>

        {open && (
          <div className="flex flex-col w-full p-4">
            {data.map((meal) => (
              <div
                className="flex flex-col my-2 shadow-md items-center rounded-lg justify-between w-full"
                key={(Math.random() * 100000) / meal.id}
              >
                <div className="header p-4 shadow-md bg-[#F0F3FB] flex items-center justify-between w-full">
                  <div
                    onClick={() => {
                      setOpenMeal((prev) =>
                        prev.map((item) =>
                          item.id === meal.id
                            ? { ...item, open: !item.open }
                            : item
                        )
                      );
                    }}
                    className="flex items-baseline gap-2"
                  >
                    <p className="text-lg">{meal.title}</p>
                    <span className="text-xs">(kcal)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex item-center gap-2">
                      <FaPlusCircle
                        // onClick={() => {
                        //   setData((prev: any) =>
                        //     prev.map((item: any) =>
                        //       item.id === meal.id
                        //         ? {
                        //             ...item,
                        //             quantity: item.quantity + 1,
                        //           }
                        //         : item
                        //     )
                        //   );
                        // }}
                        className="text-primary  cursor-pointer rounded-full mt-1 bg-white"
                      />
                      <p className="text-sm">Quanitity: {meal.quantity}</p>
                      <FaMinusCircle
                        // onClick={() => {
                        //   setData((prev: any) =>
                        //     prev.map((item: any) =>
                        //       item.id === meal.data.id
                        //         ?

                        //         : item
                        //     )
                        //   );
                        // }}
                        className="text-danger cursor-pointer rounded-full mt-1 bg-white"
                      />
                    </div>

                    {openMeal.find((item) => item.id === meal.id)?.open ? (
                      <FaAngleDown />
                    ) : (
                      <FaAngleRight />
                    )}
                  </div>
                </div>

                {openMeal.find((item) => item.id === meal.id)?.open && (
                  <div className="flex flex-col w-full p-4">
                    {meal.ingredients.map((ingredient: any) => (
                      <div
                        key={ingredient.id * Math.random() + meal.id * 4531}
                        className="flex items-center px-5 py-2 justify-between"
                      >
                        <p className="text-sm">{ingredient.title}</p>
                        <div className="flex items-center gap-10">
                          <p className="text-sm flex items-center">
                            <Image
                              src={ProteinsIcon}
                              alt="Proteins"
                              width={15}
                              height={15}
                              loading="lazy"
                              className="mr-2"
                            />
                            Proteins: {ingredient.protein}g
                          </p>
                          <p className="text-sm flex items-center">
                            <Image
                              src={FatsIcon}
                              alt="Fats"
                              width={15}
                              height={15}
                              loading="lazy"
                              className="mr-2"
                            />
                            Fats: {ingredient.fats}g
                          </p>
                          <p className="text-sm flex items-center">
                            <Image
                              src={CarbsIcon}
                              alt="Carbs"
                              width={15}
                              height={15}
                              loading="lazy"
                              className="mr-2"
                            />
                            Carbs: {ingredient.carbs}g
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MealCourse;
