import Head from "next/head";

import type { ReactNode } from "react";
import type { NextPageWithLayout } from "@/types";

import { DashboardMain, Layout } from "@/components";

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Operation Dashboard | Diet Ideas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DashboardMain />
      </main>
    </>
  );
};

Dashboard.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Dashboard;