import { Bot, User, Copy } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[75%] rounded-3xl p-6 shadow-lg transition-all ${
          isUser ? "bg-emerald-600 text-white" : "border bg-white"
        }`}
      >
        <div className="mb-4 flex items-center gap-2 font-semibold">
          {isUser ? (
            <>
              <User size={18} />
              You
            </>
          ) : (
            <>
              <Bot size={18} />
              AfghanBuddy AI
            </>
          )}
        </div>

        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>

        {!isUser && (
          <button
            onClick={() => navigator.clipboard.writeText(message.content)}
            className="mt-5 flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600"
          >
            <Copy size={16} />
            Copy
          </button>
        )}
      </div>
    </motion.div>
  );
}
