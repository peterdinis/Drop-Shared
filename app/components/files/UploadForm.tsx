"use client";

import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { storage, db } from "@/app/lib/firebaseConfig";
import {
  ref,
} from "firebase/storage";
import { Upload } from "lucide-react";
import {  doc,serverTimestamp,setDoc } from "firebase/firestore";
import { useAuth } from "@/app/hooks/useAuthContent";
import { UploadedFile } from "@/app/types/fileTypes";
import { generateRandomString } from "@/app/utils/randomString";
import FileDisplayPreview from "./FIleDisplayPreview";


const UploadForm: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const {currentUser} = useAuth();

  const docId = serverTimestamp() as unknown as string;

  const imageRef = ref(storage, `file-upload/${file?.name}`);

  const saveFile = async (file: File, fileUrl: string) => {

    const fileDocRef = doc(db, 'uploadedFile', docId);
    
    const fileData: UploadedFile = {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        fileUrl,
        userEmail: currentUser?.email!,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL as unknown as string + generateRandomString(13)
    };

    await setDoc(fileDocRef, fileData);
};

  const handleUploadFile = (e: any) => {
    if (e.target.files[0]!?.size > 200000) {
      toast.error("File is too big");
      return;
    }

    setFile(e.target.files[0]!);
    toast.success("File was uploaded");
  };


  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            onChange={handleUploadFile}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <div className="mt-5">
        {file? <FileDisplayPreview file={file as unknown as File} /> : null}
      </div>
      <br />
      <Button disabled={!file} className="mt-5">
        Upload{" "}
      </Button>
    </>
  );
};

export default UploadForm;
