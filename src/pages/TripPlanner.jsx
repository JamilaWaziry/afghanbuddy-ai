import { Sparkles, Map, Compass } from "lucide-react";

import PlannerForm from "../components/planner/PlannerForm";
import PlannerResult from "../components/planner/PlannerResult";
import LoadingPlanner from "../components/planner/LoadingPlanner";

import useTripPlanner from "../hooks/useTripPlanner";

const STAR_CLIP =
  "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)";

export default function TripPlanner() {
  const { trip, loading, createTrip } = useTripPlanner();

  return (
    <section className="min-h-screen bg-[#F9FAFB] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-10 text-center sm:mb-12">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0E8388]/20 bg-[#E4F3F2] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B5E63] sm:text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Sparkles size={14} />
            AfghanBuddy AI
          </div>

          <h1
            className="text-3xl leading-tight text-[#101B2D] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Build Your Perfect
            <span className="block text-[#0E8388]">Afghanistan Trip</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Tell us what you want to experience and AfghanBuddy AI will create a
            personalized travel plan.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Map size={13} className="text-[#0E8388]" />
              Local destinations
            </span>

            <span className="text-slate-300">•</span>

            <span className="flex items-center gap-1.5">
              <Compass size={13} className="text-[#C9A227]" />
              Personalized planning
            </span>

            <span className="text-slate-300">•</span>

            <span className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-[#C1502E]" />
              AI powered
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_1fr] lg:gap-8">
          <div>
            <PlannerForm onSubmit={createTrip} />
          </div>

          <div>
            {loading ? (
              <LoadingPlanner />
            ) : trip ? (
              <PlannerResult trip={trip} />
            ) : (
              <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center sm:min-h-[500px] sm:p-10">
                <div className="max-w-sm">
                  <div
                    className="mx-auto flex h-16 w-16 items-center justify-center bg-gradient-to-br from-[#0E8388] to-[#0B5E63] text-white shadow-lg shadow-[#0E8388]/25"
                    style={{ clipPath: STAR_CLIP }}
                  >
                    <Map size={26} />
                  </div>

                  <h2
                    className="mt-6 text-xl text-[#101B2D]"
                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                  >
                    Your trip will appear here
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Complete the planner and click{" "}
                    <strong className="text-[#0B5E63]">Generate My Trip</strong>{" "}
                    to let AfghanBuddy AI build your itinerary.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
