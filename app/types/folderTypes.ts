export type IFolderType = {
  id?: string;
  name: string;
  createdBy?: string;
};

export interface IFolderCardProps {
  linkName?: string;
  name?: string;
}

export type IFolderDetailType = {
  createdBy: {
    stringVaue: string
  },
  id: {
    stringValue: string;
  },
  name: {
    stringValue: string;
  }
}