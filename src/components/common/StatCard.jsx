import { motion } from "framer-motion";

export default function StatCard({ icon: Icon, value, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
      }}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600">
        <Icon size={34} />
      </div>

      <h2 className="text-5xl font-black text-slate-900">{value}</h2>

      <p className="mt-3 text-slate-500">{title}</p>
    </motion.div>
  );
}
