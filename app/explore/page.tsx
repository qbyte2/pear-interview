import Link from "next/link";
import { Suspense } from "react";
import ExploreContent from "@/app/components/ExploreContent";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { getItems } from "@/lib/items";
import type { Status } from "@/lib/types";

interface PageProps {
  searchParams: Promise<{ tab?: string }>;
}

// Async Server Component that fetches initial data
async function DataContent({ tab }: { tab: Status }) {
  const items = await getItems(tab, 0);
  return <ExploreContent key={tab} initialItems={items} tab={tab} />;
}

const tabs: { value: Status; label: string }[] = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "settled", label: "Settled" },
];

export default async function Explore({ searchParams }: PageProps) {
  const params = await searchParams;
  const activeTab = (params.tab as Status) || "all";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start gap-8 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 w-full text-center">
          Explore
        </h1>

        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Tabs */}
        <div className="flex gap-2 border-b border-zinc-200 dark:border-zinc-700 w-full">
          {tabs.map((tab) => (
            <Link
              key={tab.value}
              href={`/explore?tab=${tab.value}`}
              className={`px-4 py-2 font-medium transition-all ${
                activeTab === tab.value
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Content with Suspense - key changes when tab changes to trigger re-suspension */}
        <Suspense
          key={activeTab}
          fallback={
            <div className="w-full flex items-center justify-center py-12">
              <LoadingSpinner />
            </div>
          }
        >
          <DataContent tab={activeTab} />
        </Suspense>
      </main>
    </div>
  );
}
