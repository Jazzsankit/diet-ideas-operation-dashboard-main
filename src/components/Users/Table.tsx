import { FC, useState } from "react";
import { Inter } from "next/font/google";

interface Props {
  data: any[];
  columns: any[];
  paginate?: boolean;
  setEditId?: any;
  setDeleteId?: any;
  perPage?: number;
}

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

const Table: FC<Props> = ({
  data,
  paginate,
  setDeleteId,
  setEditId,
  columns,
  perPage = 3,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = paginate && Math.ceil(data.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full rounded-xl shadow-lg">
              <thead className="bg-white">
                <tr>
                  {columns.slice(1).map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className={`capitalize text-xl text-center ${inter500.className} px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider`}
                    >
                      {column.split("_").join(" ")}
                    </th>
                  ))}
                  <th key={5462123} className="text-xl py-4 px-5 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {currentData.map((item, index) => (
                  <tr key={item.id}>
                    {columns.slice(1).map((column) => (
                      <td
                        key={`${item.id}_${column.field}`}
                        className={`capitalize text-xl py-4 px-5 text-center ${
                          inter500.className
                        } whitespace-nowrap text-sm font-medium text-gray-900 ${
                          index % 2 === 0 ? "bg-background-100" : "bg-white"
                        }`}
                      >
                        {item[column]}
                      </td>
                    ))}
                    <td
                      key={874531532}
                      className={`text-center  flex py-5 h-full items-center gap-3 px-5 ${
                        index % 2 === 0 ? "bg-background-100" : "bg-white"
                      }`}
                    >
                      <button className="bg-background-200 text-white px-2 py-1 rounded-md">
                        EDIT
                      </button>
                      <button className="bg-danger text-white px-2 py-1 rounded-md">
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 w-full h-10 px-5">
        <p className={`${inter400.className} text-sm `}>
          Showing {startIndex + 1} to {endIndex} of {data.length} results
        </p>
        <nav className="flex gap-2">
          <button
            className={`${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            } px-3 py-2 rounded-l-md text-sm font-medium text-gray-500`}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {paginate &&
            Array.from({ length: totalPages as number }).map((_, i) => (
              <button
                key={i}
                className={`${
                  currentPage === i + 1 && "bg-background-200 text-white"
                } p-2 rounded-lg`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          <button
            className={`${
              currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            } px-3 py-2 rounded-r-md text-sm font-medium text-gray-500`}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Table;
