import { FC, useEffect, useState } from "react";
import FolderCard from "./FolderCard";
import FolderPagination from "./FolderPagination";
import { useAuth } from "@/app/hooks/useAuthContent";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/app/lib/firebaseConfig";

const FolderLists: FC = () => {
  const { currentUser } = useAuth();
  const [folders, setFolders] = useState([]);

  const docRef = collection(db, 'Folders');

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      const foldersData = [] as any;
      querySnapshot.forEach((doc) => {
        const folderData = doc.data();
        foldersData.push(folderData);
      });
      setFolders(foldersData);
    });
    return () => unsubscribe();
  }, []);

  console.log(folders);
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* {folders.map((folder) => (
            <div key={folder.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <FolderCard folderName={folder.folderName} linkName={folder.linkName} />
            </div>
          ))} */}
          abc
        </div>
      </div>
      <FolderPagination />
    </>
  );
};

export default FolderLists;