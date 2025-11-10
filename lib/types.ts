export interface Item {
  id: number;
  title: string;
  status: "pending" | "settled";
}

export type Status = "all" | "pending" | "settled";
