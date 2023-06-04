import { FC, useState } from "react";
import { Inter } from "next/font/google";

import { UsersData } from "@/assets/data";
import Table from "./Table";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const UsersMain: FC = () => {
  const [usersData, setUsersData] = useState(UsersData.users);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [clientsData, setClientsData] = useState(UsersData.clients);

  return (
    <div className="p-10 relative pb-20 px-16 flex flex-col pt-20 gap-16">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center justify-between w-full flex-row gap-3">
          <h1 className={`${inter500.className} text-xl my-2 text-black`}>
            Client User Management
          </h1>
          <button className="px-4 py-2 rounded-md bg-background-200 text-white">
            ADD NEW
          </button>
        </div>
      </div>
      <Table
        data={clientsData}
        columns={Object.keys(clientsData[0])}
        paginate
      />
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center justify-between w-full flex-row gap-3">
          <h1 className={`${inter500.className} text-xl my-2 text-black`}>
            User Management
          </h1>
        </div>
      </div>
      <Table
        data={usersData}
        columns={Object.keys(usersData[0])}
        setDeleteId={setDeleteId}
        setEditId={setEditId}
      />
      <div className="w-full h-38" />
    </div>
  );
};

export default UsersMain;
