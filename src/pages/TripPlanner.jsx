import { useState } from "react";
import jsPDF from "jspdf";
import { Plane, Calendar, DollarSign, Users, Smile } from "lucide-react";
import { generateTrip } from "../services/ai";

export default function TripPlanner() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    interests: "Nature",
    duration: "3 Days",
    budget: "Medium",
    style: "Solo",
    mood: "Relaxing",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await generateTrip(form);
    setResult(response);
    setLoading(false);
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text("AfghanBuddy AI Travel Plan", 20, 20);
    pdf.setFontSize(11);
    pdf.text(result, 20, 35, { maxWidth: 170 });
    pdf.save("travel-plan.pdf");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-36">
      <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
        ✈️ AI Trip Planner
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Design your perfect Afghan adventure with AI.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 grid gap-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 p-10 shadow-2xl lg:grid-cols-2"
      >
        {/* Interests */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-slate-700 font-semibold">
            <Plane size={18} /> Interests
          </label>
          <select
            name="interests"
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-emerald-500 shadow-sm"
          >
            <option>Nature</option>
            <option>History</option>
            <option>Culture</option>
            <option>Adventure</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-slate-700 font-semibold">
            <Calendar size={18} /> Duration
          </label>
          <select
            name="duration"
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-emerald-500 shadow-sm"
          >
            <option>1 Day</option>
            <option>2 Days</option>
            <option>3 Days</option>
            <option>1 Week</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-slate-700 font-semibold">
            <DollarSign size={18} /> Budget
          </label>
          <select
            name="budget"
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-emerald-500 shadow-sm"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Style */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-slate-700 font-semibold">
            <Users size={18} /> Travel Style
          </label>
          <select
            name="style"
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-emerald-500 shadow-sm"
          >
            <option>Solo</option>
            <option>Friends</option>
            <option>Family</option>
            <option>Couple</option>
          </select>
        </div>

        {/* Mood */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-slate-700 font-semibold">
            <Smile size={18} /> Mood
          </label>
          <select
            name="mood"
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-emerald-500 shadow-sm"
          >
            <option>Relaxing</option>
            <option>Adventure</option>
            <option>Luxury</option>
            <option>Photography</option>
          </select>
        </div>

        <button className="rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 text-white font-semibold hover:scale-105 transition shadow-lg">
          Generate My Trip
        </button>
      </form>

      {/* Loading */}
      {loading && (
        <div className="mt-16 text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          <p className="mt-5 text-slate-700 font-medium">
            AfghanBuddy AI is planning your trip...
          </p>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-16 rounded-3xl bg-slate-900 p-10 text-white shadow-xl">
          <button
            onClick={downloadPDF}
            className="mb-8 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 font-semibold hover:scale-105 transition shadow-lg"
          >
            Download PDF
          </button>
          <pre className="whitespace-pre-wrap font-sans leading-relaxed text-lg">
            {result}
          </pre>
        </div>
      )}
    </section>
  );
}
