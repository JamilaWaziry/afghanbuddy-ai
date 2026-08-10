import { Bot, Sparkles, ShieldCheck, Trash2 } from "lucide-react";

const STAR_CLIP =
  "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)";

export default function ChatHeader({ onClear }) {
  return (
    <div
      className="
        relative
        shrink-0
        overflow-hidden
        px-4
        py-4
        sm:px-6
        sm:py-5
      "
      style={{
        background:
          "linear-gradient(115deg, #0B1626 0%, #0E8388 78%, #12A0A5 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px), repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px)",
        }}
      />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              bg-white/15
              text-white
              shadow-lg
              backdrop-blur
              sm:h-12
              sm:w-12
            "
            style={{
              clipPath: STAR_CLIP,
            }}
          >
            <Bot size={21} />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="truncate text-lg font-bold text-white sm:text-xl">
                AfghanBuddy AI
              </h2>

              <span className="hidden rounded-full border border-[#C9A227]/50 bg-[#C9A227]/20 px-2 py-0.5 text-[9px] font-semibold uppercase text-[#F3D98C] sm:block">
                Beta
              </span>
            </div>

            <p className="mt-0.5 flex items-center gap-1.5 truncate text-[10px] uppercase tracking-wider text-white/60 sm:text-[11px]">
              <ShieldCheck size={12} />
              AI-powered travel planning
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white/80 sm:flex">
            <Sparkles size={12} className="text-[#F3D98C]" />
            AI Ready
          </div>

          {onClear && (
            <button
              onClick={onClear}
              aria-label="Clear conversation"
              className="
                rounded-lg
                border
                border-white/10
                bg-white/10
                p-2
                text-white
                transition
                hover:bg-white/20
              "
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
