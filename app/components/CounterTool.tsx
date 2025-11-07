"use client";

import { useState } from "react";
import TitleInput from "@/app/components/TitleInput";
import Counter from "@/app/components/Counter";

export default function CounterTool() {
  const [title, setTitle] = useState("My Counter");

  return (
    <div className="flex flex-col gap-4 p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
      <TitleInput onTitleChange={setTitle} />
      <Counter title={title} />
    </div>
  );
}
