"use client";

import { useState } from "react";

export default function TimeAPI() {
  const [time, setTime] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const fetchTime = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://timeapi.io/api/time/current/zone?timeZone=Asia/Shanghai");
      const data = await response.json();
      setTime(new Date(data.dateTime).toLocaleString());
    } catch (err) {
      setError("Failed to fetch time");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
      <h2 className="text-2xl font-bold text-black dark:text-zinc-50">
        🕐 Current Time
      </h2>

      <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg">
        {time && !loading && (
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Current Time:
            </p>
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {time}
            </p>
          </div>
        )}

        {loading && (
          <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
            Fetching time...
          </p>
        )}

        {error && (
          <p className="text-center text-red-600 dark:text-red-400 mb-4">
            {error}
          </p>
        )}

        <button
          onClick={fetchTime}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Time
        </button>
      </div>
    </div>
  );
}
