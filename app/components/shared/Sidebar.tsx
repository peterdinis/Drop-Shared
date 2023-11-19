"use client";

import { FC, useState } from "react";
import classNames from "classnames";
import {
  FileJson,
  Folder,
  BadgeX,
  XCircle,
  Menu,
  LogOut,
  Server,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuthContent";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AppModal from "./AppModal";
import { Button } from "@/components/ui/button";
import { SvgIcon, Tooltip } from "@mui/material";
import SmallHeader from "./SmallHeader";

const Sidebar: FC = () => {
  const [collapsed, setSidebarCollapsed] = useState(false);

  const { logout } = useAuth();
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
        {collapsed === false ? (
          <>
            <div>
              <div className="mt-8">
                <div>
                  <AppModal
                    icon={<FileJson />}
                    btnName={"New file"}
                    headerName={"Upload new file"}
                  >
                    <SmallHeader text="Upload new file" />

                  </AppModal>
                </div>{" "}
                <div className="mt-8">
                  <AppModal
                    icon={<Folder />}
                    btnName={"New folder"}
                    headerName={"Upload new folder"}
                  >
                    ddd
                  </AppModal>
                </div>{" "}
                <div className="mt-8">
                  <Button variant={"ghost"} value="sm">
                    {" "}
                    <SvgIcon children={<BadgeX />} /> Delete file
                  </Button>
                </div>{" "}
                <div className="mt-8">
                  <Button variant={"ghost"} value="sm" onClick={logoutUser}>
                    <LogOut onClick={logoutUser} />
                    Logout
                  </Button>
                </div>{" "}
                <div className="mt-8">
                  <AppModal
                    icon={<Server />}
                    btnName={"Avaiable Storage"}
                    headerName={"Avaiable Storage"}
                  >
                    ddd
                  </AppModal>
                </div>{" "}
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="mt-8">
              <div>
                <Tooltip title="Add new file">
                  <AppModal icon={<FileJson />}>ddd</AppModal>
                </Tooltip>
              </div>{" "}
              <br />
              <div>
                <Tooltip title="Add new folder">
                  <AppModal icon={<Folder />}>ddd</AppModal>
                </Tooltip>
              </div>{" "}
              <div className="mt-8">
                <Tooltip title="Delete file">
                  <Button variant={"ghost"} size={"sm"}>
                    <BadgeX />
                  </Button>
                </Tooltip>
              </div>
              <div className="mt-8">
                <Tooltip title="Logout">
                  <Button onClick={logoutUser} variant={"ghost"} size={"sm"}>
                    <LogOut />
                  </Button>
                </Tooltip>
              </div>
              <div className="mt-8">
                <Tooltip title="Avaiable storage">
                  <AppModal icon={<Server />}>ddd</AppModal>
                </Tooltip>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
