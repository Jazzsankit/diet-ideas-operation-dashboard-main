import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";

import { ImExit } from "react-icons/im";

import Logo from "@/assets/svgs/logo.svg";
import ProfilePlaceHolder from "@/assets/images/profile_image.png";

import type { IRoute } from "@/routes";
import routes from "@/routes";

const inter600 = Inter({
  subsets: ["latin"],
  weight: "600",
});

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
});

const inter400 = Inter({
  subsets: ["latin"],
  weight: "400",
});

const Navbar: FC = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname.toLowerCase().includes(path.toLowerCase());
  };

  return (
    <nav className="h-full flex flex-col items-center py-20 w-1/5 max-h-full">
      <Link href={"/"}>
        <Image src={Logo} alt="logo image" loading="lazy" />
      </Link>

      <div className="profile w-full flex flex-col mt-5 pt-1 items-center gap-4">
        <Image
          src={ProfilePlaceHolder}
          alt="profile image"
          className="rounded-full"
          width={125}
          height={125}
          loading="lazy"
        />

        <div className="flex flex-col items-center">
          <p className={`text-xl text-white text-bold ${inter600.className}`}>
            Masfara Wahidah
          </p>
          <p
            className={`text-base text-primary text-bold ${inter500.className}`}
          >
            Dietition
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-start px-5 mt-10 gap-3">
        {routes.map(
          ({ path, name, icon: Icon, iconType }: IRoute, index: number) => (
            <Link
              href={path}
              key={index}
              className={`flex gap-4 text-lg hover:bg-primary transition-all text-white px-3 py-1 rounded-md items-center justify-center ${
                inter400.className
              } ${isActive(path) ? "bg-primary" : ""}`}
            >
              {iconType === "external" ? (
                <Icon className="h-4 w-4" />
              ) : (
                <Image
                  src={Icon}
                  alt="icon image"
                  className="h-4 w-4"
                  loading="lazy"
                />
              )}
              <p className="py-0">{name}</p>
            </Link>
          )
        )}
        <button className="flex gap-4 text-lg hover:bg-primary transition-all text-white px-3 py-1 rounded-md items-center justify-center">
          <ImExit className="h-4 w-4" />
          <p className="py-0">Logout</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
