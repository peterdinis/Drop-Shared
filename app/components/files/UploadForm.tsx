"use client";

import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { storage } from "@/app/lib/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Upload } from "lucide-react";
import FileDisplayPreview from "./FIleDisplayPreview";
import { v4 } from "uuid";

const UploadForm: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [, setImageUrls] = useState([]);

  const handleUploadFile = () => {
    if (file == null) return;
    const imageRef = ref(storage, `uploaded-images/${file.name + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url] as any);
      });
      toast.success("File was uploaded");
    });
  };

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            onChange={(event) => {
              setFile(event.target.files![0]);
            }}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <div className="mt-5">
        {file ? <FileDisplayPreview file={file as unknown as File} /> : null}
      </div>
      <br />
      <Button onClick={handleUploadFile} className="mt-5">
        Upload{" "}
      </Button>
    </>
  );
};

export default UploadForm;
