import { FC, FormEvent, useState } from "react";
import { Poppins } from "next/font/google";
import { DateType, EventFormDataType } from "@/types";
import { FaBars, FaPlusCircle } from "react-icons/fa";
import CalenderBlock from "./CalenderBlock";
import Form from "./Form";

interface ScheduleRightProps {
  month: string;
  dates: DateType[][];
}

const poppins400 = Poppins({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const poppins500 = Poppins({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

const ScheduleRight: FC<ScheduleRightProps> = ({ dates, month }) => {
  const [openVacationModal, setOpenVacationModal] = useState<boolean>(false);
  const [openEventModal, setOpenEventModal] = useState<boolean>(false);
  const [vacationData, SetVacationData] = useState<EventFormDataType>(
    {} as EventFormDataType
  );
  const [EventData, SetEventData] = useState<EventFormDataType>(
    {} as EventFormDataType
  );

  const handleEventData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleVacationData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {openVacationModal && (
        <Form
          open={openVacationModal}
          setOpen={setOpenVacationModal}
          onSubmit={handleVacationData}
          setData={SetVacationData}
          title="Vacation Responder"
        />
      )}
      {openEventModal && (
        <Form
          open={openEventModal}
          setOpen={setOpenEventModal}
          onSubmit={handleEventData}
          setData={SetEventData}
          title="Add Event"
        />
      )}
      <div className="flex flex-col w-3/4 h-full bg-white">
        <div className="flex header w-full items-center justify-between pr-5">
          <div className="flex items-center p-5 gap-5">
            <FaBars className="text-xl" />
            <p
              className={`${poppins400.className} ml-3 flex gap-3 text-3xl text-[#29292B]`}
            >
              <span className="text-extrabold">{month}</span>
              <span>{new Date().getFullYear()}</span>
            </p>
            <button
              className="flex border border-primary text-primary items-center whitespace-nowrap rounded-xl px-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal"
              type="button"
            >
              Month
              <span className="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setOpenVacationModal(true)}
              className="flex text-white bg-success items-center whitespace-nowrap rounded-xl px-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal"
            >
              Vacation Respondor <FaPlusCircle className="ml-2" />
            </button>
            <button
              onClick={() => setOpenEventModal(true)}
              className="flex text-white bg-primary items-center whitespace-nowrap rounded-xl px-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal"
            >
              Add Event <FaPlusCircle className="ml-2" />
            </button>
          </div>
        </div>

        <div className="flex py-2 border-y border-y-[#DADCE0] items-center">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day, index: number) => (
              <p
                key={index}
                className={`${poppins600.className} flex-1 text-center text-[#333333] text-xs`}
              >
                {day}
              </p>
            )
          )}
        </div>

        <div className="flex flex-col w-full">
          {dates.map((date, index: number) => (
            <CalenderBlock key={index} date={date} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScheduleRight;
