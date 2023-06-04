import { FC, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { expertsData } from "@/assets/data";
import Table from "./Table";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";

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

const ExpertsMain: FC = () => {
  const [experts, setExperts] = useState<unknown[]>(expertsData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>();

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://diet-ideas-backend-production.up.railway.app/api/v1/admin/getAllDieticians", {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6aXNoYW5AZ21haWwuY29tIiwiaWF0IjoxNjg1NzMyNDI0LCJleHAiOjE2OTA5MTY0MjR9.mjczQRFrQownNEYwYyjz7QszZ7Br8b2IfcsfP_WsvX4',
          },
        }
        );
        const data = await response.json();
        const transformedData =  data.data.map((dietician: any) => {
          return {
            id: dietician.id,
            expert_name: `${dietician.firstName} ${dietician.lastName}`,
            contact_number: dietician.contact,
            active_clients: 20, // Replace with the actual value
            overall_SLA: dietician.sla, 
          };
        });
        console.log(transformedData);
        setExperts(transformedData)
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  const handleExpertViewClick = (id: number) => {
    router.push(`/experts/${id}`);
  };

  const handleClientDeleteClick = () => {
    setExperts(experts.filter((expert: any) => expert.id !== deleteId));
    setDeleteId(undefined);
  };

  return (
    <div className="p-10 pb-20 relative flex flex-col pt-20 gap-16">
      {deleteId && (
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
        </div>
      )}
      <div className="flex flex-col gap-3 w-full">
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          Experts Management
        </h1>
        <Table
          data={experts}
          actions={[
            {
              name: "View",
              onClick: handleExpertViewClick,
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

export default ExpertsMain;
