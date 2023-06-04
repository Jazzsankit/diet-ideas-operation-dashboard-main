import { FiCalendar } from "react-icons/fi";

import { Inter } from "next/font/google";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const inter400 = Inter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const inter600 = Inter({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});

interface FormProps {
  handleClick: () => void;
  title: string;
  setData: any;
  data?: any;
  setCancel?: any;
}

const Form = ({ handleClick, title, setData, data, setCancel }: FormProps) => {
  return (
    <div className="w-96 bg-white shadow rounded-xl h-auto">
      <div className="flex items-center justify-between w-full px-8 py-5">
        <div className="rounded-xl border-2 border-[#E4E7EC] h-12 w-12 bg-opacity-10 flex items-center justify-center">
          <AiOutlineBars className="h-8 w-8" />
        </div>
        <FaTimes className="h-5 w-5 cursor-pointer font-extralight" />
      </div>
      <div className="flex flex-col text-center px-8 w-full">
        <h1 className={`${inter600.className} text-lg text-black`}>{title}</h1>
      </div>
      <form className="flex flex-col px-8 w-full mt-2">
        <div className="flex my-2 flex-col gap-2">
          <label
            htmlFor="name"
            className={`${inter400.className} text-sm text-black`}
          >
            Service Name
          </label>
          <div className="flex flex-col border-2 rounded-md px-3 border-[#E4E7EC] items-center gap-2 w-full">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Service Name"
              className="w-full border-none outline-none rounded-lg py-2"
            />
          </div>
        </div>
        <div className="flex flex-col border-2 rounded-md px-3 border-[#E4E7EC] items-center gap-2 w-full">
          <label
            htmlFor="description"
            className={`${inter400.className} text-sm text-black`}
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            placeholder="Description"
            className="w-full border-none outline-none rounded-lg py-2"
          />
        </div>

        <div className="flex flex-col border-2 rounded-md px-3 border-[#E4E7EC] items-center gap-2 w-full">
          <label
            htmlFor="days"
            className={`${inter400.className} text-sm text-black`}
          >
            Total No. of Days
          </label>
          <input
            type="number"
            name="days"
            id="days"
            placeholder="Total No. of Days"
            className="w-full border-none outline-none rounded-lg py-2"
          />
        </div>

        <div className="flex flex-col border-2 rounded-md px-3 border-[#E4E7EC] items-center gap-2 w-full">
          <label
            htmlFor="sessions"
            className={`${inter400.className} text-sm text-black`}
          >
            Total No. of Sessions
          </label>
          <input
            type="number"
            name="sessions"
            id="sessions"
            placeholder="Total No. of Sessions"
            className="w-full border-none outline-none rounded-lg py-2"
          />
        </div>

        <div className="flex flex-col border-2 rounded-md px-3 border-[#E4E7EC] items-center gap-2 w-full">
          <label
            htmlFor="date"
            className={`${inter400.className} text-sm text-black`}
          >
            Date Created
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date Created"
            className="w-full border-none outline-none rounded-lg py-2"
          />
        </div>

        <div className="flex pb-5 justify-center items-center gap-3 mt-5 px-8">
          <button
            onClick={() => handleClick()}
            className="flex items-center gap-2  text-white px-14 py-3 rounded-lg bg-background-200 text-black"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => setCancel(false)}
            className="flex items-center gap-2 py-3 rounded-lg px-14 bg-danger text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
