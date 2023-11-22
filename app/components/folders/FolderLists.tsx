import { FC, useEffect } from "react";
import FolderCard from "./FolderCard";
import FolderPagination from "./FolderPagination";
import { useAuth } from "@/app/hooks/useAuthContent";

const FolderLists: FC = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <FolderCard folderName={"abc"} linkName={"test"} />
          </div>
        </div>
      </div>
      <FolderPagination />
    </>
  );
};

export default FolderLists;
