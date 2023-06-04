import { FC, useEffect, useState } from "react";

import { Inter } from "next/font/google";

import { useRouter } from "next/router";

import BlogsPlaceHolderImage from "@/assets/images/blogs_placeholder.png";
import { BlogsData, newClientsData } from "@/assets/data";
import Image from "next/image";
import { FaEdit, FaTimes, FaTrash, FaTrashAlt } from "react-icons/fa";
import { formatDate } from "@/utils/dateUtils";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});
const inter400 = Inter({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const inter600 = Inter({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

const BlogsMain: FC = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState<any[]>([]);
  const [deleteId, setDeleteId] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://diet-ideas-backend-production.up.railway.app/api/v1/admin/getAllBlogs", {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6aXNoYW5AZ21haWwuY29tIiwiaWF0IjoxNjg1NzMyNDI0LCJleHAiOjE2OTA5MTY0MjR9.mjczQRFrQownNEYwYyjz7QszZ7Br8b2IfcsfP_WsvX4',
          },
        }
        );
        const data = await response.json();
        const transformedData = data.data.map((blog: any) => ({
          id: blog.id,
          title: blog.title,
          uploaded_on: formatDate(blog.createdAt) // Assuming "createdAt" represents the upload date
        }));

        console.log(transformedData);
        setBlogs(transformedData)
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);


  const handleClientDeleteClick = () => {
    setBlogs(blogs.filter((blog) => blog.id !== deleteId));
    setDeleteId(undefined);
  };

  return (
    <div className="p-10 pb-20 px-16 flex flex-col pt-20 gap-16">
      <div className="p-10 pb-20 relative flex flex-col pt-20 gap-16">
        {deleteId && (
          <div className="fixed flex items-center justify-center top-0 left-0 w-full bg-black-100 bg-opacity-20 h-full z-50">
            <div className="w-96 bg-white shadow rounded-xl h-64">
              <div className="flex items-center justify-between w-full px-8 py-5">
                <div className="rounded-full h-12 w-12 bg-danger bg-opacity-10 flex items-center justify-center">
                  <FaTrashAlt className="h-5 w-5 text-danger" />
                </div>
                <FaTimes
                  onClick={() => setDeleteId(undefined)}
                  className="h-5 w-5 cursor-pointer font-extralight"
                />
              </div>
              <div className="flex flex-col px-8 w-full">
                <h1 className={`${inter600.className} text-lg text-black`}>
                  Delete Blog
                </h1>
                <p className={`${inter400.className} pr-5 text-sm mt-2`}>
                  Are you sure you want to delete this blog? This action cannot
                  be undone.
                </p>
              </div>
              <div className="flex flex-row justify-center items-center gap-3 mt-5 px-8">
                <button
                  onClick={() => handleClientDeleteClick()}
                  className="flex items-center gap-2  text-white px-14 py-3 rounded-lg bg-background-200 text-black"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setDeleteId(undefined)}
                  className="flex items-center gap-2 py-3 rounded-lg px-14 bg-danger text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between gap-3 w-full">
          <div className="flex w-full justify-between items-center flex-row gap-3">
            <h1 className={`${inter500.className} text-xl my-2 text-black`}>
              Blog
            </h1>

            <button
              onClick={() => router.push("/blog/new")}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-background-200 text-white"
            >
              ADD NEW BLOG POST
            </button>
          </div>
        </div>

        <div className="flex flex-col px-8 rounded-xl w-full ">
          <div className="w-full rounded-xl shadow-lg bg-white py-5">
            <div
              className={`${inter600.className} flex-1 text-lg py-5 text-light`}
            >
              <div className="grid grid-cols-4 my-4 px-5 items-center justify-between text-center">
                <p className="text-background-200 w-full">
                  Blog Thumbnail <span className="text-slate-600">(2MB)</span>
                </p>
                <p className="text-background-200">Title</p>
                <p className="text-background-200">Uploaded On</p>
                <p className="text-background-200">Action</p>
              </div>
            </div>
            <div
              className={`${inter400.className} px-10 my-2 text-base flex flex-col text-slate-600`}
            >
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="grid rounded-xl shadow-lg grid-cols-4 my-4 px-0 bg-background-100 w-full py-5"
                >
                  <div className="flex w-full justify-center gap-2">
                    <Image
                      src={BlogsPlaceHolderImage}
                      width={200}
                      height={200}
                      alt="Blogs Placeholder Image"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {blog.title}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {blog.uploaded_on}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-background-200 ">
                      <FaEdit
                        className="text-xl"
                        onClick={() => router.push(`/blog/${blog.id}`)}
                      />
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-background-200 ">
                      <FaTrash
                        className="text-xl"
                        onClick={() => setDeleteId(blog.id)}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsMain;
