"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import Sidebar from "../shared/Sidebar";
import FolderDetailContent from "./FolderDetailContent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebaseConfig";
import { useRecoilState } from "recoil";
import { folderAtom } from "@/app/recoil/atoms/folderAtom";

const FolderDetail: FC = () => {
  const [folderInfo, setFolderInfo] = useRecoilState(folderAtom);
  const { id } = useParams();

  const getFolderInfo = getDoc(doc(db, `Folders/${id}`));

  getFolderInfo.then((data: any) =>{ // TODO: Neskôr spraviť update pre toto
    setFolderInfo(data._document?.data.value.mapValue.fields);
  });

  return (
    <div className="flex text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <Sidebar />
      <FolderDetailContent folderInfo={folderInfo} />
    </div>
  );
};

export default FolderDetail;
