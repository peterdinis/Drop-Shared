import { ReactNode, ChangeEvent } from "react";

export type ContainerType = {
  children?: ReactNode;
  className: string;
};

export type HeaderType = {
  text: string;
};

export type InputType = {
  id: string;
  value: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};
