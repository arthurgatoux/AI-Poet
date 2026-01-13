"use client"

import { useState } from "react";
import { generatePoem } from "./actions";

export default function Home() {

  const [topic, setTopic] = useState<string>('');
  const [poem, setPoem] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await generatePoem(topic);
    setPoem(result);
  };

  return (
    <main className="p-10 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">The AI Poet 🪶</h1>

      <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="border p-2 rounded"
        value={topic}
      onChange={(e) => setTopic(e.target.value)}
      placeholder="A subject (e.g. love, code...)"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Generate
      </button>
    </form>
  {
    poem && (
      <div className="mt-4 p-4 border bg-gray-50 rounded italic whitespace-pre-wrap">
        {poem}
      </div>
    )
  }
  </main >
);
}
