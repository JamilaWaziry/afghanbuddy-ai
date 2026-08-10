import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { destinations } from "../../data/destinations";
import DestinationCard from "../destinations/DestinationCard";

const PREVIEW_COUNT = 6;

export default function FeaturedDestinations() {
  const preview = destinations.slice(0, PREVIEW_COUNT);
  const hasMore = destinations.length > PREVIEW_COUNT;

  return (
    <section className="bg-[#F9FAFB] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0E8388] sm:text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Explore
          </span>

          <h2
            className="mt-3 text-3xl text-[#101B2D] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Featured Destinations
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base md:text-lg">
            Discover Afghanistan's most beautiful places carefully selected by
            our AI travel assistant.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {preview.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              to="/destinations"
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[#0E8388] px-6 py-3 text-sm font-semibold text-[#0B5E63] transition hover:bg-[#0E8388] hover:text-white sm:px-8 sm:py-3.5 sm:text-base"
            >
              View All {destinations.length} Destinations
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
