import {
  CalendarDays,
  CheckCircle2,
  Compass,
  DollarSign,
  Loader2,
  MapPin,
  Sparkles,
} from "lucide-react";

const STAR_CLIP =
  "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)";

export default function LoadingPlanner() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col items-center justify-center py-12 text-center sm:py-14">
        <div
          className="relative flex h-20 w-20 items-center justify-center bg-gradient-to-br from-[#0E8388] to-[#0B5E63] text-white shadow-lg shadow-[#0E8388]/25"
          style={{ clipPath: STAR_CLIP }}
        >
          <Compass size={32} className="animate-[spin_3s_linear_infinite]" />

          <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#C9A227] text-white shadow">
            <Sparkles size={13} />
          </div>
        </div>

        <h2
          className="mt-6 text-xl text-[#101B2D] sm:text-2xl"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
        >
          Creating your journey
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          AfghanBuddy AI is preparing a personalized travel plan.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Loader2 size={20} className="animate-spin text-[#0E8388]" />
          <span className="text-sm font-medium text-[#0B5E63]">
            Building itinerary...
          </span>
        </div>

        <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          <LoadingStep icon={<MapPin size={17} />} text="Destinations" />
          <LoadingStep icon={<CalendarDays size={17} />} text="Itinerary" />
          <LoadingStep icon={<DollarSign size={17} />} text="Budget" />
          <LoadingStep icon={<CheckCircle2 size={17} />} text="Final plan" />
        </div>
      </div>
    </div>
  );
}

function LoadingStep({ icon, text }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#0E8388] shadow-sm">
        {icon}
      </div>
      <p className="mt-2 text-xs font-medium text-slate-500">{text}</p>
    </div>
  );
}
