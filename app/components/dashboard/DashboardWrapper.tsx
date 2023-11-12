import { FC } from "react";
import Sidebar from "../shared/Sidebar";

const DashboardWrapper: FC = () => {
    return (
        <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
          <Sidebar />
        </div>
    );
}

export default DashboardWrapper