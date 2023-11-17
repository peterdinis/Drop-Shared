import { FC } from "react";
import Header from "../shared/Header";

const DashboardContent: FC = () =>{
    return (
        <div className="text-center">
           <Header text="Your files and folders" />
        </div>
    )
}

export default DashboardContent;