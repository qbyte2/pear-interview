"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function StreamingMarkdown() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const startStreaming = async () => {
    setText("");
    setLoading(true);

    try {
      const response = await fetch("/api/stream-text");
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) return;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        setText(prev => prev + chunk);
      }
    } catch (error) {
      console.error("Streaming error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
      <h2 className="text-2xl font-bold text-black dark:text-zinc-50">
        🤖 AI Streaming Demo
      </h2>

      <button
        onClick={startStreaming}
        disabled={loading}
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
      >
        {loading ? "Generating..." : "Start Streaming"}
      </button>

      {text && (
        <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg overflow-auto">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {text}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
