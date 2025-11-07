"use client";

import { useState } from "react";

interface TitleInputProps {
  onTitleChange: (title: string) => void;
}

export default function TitleInput({ onTitleChange }: TitleInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleCommit = () => {
    onTitleChange(inputValue);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="text-lg font-semibold text-black dark:text-zinc-50">
        Set Counter Title:
      </label>
      <div className="flex gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCommit()}
          placeholder="Enter title..."
          className="flex-1 px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCommit}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
        >
          Commit
        </button>
      </div>
    </div>
  );
}
