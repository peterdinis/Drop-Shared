"use client"

import { FC } from "react";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import ScrollToTop from "react-scroll-to-top";

const FileLists: FC = () => {
  return (
    <div className="flex text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <Sidebar />
      <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
        <Header text="All my files" />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default FileLists;
