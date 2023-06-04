import type { FC } from "react";
import type { BlogType } from "@/types";
import Image from "next/image";
import { Inter } from "next/font/google";

import BlogPlaceHolderImage from "@/assets/images/blog_placeholder.png";

interface IBlogCardProps {
  blog: BlogType;
}

const Inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const inter400 = Inter({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const BlogCard: FC<IBlogCardProps> = ({ blog }) => {
  return (
    <div className="flex p-5 items-center w-full bg-white">
      <Image
        src={BlogPlaceHolderImage}
        alt="Blog Placeholder Image"
        className="h-16 w-[68px]"
      />

      <div className="flex flex-col gap-2 ml-4">
        <p className={`${Inter500.className} text-sm font-semibold pr-22`}>
          {blog.title}
        </p>
        <p
          className={`text-sm text-slate-400 font-semibold ${inter400.className}`}
        >
          By - {blog.uploaded_by}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
