import { Mountain, Trees, Landmark, Compass } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const categories = [
  {
    title: "Adventure",
    icon: Mountain,
    count: "25 Places",
    color: "from-orange-500 to-red-500",
  },

  {
    title: "Nature",
    icon: Trees,
    count: "42 Places",
    color: "from-emerald-500 to-green-600",
  },

  {
    title: "History",
    icon: Landmark,
    count: "18 Places",
    color: "from-amber-500 to-yellow-500",
  },

  {
    title: "Culture",
    icon: Compass,
    count: "30 Places",
    color: "from-blue-500 to-indigo-600",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Explore By Experience"
          subtitle="Choose the kind of journey you want and let AfghanBuddy AI recommend the perfect destinations."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className={`cursor-pointer rounded-3xl bg-gradient-to-br ${category.color} p-8 text-white shadow-xl`}
              >
                <Icon size={46} />

                <h3 className="mt-8 text-2xl font-bold">{category.title}</h3>

                <p className="mt-3 text-white/80">{category.count}</p>

                <div className="mt-8">
                  <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
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
