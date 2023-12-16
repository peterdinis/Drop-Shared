import { FC } from "react";
import Header from "../shared/Header";
import { useAuth } from "@/app/hooks/useAuthContent";

const DashboardContent: FC = () => {
  const {currentUser} = useAuth();

  return (
    <div className="ml-5 py-4 px-8 flex-growtext-center flex-1">
      <Header text="My Dashboard" />
      <br />
      <div className="mt-5">
        <h1>Hello: {currentUser?.email}</h1>
      </div>
    </div>
  );
};

export default DashboardContent;
