import { ContainerType } from "@/app/types/sharedTypes";
import { FC} from "react";

const Container: FC<ContainerType> = ({
  children,
  className,
}: ContainerType) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
