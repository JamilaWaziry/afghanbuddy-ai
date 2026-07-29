import { useState } from "react";

export default function PlannerForm({ onSubmit }) {
  const [form, setForm] = useState({
    destination: "",
    style: "Adventure",
    budget: "Medium",
    duration: "3 Days",
    companion: "Solo",
    interests: "",
    mood: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">Plan Your Trip</h2>

      {/* Destination */}
      <div className="mb-5">
        <label className="mb-2 block font-medium">Destination</label>

        <input
          name="destination"
          value={form.destination}
          onChange={handleChange}
          placeholder="e.g. Bamyan"
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Style */}
      <div className="mb-5">
        <label className="mb-2 block font-medium">Travel Style</label>

        <select
          name="style"
          value={form.style}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
        >
          <option>Adventure</option>
          <option>Nature</option>
          <option>History</option>
          <option>Culture</option>
        </select>
      </div>

      {/* Budget */}
      <div className="mb-5">
        <label className="mb-2 block font-medium">Budget</label>

        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>Luxury</option>
        </select>
      </div>

      {/* Duration */}
      <div className="mb-5">
        <label className="mb-2 block font-medium">Duration</label>

        <select
          name="duration"
          value={form.duration}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
        >
          <option>1 Day</option>
          <option>2 Days</option>
          <option>3 Days</option>
          <option>1 Week</option>
        </select>
      </div>

      {/* Companion */}
      <div className="mb-8">
        <label className="mb-2 block font-medium">Travel Companion</label>

        <select
          name="companion"
          value={form.companion}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
        >
          <option>Solo</option>
          <option>Friends</option>
          <option>Family</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full rounded-2xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-700"
      >
        Generate AI Trip
      </button>
    </div>
  );
}
