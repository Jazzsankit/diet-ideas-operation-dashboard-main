import type { FC } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter400 = Inter({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const Form: FC = () => {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/dashboard");
      }}
      className="mt-16 w-full gap-2 px-8 flex flex-col"
    >
      <input
        type="email"
        placeholder="Email"
        className={`${inter400.className} p-3 text-base leading-[19px] w-full text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-white placeholder:text-white placeholder:font-extralight font-extralight`}
      />
      <input
        type="password"
        placeholder="Password"
        className={`${inter400.className} p-3 text-base leading-[19px] w-full text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-white placeholder:text-white`}
      />
      <div className="flex mt-5 items-center justify-between">
        <div className="flex items-center justify-between">
          <input
            type="checkbox"
            className="w-4 h-4 text-white border-2 border-white rounded-sm focus:outline-none"
          />
          <p
            className={`${inter400.className} my-0 ml-2 text-[15px] text-white font-extralight`}
          >
            Remember me
          </p>
        </div>
        <Link
          href="/forgot-password"
          className={`${inter400.className} text-[15px] underline text-white font-extralight`}
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="mt-10 p-3 text-base leading-[19px] w-full text-white bg-primary rounded-md focus:outline-none"
      >
        Sign In
      </button>
    </form>
  );
};

export default Form;
