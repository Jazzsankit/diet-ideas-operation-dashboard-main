import { FC, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { newClientsData, clientsData } from "@/assets/data";
import Table from "./Table";
import {
  FaAngleDown,
  FaCircle,
  FaFilter,
  FaRecordVinyl,
  FaTimes,
  FaTrashAlt,
} from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { FiAlignLeft, FiCalendar } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
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

const ClientsMain: FC = () => {
  const [newClients, setNewClients] = useState<unknown[]>(newClientsData);
  const [clients, setClients] = useState<unknown[]>(clientsData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [active, setActive] = useState<string>("active");
  const [deleteId, setDeleteId] = useState<number>();
  const [assignId, setAssignId] = useState<number>();

  const router = useRouter();

  useEffect(() => {
    const fetchDataNewCLient = async () => {
      try {
        const responseNewClients = await fetch(
          "https://diet-ideas-backend-production.up.railway.app/api/v1/admin/clientManagement/newClients", {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6aXNoYW5AZ21haWwuY29tIiwiaWF0IjoxNjg1NzMyNDI0LCJleHAiOjE2OTA5MTY0MjR9.mjczQRFrQownNEYwYyjz7QszZ7Br8b2IfcsfP_WsvX4',
          },
        }
        );
        const data = await responseNewClients.json();
        const transformedData = data.data.map((client: any) => ({
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

    const fetchDataClientList = async () => {
      try {
        const responseClients = await fetch(
          "https://diet-ideas-backend-production.up.railway.app/api/v1/admin/clientManagement/clientList", {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6aXNoYW5AZ21haWwuY29tIiwiaWF0IjoxNjg1NzMyNDI0LCJleHAiOjE2OTA5MTY0MjR9.mjczQRFrQownNEYwYyjz7QszZ7Br8b2IfcsfP_WsvX4',
          },
        }
        );
        const data = await responseClients.json();
        const transformedData = data.data.map((clientData: any) => ({
          id: clientData.id,
          client_name: clientData.client.name,
          service_name: clientData.service.name,
          experts_name: `${clientData.dietician.firstName} ${clientData.dietician.lastName}`,
          status: clientData.consultationsLeft > 0 ? "active" : "expired",
          number_of_consultations_left: clientData.consultationsLeft,
          joined_date: formatDate(clientData.createdAt),
          expiry_date: formatDate(clientData.expiryDate)
        }));
        console.log(newClientsData)
        console.log(transformedData);
        setClients(transformedData)
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };
    fetchDataNewCLient();
    fetchDataClientList();
  }, []);


  useEffect(() => {
    if (active === "active") {
      setClients(clientsData);
    } else {
      setClients(clientsData.filter((client) => client.status === "expired"));
    }
  }, [active]);

  const handleNewClientViewClick = (id: number) => {
    router.push(`/clients/${id}`);
  };
  const handleNewClientAssignClick = () => {
    console.log("Assign");
  };

  const handleClientViewClick = (id: number) => {
    router.push(`/clients/${id}`);
  };

  const handleClientDeleteClick = () => {
    setClients(clients.filter((client: any) => client.id !== deleteId));
    setDeleteId(undefined);
  };

  return (
    <div className="p-10 pb-20 relative flex flex-col pt-20 gap-16">
      {(deleteId || assignId) && (
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
                  Delete Client
                </h1>
                <p className={`${inter400.className} pr-5 text-sm mt-2`}>
                  Are you sure you want to delete this client? This action
                  cannot be undone.
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
          {assignId && (
            <div className="w-96 bg-white shadow rounded-xl h-auto">
              <div className="flex items-center justify-between w-full px-8 py-5">
                <div className="rounded-xl border-2 border-[#E4E7EC] h-12 w-12 bg-opacity-10 flex items-center justify-center">
                  <AiOutlineUsergroupAdd className="h-8 w-8" />
                </div>
                <FaTimes className="h-5 w-5 cursor-pointer font-extralight" />
              </div>
              <div className="flex flex-col px-8 w-full">
                <h1 className={`${inter600.className} text-lg text-black`}>
                  Assign Client
                </h1>
                <p className={`${inter400.className} pr-5 text-sm`}>
                  You have a new client, assign an expert now.
                </p>
              </div>
              <form className="flex flex-col px-8 w-full mt-2">
                <div className="flex my-2 flex-col gap-2">
                  <label
                    htmlFor="name"
                    className={`${inter400.className} text-sm text-black`}
                  >
                    Client Name
                  </label>
                  <div className="flex border-2 rounded-md px-3 border-[#E4E7EC]  flex-row items-center gap-2 w-full">
                    <BiUser className="h-5 w-5 text-black" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Client Name"
                      className="w-full border-none outline-none rounded-lg py-2"
                    />
                  </div>
                </div>
                <div className="flex my-2 flex-col gap-2">
                  <label
                    htmlFor="service"
                    className={`${inter400.className} text-sm text-black`}
                  >
                    Service Name
                  </label>
                  <div className="flex border-2 rounded-md px-3 border-[#E4E7EC]  flex-row items-center gap-2 w-full">
                    <FiAlignLeft className="h-5 w-5 text-black" />
                    <input
                      type="text"
                      name="service"
                      id="service"
                      placeholder="Service Name"
                      className="w-full border-none outline-none rounded-lg py-2"
                    />
                  </div>
                </div>
                <div className="flex my-2 flex-col gap-2">
                  <label
                    htmlFor="date"
                    className={`${inter400.className} text-sm text-black`}
                  >
                    Application Date
                  </label>
                  <div className="flex border-2 rounded-md px-3 border-[#E4E7EC]  flex-row items-center gap-2 w-full">
                    <FiCalendar className="h-5 w-5 text-black" />
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={
                        (
                          newClientsData.find(
                            (client) => client.id === assignId
                          ) as any
                        )?.date
                      }
                      placeholder="Application Date"
                      className="w-full border-none outline-none rounded-lg py-2"
                    />
                  </div>
                </div>
                <div className="flex my-2 flex-col gap-2">
                  <label
                    htmlFor="expert"
                    className={`${inter400.className} text-sm text-black`}
                  >
                    Assign Expert
                  </label>
                  <div className="flex border-2 rounded-md px-3 border-[#E4E7EC]  flex-row items-center gap-2 w-full">
                    <BiUser className="h-5 w-5 text-black" />
                    <select
                      name="expert"
                      id="expert"
                      placeholder="Assign Expert"
                      className="w-full border-none outline-none rounded-lg py-2"
                    >
                      <option value="">Assign Expert</option>
                      <option value="expert1">Expert 1</option>
                      <option value="expert2">Expert 2</option>
                      <option value="expert3">Expert 3</option>
                    </select>
                  </div>
                </div>
                <div className="flex pb-5 flex-row justify-center items-center gap-3 mt-5 px-8">
                  <button
                    onClick={() => handleNewClientAssignClick()}
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
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          New Client
        </h1>
        <Table
          data={newClients}
          actions={[
            {
              name: "View",
              onClick: handleNewClientViewClick,
              bgColor: "bg-background-200",
            },
            {
              name: "Assign",
              onClick: setAssignId,
              bgColor: "bg-success",
            },
          ]}
        />
      </div>
      <div className="flex relative flex-col mt-10 gap-3 w-ful">
        <div className="relative w-full flex flex-row justify-between items-center">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Client List
          </h1>

          <div className="relative w-auto px-5">
            <button
              onClick={() => setOpenModal(!openModal)}
              className={`${inter500.className} flex rounded-lg justify-between gap-2 px-2 py-1 border border-background-200 text-background-200 items-center text-base`}
            >
              <FaFilter className="h-3 w-3" />
              <p className="flex items-center gap-2 mx-3">Status</p>

              <FaAngleDown />
            </button>

            {openModal && (
              <div
                className={` ${inter500.className} absolute z-30 shadow-xl bg-white flex right-1/4 mt-4 rounded-lg flex-col h-full w-full`}
              >
                <button
                  onClick={() => setActive("active")}
                  className={`flex py-3 rounded-t-lg gap-5 items-center px-3 ${
                    active === "active"
                      ? "bg-background-200 text-white"
                      : "bg-white"
                  } hover:bg-background-200`}
                >
                  <FaRecordVinyl />
                  Active
                </button>
                <button
                  onClick={() => setActive("expired")}
                  className={`flex gap-5 rounded-b-lg shadow-xl py-3 items-center px-3 ${
                    active === "expired"
                      ? "bg-background-200 text-white"
                      : "bg-white"
                  } hover:text-white hover:bg-background-200`}
                >
                  <FaCircle />
                  Expired
                </button>
              </div>
            )}
          </div>
        </div>
        <Table
          data={clients}
          actions={[
            {
              name: "View",
              onClick: handleClientViewClick,
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

export default ClientsMain;
