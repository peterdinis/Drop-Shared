import { FC } from "react";
import SmallHeader from "../shared/SmallHeader";
import { Button } from "@/components/ui/button";
import { DataTable } from "./TableWrapper";

const FileTable: FC = () => {
  return (
    <div className="border-t">
      <SmallHeader text="Your uploaded files" />
      <div className="mt-3">
        <section className="container space-y-5">
          <Button>Sort  by</Button>
          <DataTable columns={[]} data={[]} />
        </section>
      </div>
    </div>
  );
};

export default FileTable;
