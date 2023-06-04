import type { IStatusCard } from "@/types";
import { FC, useState } from "react";

import StatusCard from "./StatusCard";

const StatusCards: FC = () => {
  const [cardsData, setCardsData] = useState<IStatusCard[]>([
    {
      color: "bg-background-200",
      count: 5,
      title: "Total New Clients This Month",
    },
    {
      color: "bg-primary",
      count: 1220,
      title: "Total Renewal Client This Month",
    },
    {
      color: "bg-secondary",
      count: 1220,
      title: "Total Number of Clients",
    },
    {
      color: "bg-warning",
      count: 15,
      title: "Total Number of Renewal Clients",
    },
    {
      color: "bg-background-200",
      count: 1220,
      title: "Total Revenue Today",
    },
    {
      color: "bg-primary",
      count: 1220,
      title: "Total Revenue This Month",
    },
    {
      color: "bg-secondary",
      count: 1220,
      title: "Total Refund Clients This Month",
    },
    {
      color: "bg-warning",
      count: 1220,
      title: "Total Clients Ending Today",
    },
    {
      color: "bg-background-200",
      count: 1220,
      title: "Total Clients Ending This Month",
    },
    {
      color: "bg-primary",
      count: 1220,
      title: "Total Refund Clients",
    },
  ]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {cardsData.map((data: IStatusCard, index: number) => (
        <StatusCard key={index * 6226520} data={data} />
      ))}
    </div>
  );
};

export default StatusCards;
