import { FC } from "react";
import SmallHeader from "../shared/SmallHeader";

const FileTable: FC = () => {
    return (
        <>
         <SmallHeader text="Your uploaded files" />
         <div className="mt-3">
            FILES...
         </div>
        </>
    )
}

export default FileTable;