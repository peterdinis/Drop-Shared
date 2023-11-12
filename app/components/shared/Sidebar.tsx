"use client"

import { FC, useState } from "react";
import classNames from "classnames";
import MenuIcon from "@mui/icons-material/Menu";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { useAuth } from "../../hooks/useAuthContent";
import LogoutIcon from "@mui/icons-material/Logout";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const Sidebar: FC = () => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [folderName, setFolderName] = useState("");

  const { currentUser, logout } = useAuth();
  const router = useRouter();


  const logoutUser = () => {
    logout();
    toast.success("Logout successfull");
    router.push("/login");
  };

  const uploadFolder = () => {
    let payload = {
      folderName: folderName,
      isFolder: true,
      parentId: currentUser?.uid!,
      userEmail: currentUser?.email!,
      sharedTo: [],
    };
    toast.success("New folder was created");
    setFolderName("");
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
            <MenuIcon className="w-7 h-7" />
          ) : (
            <CloseIcon className="w-7 h-7" />
          )}
        </button>
        <div>
            <div className="mt-8">
              <div>
                <CreateNewFolderIcon />{" "}
              </div>{" "}
              <br />
              <div className="mt-4">
                <LogoutIcon onClick={logoutUser} />{" "}
                <Button onClick={logoutUser}>Logout</Button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
