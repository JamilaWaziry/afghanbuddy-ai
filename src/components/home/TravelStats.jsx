import { MapPinned, Mountain, Users, Bot } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import StatCard from "../common/StatCard";

export default function TravelStats() {
  return (
    <section className="relative overflow-hidden bg-[#101B2D] py-14 sm:py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px), repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          title="Afghanistan At A Glance"
          subtitle="Beautiful destinations waiting to be explored."
          dark
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-4">
          <StatCard icon={MapPinned} value="34" title="Provinces" />
          <StatCard icon={Mountain} value="300+" title="Tourist Attractions" />
          <StatCard icon={Users} value="5K+" title="Future Travelers" />
          <StatCard icon={Bot} value="AI" title="Travel Assistant" />
        </div>
      </div>
    </section>
  );
}
