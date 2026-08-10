import { useState } from "react";
import ReactMarkdown from "react-markdown";

import {
  Bot,
  User,
  Copy,
  Check,
  Star,
  MapPin,
  Calendar,
  Clock,
  Compass,
  Wallet,
  Backpack,
  ShieldCheck,
  Heart,
  Sparkles,
  Sunrise,
  Sunset,
  Mountain,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { destinations } from "../../data/destinations";

const STAR_CLIP =
  "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)";

const sectionIcons = {
  "Trip Overview": Compass,
  "Recommended Destination": MapPin,
  "Suggested Itinerary": Calendar,
  "Estimated Budget": Wallet,
  "What to Pack": Backpack,
  "Best Time to Visit": Sunrise,
  "Travel Tips": ShieldCheck,
  "Why You'll Like It": Heart,
};

export default function MessageBubble({ message }) {
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const isUser = message.role === "user";

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message.content);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const matchedDestinations = !isUser
    ? destinations.filter((destination) =>
        message.content.toLowerCase().includes(destination.name.toLowerCase()),
      )
    : [];

  const uniqueDestinations = matchedDestinations.filter(
    (destination, index, self) =>
      index === self.findIndex((item) => item.id === destination.id),
  );

  if (!isUser) {
    return (
      <div className="flex w-full items-start gap-3 sm:gap-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center bg-gradient-to-br from-[#0E8388] to-[#0B5E63] text-white shadow-lg sm:h-11 sm:w-11"
          style={{ clipPath: STAR_CLIP }}
        >
          <Bot size={20} />
        </div>

        <div className="min-w-0 max-w-[calc(100%-52px)] flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span
              className="text-sm font-semibold text-[#101B2D]"
              style={{
                fontFamily: "'Fraunces', serif",
              }}
            >
              AfghanBuddy AI
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#0E8388]" />

            <span className="text-[11px] text-slate-400">Travel Assistant</span>

            <button
              onClick={copyMessage}
              className="ml-auto rounded-lg p-1.5 text-slate-400 opacity-0 transition hover:bg-[#E4F3F2] hover:text-[#0E8388] group-hover:opacity-100"
              aria-label="Copy response"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl rounded-tl-md border border-slate-200 bg-white shadow-sm">
            <div className="px-4 py-5 sm:px-6 sm:py-6">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => {
                    const title = String(children);

                    const Icon = sectionIcons[title] || Sparkles;

                    return (
                      <div className="mb-4 mt-7 first:mt-0 flex items-center gap-3 border-b border-slate-100 pb-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E4F3F2] text-[#0E8388]">
                          <Icon size={17} />
                        </div>

                        <h2
                          className="text-lg font-bold text-[#101B2D]"
                          style={{
                            fontFamily: "'Fraunces', serif",
                          }}
                        >
                          {children}
                        </h2>
                      </div>
                    );
                  },

                  h3: ({ children }) => {
                    const title = String(children);

                    let Icon = Sparkles;

                    if (title === "Morning") {
                      Icon = Sunrise;
                    }

                    if (title === "Afternoon") {
                      Icon = Mountain;
                    }

                    if (title === "Evening") {
                      Icon = Sunset;
                    }

                    return (
                      <div className="mb-2 mt-5 flex items-center gap-2">
                        <Icon size={16} className="text-[#C9A227]" />

                        <h3 className="text-sm font-bold text-[#101B2D]">
                          {children}
                        </h3>
                      </div>
                    );
                  },

                  p: ({ children }) => (
                    <p className="mb-4 text-[14px] leading-7 text-slate-600 last:mb-0">
                      {children}
                    </p>
                  ),

                  ul: ({ children }) => (
                    <ul className="mb-4 space-y-2 pl-0">{children}</ul>
                  ),

                  ol: ({ children }) => (
                    <ol className="mb-4 space-y-3 pl-0">{children}</ol>
                  ),

                  li: ({ children }) => (
                    <li className="flex items-start gap-2 text-[14px] leading-6 text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8388]" />

                      <span>{children}</span>
                    </li>
                  ),

                  strong: ({ children }) => (
                    <strong className="font-semibold text-[#0B5E63]">
                      {children}
                    </strong>
                  ),

                  hr: () => <div className="my-6 h-px bg-slate-100" />,
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>

            {uniqueDestinations.length > 0 && (
              <div className="border-t border-slate-100 bg-[#F8FAFA] px-4 py-5 sm:px-5">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-[#C9A227]" />

                  <h3 className="text-sm font-semibold text-[#101B2D]">
                    Explore this destination
                  </h3>
                </div>

                <div className="grid gap-4">
                  {uniqueDestinations.slice(0, 2).map((destination) => (
                    <div
                      key={destination.id}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative h-48 overflow-hidden sm:h-56">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#8A6C10] shadow-md backdrop-blur">
                          <Star
                            size={13}
                            className="fill-[#C9A227] text-[#C9A227]"
                          />

                          {destination.rating}
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                          <h3
                            className="text-xl font-semibold text-white"
                            style={{
                              fontFamily: "'Fraunces', serif",
                            }}
                          >
                            {destination.name}
                          </h3>

                          <div className="mt-1 flex items-center gap-1.5 text-xs text-white/85">
                            <MapPin size={13} />

                            {destination.province}
                          </div>
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="text-sm leading-6 text-slate-600">
                          {destination.description}
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="rounded-xl bg-[#E4F3F2] p-3">
                            <div className="flex items-center gap-2 text-[#0B5E63]">
                              <Calendar size={14} />

                              <span className="text-[11px] font-semibold uppercase tracking-wide">
                                Best Time
                              </span>
                            </div>

                            <p className="mt-1 text-xs font-medium text-slate-700">
                              {destination.bestTime}
                            </p>
                          </div>

                          <div className="rounded-xl bg-slate-50 p-3">
                            <div className="flex items-center gap-2 text-[#101B2D]">
                              <Clock size={14} />

                              <span className="text-[11px] font-semibold uppercase tracking-wide">
                                Duration
                              </span>
                            </div>

                            <p className="mt-1 text-xs font-medium text-slate-700">
                              {destination.duration}
                            </p>
                          </div>
                        </div>

                        {destination.highlights?.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {destination.highlights.slice(0, 5).map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        )}

                        <button
                          onClick={() =>
                            navigate(`/destinations/${destination.id}`)
                          }
                          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0E8388] to-[#0B5E63] py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                        >
                          Explore Destination
                          <MapPin size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-end">
      <div className="flex max-w-[88%] items-end gap-2.5 sm:max-w-[75%] sm:gap-3">
        <div className="rounded-2xl rounded-br-md bg-gradient-to-br from-[#C1502E] to-[#A33F22] px-4 py-3.5 text-white shadow-md sm:px-5">
          <div className="mb-1 flex items-center gap-2">
            <User size={14} />

            <span className="text-xs font-semibold">You</span>
          </div>

          <p className="text-sm leading-6">{message.content}</p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#101B2D] text-white shadow-md">
          <User size={16} />
        </div>
      </div>
    </div>
  );
}
