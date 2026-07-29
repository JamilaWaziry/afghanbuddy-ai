import ReactMarkdown from "react-markdown";

export default function PlannerResult({ trip }) {
  if (!trip) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-700">
            Your AI itinerary will appear here
          </h2>

          <p className="mt-4 text-slate-500">
            Fill in the form and let AfghanBuddy AI create your perfect trip.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl">
      <ReactMarkdown className="prose prose-lg max-w-none prose-headings:text-emerald-700 prose-a:text-emerald-600">
        {trip}
      </ReactMarkdown>
    </div>
  );
}
