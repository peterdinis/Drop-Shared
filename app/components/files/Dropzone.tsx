import React, { FC } from "react";
import Dropzone from "react-dropzone";

const FileDropzone: FC = () => {
  const maxSize = 20971520;

  /* const handleFileRejections = (fileRejections: any) => {
    if (fileRejections && fileRejections.length > 0) {
      console.log("Rejected files:", fileRejections);
      // You can perform further actions with rejected files here
    }
  }; */ /* later */

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
          <section>
            <div {...getRootProps()}>
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