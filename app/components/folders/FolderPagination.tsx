import { FC } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FolderPagination: FC = () => {
  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
          <ArrowLeft />
          <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
        </div>
        <div className="sm:flex hidden">
          <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
            1
          </p>
          <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
            2
          </p>
        </div>
        <div className="sm:hidden">
          <select
            className="mt-4 border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            onChange={(e) => console.log(`Go to page ${e.target.value}`)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
          <p className="text-sm font-medium leading-none mr-3">Next</p>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default FolderPagination;