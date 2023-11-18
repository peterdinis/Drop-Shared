import { FC } from "react";
import FolderCard from "./FolderCard";

const FolderLists: FC = () =>{
    return (
        <div className="container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
        </div>
    )
}

export default FolderLists;