export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-zinc-200 dark:border-zinc-700 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading...</p>
    </div>
  );
}
