import { FC } from "react";
import FolderCard from "./FolderCard";
import FolderPagination from "./FolderPagination";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/app/lib/firebaseConfig";
import { useAuth } from "@/app/hooks/useAuthContent";
import { useState } from "react";

const FolderLists: FC = () => {
  const { currentUser } = useAuth();
  const [, setFolderList] = useState([]);

  const getFolderList = async () => {
    setFolderList([]);
    const q = query(
      collection(db, "Folders"),
      where("parentFolderId", "==", 0),
      where("createBy", "==", currentUser?.email)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setFolderList((folderList) => [...folderList, doc.data()] as any); // TODO: Fix as any
    });
  };

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
