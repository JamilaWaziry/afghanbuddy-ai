import { Link } from "react-router-dom";
import { Heart, MapPin, Star, Clock, ArrowRight, Compass } from "lucide-react";

import { destinations } from "../data/destinations";
import useFavorites from "../hooks/useFavorites";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteDestinations = destinations.filter((destination) =>
    favorites.includes(destination.id),
  );

  return (
    <main className="min-h-screen bg-[#F7F8F6]">
      <section className="relative overflow-hidden bg-[#0B1626] px-6 pb-16 pt-28 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0E8388]/20 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-2 text-sm text-[#F3D98C]">
            <Heart size={15} className="fill-current" />
            Your Collection
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Places You <span className="text-[#4FC3C7]">Love</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Keep your favorite Afghan destinations in one place and come back
            whenever you're ready to plan your next adventure.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
            <Heart size={17} className="text-[#C9A227]" />
            <span>
              {favoriteDestinations.length}{" "}
              {favoriteDestinations.length === 1
                ? "destination saved"
                : "destinations saved"}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {favoriteDestinations.length === 0 ? (
          <EmptyFavorites />
        ) : (
          <>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#0E8388]">
                  Saved destinations
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#101B2D] sm:text-3xl">
                  Your Favorite Places
                </h2>
              </div>

              <Link
                to="/destinations"
                className="hidden items-center gap-2 text-sm font-semibold text-[#0E8388] transition hover:text-[#0B5E63] sm:flex"
              >
                Explore more
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favoriteDestinations.map((destination) => (
                <FavoriteCard
                  key={destination.id}
                  destination={destination}
                  onRemove={() => toggleFavorite(destination.id)}
                />
              ))}
            </div>

            <Link
              to="/destinations"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#0E8388] shadow-sm transition hover:border-[#0E8388] sm:hidden"
            >
              Explore more destinations
              <ArrowRight size={17} />
            </Link>
          </>
        )}
      </section>
    </main>
  );
}

function FavoriteCard({ destination, onRemove }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-60 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <button
          onClick={onRemove}
          aria-label={`Remove ${destination.name} from favorites`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-red-500 shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white"
        >
          <Heart size={18} className="fill-current" />
        </button>

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          {destination.category}
        </span>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-1.5 text-xs text-white/80">
            <MapPin size={13} />
            {destination.province}
          </div>

          <h3 className="mt-1 text-2xl font-bold">{destination.name}</h3>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded-full bg-[#C9A227]/10 px-3 py-1.5 text-sm font-semibold text-[#8A6C10]">
            <Star size={14} className="fill-[#C9A227] text-[#C9A227]" />
            {destination.rating}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock size={14} />
            {destination.duration}
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
          {destination.description}
        </p>

        <Link
          to={`/destinations/${destination.id}`}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#0E8388] py-3 text-sm font-semibold text-white transition hover:bg-[#0B5E63]"
        >
          Explore Destination
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function EmptyFavorites() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center py-16 text-center">
      <div className="relative mb-7">
        <div className="absolute inset-0 rounded-full bg-[#0E8388]/10 blur-2xl" />

        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#E4F3F2]">
          <Heart size={38} className="text-[#0E8388]" />
        </div>
      </div>

      <p className="text-sm font-semibold uppercase tracking-widest text-[#0E8388]">
        Nothing saved yet
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#101B2D]">
        Start building your collection
      </h2>

      <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
        Discover beautiful places across Afghanistan and save the destinations
        you would love to visit.
      </p>

      <Link
        to="/destinations"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0E8388] to-[#0B5E63] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0E8388]/20 transition hover:-translate-y-0.5 hover:brightness-110"
      >
        <Compass size={18} />
        Explore Destinations
        <ArrowRight size={17} />
      </Link>
    </div>
  );
}
