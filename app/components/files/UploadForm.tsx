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
import Compress from "compress.js";
import { Upload } from "lucide-react";

const UploadForm: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [, setProgress] = useState(0);

  const compress = new Compress();

  const imageRef = ref(storage, `file-upload/${file?.name}`);

  async function resizeImageFn(file: File) {

    const resizedImage = await compress.compress([file], {
      size: 2, // the max size in MB, defaults to 2MB
      quality: 1, // the quality of the image, max is 1,
      maxWidth: 300, // the max width of the output image, defaults to 1920px
      maxHeight: 300, // the max height of the output image, defaults to 1920px
      resize: true // defaults to true, set false if you do not want to resize the image width and height
    })
    const img = resizedImage[0];
    const base64str = img.data
    const imgExt = img.ext
    const resizedFiile = Compress.convertBase64ToFile(base64str, imgExt)
    return resizedFiile;
  }

  const metadata = {
    contentType: file?.type,
  };
  const uploadTask = uploadBytesResumable(
    imageRef,
    file as unknown as Blob,
    metadata
  );

  resizeImageFn(uploadTask as unknown as File);

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
      <Button disabled={!file} className="mt-5">
        Upload{" "}
      </Button>
    </>
  );
};

export default UploadForm;
