import { FC, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import MealsTable from "./MealsTable";
import type { MealsTableType } from "@/types";
import MealCourse from "./MealCourse";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const AddMealsPlanMain: FC = () => {
  const router = useRouter();

  const [meals, setMeals] = useState([
    {
      id: 1,
      title: "Breakfast",
      kcal: 270,
      meals: [
        {
          id: 1,
          title: "Nasi Lemak + Sotong Sambal",
          kcal: 150,
          quantity: 1,
          ingredients: [
            {
              id: 1,
              title: "White Rice",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 2,
              title: "Sotong Sambal",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 3,
              title: "Egg",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
          ],
        },
        {
          id: 2,
          title: "Test Meal",
          kcal: 150,
          quantity: 1,
          ingredients: [
            {
              id: 1,
              title: "White Rice",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 2,
              title: "Sotong Sambal",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 3,
              title: "Egg",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Lunch",
      kcal: 270,
      meals: [
        {
          id: 1,
          title: "Nasi Lemak + Sotong Sambal",
          kcal: 150,
          quantity: 1,
          ingredients: [
            {
              id: 1,
              title: "White Rice",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 2,
              title: "Sotong Sambal",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 3,
              title: "Egg",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Dinner",
      kcal: 270,
      meals: [
        {
          id: 1,
          title: "Nasi Lemak + Sotong Sambal",
          kcal: 150,
          quantity: 1,
          ingredients: [
            {
              id: 1,
              title: "White Rice",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 2,
              title: "Sotong Sambal",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
            {
              id: 3,
              title: "Egg",
              protein: 3,
              fats: 0.3,
              carbs: 3,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-16">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center w-full justify-between">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Create Meal
          </h1>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => router.push("/meals")}
              className={`${inter500.className} shadow bg-background-200 text-white rounded-lg text-md px-6 py-1`}
            >
              Save
            </button>
            <button
              onClick={() => router.push("/meals")}
              className={`${inter500.className} shadow bg-danger text-white rounded-lg text-md px-6 py-1`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col mt-5 gap-3 w-full">
        {meals.map((meal) => (
          <MealCourse
            key={meal.id}
            title={meal.title}
            kcal={meal.kcal}
            data={meal.meals}
            setData={setMeals}
          />
        ))}
      </div>
      <div className="flex gap-2 items-center justify-end w-full">
        <button
          onClick={() => router.push("/meals")}
          className={`${inter500.className} shadow bg-background-200 text-white rounded-lg text-md px-6 py-1`}
        >
          ADD MEAL ITEM
        </button>
      </div>

      <div className="h-48" />
    </div>
  );
};

export default AddMealsPlanMain;
