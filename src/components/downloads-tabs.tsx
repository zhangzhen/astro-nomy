import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/icons";
import type { DataFile } from "@/types";
import { DataFilesTable } from "@/components/data-tables/downloads/page";

interface DownloadsTabsProps {
  downloads: {
    human: {
      rawData: DataFile[];
      processedData: DataFile[];
    };
    mouse: {
      rawData: DataFile[];
      processedData: DataFile[];
    };
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
            </div>
          </div>
          <DataFilesTable dataFiles={value.rawData} />
          <div className="mt-6 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Processed data
            </h2>
          </div>
          <DataFilesTable dataFiles={value.processedData} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
