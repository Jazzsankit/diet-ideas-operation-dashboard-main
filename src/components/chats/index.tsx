import { FC, useState } from "react";

import { Inter } from "next/font/google";
import ChatsLeft from "./ChatsLeft";
import ChatsRight from "./ChatsRight";

import ProfileImage from "@/assets/images/profile_image.png";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const ChatsMain: FC = () => {
  const [selectedChat, setSelectedChat] = useState<number>(2);

  const chats = [
    {
      id: 1,
      name: "Test Name",
      image: ProfileImage,
      lastMessage: "Test Message",
      time: "12:00",
      unread: 2,
      messages: [
        {
          id: 1,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          time: "12:00",
          senderMe: false,
          date: "4/1/2023",
        },
        {
          id: 2,
          message: "hello",
          time: "12:00",
          senderMe: true,
          date: "4/1/2023",
        },
        {
          id: 3,
          message: "hello",
          time: "12:00",
          senderMe: true,
          date: "4/1/2023",
        },
      ],
    },
    {
      id: 2,
      name: "Test Name",
      image: ProfileImage,
      lastMessage: "Test Message",
      time: "12:00",
      unread: 0,
      messages: [
        {
          id: 1,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          time: "12:00",
          senderMe: false,
          date: "4/1/2023",
        },
        {
          id: 2,
          message: "hello",
          time: "12:00",
          senderMe: true,
          date: "4/1/2023",
        },
        {
          id: 3,
          message: "hello",
          time: "12:00",
          senderMe: true,
          date: "4/1/2023",
        },
      ],
    },
    {
      id: 3,
      name: "Test Name",
      image: ProfileImage,
      lastMessage: "Test Message",
      time: "12:00",
      unread: 0,
      messages: [
        {
          id: 1,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          time: "12:00",
          senderMe: false,
          date: "4/1/2023",
        },
        {
          id: 2,
          message: "hello",
          time: "12:00",
          senderMe: true,
          date: "4/1/2023",
        },
        {
          id: 3,
          message: "hello",
          time: "12:00",
          senderMe: true,
          date: "4/1/2023",
        },
      ],
    },
    {
      id: 4,
      name: "Test Name",
      image: ProfileImage,
      lastMessage: "Test Message",
      time: "12:00",
      unread: 0,
      messages: [
        {
          id: 1,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          time: "12:00",
          senderMe: false,
          date: "4/1/2023",
        },
        {
          id: 2,
          message: "hello",
          time: "12:00",
          senderMe: true,
          date: "4/1/2023",
        },
        {
          id: 3,
          message: "hello",
          time: "12:00",
          senderMe: true,
          date: "4/1/2023",
        },
      ],
    },
  ];

  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-4">
      <div className="flex flex-col gap-3 w-full">
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          Chat
        </h1>
      </div>
      <div className="flex w-full h-[732px] bg-white">
        <ChatsLeft
          chats={chats}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
        <ChatsRight chats={chats} selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default ChatsMain;
