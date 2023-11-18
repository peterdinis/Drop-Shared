import { FC } from "react";
import FolderCard from "./FolderCard";

const FolderLists: FC = () => {
  return (
    <div className="m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
        <FolderCard folderName={"abc"} />
    </div>
  );
};

export default FolderLists;