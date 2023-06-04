import { FC, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { newClientsData } from "@/assets/data";
import Table from "./Table";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/dateUtils";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});
const inter600 = Inter({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

const inter400 = Inter({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const AdminsMain: FC = () => {
  const [newClients, setNewClients] = useState<unknown[]>(newClientsData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>();
  const [assignId, setAssignId] = useState<number>();
  const [addClient, setAddClient] = useState<boolean>(false);

  const router = useRouter();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://diet-ideas-backend-production.up.railway.app/api/v1/admin/clientManagement/clientList",{
            headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6aXNoYW5AZ21haWwuY29tIiwiaWF0IjoxNjg1NzMyNDI0LCJleHAiOjE2OTA5MTY0MjR9.mjczQRFrQownNEYwYyjz7QszZ7Br8b2IfcsfP_WsvX4',
          },
          }
        );
        const data = await response.json();
        const transformedData = data.data.map((client:any)=> ({
        id: client.id,
        client_name: client.client.name,
        service_name: client.service.name,
        joined_date: formatDate(client.createdAt),
        expiry_date: formatDate(client.expiryDate)
        }));
        console.log(newClientsData)
        console.log(transformedData);
        setNewClients(transformedData)
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };
    fetchData();
  }, []);

  const handleClientDeleteClick = () => {
    setNewClients(newClients.filter((client: any) => client.id !== deleteId));
    setDeleteId(undefined);
  };


  return (
    <div className="p-10 pb-20 relative flex flex-col pt-20 gap-16">
      {(deleteId || assignId || addClient) && (
        <div className="fixed flex items-center justify-center top-0 left-0 w-full bg-black-100 bg-opacity-20 h-full z-50">
          {deleteId && (
            <div className="w-96 bg-white shadow rounded-xl h-64">
              <div className="flex items-center justify-between w-full px-8 py-5">
                <div className="rounded-full h-12 w-12 bg-danger bg-opacity-10 flex items-center justify-center">
                  <FaTrashAlt className="h-5 w-5 text-danger" />
                </div>
                <FaTimes className="h-5 w-5 cursor-pointer font-extralight" />
              </div>
              <div className="flex flex-col px-8 w-full">
                <h1 className={`${inter600.className} text-lg text-black`}>
                  Delete Admin
                </h1>
                <p className={`${inter400.className} pr-5 text-sm mt-2`}>
                  Are you sure you want to delete the admin? This action cannot
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
          )}
          {(assignId || addClient) && (
            <div className="w-2/3 bg-white shadow rounded-xl h-auto py-5">
              <div className="flex flex-col px-8 w-full">
                <h1
                  className={`${inter600.className} text-center text-lg text-black`}
                >
                  Edit Admin Account
                </h1>
              </div>
              <form className="flex flex-col px-8 w-full mt-2">
                <div className="flex my-2 gap-2">
                  <div className="flex my-2 w-1/2 flex-col gap-2">
                    <label
                      htmlFor="name"
                      className={`${inter400.className} text-sm text-black`}
                    >
                      Name
                    </label>
                    <div className="flex border-2 rounded-md px-3 border-[#E4E7EC]  flex-row items-center gap-2 w-full">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full border-none outline-none rounded-lg py-2"
                      />
                    </div>
                  </div>
                  <div className="flex  flex-col my-2 w-1/2 gap-2">
                    <label
                      htmlFor="contact"
                      className={`${inter400.className} text-sm text-black`}
                    >
                      Contact No.
                    </label>
                    <div className="flex border-2 rounded-md px-3 border-[#E4E7EC]  flex-row items-center gap-2 w-full">
                      <input
                        type="tel"
                        name="contact"
                        id="contact"
                        className="w-full border-none outline-none rounded-lg py-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex my-2 gap-2">
                  <div className="flex my-2 w-1/2 flex-col gap-2">
                    <label
                      htmlFor="email"
                      className={`${inter400.className} text-sm text-black`}
                    >
                      Email
                    </label>
                    <div className="flex border-2 rounded-md px-3 border-[#E4E7EC]  flex-row items-center gap-2 w-full">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full border-none outline-none rounded-lg py-2"
                      />
                    </div>
                  </div>
                  <div className="flex  flex-col my-2 w-1/2 gap-2">
                    <label
                      htmlFor="password"
                      className={`${inter400.className} text-sm text-black`}
                    >
                      Password
                    </label>
                    <div className="flex border-2 rounded-md px-3 border-[#E4E7EC]  flex-row items-center gap-2 w-full">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full border-none outline-none rounded-lg py-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex my-2 gap-2">
                  <div className="flex my-2 w-full flex-col gap-2">
                    <label
                      htmlFor="accessibility"
                      className={`${inter400.className} text-sm text-black`}
                    >
                      Accessibility
                    </label>
                    <div className="grid grid-cols-3 border-2 rounded-md p-5 border-[#E4E7EC]  items-center gap-2 w-full">
                      {[
                        "Client Management",
                        "Experts Management",
                        "notifications",
                        "chat",
                        "Purchase Record",
                        "feedback",
                        "user management",
                        "service programme",
                        "Meal Item",
                        "Suggested Meals",
                        "Blog",
                      ].map((item, id) => (
                        <div key={id} className="flex px-5 gap-4 items-center">
                          <input
                            type="checkbox"
                            className="capitalize"
                            value={item}
                            name={item}
                            id={item}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex pb-5 flex-row justify-center items-center gap-3 mt-5 px-8">
                  <button
                    type="button"
                    className="flex items-center gap-2  text-white px-14 py-3 rounded-lg bg-background-200 text-black"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setAssignId(undefined)}
                    className="flex items-center gap-2 py-3 rounded-lg px-14 bg-danger text-white"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-row justify-between items-center">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Admin Management
          </h1>
          <button
            onClick={() => setAddClient(true)}
            className="flex items-center gap-2  text-white px-5 py-1 rounded-lg bg-background-200 text-black"
          >
            ADD NEW ADMIN
          </button>
        </div>
        <Table
          data={newClients}
          actions={[
            {
              name: "Edit",
              onClick: setAssignId,
              bgColor: "bg-background-200",
            },
            {
              name: "Delete",
              onClick: setDeleteId,
              bgColor: "bg-danger",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AdminsMain;
