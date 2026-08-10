import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20"
      style={{
        background: "linear-gradient(115deg, #101B2D 0%, #0E8388 85%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px), repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px)",
        }}
      />
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
        >
          Ready To Explore Afghanistan?
        </motion.h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:mt-6 sm:text-base md:text-lg">
          Let AfghanBuddy AI create your perfect journey with intelligent travel
          recommendations, smart itineraries, and local insights.
        </p>

        <div className="mt-8 sm:mt-10">
          <button className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0B5E63] transition hover:scale-105 sm:px-8 sm:py-4 sm:text-lg">
            Start Planning
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
