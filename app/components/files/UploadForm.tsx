"use client";

import { Button } from "@/components/ui/button";
import { FC, useState, ChangeEvent } from "react";
import { storage } from "@/app/lib/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Upload } from "lucide-react";
import FileDisplayPreview from "./FIleDisplayPreview";
import { v4 } from "uuid";
import { useToast } from "@/components/ui/use-toast"

const UploadForm: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const {toast} = useToast();

  const handleUploadFile = () => {
    if (file === null) {
      toast({
        title: "No file found",
        color: "red",
        description: "First you must select file to upload",
        variant: "destructive"
      })
      return;
    }
    const imageRef = ref(storage, `uploaded-images/${file.name + v4()}`);
    uploadBytes(imageRef, file)
      .then((snapshot: any) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((url: string) => {
        setImageUrls((prev: string[]) => [...prev, url]);
        toast({
          title: "File was successfully uploaded",
          color: "green"
        })
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        toast({
          title: "File uploading failed",
          color: "red",
          variant: "destructive"
        })
      });
  };


  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
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
            onChange={handleFileChange}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <div className="mt-5">
        {file ? <FileDisplayPreview file={file} /> : null}
      </div>
      <br />
      <Button onClick={handleUploadFile} className="mt-5">
        Upload{" "}
      </Button>
    </>
  );
};

export default UploadForm;