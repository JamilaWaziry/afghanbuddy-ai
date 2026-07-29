import PlannerForm from "../components/planner/PlannerForm";
import PlannerResult from "../components/planner/PlannerResult";
import LoadingPlanner from "../components/planner/LoadingPlanner";

import useTripPlanner from "../hooks/useTripPlanner";

export default function TripPlanner() {
  const { trip, loading, createTrip } = useTripPlanner();

  return (
    <section className="min-h-screen bg-slate-100 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold">AI Trip Planner</h1>

          <p className="mt-4 text-lg text-slate-600">
            Let AfghanBuddy AI create your perfect Afghanistan adventure.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
          <PlannerForm onSubmit={createTrip} />

          {loading ? <LoadingPlanner /> : <PlannerResult trip={trip} />}
        </div>
      </div>
    </section>
  );
}
