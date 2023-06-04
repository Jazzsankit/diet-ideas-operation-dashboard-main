import type { FC } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import Logo from "@/assets/svgs/logo.svg";
import Form from "./Form";

const inter800 = Inter({
  subsets: ["latin"],
  weight: "800",
  style: "normal",
});

const inter400 = Inter({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const Left: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 h-screen">
      <Image
        src={Logo}
        alt="logo image"
        loading="lazy"
        width={300}
        height={300}
      />

      <h1
        className={`text-4xl mt-10 text-primary font-bold ${inter800.className}`}
      >
        Welcome back, Masfara
      </h1>

      <p
        className={`text-xl mt-2 text-white font-normal ${inter400.className}`}
      >
        Welcome back! Please enter your details.
      </p>

      <Form />
    </div>
  );
};

export default Left;
