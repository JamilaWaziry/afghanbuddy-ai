import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";
import { ArrowLeft, Clock, MapPin, Star } from "lucide-react";

export default function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find((item) => item.id === Number(id));

  if (!destination) {
    return <div className="pt-40 text-center">Destination not found.</div>;
  }

  return (
    <section className="pt-24">
      <div className="relative h-[500px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-10 text-white">
          <Link
            to="/destinations"
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <h1 className="text-6xl font-bold">{destination.name}</h1>

          <div className="mt-5 flex flex-wrap gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {destination.province}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={18} />
              {destination.duration}
            </span>

            <span className="flex items-center gap-2">
              <Star size={18} />
              {destination.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-5 text-3xl font-bold">About this destination</h2>

        <p className="text-lg leading-8 text-slate-600">
          {destination.description}
        </p>
      </div>
    </section>
  );
}
