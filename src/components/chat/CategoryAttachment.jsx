import { Paperclip, X } from "lucide-react";

export default function CategoryAttachment({ category, onRemove }) {
  return (
    <div className="mx-4 mb-2 flex items-center justify-between rounded-2xl border border-[#0E8388]/20 bg-[#EAF6F5] px-4 py-3 sm:mx-6 lg:mx-8">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#0E8388] shadow-sm">
          <Paperclip size={14} />
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#0B5E63]/60">
            Attached category
          </p>

          <p className="mt-0.5 text-sm font-bold text-[#0B5E63]">{category}</p>
        </div>
      </div>

      <button
        onClick={onRemove}
        aria-label="Remove category"
        className="rounded-full p-2 text-[#0B5E63] transition hover:bg-white"
      >
        <X size={16} />
      </button>
    </div>
  );
}
