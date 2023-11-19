import { FC } from "react";
import { Folder } from "lucide-react";

interface IFolderCardProps {
  folderName: string;
}

const FolderCard: FC<IFolderCardProps> = ({ folderName }: IFolderCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg">

      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          <a className="no-underline hover:underline text-black" href="#">
            <Folder /> {folderName}
          </a>
        </h1>
      </header>
    </article>
  );
};

export default FolderCard;
