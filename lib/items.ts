"use server";

import { fetchDynamicData } from "@/lib/fetchData";
import type { Item, Status } from "@/lib/types";

export async function getItems(tab: Status, page: number): Promise<Item[]> {
  // Simulate API delay
  await fetchDynamicData();

  // Generate items based on page number
  const startId = page * 8 + 1;
  const items: Item[] = [];

  for (let i = 0; i < 8; i++) {
    const id = startId + i;
    items.push({
      id,
      title: `Task ${String.fromCharCode(64 + id)}`,
      status: id % 2 === 0 ? "settled" : "pending"
    });
  }

  // Filter by tab
  if (tab === "pending") {
    return items.filter(item => item.status === "pending");
  } else if (tab === "settled") {
    return items.filter(item => item.status === "settled");
  }

  return items;
}
