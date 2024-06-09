import { type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Footprint = {
  id: string
  sequence: string
  position: string
  kd: number
  cellType: string
}

export const columns: ColumnDef<Footprint>[] = [
  {
    accessorKey: "id",
    header: "Footprint ID",
  },
  {
    accessorKey: "sequence",
    header: "Sequence",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "kd",
    header: () => <div className="text-right">Kd Value</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("kd"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "cellType",
    header: "Cell Type",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const footprint = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(footprint.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

