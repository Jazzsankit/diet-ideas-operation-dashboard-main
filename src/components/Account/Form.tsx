import type { FC } from "react";

const Form: FC = () => {
  return (
    <form className="flex flex-col mt-10 gap-3 h-full pb-16 w-full bg-white rounded-lg">
      <div className="flex gap-10">
        <div className="flex flex-col gap-3 w-1/2">
          <label className="text-sm font-semibold">First name</label>
          <input
            type="text"
            className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
          />
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <label className="text-sm font-semibold">Last name</label>
          <input
            type="text"
            className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <label className="text-sm font-semibold">Expertise</label>
        <input
          type="text"
          className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
        />
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-3 w-1/2">
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
          />
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <label className="text-sm font-semibold">Username</label>
          <input
            type="text"
            className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
          />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-3 w-1/2">
          <label className="text-sm font-semibold">Password</label>
          <input
            type="password"
            className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
          />
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <label className="text-sm font-semibold">Confirm Password</label>
          <input
            type="password"
            className="w-full h-10 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full">
        <div className="w-full py-3 border-b-2 border-b-primary">
          <p className="text-lg font-semibold ">ABOUT ME</p>
        </div>
        <textarea
          placeholder="Description"
          rows={2}
          className="w-full py-3 rounded-lg resize-none border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
        ></textarea>
      </div>
    </form>
  );
};

export default Form;
