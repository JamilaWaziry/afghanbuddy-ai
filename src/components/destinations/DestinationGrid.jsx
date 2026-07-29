import DestinationCard from "./DestinationCard";

export default function DestinationGrid({ destinations }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            {destinations.length} Destinations
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item) => (
            <DestinationCard key={item.id} destination={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
