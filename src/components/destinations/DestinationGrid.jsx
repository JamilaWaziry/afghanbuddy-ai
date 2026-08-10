import { SearchX } from "lucide-react";
import DestinationCard from "./DestinationCard";

export default function DestinationGrid({ destinations }) {
  return (
    <section className="bg-[#F9FAFB] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-8 flex items-center justify-between sm:mb-10">
          <h2
            className="text-2xl text-[#101B2D] sm:text-3xl"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            {destinations.length}{" "}
            {destinations.length === 1 ? "Destination" : "Destinations"}
          </h2>
        </div>

        {destinations.length === 0 ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4F3F2] text-[#0E8388]">
              <SearchX size={26} />
            </div>
            <h3
              className="mt-5 text-lg text-[#101B2D]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
            >
              No destinations match your filters
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Try a different search term, or reset the category and province
              filters to see more places.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3">
            {destinations.map((item) => (
              <DestinationCard key={item.id} destination={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
