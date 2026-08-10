import { Bot } from "lucide-react";

const STAR_CLIP =
  "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)";

export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center bg-gradient-to-br from-[#0E8388] to-[#075E63] text-white shadow-lg sm:h-10 sm:w-10"
        style={{ clipPath: STAR_CLIP }}
      >
        <Bot size={17} />
      </div>

      <div className="rounded-2xl rounded-tl-md border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <div className="mb-2 text-xs font-semibold text-slate-500">
          AfghanBuddy AI is thinking...
        </div>

        <div className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 animate-bounce bg-[#0E8388]"
            style={{ clipPath: STAR_CLIP }}
          />

          <span
            className="h-2.5 w-2.5 animate-bounce bg-[#C9A227] [animation-delay:150ms]"
            style={{ clipPath: STAR_CLIP }}
          />

          <span
            className="h-2.5 w-2.5 animate-bounce bg-[#C1502E] [animation-delay:300ms]"
            style={{ clipPath: STAR_CLIP }}
          />
        </div>
      </div>
    </div>
  );
}
