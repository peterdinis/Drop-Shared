import { cn } from "@/lib/utils";
import React, { FC } from "react";
import Dropzone from "react-dropzone";

const FileDropzone: FC = () => {
  const maxSize = 20971520;

  return (
    <>
      <Dropzone
        minSize={0}
        maxSize={maxSize}
        onDrop={(acceptedFiles, fileRejections) => {
          console.log("Accepted files:", acceptedFiles);
        
        }}
      >
        {({ getRootProps, fileRejections, getInputProps, isDragActive, isDragReject }) => (
          <section className="m-4">
            <div className={cn("w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg textcenter", isDragActive ? "bg-[#035FFE] text-white animate-pulse" : "bg-slate-100/50 dark:bg-slate-8000/80 text-slate-400")} {...getRootProps()}>
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