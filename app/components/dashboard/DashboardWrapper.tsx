import { FC } from "react";
import Sidebar from "../shared/Sidebar";
import DashboardContent from "./DashboardContent";

const DashboardWrapper: FC = () => {
    return (
        <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
          <Sidebar />
          <DashboardContent />
        </div>
    );
}

export default DashboardWrapper