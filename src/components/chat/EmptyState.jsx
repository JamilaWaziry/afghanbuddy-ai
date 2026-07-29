import { Sparkles, Mountain, Trees, Landmark, Camera } from "lucide-react";

const suggestions = [
  "Plan a 3-day trip to Bamyan",
  "Recommend historical places",
  "Find peaceful nature spots",
  "Suggest photography destinations",
];

export default function EmptyState({ onSuggestionClick }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-10 text-center">
      <div className="mb-8 rounded-full bg-emerald-100 p-8">
        <Sparkles className="text-emerald-600" size={44} />
      </div>

      <h2 className="text-4xl font-bold">
        Explore Afghanistan
        <br />
        with AI
      </h2>

      <p className="mt-5 max-w-xl text-slate-600">
        Ask about destinations, history, nature, culture, itineraries and hidden
        gems.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => onSuggestionClick(item)}
            className="rounded-2xl border bg-white p-5 text-left shadow hover:border-emerald-500 hover:shadow-lg transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
