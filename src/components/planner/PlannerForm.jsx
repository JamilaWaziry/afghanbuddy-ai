import { useState } from "react";
import {
  Compass,
  CalendarDays,
  Wallet,
  Users,
  Smile,
  Sparkles,
  MapPin,
  ChevronDown,
} from "lucide-react";

const fields = {
  interests: {
    label: "Interests",
    icon: Compass,
    color: "#C9A227",
    options: [
      "Nature",
      "Adventure",
      "History",
      "Culture",
      "Photography",
      "Nature and Photography",
      "History and Culture",
    ],
  },
  duration: {
    label: "Duration",
    icon: CalendarDays,
    color: "#101B2D",
    options: ["1 Day", "2 Days", "3 Days", "5 Days", "1 Week"],
  },
  budget: {
    label: "Budget",
    icon: Wallet,
    color: "#C1502E",
    options: ["Low", "Medium", "Luxury"],
  },
  style: {
    label: "Travel Style",
    icon: Compass,
    color: "#0E8388",
    options: ["Adventure", "Nature", "History", "Culture", "Relaxation"],
  },
  companion: {
    label: "Travel Companion",
    icon: Users,
    color: "#C9A227",
    options: ["Solo", "Friends", "Family", "Couple"],
  },
  mood: {
    label: "Mood",
    icon: Smile,
    color: "#C1502E",
    options: ["Relaxed", "Excited", "Adventurous", "Peaceful", "Cultural"],
  },
};

function SelectField({ name, value, onChange }) {
  const { label, icon: Icon, color, options } = fields[name];

  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#101B2D]">
        <Icon size={16} style={{ color }} />
        {label}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1A2332] outline-none transition focus:border-[#0E8388] focus:bg-white focus:ring-4 focus:ring-[#0E8388]/10"
        >
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}

export default function PlannerForm({ onSubmit }) {
  const [form, setForm] = useState({
    destination: "",
    style: "Adventure",
    budget: "Medium",
    duration: "3 Days",
    companion: "Solo",
    interests: "Nature",
    mood: "Relaxed",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-8"
    >
      <div className="mb-7 sm:mb-8">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E4F3F2] text-[#0E8388]">
            <Sparkles size={18} />
          </span>

          <span
            className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0E8388] sm:text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            AI Trip Builder
          </span>
        </div>

        <h2
          className="text-xl text-[#101B2D] sm:text-2xl"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
        >
          Plan Your Trip
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Tell AfghanBuddy what kind of experience you want and let AI create
          your itinerary.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Destination */}
        <div className="md:col-span-2">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#101B2D]">
            <MapPin size={16} className="text-[#0E8388]" />
            Destination
          </label>

          <input
            name="destination"
            value={form.destination}
            onChange={handleChange}
            placeholder="e.g. Bamyan, Kabul, Herat"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1A2332] outline-none transition focus:border-[#0E8388] focus:bg-white focus:ring-4 focus:ring-[#0E8388]/10"
          />
        </div>

        <SelectField
          name="interests"
          value={form.interests}
          onChange={handleChange}
        />
        <SelectField
          name="duration"
          value={form.duration}
          onChange={handleChange}
        />
        <SelectField
          name="budget"
          value={form.budget}
          onChange={handleChange}
        />
        <SelectField name="style" value={form.style} onChange={handleChange} />
        <SelectField
          name="companion"
          value={form.companion}
          onChange={handleChange}
        />
        <SelectField name="mood" value={form.mood} onChange={handleChange} />
      </div>

      <button
        type="submit"
        className="group mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0E8388] to-[#0B5E63] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#0E8388]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0E8388]/35"
      >
        <Sparkles
          size={19}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
        Generate My Trip
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      <p className="mt-3 text-center text-xs text-slate-400">
        AfghanBuddy AI will create a personalized itinerary for you.
      </p>
    </form>
  );
}
