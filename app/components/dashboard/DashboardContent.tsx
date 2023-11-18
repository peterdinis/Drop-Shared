import { FC } from "react";
import Header from "../shared/Header";

const DashboardContent: FC = () =>{
    return (
        <div className="ml-5 py-4 px-8 overflow-x-auto flex-growtext-center">
           <Header text="Your files and folders" />
           
        </div>
    )
}

export default DashboardContent;