import { FC } from "react";

interface IHeaderProps {
  text: string;
}

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
  return (
    <h2 className="flex justify-center align-top mt-6 text-black">
      {text}
    </h2>
  );
};

export default Header;
