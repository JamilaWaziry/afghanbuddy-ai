import { Heart, MapPin, Clock, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STAR_CLIP =
  "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)";

const CATEGORY_STYLES = {
  Nature: { bg: "bg-[#E4F3F2]", text: "text-[#0B5E63]" },
  History: { bg: "bg-[#101B2D]/8", text: "text-[#101B2D]" },
  Culture: { bg: "bg-[#C9A227]/15", text: "text-[#8A6C10]" },
  Adventure: { bg: "bg-[#C1502E]/10", text: "text-[#C1502E]" },
  Religious: { bg: "bg-[#C9A227]/15", text: "text-[#8A6C10]" },
};

const DEFAULT_CATEGORY_STYLE = { bg: "bg-slate-100", text: "text-slate-600" };

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

  const categoryStyle =
    CATEGORY_STYLES[destination.category] || DEFAULT_CATEGORY_STYLE;

  return (
    <Link to={`/destinations/${destination.id}`}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 transition-shadow hover:shadow-2xl hover:shadow-[#0E8388]/10"
      >
        <div className="relative overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
            {destination.ai ? (
              <div
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-md"
                style={{
                  background:
                    "linear-gradient(115deg, #0E8388 0%, #0B5E63 100%)",
                }}
              >
                <Sparkles size={12} />
                AI Recommended
              </div>
            ) : (
              <span />
            )}

            <button
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite();
              }}
              aria-label="Toggle favorite"
              className="rounded-full bg-white/90 p-2 shadow-md backdrop-blur transition hover:bg-white"
            >
              <Heart
                size={16}
                className={
                  favorite ? "fill-[#C1502E] text-[#C1502E]" : "text-slate-500"
                }
              />
            </button>
          </div>

          {destination.rating && (
            <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-[#101B2D] shadow-md backdrop-blur">
              <Star size={12} className="fill-[#C9A227] text-[#C9A227]" />
              {destination.rating}
            </div>
          )}
        </div>

        <div className="space-y-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="text-lg leading-snug text-[#101B2D]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
            >
              {destination.name}
            </h3>

            <span className="mt-0.5 flex h-2 w-2 shrink-0 items-center justify-center">
              <span
                className="h-2 w-2 bg-[#0E8388]"
                style={{ clipPath: STAR_CLIP }}
              />
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin size={14} className="text-[#C1502E]" />
            {destination.province}
          </div>

          <p className="line-clamp-2 text-sm leading-6 text-slate-500">
            {destination.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${categoryStyle.bg} ${categoryStyle.text}`}
            >
              {destination.category}
            </span>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              {destination.duration && (
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {destination.duration}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default DestinationCard;
