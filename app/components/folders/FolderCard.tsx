import { FC } from "react";
import { Folder } from "lucide-react";

interface IFolderCardProps {
    folderName: string;
}

const FolderCard: FC<IFolderCardProps> = ({folderName}: IFolderCardProps) => {
  return (
    <div className="w-full lg:w-1/2 p-3">
      <div className="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="text-black font-bold text-xl mb-2 leading-tight">
            <Folder />
          </div>
          <p className="text-grey-darker text-base">{folderName}</p>
        </div>
      </div>
    </div>
  );
};

export default FolderCard;
