import { ReactNode } from "react";

export interface IAppModalProps {
  children?: ReactNode;
  icon?: ReactNode;
  btnName?: string;
  tooltipName?: string;
  headerName?: string;
}
