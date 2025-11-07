"use client";

import { useState } from "react";

interface TodoItemProps {
  task: string;
}

function TodoItem({ task }: TodoItemProps) {
  const [done, setDone] = useState(false);
  return (
    <div
      onClick={() => setDone(!done)}
      className="px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
    >
      {done ? "✅" : "⬜️"} {task}
    </div>
  );
}

export default function TodoList() {
  const [tasks, setTasks] = useState([
    "Buy milk",
    "Write code",
    "Read a book",
    "Go for a run",
    "Cook dinner",
    "Call mom"
  ]);

  const shuffleTasks = () => {
    setTasks([...tasks].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
      <h2 className="text-2xl font-bold text-black dark:text-zinc-50">
        Todo List
      </h2>
      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </div>
      <button
        onClick={shuffleTasks}
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
      >
        Shuffle
      </button>
    </div>
  );
}
