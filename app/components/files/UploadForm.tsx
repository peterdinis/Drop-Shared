"use client";

import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { storage } from "@/app/lib/firebaseConfig";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import ProgressBar from "./ProgressBar";

const UploadForm: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const imageRef = ref(storage, `file-upload/${file?.name}`);

  const metadata = {
    contentType: file?.type,
  };
  const uploadTask = uploadBytesResumable(
    imageRef,
    file as unknown as Blob,
    metadata
  );

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      console.log(error)
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    }
  );

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
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
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
      <Button disabled={!file} className="mt-5">
        Upload{" "}
      </Button>
      <div className="mt-6">
        <ProgressBar progress={progress} />
      </div>

    </>
  );
};

export default UploadForm;
