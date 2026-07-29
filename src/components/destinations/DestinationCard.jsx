import { Heart, MapPin, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorite(saved.includes(destination.id));
  }, [destination.id]);

  const toggleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;

    if (saved.includes(destination.id)) {
      updated = saved.filter((id) => id !== destination.id);
      setFavorite(false);
    } else {
      updated = [...saved, destination.id];
      setFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Link to={`/destinations/${destination.id}`}>
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl"
      >
        <div className="relative overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {destination.ai && (
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
              <Sparkles size={14} />
              AI Recommended
            </div>
          )}

          <button
            onClick={toggleFavorite}
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur"
          >
            <Heart
              size={18}
              className={`transition ${
                favorite ? "fill-red-500 text-red-500" : "text-slate-600"
              }`}
            />
          </button>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{destination.name}</h3>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              {destination.bestTime}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <MapPin size={16} />

            {destination.region}
          </div>

          <p className="text-slate-600">{destination.description}</p>

          <div className="flex items-center justify-between">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
              {destination.category}
            </span>

            <div className="flex items-center gap-2 text-slate-500">
              <Clock size={16} />
              {destination.duration}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default DestinationCard;
