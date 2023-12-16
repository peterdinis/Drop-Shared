"use client";

import { FC } from "react";
import Header from "../shared/Header";
import ScrollToTop from "react-scroll-to-top";

const DashboardContent: FC = () => {
  return (
    <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
      <Header text="Upload file" />
      <br />
      <ScrollToTop smooth={true} />
    </div>
  );
};

export default DashboardContent;
