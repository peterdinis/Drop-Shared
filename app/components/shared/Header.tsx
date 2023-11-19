"use client";

import { FC } from "react";

interface IHeaderProps {
  text: string;
}

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
  return (
      <h2 className="mt-10 pb-2 text-3xl text-center font-semibold tracking-tight transition-colors">
        {text}
      </h2>
  );
};

export default Header;