"use client";

import { useState } from "react";
import { getItems } from "@/lib/items";
import type { Item, Status } from "@/lib/types";

interface ExploreContentProps {
  initialItems: Item[];
  tab: Status;
}

export default function ExploreContent({ initialItems, tab }: ExploreContentProps) {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [page, setPage] = useState(1); // Start from page 1 since page 0 is initialItems
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const newItems = await getItems(tab, page);

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems([...items, ...newItems]);
        setPage(page + 1);
      }
    } catch (error) {
      console.error("Failed to load more items:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg flex flex-col items-center justify-center gap-2 p-4"
          >
            <span className="text-2xl font-bold text-zinc-700 dark:text-zinc-300">
              {item.title}
            </span>
            <span
              className={`text-sm px-2 py-1 rounded ${
                item.status === "pending"
                  ? "bg-yellow-200 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                  : "bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="w-full flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
}
