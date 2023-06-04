import { FaSearch } from "react-icons/fa";

import Image from "next/image";

const ChatsLeft = ({ chats, selectedChat, setSelectedChat }: any) => {
  return (
    <div className="flex flex-col w-4/12 border-r border-r-[#D9DCE0] h-full">
      <div className="header flex items-center px-5 py-3 justify-between w-full">
        <div className="flex items-center rounded-3xl px-3 py-2 bg-[#F5F5F5] w-full">
          <FaSearch className="text-[#707991]  mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-base placeholder:text-[#707991] text-[#707991] focus:outline-none"
          />
        </div>
      </div>

      <div className="chats flex flex-col mt-2 w-full">
        {chats.map((chat: any, index: number) => (
          <div
            key={index * 56565}
            className={`flex items-center px-5 py-3 gap-3 w-full cursor-pointer ${
              selectedChat === chat.id && "bg-[#F5F5F5]"
            } hover:bg-[#F5F5F5]`}
            onClick={() => setSelectedChat(chat.id)}
          >
            <div className="flex mr-2 w-14 items-center">
              <Image
                src={chat.image}
                className="rounded-full w-12 h-12"
                alt="Profile image"
              />
            </div>
            <div className="flex flex-col w-96">
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-semibold">{chat.name}</p>
                <p className="text-xs text-[#707991]">{chat.time}</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p
                  className={`text-xs text-[#707991] ${
                    chat.unread > 0 ? "font-bold" : "font-light"
                  }`}
                >
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <div className="flex items-center justify-center gap-1 bg-success rounded-full p-1 px-2">
                    <p className="text-xs text-white font-semibold">
                      {chat.unread}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatsLeft;
