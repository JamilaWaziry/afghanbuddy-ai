import {
  Mountain,
  Landmark,
  Trees,
  Camera,
  Compass,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const suggestions = [
  {
    text: "Plan a 3-day trip to Bamyan",
    icon: Mountain,
    label: "Trip planning",
  },
  {
    text: "Recommend historical places",
    icon: Landmark,
    label: "History",
  },
  {
    text: "Find peaceful nature spots",
    icon: Trees,
    label: "Nature",
  },
  {
    text: "Suggest photography destinations",
    icon: Camera,
    label: "Photography",
  },
];

export default function EmptyState({ onSuggestionClick, selectedCategory }) {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0E8388]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 py-12 sm:px-8 lg:px-10">
        <div className="mb-5 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E4F3F2] text-[#0E8388]">
            <Sparkles size={15} />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0E8388]">
            Your AI Travel Companion
          </span>
        </div>

        <h1
          className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#101B2D] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Discover Afghanistan,
          <br />
          <span className="text-[#0E8388]">one journey at a time.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Tell AfghanBuddy what kind of experience you want. I'll help you
          discover destinations, build itineraries, estimate budgets, and find
          unforgettable places across Afghanistan.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Personalized Trips",
            "Local Destinations",
            "Smart Recommendations",
            "Travel Planning",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Start exploring
            </p>

            <Compass size={15} className="text-slate-300" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {suggestions.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.text}
                  onClick={() => onSuggestionClick(item.text)}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0E8388]/40 hover:shadow-xl hover:shadow-[#0E8388]/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E4F3F2] text-[#0E8388] transition-all duration-300 group-hover:bg-[#0E8388] group-hover:text-white">
                    <Icon size={19} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>

                    <span className="mt-1 block text-sm font-semibold text-[#1A2332]">
                      {item.text}
                    </span>
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#0E8388]"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
