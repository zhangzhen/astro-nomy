import type { DataFile } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

interface DataFilesTableProps {
  dataFiles: DataFile[];
}

export function DataFilesTable({ dataFiles }: DataFilesTableProps) {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={dataFiles} />
    </div>
  )
}
