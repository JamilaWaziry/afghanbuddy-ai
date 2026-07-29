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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Why Choose AfghanBuddy?"
          subtitle="Everything you need to explore Afghanistan with confidence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                }}
                className="rounded-3xl border bg-slate-50 p-8"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600">
                  <Icon size={30} />
                </div>

                <h2 className="text-2xl font-bold">{item.title}</h2>

                <p className="mt-3 leading-7 text-slate-500">
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
