import { Bot, Compass, ShieldCheck, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

import SectionTitle from "../common/SectionTitle";

const features = [
  {
    icon: Bot,
    title: "AI Travel Guide",
    description: "Ask anything and receive intelligent travel recommendations.",
  },
  {
    icon: Compass,
    title: "Smart Itineraries",
    description: "Generate personalized travel plans in seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Information",
    description: "Reliable destination details powered by AI retrieval.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Experiences",
    description: "Discover hidden gems across Afghanistan.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          title="Why Choose AfghanBuddy?"
          subtitle="Everything you need to explore Afghanistan with confidence."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-200 bg-[#F9FAFB] p-5 transition-shadow hover:shadow-lg hover:shadow-[#0E8388]/10 sm:rounded-3xl sm:p-6"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-[#E4F3F2] p-3 text-[#0B5E63] sm:mb-5">
                  <Icon size={26} />
                </div>

                <h2
                  className="text-lg text-[#101B2D] sm:text-xl"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  {item.title}
                </h2>

                <p className="mt-2.5 text-sm leading-6 text-slate-500 sm:mt-3 sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
