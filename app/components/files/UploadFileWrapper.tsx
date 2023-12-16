import { FC } from "react";
import Sidebar from "../shared/Sidebar";
import Header from "../shared/Header";
import UploadForm from "./UploadForm";

const UploadFileWrapper: FC = () => {
  return (
    <div className="flex text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <Sidebar />
      <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
        <Header text="Upload new file" />
        <div className="mt-5">
            <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default UploadFileWrapper;
