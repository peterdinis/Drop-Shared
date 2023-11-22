import { FC } from "react";
import Header from "../shared/Header";
import Cookies from "js-cookie";

const FolderDetailContent: FC = () => {

  const getFolderInfo = Cookies.get("FolderInfo");

  console.log("FOO", getFolderInfo);

  return (
    <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
      <Header text="Folder Detail" />
    </div>
  );
};

export default FolderDetailContent;
