"use client";

import { FC } from "react";
import Header from "../shared/Header";
import FolderLists from "../folders/FolderLists";
import ScrollToTop from "react-scroll-to-top";

const DashboardContent: FC = () => {
  return (
    <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
      <Header text="Your uploaded files" />
      <br />
      <section className="mt-8">
        <FolderLists />
      </section>
      <ScrollToTop smooth={true} />
    </div>
  );
};

export default DashboardContent;
