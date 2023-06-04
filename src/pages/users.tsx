import Head from "next/head";

import type { ReactNode } from "react";
import type { NextPageWithLayout } from "@/types";

import { UsersMain, Layout } from "@/components";

const UsersPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>User Management | Operation Dashboard | Diet Ideas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UsersMain />
      </main>
    </>
  );
};

UsersPage.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default UsersPage;
