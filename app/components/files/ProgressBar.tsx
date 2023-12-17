import { FC } from "react";

type IProgressBarProps = {
  progress: number | string;
};

const ProgressBar: FC<IProgressBarProps> = ({
  progress = 40,
}: IProgressBarProps) => {
  return (
    <div className="bg-gray-400 w-full h-4 mt-3 rounded-full">
      <div
        style={{
          width: `${progress}%`,
        }}
        className="ml-1text-lg bg-blue-500 h-4 rounded-full text-[10px] text-white"
      >
        {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
