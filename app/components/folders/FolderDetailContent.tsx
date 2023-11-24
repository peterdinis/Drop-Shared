import { FC } from "react";
import Header from "../shared/Header";
import Link from "next/link";
import { IFolderDetailType } from "@/app/types/folderTypes";

interface IFolderProps {
  folderInfo: IFolderDetailType | any; 
}

const FolderDetailContent: FC<IFolderProps> = ({folderInfo}: IFolderProps) => {
  return (
    <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
      <Header text="Folder Detail" />
      <span className="mt-4 text-center">
        <Link href="/dashboard">Go to dashboard</Link>
      </span>
    </div>
  );
};

export default FolderDetailContent;
