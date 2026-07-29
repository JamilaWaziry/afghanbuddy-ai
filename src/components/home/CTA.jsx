import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white"
        >
          Ready To Explore Afghanistan?
        </motion.h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/80">
          Let AfghanBuddy AI create your perfect journey with intelligent travel
          recommendations, smart itineraries, and local insights.
        </p>

        <div className="mt-12">
          <button className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-700 transition hover:scale-105">
            Start Planning
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
