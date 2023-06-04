import { FC, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { ServicesData } from "@/assets/data";
import Table from "./Table";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import Form from "./Form";
import { formatDate } from "@/utils/dateUtils";

formatDate
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

const ServiceMain: FC = () => {
  const [newClients, setNewClients] = useState<unknown[]>(ServicesData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>();
  const [assignId, setAssignId] = useState<number>();
  const [newClient, setNewClient] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://diet-ideas-backend-production.up.railway.app/api/v1/admin/getAllServices", {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6aXNoYW5AZ21haWwuY29tIiwiaWF0IjoxNjg1NzMyNDI0LCJleHAiOjE2OTA5MTY0MjR9.mjczQRFrQownNEYwYyjz7QszZ7Br8b2IfcsfP_WsvX4',
          },
        }
        );
        const data = await response.json();
        const transformedData = data.data.map((item: any) => {
          return {
            id: item.id,
            service_name: item.name,
            description: item.description,
            total_number_of_days: item.totalDays,
            data_created: formatDate(item.createdAt)
          }
        });
        console.log(transformedData);
        setNewClients(transformedData)
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);



  const handleServiceUpdateClick = () => {
    console.log("edit");
  };
  const handleServiceAssignClick = () => {
    console.log("assign");
  };

  const handleServiceDeleteClick = () => {
    setNewClients(newClients.filter((client: any) => client.id !== deleteId));
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
                  onClick={() => handleServiceDeleteClick()}
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
          {(assignId || newClient) && (
            <Form
              setCancel={setNewClient}
              data={
                assignId
                  ? newClients.filter((client: any) => client.id === assignId)
                  : null
              }
              handleClick={
                assignId ? handleServiceAssignClick : handleServiceUpdateClick
              }
              title={
                assignId
                  ? "New Service Programme"
                  : "Edit Service Programme Details"
              }
              setData={setData}
            />
          )}
        </div>
      )}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between w-full px-5">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            Service Programme
          </h1>
          <button
            onClick={() => setNewClient(true)}
            className="bg-background-200 text-white rounded-md px-4 py-2"
          >
            ADD NEW
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

export default ServiceMain;
