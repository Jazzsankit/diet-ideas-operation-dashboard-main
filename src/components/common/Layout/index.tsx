import React from "react";
import type { FC } from "react";

import Navbar from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="h-auto w-4/5 bg-background-100 rounded-l-3xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
