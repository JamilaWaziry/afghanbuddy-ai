import { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Star,
  CalendarDays,
  Heart,
  Sparkles,
  Camera,
  Mountain,
  Compass,
  ChevronRight,
} from "lucide-react";

import { destinations } from "../data/destinations";
import useFavorites from "../hooks/useFavorites";

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { favorites, toggleFavorite } = useFavorites();

  const destination = destinations.find((item) => item.id === Number(id));

  if (!destination) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F9F9] px-6">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E4F3F2] text-[#0E8388]">
            <MapPin size={28} />
          </div>

          <h1 className="text-3xl font-bold text-[#101B2D]">
            Destination not found
          </h1>

          <p className="mt-3 text-slate-500">
            The destination you are looking for does not exist.
          </p>

          <Link
            to="/destinations"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0E8388] px-5 py-3 font-semibold text-white transition hover:bg-[#0B5E63]"
          >
            <ArrowLeft size={18} />
            Back to destinations
          </Link>
        </div>
      </main>
    );
  }

  const isFavorite = favorites.includes(destination.id);

  const relatedDestinations = useMemo(() => {
    return destinations
      .filter(
        (item) =>
          item.id !== destination.id &&
          (item.category === destination.category ||
            item.province === destination.province),
      )
      .slice(0, 3);
  }, [destination]);

  const handlePlanTrip = () => {
    navigate("/trip-planner", {
      state: {
        destination: destination.name,
      },
    });
  };

  const handleAskAI = () => {
    navigate("/assistant", {
      state: {
        prompt: `Tell me about ${destination.name} and help me plan a trip there.`,
      },
    });
  };

  return (
    <main className="min-h-screen bg-[#F7F9F9]">
      <section className="relative h-[72vh] min-h-[560px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071421] via-[#071421]/35 to-black/10" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15"
            >
              <ArrowLeft size={17} />
              <span>Back to Explore</span>
            </Link>

            <button
              onClick={() => toggleFavorite(destination.id)}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
              className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition ${
                isFavorite
                  ? "border-red-300/40 bg-red-500 text-white"
                  : "border-white/20 bg-black/20 text-white hover:bg-white/15"
              }`}
            >
              <Heart size={19} className={isFavorite ? "fill-current" : ""} />
            </button>
          </div>

          <div className="max-w-4xl pb-4 text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
              <Compass size={14} />
              {destination.category}
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              {destination.name}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Discover one of Afghanistan's remarkable destinations and
              experience its natural beauty, history and culture.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2.5 text-sm backdrop-blur-md">
                <MapPin size={16} />
                {destination.province}
              </span>

              <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2.5 text-sm backdrop-blur-md">
                <Clock size={16} />
                {destination.duration}
              </span>

              <span className="flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/15 px-4 py-2.5 text-sm text-[#F8E6A8] backdrop-blur-md">
                <Star size={16} className="fill-[#C9A227] text-[#C9A227]" />
                {destination.rating}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-[#0E8388]" />

                <h2 className="text-3xl font-bold tracking-tight text-[#101B2D]">
                  About this destination
                </h2>
              </div>

              <p className="max-w-3xl text-[16px] leading-8 text-slate-600">
                {destination.description}
              </p>
            </div>

            {destination.highlights && destination.highlights.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-6 text-2xl font-bold text-[#101B2D]">
                  Highlights
                </h2>

                <div className="grid gap-3 sm:grid-cols-2">
                  {destination.highlights.map((highlight, index) => (
                    <div
                      key={highlight}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0E8388]/30 hover:shadow-lg"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4F3F2] text-[#0E8388] transition group-hover:bg-[#0E8388] group-hover:text-white">
                        {index % 3 === 0 ? (
                          <Mountain size={19} />
                        ) : index % 3 === 1 ? (
                          <Camera size={19} />
                        ) : (
                          <Compass size={19} />
                        )}
                      </div>

                      <span className="text-sm font-medium text-slate-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 rounded-3xl border border-[#0E8388]/10 bg-gradient-to-br from-[#E4F3F2] to-white p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0E8388] text-white shadow-md">
                  <Sparkles size={20} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#101B2D]">
                    Why visit {destination.name}?
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {destination.name} is a great choice for travelers
                    interested in {destination.category?.toLowerCase()}. Whether
                    you are exploring Afghanistan for the first time or looking
                    for a memorable experience, this destination offers
                    something worth discovering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              {/* Card heading */}
              <div className="border-b border-slate-100 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0E8388]">
                  Travel Information
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#101B2D]">
                  Plan your visit
                </h3>
              </div>

              <div className="space-y-1 p-6">
                <InfoRow
                  icon={<MapPin size={18} />}
                  label="Location"
                  value={destination.province}
                />

                <InfoRow
                  icon={<Clock size={18} />}
                  label="Recommended duration"
                  value={destination.duration}
                />

                <InfoRow
                  icon={<CalendarDays size={18} />}
                  label="Best time to visit"
                  value={destination.bestTime}
                />

                <div className="flex items-center gap-4 border-t border-slate-100 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227]">
                    <Star size={18} className="fill-current" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Rating</p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-semibold text-[#101B2D]">
                        {destination.rating}
                      </span>

                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={12}
                            className={
                              star <= Math.round(destination.rating)
                                ? "fill-[#C9A227] text-[#C9A227]"
                                : "text-slate-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-5">
                  <button
                    onClick={handlePlanTrip}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0E8388] to-[#0B5E63] px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#0E8388]/20 transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <CalendarDays size={17} />
                    Plan a Trip Here
                  </button>

                  <button
                    onClick={handleAskAI}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#0E8388]/20 bg-[#E4F3F2] px-5 py-3.5 text-sm font-semibold text-[#0B5E63] transition hover:bg-[#0E8388] hover:text-white"
                  >
                    <Sparkles size={17} />
                    Ask AfghanBuddy AI
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {relatedDestinations.length > 0 && (
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0E8388]">
                  Keep exploring
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#101B2D]">
                  You may also like
                </h2>
              </div>

              <Link
                to="/destinations"
                className="hidden items-center gap-1 text-sm font-semibold text-[#0E8388] transition hover:text-[#0B5E63] sm:flex"
              >
                View all
                <ChevronRight size={17} />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedDestinations.map((item) => (
                <Link
                  key={item.id}
                  to={`/destinations/${item.id}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <h3 className="text-xl font-bold text-white">
                        {item.name}
                      </h3>

                      <span className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                        <Star
                          size={12}
                          className="fill-[#C9A227] text-[#C9A227]"
                        />
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin size={14} className="text-[#0E8388]" />
                      {item.province}
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-[#0E8388]">
                        {item.category}
                      </span>

                      <span className="flex items-center gap-1 text-sm font-semibold text-[#101B2D]">
                        Explore
                        <ChevronRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              to="/destinations"
              className="mt-7 flex items-center justify-center gap-1 text-sm font-semibold text-[#0E8388] sm:hidden"
            >
              View all destinations
              <ChevronRight size={17} />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-b-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4F3F2] text-[#0E8388]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-slate-400">{label}</p>

        <p className="mt-1 truncate text-sm font-semibold text-[#101B2D]">
          {value || "Not available"}
        </p>
      </div>
    </div>
  );
}
