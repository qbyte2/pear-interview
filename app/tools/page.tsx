import CounterTool from "@/app/components/CounterTool";
import TodoList from "@/app/components/TodoList";
import TimeAPI from "@/app/components/TimeAPI";
import AuthForm from "@/app/components/AuthForm";
import StreamingMarkdown from "@/app/components/StreamingMarkdown";

export default function ToolsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col gap-8 py-32 px-8">
        <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50">
          Tools
        </h1>

        <CounterTool />
        <TodoList />
        <TimeAPI />
        <AuthForm />
        <StreamingMarkdown />
      </main>
    </div>
  );
}
