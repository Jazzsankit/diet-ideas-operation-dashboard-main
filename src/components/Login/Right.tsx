import type { FC } from "react";
import Image from "next/image";
import LoginImage from "@/assets/images/login.png";

const Right: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-3/4 h-screen">
      <Image
        src={LoginImage}
        alt="Login Image"
        loading="lazy"
        className="w-full h-full"
      />
    </div>
  );
};

export default Right;
