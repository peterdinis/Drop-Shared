"use client";

import { FC } from "react";

interface IHeaderProps {
  text: string;
}

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
  return (
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {text}
      </h2>
  );
};

export default Header;