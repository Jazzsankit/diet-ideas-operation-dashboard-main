import type { FC } from "react";
type Props = {
  clientName?: string;
  title?: string;
  description?: string;
  resource_link?: string;
  isEdit?: boolean;
};

const Form: FC<Props> = ({ isEdit }) => {
  return (
    <form className="flex flex-col mt-10 gap-3 h-full pb-16 w-full bg-white rounded-lg">
      <div className="flex gap-10 mt-10 px-10">
        <input
          type="text"
          placeholder="Client Name"
          className="w-1/2 h-[62px] rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-secondary border-none px-4"
        />
        <input
          type="text"
          placeholder="Title"
          className="w-1/2 h-[62px] rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-secondary border-none px-4"
        />
      </div>
      <div className="flex gap-10 mt-10 w-full px-10">
        <textarea
          placeholder="Description"
          rows={15}
          className="w-full py-3 rounded-lg resize-none border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-secondary border-none px-4"
        ></textarea>
      </div>
      <div className="flex gap-10 mt-10 w-full px-10">
        <input
          placeholder="Resource Link"
          className="w-full py-3  rounded-lg resize-none border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-secondary border-none px-4"
        />
      </div>
      <div className="flex gap-5 mt-10 items-center justify-center w-full px-10">
        <button
          type="submit"
          className="text-white py-2  rounded-lg border-2 shadow-sm  bg-primary px-16"
        >
          {isEdit ? "Update" : "Save"}
        </button>
        <button
          type="button"
          className="text-white py-2  rounded-lg border-2 shadow-sm  bg-danger px-16"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
