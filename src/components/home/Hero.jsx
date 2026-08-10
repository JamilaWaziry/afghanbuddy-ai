import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Search,
  MapPin,
  Mountain,
  Trees,
  Landmark,
  Waves,
} from "lucide-react";

import hero1 from "../../assets/images/hero/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";
import hero4 from "../../assets/images/hero/hero4.jpg";
import hero5 from "../../assets/images/hero/hero5.jpg";

const images = [hero1, hero2, hero3, hero4, hero5];

const categories = [
  { name: "Nature", icon: Trees },
  { name: "Mountains", icon: Mountain },
  { name: "History", icon: Landmark },
  { name: "Lakes", icon: Waves },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleAskAI = () => {
    if (!query.trim()) return;

    navigate("/assistant", {
      state: {
        prompt: query,
      },
    });
  };

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden sm:min-h-[75vh]">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt=""
          animate={{
            opacity: current === index ? 1 : 0,
            scale: current === index ? 1.06 : 1,
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,27,45,0.55) 0%, rgba(16,27,45,0.72) 60%, rgba(16,27,45,0.88) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#F3D98C] backdrop-blur sm:text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Sparkles size={14} />
            AI Powered Travel Assistant
          </span>

          <h1
            className="mt-6 text-[2.25rem] leading-[1.1] text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Explore Afghanistan
            <br />
            <span className="text-[#5FC9CC]">Like Never Before</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg">
            Discover breathtaking landscapes, historical treasures, hidden
            valleys and unforgettable adventures with your AI travel companion.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-xl sm:mt-10 sm:p-3">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <div className="relative flex-1">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 sm:left-5"
                />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAskAI();
                  }}
                  placeholder="Where should I travel in Afghanistan?"
                  className="w-full rounded-2xl bg-transparent py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-300 outline-none sm:py-3.5 sm:pl-12 sm:pr-5 sm:text-base"
                />
              </div>

              <button
                onClick={handleAskAI}
                className="rounded-2xl bg-gradient-to-r from-[#0E8388] to-[#0B5E63] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0E8388]/30 transition hover:brightness-110 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Ask AI
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => setQuery(item.name)}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs text-white backdrop-blur transition hover:border-[#0E8388] hover:bg-[#0E8388]/80 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <Icon size={15} />
                  {item.name}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
            <button className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#C1502E] to-[#A33F22] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C1502E]/25 transition hover:brightness-110 sm:px-7 sm:py-3.5 sm:text-base">
              Explore Destinations
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur transition hover:bg-white/15 sm:px-7 sm:py-3.5 sm:text-base">
              <MapPin size={18} />
              Popular Places
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2 sm:mt-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-6 bg-[#5FC9CC]"
                    : "w-1.5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
