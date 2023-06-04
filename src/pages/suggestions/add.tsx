import Head from "next/head";

import { ReactNode } from "react";
import type { NextPageWithLayout } from "@/types";

import { AddMealsPlanMain, Layout } from "@/components";

const CreateMealPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Meal | Operation Dashboard | Diet Ideas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AddMealsPlanMain />
      </main>
    </>
  );
};

CreateMealPage.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default CreateMealPage;
