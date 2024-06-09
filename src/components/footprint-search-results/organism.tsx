import { type Footprint, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Footprint[]> {
  // Fetch data from your API here.
  return [
    {
      id: "BS001",
      sequence: "AGCTGAC",
      position: "chr1:100-200",
      kd: 1 * 10 ** -6,
      cellType: "GM12878",
    },
    // ...
  ];
}
const data = await getData();

export function FpSearchResultsTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
