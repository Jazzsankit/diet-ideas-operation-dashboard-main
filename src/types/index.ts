import type { NextPage } from "next";
import type { ReactElement } from "react";

export type NextPageWithLayout<p = unknown, IP = p> = NextPage<p, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

export type IStatusCard = {
  color: string;
  title: string;
  count: number;
};
export type BlogType = {
  id: number;
  title: string;
  uploaded_by: string;
};

export type DateType = {
  date: number | string;
  isToday?: boolean;
  isNext?: boolean;
  isPrev?: boolean;
};

export type EventFormDataType = {
  id?: number;
  title: string;
  description: string;
  date: string;
  time: string;
};

export type MealsTableType = {
  id?: number;
  client_name: string;
  service_name: string;
  application_date: string;
  expiry_date: string;
};

export type TableActionTypes = {
  name: string;
  onClick: any;
  bgColor: string;
};
