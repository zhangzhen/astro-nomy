import { type ColumnDef } from "@tanstack/react-table"
import { Download } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import type { DataFile } from "@/types";

export const columns: ColumnDef<DataFile>[] = [
  {
    accessorKey: "fileName",
    header: "File Name",
    cell: ({ cell }) => {
      const row = cell.row.original;
      return <div className="flex items-center gap-x-2"><a
        href={row.downloadUrl}
        className={buttonVariants({ variant: "secondary", size: "sm" })}
      ><Download className="h-4 w-4" />
      </a>{cell.getValue()}</div>
    },
  },
  {
    accessorKey: "fileSize",
    header: "File Size",
  },
  {
    accessorKey: "sample",
    header: "Sample",
  },
  {
    accessorKey: "sampleClass",
    header: "Sample Class",
  },
  {
    accessorKey: "assay",
    header: "Assay",
  },
]

