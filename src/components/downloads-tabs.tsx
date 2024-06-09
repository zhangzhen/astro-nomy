import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/icons";
import type { Download } from "@/types";
import { Download as DownloadIcon } from "lucide-react"

interface DownloadsTabsProps {
  downloads: {
    human: Download[];
    mouse: Download[];
  };
}

interface TabsTriggerProps {
  value: string;
  label: string;
  icon: keyof typeof Icons;
}

const tabTriggers: TabsTriggerProps[] = [
  {
    value: "human",
    label: "Homo sapiens",
    icon: "human",
  },
  {
    value: "mouse",
    label: "Mus musculus",
    icon: "mouse",
  },
];

export function DownloadsTabs({ downloads }: DownloadsTabsProps) {
  return (
    <Tabs defaultValue="human" className="w-full">
      <TabsList className="!bg-muted/80 mt-2 mb-4">
        {tabTriggers.map((tab) => {
          const Icon = Icons[tab.icon || "human"];
          return (
            <TabsTrigger key={tab.value} value={tab.value}>
              <div className="flex gap-x-2 items-center">
                <Icon className="size-5" />
                <span className="hidden sm:inline-flex">{tab.label}</span>
              </div>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {Object.entries(downloads).map(([key, value]) => (
        <TabsContent key={key} value={key}>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Raw data
              </h2>
              <p className="text-sm text-muted-foreground">
                Sequencing data in fastq.gz format.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-y-7 lg:gap-x-7"
          >
            {value.map((download, i) => (
              <DownloadCard key={key + "-" + i} data={download} />
            ))}
          </div>
          <div className="mt-6 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Processed data
            </h2>
            <p className="text-sm text-muted-foreground">
              Processed data in bigwig format.
            </p>
          </div>
          <Separator className="my-4" />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function DownloadCard({ data }: { data: Download }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{data.title}</CardTitle>
          <Badge variant="secondary" radius="md" className="capitalize">{data.category}</Badge>
        </div>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      {/* Optional CardFooter */}
      <CardFooter className="flex justify-end gap-x-2">
        <a className={buttonVariants({ variant: "default", size: "sm" })}>
          <DownloadIcon className="mr-2 h-4 w-4" /> Read 1
        </a>
        <a className={buttonVariants({ variant: "default", size: "sm" })}>
          <DownloadIcon className="mr-2 h-4 w-4" /> Read 2
        </a>
      </CardFooter>
    </Card>
  );
}
