import { FC } from "react";
import FileDropzone from "./Dropzone";

const FileList: FC = () => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <FileDropzone />
      </div>
    </div>
  );
};

export default FileList;
