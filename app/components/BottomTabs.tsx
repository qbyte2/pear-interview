"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Profile", path: "/profile" },
  { name: "Tools", path: "/tools" },
];

export default function BottomTabs() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 z-50">
      <div className="flex justify-around items-center h-16 max-w-3xl mx-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <div className="text-xs font-medium">{tab.name}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
