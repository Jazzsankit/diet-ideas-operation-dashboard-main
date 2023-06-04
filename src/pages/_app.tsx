import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@/types";

import "@/styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
