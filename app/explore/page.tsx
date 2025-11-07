import { fetchDynamicData } from "@/lib/fetchData";

export default async function Explore() {
  await fetchDynamicData();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
          Explore
        </h1>
        <div className="grid grid-cols-2 gap-4 w-full">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-zinc-400">#{item}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
