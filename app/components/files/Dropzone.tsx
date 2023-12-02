"use client";

import { useAuth } from "@/app/hooks/useAuthContent";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import Dropzone from "react-dropzone";
import { db, storage } from "@/app/lib/firebaseConfig";
import { toast } from "react-hot-toast";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const FileDropzone: FC = () => {
  const maxSize = 20971520;

  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();

  const uploadFile = async (selectedFile: File) => {
    if (loading) return;
    if (!currentUser) return;

    setLoading(true);

    // Upload file to firebase

    const docRef = await addDoc(
      collection(db, "users", currentUser?.uid, "files"),
      {
        userId: currentUser?.uid,
        filename: selectedFile.name,
        email: currentUser?.email,
        timestamp: serverTimestamp(),
        type: selectedFile.type,
        size: selectedFile.size,
      }
    );

    toast.success("File was uploaded");

    const imageRef = ref(
      storage,
      `users/${currentUser.uid}/files/${docRef.id}`
    );

    await uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
      // download url
      const downloadURL = await getDownloadURL(imageRef);

      // update original doc with download url

      await updateDoc(doc(db, "users", currentUser?.uid, "files", docRef.id), {
        downloadURL,
      });
    });

    setLoading(false);
  };

  const onDropFile = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("File reading was aborted");
      reader.onerror = () => console.log("File reading failed");

      reader.onload = async () => {
        await uploadFile(file);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <>
      <Dropzone minSize={0} maxSize={maxSize} onDrop={onDropFile}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <section className="m-4">
            <div
              className={cn(
                "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg textcenter",
                isDragActive
                  ? "bg-[#035FFE] text-white animate-pulse"
                  : "bg-slate-100/50 dark:bg-slate-8000/80 text-slate-400"
              )}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click here and drop file for upload"}
              {isDragActive && !isDragReject && "Drop to upload this file"}
              {isDragReject && "File is not accepted"}
            </div>
          </section>
        )}
      </Dropzone>
    </>
  );
};

export default FileDropzone;
