import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import jsPDF from "jspdf";

import {
  Download,
  Map,
  CalendarDays,
  Wallet,
  Backpack,
  ShieldCheck,
  Heart,
  Sparkles,
} from "lucide-react";

function downloadTripPDF(trip) {
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const marginX = 48;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const maxWidth = pageWidth - marginX * 2;
  let y = 64;

  const ink = [16, 27, 45];
  const turquoise = [11, 94, 99];
  const slate = [71, 85, 105];

  const ensureSpace = (needed) => {
    if (y + needed > pageHeight - 56) {
      pdf.addPage();
      y = 64;
    }
  };

  // Cover title
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(22);
  pdf.setTextColor(...ink);
  pdf.text("AfghanBuddy AI Travel Plan", marginX, y);
  y += 18;

  pdf.setDrawColor(...turquoise);
  pdf.setLineWidth(1.2);
  pdf.line(marginX, y, marginX + 90, y);
  y += 34;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);
  pdf.setTextColor(...slate);

  const lines = trip.split("\n");

  lines.forEach((raw) => {
    const line = raw.trimEnd();

    if (!line.trim()) {
      y += 8;
      return;
    }

    if (line.startsWith("## ")) {
      ensureSpace(34);
      y += 14;
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(15);
      pdf.setTextColor(...turquoise);
      pdf.text(line.replace(/^##\s+/, ""), marginX, y);
      y += 10;
      pdf.setDrawColor(230, 230, 230);
      pdf.line(marginX, y, pageWidth - marginX, y);
      y += 18;
      return;
    }

    if (line.startsWith("### ")) {
      ensureSpace(24);
      y += 6;
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.setTextColor(...ink);
      pdf.text(line.replace(/^###\s+/, ""), marginX, y);
      y += 16;
      return;
    }

    const bulletMatch = line.match(/^[-*]\s+(.*)/);
    const cleanText = (bulletMatch ? bulletMatch[1] : line).replace(
      /\*\*(.*?)\*\*/g,
      "$1",
    );

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(...slate);

    const indent = bulletMatch ? 14 : 0;
    const wrapped = pdf.splitTextToSize(cleanText, maxWidth - indent);

    wrapped.forEach((wLine, i) => {
      ensureSpace(16);
      if (bulletMatch && i === 0) {
        pdf.setTextColor(...turquoise);
        pdf.text("•", marginX, y);
        pdf.setTextColor(...slate);
      }
      pdf.text(wLine, marginX + indent, y);
      y += 15;
    });
  });

  pdf.save("afghanbuddy-travel-plan.pdf");
}

export default function PlannerResult({ trip }) {
  if (!trip) return null;

  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_-25px_rgba(15,23,42,0.25)]">
      <div
        className="relative overflow-hidden px-6 py-8 text-white sm:px-8 lg:px-10"
        style={{
          background: "linear-gradient(115deg, #0B1626 0%, #101B2D 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px), repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px)",
          }}
        />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#0E8388]/20 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div
              className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F3D98C]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Sparkles size={14} />
              Your AI Travel Plan
            </div>

            <h2
              className="text-2xl leading-tight tracking-tight sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
            >
              Your Afghanistan Adventure
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
              A personalized itinerary created around your travel preferences.
            </p>
          </div>

          <button
            type="button"
            onClick={() => downloadTripPDF(trip)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <Download size={16} />
            Download PDF
          </button>
        </div>
      </div>

      <div className="grid border-b border-slate-100 bg-slate-50 sm:grid-cols-3">
        <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5 sm:border-b-0 sm:border-r">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4F3F2] text-[#0E8388]">
            <Map size={18} />
          </div>
          <div>
            <p className="text-xs text-slate-400">Destination</p>
            <p className="text-sm font-semibold text-[#101B2D]">Afghanistan</p>
          </div>
        </div>

        <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5 sm:border-b-0 sm:border-r">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/15 text-[#8A6C10]">
            <CalendarDays size={18} />
          </div>
          <div>
            <p className="text-xs text-slate-400">Plan</p>
            <p className="text-sm font-semibold text-[#101B2D]">Personalized</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C1502E]/10 text-[#C1502E]">
            <Heart size={18} />
          </div>
          <div>
            <p className="text-xs text-slate-400">Experience</p>
            <p className="text-sm font-semibold text-[#101B2D]">Made for you</p>
          </div>
        </div>
      </div>

      <article className="px-6 py-8 sm:px-8 lg:px-10">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => {
              const text = String(children).toLowerCase();

              let Icon = Sparkles;

              if (text.includes("overview")) Icon = Map;
              if (text.includes("destination")) Icon = Map;
              if (text.includes("itinerary")) Icon = CalendarDays;
              if (text.includes("budget")) Icon = Wallet;
              if (text.includes("pack")) Icon = Backpack;
              if (text.includes("time")) Icon = CalendarDays;
              if (text.includes("travel tips")) Icon = ShieldCheck;
              if (text.includes("like")) Icon = Heart;

              return (
                <div className="mb-5 mt-10 flex items-center gap-3 first:mt-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4F3F2] text-[#0E8388]">
                    <Icon size={19} />
                  </div>
                  <h2
                    className="text-xl tracking-tight text-[#101B2D] sm:text-2xl"
                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                  >
                    {children}
                  </h2>
                </div>
              );
            },

            h3: ({ children }) => (
              <h3 className="mb-3 mt-6 text-lg font-bold text-[#0B5E63]">
                {children}
              </h3>
            ),

            p: ({ children }) => (
              <p className="mb-4 text-[15px] leading-7 text-slate-600">
                {children}
              </p>
            ),

            ul: ({ children }) => (
              <ul className="mb-5 space-y-3 pl-0">{children}</ul>
            ),

            ol: ({ children }) => (
              <ol className="mb-5 space-y-4 pl-0">{children}</ol>
            ),

            li: ({ children }) => (
              <li className="flex gap-3 text-[15px] leading-7 text-slate-600">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8388]" />
                <span>{children}</span>
              </li>
            ),

            strong: ({ children }) => (
              <strong className="font-semibold text-[#101B2D]">
                {children}
              </strong>
            ),

            blockquote: ({ children }) => (
              <blockquote className="my-6 rounded-2xl border-l-4 border-[#C9A227] bg-[#C9A227]/10 px-5 py-4 text-slate-700">
                {children}
              </blockquote>
            ),

            table: ({ children }) => (
              <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[600px] text-left text-sm">
                  {children}
                </table>
              </div>
            ),

            th: ({ children }) => (
              <th className="border-b border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-[#101B2D]">
                {children}
              </th>
            ),

            td: ({ children }) => (
              <td className="border-b border-slate-100 px-4 py-3 text-slate-600">
                {children}
              </td>
            ),
          }}
        >
          {trip}
        </ReactMarkdown>
      </article>

      <div className="border-t border-slate-100 bg-slate-50 px-6 py-6 sm:px-8 lg:px-10">
        <div
          className="relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
          style={{
            background: "linear-gradient(115deg, #0B1626 0%, #101B2D 100%)",
          }}
        >
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#0E8388]/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Sparkles size={16} className="text-[#F3D98C]" />
              Ready to explore Afghanistan?
            </div>
            <p className="mt-1 text-sm text-white/50">
              You can create another personalized itinerary anytime.
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative rounded-xl bg-gradient-to-br from-[#0E8388] to-[#0B5E63] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Create Another Plan
          </button>
        </div>
      </div>
    </section>
  );
}
