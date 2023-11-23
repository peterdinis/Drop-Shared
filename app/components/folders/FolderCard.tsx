import { FC } from "react";
import { Folder, BadgeX } from "lucide-react";
import Link from "next/link";
import { IFolderCardProps } from "@/app/types/folderTypes";
import {toast} from "react-hot-toast";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/lib/firebaseConfig";

const FolderCard: FC<IFolderCardProps> = ({
  name,
  linkName
}: IFolderCardProps) => {
  
  const deleteFileFN = async () => {
    toast.success("File was deleted");
    await deleteDoc(doc(db, `Folders/${linkName}`))
  }


  return (
    <article className="overflow-hidden rounded-lg shadow-lg">
      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          <Link
            className="text-black"
            href={`/folder/${linkName}`}
          >
            <Folder /> {name}
          </Link>
        </h1>
        <BadgeX onClick={deleteFileFN} />
      </header>
    </article>
  );
};

export default FolderCard;
