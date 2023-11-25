import { IFolderDetailType } from "@/app/types/folderTypes";
import {atom} from "recoil";

export const folderAtom = atom({
    key: "folderAtomInfo",
    default: {} as IFolderDetailType 
})