"use client"

import { FC } from "react";
import { useParams} from "next/navigation";
import Sidebar from "../shared/Sidebar";
import FolderDetailContent from "./FolderDetailContent";

const FolderDetail: FC = () => {
    const {id} = useParams();

    return (
        <div className="flex text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
          <Sidebar />
          <FolderDetailContent />
        </div>
    )
}

export default FolderDetail