import { EventFormDataType } from "@/types";
import type { Dispatch, FC, FormEvent, SetStateAction } from "react";

interface FormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setData: Dispatch<SetStateAction<EventFormDataType>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  title: string;
}

const From: FC<FormProps> = ({ onSubmit, setData, setOpen, open, title }) => {
  return (
    <div
      className={`fixed z-50 h-full top-0 left-0 bg-[#8d8b8b] bg-opacity-60 w-full transition-all delay-100 ${
        open ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <form
        onSubmit={onSubmit}
        className="flex flex-col bg-white rounded-lg h-96 w-[500px]"
      >
        <h1 className="text-2xl text-[black] mt-5 text-center">{title}</h1>

        <div className="flex flex-col mt-3 px-5 py-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border-[#D0D5DD] border-2 rounded-lg p-2"
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col px-5 py-2">
          <label htmlFor="type">Schedule Type</label>
          <input
            type="text"
            name="type"
            id="type"
            className="border-[#D0D5DD] border-2 rounded-lg p-2"
            onChange={(e) =>
              setData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>

        <div className="flex px-5 gap-1 py-2">
          <div className="flex flex-col w-1/2">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="border-[#D0D5DD] border-2 rounded-lg p-2"
              onChange={(e) =>
                setData((prev) => ({ ...prev, date: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              name="time"
              id="time"
              className="border-[#D0D5DD] border-2 rounded-lg p-2"
              onChange={(e) =>
                setData((prev) => ({ ...prev, time: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 px-5 py-2">
          <button
            type="submit"
            className="bg-primary text-white rounded-lg px-4 py-2"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-danger text-white rounded-lg px-4 py-2"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default From;
