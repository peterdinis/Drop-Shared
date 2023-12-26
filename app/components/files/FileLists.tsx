"use client"

import { FC, useEffect, useState } from "react";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import ScrollToTop from "react-scroll-to-top";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "@/app/lib/firebaseConfig";
import { useAuth } from "@/app/hooks/useAuthContent";

const FileLists: FC = () => {
  const uploadedFilesRef = ref(storage, `uploaded-images/`);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const {currentUser} = useAuth();

  useEffect(() => {
    listAll(uploadedFilesRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="flex text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <Sidebar />
      <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
        <Header text="My uploaded files" />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default FileLists;