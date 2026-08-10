import { Mountain, Trees, Landmark, Compass } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const categories = [
  {
    title: "Adventure",
    icon: Mountain,
    count: "25 Places",
    color: "from-[#C1502E] to-[#8F3A20]",
  },
  {
    title: "Nature",
    icon: Trees,
    count: "42 Places",
    color: "from-[#0E8388] to-[#0B5E63]",
  },
  {
    title: "History",
    icon: Landmark,
    count: "18 Places",
    color: "from-[#C9A227] to-[#9C7C15]",
  },
  {
    title: "Culture",
    icon: Compass,
    count: "30 Places",
    color: "from-[#101B2D] to-[#1E3350]",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#F9FAFB] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          title="Explore By Experience"
          subtitle="Choose the kind of journey you want and let AfghanBuddy AI recommend the perfect destinations."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className={`cursor-pointer rounded-2xl bg-gradient-to-br ${category.color} p-4 text-white shadow-lg sm:rounded-3xl sm:p-6`}
              >
                <Icon size={30} className="sm:hidden" />
                <Icon size={40} className="hidden sm:block" />

                <h3
                  className="mt-4 text-base font-semibold sm:mt-6 sm:text-xl"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {category.title}
                </h3>

                <p className="mt-1.5 text-xs text-white/80 sm:mt-2 sm:text-sm">
                  {category.count}
                </p>

                <div className="mt-4 sm:mt-6">
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-xs">
                    AI Recommendations →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
