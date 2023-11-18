import { FC } from "react";

const FolderCard: FC = () => {
  return (
    <div className="w-full lg:w-1/2 p-3">
      <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
        <img
          className="block  w-full lg:w-48 flex-none bg-cover h-24"
          src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
        />
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="text-black font-bold text-xl mb-2 leading-tight">
            Can life make you a bitter developer?
          </div>
          <p className="text-grey-darker text-base">Read more</p>
        </div>
      </div>
    </div>
  );
};

export default FolderCard;
