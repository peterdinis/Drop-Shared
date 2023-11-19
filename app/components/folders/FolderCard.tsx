import { FC } from "react";
import { Folder } from "lucide-react";
import Link from "next/link";

interface IFolderCardProps {
  folderName: string;
  linkName: string;
}

const FolderCard: FC<IFolderCardProps> = ({ folderName, linkName }: IFolderCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg">

      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          <Link className="no-underline hover:underline text-black" href={`/${linkName}`}>
            <Folder /> {folderName}
          </Link>
        </h1>
      </header>
    </article>
  );
};

export default FolderCard;
