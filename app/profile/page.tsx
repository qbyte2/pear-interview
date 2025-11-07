import { fetchDynamicData } from "@/lib/fetchData";

export default async function Profile() {
  await fetchDynamicData();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-5xl">👤</span>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            John Doe
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
            john.doe@example.com
          </p>
        </div>
        <div className="w-full space-y-4">
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Posts</div>
            <div className="text-2xl font-bold text-black dark:text-zinc-50">128</div>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Followers</div>
            <div className="text-2xl font-bold text-black dark:text-zinc-50">1,234</div>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Following</div>
            <div className="text-2xl font-bold text-black dark:text-zinc-50">567</div>
          </div>
        </div>
      </main>
    </div>
  );
}
