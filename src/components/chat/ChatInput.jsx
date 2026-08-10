import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Send, Mic } from "lucide-react";

export default function ChatInput({ onSend, selectedCategory, clearCategory }) {
  const location = useLocation();

  const [text, setText] = useState(location.state?.prompt || "");

  const [focused, setFocused] = useState(false);

  const handleSend = () => {
    if (!text.trim()) return;

    const finalMessage = selectedCategory
      ? `Category: ${selectedCategory}

User Request:
${text}`
      : text;

    onSend(finalMessage);

    if (clearCategory) {
      clearCategory();
    }

    setText("");
  };

  return (
    <div className="px-3 py-3 sm:px-5 sm:py-4">
      <div
        className={`
          mx-auto
          flex
          max-w-5xl
          items-center
          gap-2
          rounded-2xl
          border
          bg-white
          px-3
          py-2
          transition-all
          ${
            focused
              ? "border-[#0E8388] shadow-[0_8px_30px_-12px_rgba(14,131,136,0.45)]"
              : "border-slate-200 shadow-sm"
          }
        `}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Ask AfghanBuddy AI..."
          className="
            min-w-0
            flex-1
            bg-transparent
            px-2
            py-2
            text-sm
            text-[#1A2332]
            outline-none
            placeholder:text-slate-400
          "
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <button
          type="button"
          aria-label="Voice input"
          className="
            hidden
            rounded-full
            p-2
            text-slate-400
            transition
            hover:bg-[#E4F3F2]
            hover:text-[#0E8388]
            sm:block
          "
        >
          <Mic size={18} />
        </button>

        <button
          type="button"
          onClick={handleSend}
          disabled={!text.trim()}
          aria-label="Send message"
          className="
            shrink-0
            rounded-xl
            bg-gradient-to-br
            from-[#0E8388]
            to-[#0B5E63]
            p-2.5
            text-white
            shadow-sm
            transition
            hover:brightness-110
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <Send size={16} />
        </button>
      </div>

      <p className="mt-2 hidden text-center text-[10px] text-slate-400 sm:block">
        AfghanBuddy AI can help you discover destinations and plan your trip.
      </p>
    </div>
  );
}
