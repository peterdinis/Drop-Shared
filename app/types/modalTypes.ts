import { ReactNode } from "react";

export interface IAppModalProps {
    children?: ReactNode;
    modalButtonText?: string | ReactNode;
    modalTitle: string;
  
}