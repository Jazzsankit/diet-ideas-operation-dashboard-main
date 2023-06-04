import { FC, useState } from "react";

import { Inter } from "next/font/google";

import { useRouter } from "next/router";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";

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

const BlogNewMain: FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData)
  };

  const handleCancel = () =>{
    router.push('/blog');
  }

  const handleSave = async () => {
    try {
      const response = await fetch('https://diet-ideas-backend-production.up.railway.app/api/v1/admin/addBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6aXNoYW5AZ21haWwuY29tIiwiaWF0IjoxNjg1NzMyNDI0LCJleHAiOjE2OTA5MTY0MjR9.mjczQRFrQownNEYwYyjz7QszZ7Br8b2IfcsfP_WsvX4',

        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          image: 'www.afd.com',
          adminId: 1
        })
      });
      console.log(response)
      router.push('/blog');

      if (response.ok) {
        // Blog post successfully saved
        console.log('Blog post saved!');
        // You can perform any additional actions here, such as showing a success message
      } else {
        // Error occurred while saving blog post
        console.error('Failed to save blog post.');
        // You can handle the error or show an error message to the user
      }
    } catch (error) {
      console.error('Error occurred while saving blog post:', error);
      // Handle the error or show an error message to the user
    }
  };

  return (
    <div className="p-10 pb-20 px-16 flex flex-col pt-20 gap-16">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex w-full justify-between items-center flex-row gap-3">
          <h1 className={`${inter500.className} text-xl my-2 text-black`}>
            Add New Blog Post
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-8 rounded-xl w-full ">
        <div className="flex w-full gap-10 h-[420px] shadow-lg px-6 rounded-xl py-6 bg-white">
          <div className="flex flex-col gap-2 rounded-xl">
            <div className="flex items-center rounded-xl justify-center h-40 bg-background-100 w-40 gap-2">
              <FaImage className="text-6xl text-background-200" />
            </div>
            <button className="flex items-center justify-center rounded-xl h-10 text-background-200 w-40 gap-2">
              UPLOAD IMAGE{" "}
              <FaCloudUploadAlt className="text-2xl text-background-200" />
            </button>
          </div>
          <div className="flex flex-col gap-8 w-9/12">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full h-14 rounded-lg border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
            />
            <textarea
              placeholder="Description"
              name="description"
              rows={8}
              value={formData.description}
              onChange={handleChange}
              className="w-full py-3 rounded-lg resize-none border-2 shadow-sm shadow-slate-400 focus:border-none focus:outline-none bg-background-100 border-none px-4"
            ></textarea>

            <div className="flex flex-row gap-4">
              <button 
                onClick={handleSave}
              className="flex items-center justify-center rounded-xl h-10 bg-background-200 text-white w-40 gap-2"
              >
                SAVE
              </button>
              <button className="flex items-center justify-center rounded-xl h-10 bg-danger text-white w-40 gap-2"
              onClick={handleCancel}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNewMain;
