"use client";

import { FC, useState } from "react";
import classNames from "classnames";
import { FileJson, Folder, BadgeX, XCircle, Menu, LogOut } from 'lucide-react';
import { useAuth } from "../../hooks/useAuthContent";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AppModal from "./AppModal";

/* TODO: Make more reponsive this component later */

const Sidebar: FC = () => {
  const [collapsed, setSidebarCollapsed] = useState(false);

  const { currentUser, logout } = useAuth();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    toast.success("Logout successfull");
    router.push("/login");
  };

  return (
    <div
      className={classNames({
        "grid min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      <div className="bg-white text-black">
        <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
          {collapsed === true ? (
            <Menu className="w-7 h-7" />
          ) : (
            <XCircle className="w-7 h-7" />
          )}
        </button>
        <div>
          <div className="mt-4">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {currentUser?.email || ""}
            </p>
          </div>
          <div className="mt-8">
            <div>
              <AppModal
                icon={<FileJson />}
                btnName={"New file"}
                headerName={"Upload new file"}
              >
                ddd
              </AppModal>
            </div>{" "}
            <br />
            <div>
              <AppModal
                icon={<Folder />}
                btnName={"New folder"}
                headerName={"Upload new folder"}
              >
                ddd
              </AppModal>
            </div>{" "}
            <div className="mt-4">
              <BadgeX />{" "}
              <button
                className="leading-7 [&:not(:first-child)]:mt-6"
              >
                Delete file
              </button>
            </div>
            <div className="mt-4">
              <LogOut onClick={logoutUser} />{" "}
              <button
                className="leading-7 [&:not(:first-child)]:mt-6"
                onClick={logoutUser}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
