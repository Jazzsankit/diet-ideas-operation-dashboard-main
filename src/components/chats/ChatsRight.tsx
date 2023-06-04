import Image from "next/image";
// import type { FC } from "react";
import { FaCheck, FaPaperPlane, FaPaperclip } from "react-icons/fa";

// type ChatsRightProps = {
//   chats: string[];
// };

const ChatsRight = ({ chats, selectedChat }: any) => {
  const currentChat = chats.find((chat: any) => chat.id === selectedChat);

  return (
    <div className="flex relative flex-col w-8/12 h-full">
      <div className="header flex items-center px-5 py-3 bg-white gap-3 w-full">
        <Image
          src={currentChat.image}
          className="rounded-full w-10 h-10"
          alt="Profile image"
        />
        <div className="flex flex-col ml-3">
          <p className="text-base font-bold">{currentChat.name}</p>
        </div>
      </div>

      <div className="message-panel flex flex-col justify-end relative h-full bg-background-200 w-full">
        <div className="messages flex flex-col justify-end p-5 w-full">
          <div className="flex w-full items-center py-3 justify-center">
            <p className="px-3 py-1 rounded-2xl bg-white text-base text-background">
              TODAY
            </p>
          </div>
          {currentChat.messages.map((message: any, index: number) => (
            <div
              key={index * 56565}
              className={`flex p-4 rounded-lg max-w-[369px] w-auto my-3 flex-col ${
                !message.senderMe ? "bg-white" : "bg-primary ml-auto"
              }`}
            >
              <p
                className={`text-base ${
                  !message.senderMe ? "text-black" : "text-white"
                }`}
              >
                {message.message}
              </p>

              <div className="flex pt-1 items-center justify-end w-full">
                <p
                  className={`  text-xs ${
                    !message.senderMe ? "text-black" : "text-white"
                  }`}
                >
                  {message.time}
                </p>

                <FaCheck
                  className={`${
                    !message.senderMe ? "text-black" : "fill-[#fff]"
                  } text-xs ml-2`}
                />
              </div>
            </div>
          ))}

          <div className="flex w-full items-center py-3 justify-center">
            <div className="message-box py-3 items-center flex w-4/5 bg-white rounded-lg">
              <FaPaperclip className="text-background text-xl mx-2" />
              <input
                type="text"
                placeholder="Type a message"
                className="w-full bg-transparent text-base placeholder:text-[#707991] text-[#707991] focus:outline-none"
              />
              <FaPaperPlane className="text-background text-xl mx-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsRight;
