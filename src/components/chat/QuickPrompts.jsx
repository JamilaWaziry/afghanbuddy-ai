const prompts = [
  "🏞️ Nature",
  "🏔️ Adventure",
  "🏛️ History",
  "📸 Photography",
  "🎭 Culture",
];

export default function QuickPrompts({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 border-t bg-white p-5">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="rounded-full border px-5 py-2 transition hover:border-emerald-500 hover:bg-emerald-50"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
