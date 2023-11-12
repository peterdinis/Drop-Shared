export interface IFolder {
    folderName: string;
    id: string | number;
}

export interface IFile {
    imageLink: string;
    imageName: string;
    isFolder: boolean;
    userEmail: string;
}