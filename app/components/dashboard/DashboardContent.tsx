import { FC } from "react";
import Header from "../shared/Header";
import FolderLists from "../folders/FolderLists";

const DashboardContent: FC = () => {
  return (
    <>
      <div className="ml-5 py-4 px-8 flex-growtext-center">
        <Header text="Your files and folders" />
        <hr />
        <input type="search" name="" placeholder="search" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
        <div className="mt-8 pl-4">
        <FolderLists />
      </div>
      </div>
    </>
  );
};

export default DashboardContent;
