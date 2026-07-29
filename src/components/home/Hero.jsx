import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAskAI = async () => {
    if (!query) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini", // you can change to another model
          messages: [{ role: "user", content: query }],
        }),
      });

      const data = await res.json();
      setResponse(data.choices?.[0]?.message?.content || "No response");
    } catch (err) {
      console.error("Error asking AI:", err);
      setResponse("Error contacting AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt=""
          initial={{ opacity: 0 }}
          animate={{
            opacity: current === index ? 1 : 0,
            scale: current === index ? 1.08 : 1,
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-emerald-300 backdrop-blur">
            <Sparkles size={16} />
            AI Powered Travel Assistant
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Explore Afghanistan
            <br />
            Like Never Before
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            Discover breathtaking landscapes, historical treasures, hidden
            valleys and unforgettable adventures with your AI travel companion.
          </p>

          {/* Search */}
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search
                  size={22}
                  className="absolute left-5 top-4 text-slate-300"
                />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Where should I travel in Afghanistan?"
                  className="w-full rounded-2xl bg-transparent py-4 pl-14 pr-5 text-white placeholder:text-slate-300 outline-none"
                />
              </div>

              <button
                onClick={handleAskAI}
                disabled={loading}
                className="rounded-2xl bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                {loading ? "Thinking..." : "Ask AI"}
              </button>
            </div>
          </div>

          {/* AI Response */}
          {response && (
            <div className="mx-auto mt-6 max-w-3xl rounded-xl bg-white/10 p-4 text-white backdrop-blur">
              {response}
            </div>
          )}

          {/* Categories */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {categories.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-emerald-600"
                >
                  <Icon size={18} />
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <button className="flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700">
              Explore Destinations
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur">
              <MapPin size={20} />
              Popular Places
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-7 rounded-full border-2 border-white flex justify-center">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}
