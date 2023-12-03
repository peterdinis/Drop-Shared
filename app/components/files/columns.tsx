import { COLOR_EXTENSION_MAP } from "@/app/lib/constants";
import { FileType } from "@/app/types/fileTypes";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import prettyBytes from "pretty-bytes";
import { FileIcon, defaultStyles } from "react-file-icon";

const getColorForExtension = (extension: string): string => {
  return COLOR_EXTENSION_MAP[extension] || "#000000";
};

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={getColorForExtension(extension)}
            // @ts-ignore
            {...defaultStyles(extension)}
          />
        </div>
      );
    },
  },
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
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },

  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => (
      <Link
        target="_blank"
        className="underline text-blue-500 hover:text-blue-700"
        href={renderValue() as string}
      >
        Download
      </Link>
    ),
  },
];
