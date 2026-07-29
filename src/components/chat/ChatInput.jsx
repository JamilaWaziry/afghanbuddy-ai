import { useState } from "react";
import { Send, Mic, Paperclip } from "lucide-react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  };

  return (
    <div className="border-t bg-white p-6">
      <div className="flex items-center gap-3 rounded-[28px] border bg-white px-8 py-5 shadow-xl">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Ask AfghanBuddy AI..."
          className="flex-1 outline-none"
        />

        <button className="text-slate-500 hover:text-emerald-600">
          <Paperclip size={20} />
        </button>

        <button className="text-slate-500 hover:text-emerald-600">
          <Mic size={20} />
        </button>

        <button
          onClick={handleSend}
          className="rounded-full bg-emerald-600 p-3 text-white transition hover:bg-emerald-700"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
