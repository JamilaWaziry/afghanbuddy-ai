import { destinations } from "../../data/destinations";
import DestinationCard from "../destinations/DestinationCard";

export default function FeaturedDestinations() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Explore
          </span>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Featured Destinations
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover Afghanistan's most beautiful places carefully selected by
            our AI travel assistant.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
