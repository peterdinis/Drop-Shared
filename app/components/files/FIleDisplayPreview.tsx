import Image from "next/image";
import { FC } from "react";
import ExapleFile from "../../../public/img/exampleFile.png";

interface IFileDisplayPreview {
    file?: File;
}

const FileDisplayPreview: FC<IFileDisplayPreview> = ({file}: IFileDisplayPreview) => {
  return (
    <>
      <Image
        src={ExapleFile}
        alt={"Default file image"}
        width={50}
        height={50}
      />
      <div className="">
        <h2>File Name: {file?.name || "Test File"}</h2>
      </div>
    </>
  );
};

export default FileDisplayPreview;
