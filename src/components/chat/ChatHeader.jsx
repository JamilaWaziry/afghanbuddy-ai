import { Bot, Trash2 } from "lucide-react";

export default function ChatHeader({ clearChat }) {
  return (
    <div className="flex items-center justify-between border-b bg-white p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow">
          <Bot />
        </div>

        <div>
          <h2 className="text-xl font-bold">AfghanBuddy AI</h2>

          <p className="text-sm text-emerald-600">Online</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          AI Ready
        </div>

        <button
          onClick={clearChat}
          className="rounded-lg border p-2 transition hover:bg-red-50"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
