"use client";

import { useState } from "react";

interface CounterProps {
  title: string;
}

export default function Counter({ title }: CounterProps) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setTimeout(() => {
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold text-black dark:text-zinc-50">
        {title || "Counter"}
      </h2>
      <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
        {count}
      </div>
      <button
        onClick={handleIncrement}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        Increment
      </button>
    </div>
  );
}
