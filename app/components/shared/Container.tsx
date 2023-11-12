import { FC, ReactNode } from "react";

interface IContainerProps {
  children?: ReactNode;
  className: string;
}

const Container: FC<IContainerProps> = ({
  children,
  className,
}: IContainerProps) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
