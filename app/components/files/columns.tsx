import { FileType } from "@/app/types/fileTypes";
import { ColumnDef } from "@tanstack/react-table";
import prettyBytes from 'pretty-bytes';

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "filename",
    header: "Filename",
  },

  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },

  {
    accessorKey: "size",
    header: "Size",
    cell: ({renderValue, ...props}) => {
      return <span>{prettyBytes(renderValue() as number)}</span>
    }
  }
];
