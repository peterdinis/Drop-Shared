import { FC } from "react";
import Header from "../shared/Header";
import Link from "next/link";
import { Folder } from "lucide-react";
import { IFolderDetailType } from "@/app/types/folderTypes";

interface IFolderProps {
  folderInfo: IFolderDetailType | any; 
}

/* TODO: Later display here more information */

const FolderDetailContent: FC<IFolderProps> = ({folderInfo}: IFolderProps) => {
  return (
    <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
      <Header text="Folder Detail" />
      <span className="mt-4 text-center">
        <Link href="/dashboard">Go to dashboard</Link>
      </span>

      <div className="mt-10">
        <Folder /> <span>{folderInfo.name?.stringValue}</span> <br />
        <span>Created by: {folderInfo.createdBy?.stringValue}</span>
      </div>
    </div>
  );
};

export default FolderDetailContent;
