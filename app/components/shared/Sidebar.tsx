"use client";

import { FC, useState } from "react";
import classNames from "classnames";
import { FileJson, Folder, XCircle, Menu, LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuthContent";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AppModal from "./AppModal";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@mui/material";
import { db } from "@/app/lib/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import SmallHeader from "./SmallHeader";
import { v4 as uuid } from "uuid";
import Cookies from "js-cookie";

const Sidebar: FC = () => {
  const { currentUser } = useAuth();
  const docId = uuid().toString() as unknown as string;

  const [folderName, setFolderName] = useState("");
  const [collapsed, setSidebarCollapsed] = useState(false);

  const { logout } = useAuth();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    toast.success("Logout successfull");
    Cookies.remove("userCredentials");
    router.push("/login");
  };

  const onCreateNewFolder = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await setDoc(doc(db, "Folders", docId), {
      name: folderName,
      id: docId,
      createdBy: currentUser?.email,
    });
    toast.success("New folder was created");
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
                    <form className="mt-5">
                      <div>
                        <input
                          className="bg-white rounded-l border-r border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
                          type="file"
                        />
                      </div>
                      <div className="mt-3">
                        <Button>Upload</Button>
                      </div>
                    </form>
                  </AppModal>
                </div>{" "}
                <div className="mt-8">
                  <AppModal
                    icon={<Folder />}
                    btnName={"New folder"}
                    headerName={"Upload new folder"}
                  >
                    <form className="mt-5">
                      <input
                        className="bg-white rounded-l border-r border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
                        placeholder="New file"
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                      />
                      <div className="mt-3">
                        <Button onClick={onCreateNewFolder}>Upload</Button>
                      </div>
                    </form>
                  </AppModal>
                </div>{" "}
                <div className="mt-8">
                  <Button variant={"ghost"} value="sm" onClick={logoutUser}>
                    <LogOut onClick={logoutUser} />
                    Logout
                  </Button>
                </div>{" "}
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="mt-8">
              <div>
                <Tooltip title="Add new file">
                  <AppModal tooltipName="Add new file" icon={<FileJson />}>
                    <form className="mt-5">
                      <div>
                        <input
                          className="bg-white rounded-l border-r border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
                          type="file"
                        />
                      </div>
                      <div className="mt-3">
                        <Button>Upload</Button>
                      </div>
                    </form>
                  </AppModal>
                </Tooltip>
              </div>{" "}
              <br />
              <div>
                <Tooltip title="Add new folder">
                  <AppModal tooltipName="Add new folder" icon={<Folder />}>
                    <SmallHeader text="Upload new folder" />
                    <form className="mt-5">
                      <input
                        type="text"
                        className="bg-white rounded-l border-r border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
                        placeholder="New folder"
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                      />
                      <div className="mt-3">
                        <Button onClick={onCreateNewFolder}>Upload</Button>
                      </div>
                    </form>
                  </AppModal>
                </Tooltip>
              </div>{" "}
              <div className="mt-8">
                <Tooltip title="Logout">
                  <Button onClick={logoutUser} variant={"ghost"} size={"sm"}>
                    <LogOut />
                  </Button>
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
