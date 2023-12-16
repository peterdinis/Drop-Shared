import { FC } from "react";
import Header from "../shared/Header";

const DashboardContent: FC = () => {
  return (
    <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
      <Header text="My Dashboard" />
      <br />
    </div>
  );
};

export default DashboardContent;
