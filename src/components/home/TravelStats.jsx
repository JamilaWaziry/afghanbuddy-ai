import { MapPinned, Mountain, Users, Bot } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import StatCard from "../common/StatCard";

export default function TravelStats() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Afghanistan At A Glance"
          subtitle="Beautiful destinations waiting to be explored."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <StatCard icon={MapPinned} value="34" title="Provinces" />

          <StatCard icon={Mountain} value="300+" title="Tourist Attractions" />

          <StatCard icon={Users} value="5K+" title="Future Travelers" />

          <StatCard icon={Bot} value="AI" title="Travel Assistant" />
        </div>
      </div>
    </section>
  );
}
