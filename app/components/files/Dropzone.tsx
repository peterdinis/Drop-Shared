import React, { FC } from "react";
import Dropzone from "react-dropzone";

const FileDropzone: FC = () => {
  const maxSize = 20971520;

  return (
    <>
      <Dropzone minSize={0} onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {!isDragActive && "Click here and drop file for upload"}
              {isDragActive && !isDragReject && "Drop to upload this file"}
              {isDragReject && "File is not accepted"}
              {}
            </div>
          </section>
        )}
      </Dropzone>
    </>
  );
};

export default FileDropzone;
