import { Loader2, MapPinned } from "lucide-react";

export default function LoadingPlanner() {
  return (
    <div className="rounded-3xl bg-white p-12 shadow-xl">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-emerald-100 p-5">
          <MapPinned size={40} className="text-emerald-600" />
        </div>

        <Loader2 size={40} className="mt-6 animate-spin text-emerald-600" />

        <h2 className="mt-8 text-3xl font-bold">AfghanBuddy AI</h2>

        <p className="mt-3 text-slate-500">Planning your journey...</p>

        <div className="mt-10 h-3 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-full animate-pulse bg-emerald-600"></div>
        </div>

        <div className="mt-10 space-y-3 text-center text-slate-500">
          <p>🏔 Finding destinations...</p>

          <p>🧠 Creating itinerary...</p>

          <p>💰 Estimating budget...</p>

          <p>🎒 Preparing packing list...</p>
        </div>
      </div>
    </div>
  );
}
