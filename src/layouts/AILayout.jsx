import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Compass,
  Heart,
  Map,
  User,
  MessageCircle,
  Menu,
  X,
  Plus,
  Sparkles,
} from "lucide-react";

const navigation = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Explore",
    path: "/destinations",
    icon: Compass,
  },
  {
    name: "Favorites",
    path: "/favorites",
    icon: Heart,
  },
  {
    name: "Trips",
    path: "/trip-planner",
    icon: Map,
  },
  {
    name: "AI Assistant",
    path: "/assistant",
    icon: MessageCircle,
  },
];

export default function AILayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F5F7F8]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col
          border-r border-white/10 bg-[#0B1626] text-white
          shadow-2xl transition-transform duration-300
          lg:relative lg:z-auto lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-white/10 px-5">
          <NavLink
            to="/"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0E8388] to-[#0B5E63] shadow-lg">
              <Sparkles size={20} />
            </div>

            <div>
              <h1
                className="text-lg font-semibold tracking-tight"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                AfghanBuddy
              </h1>

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                AI Travel
              </p>
            </div>
          </NavLink>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 pt-5">
          <NavLink
            to="/assistant"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0E8388] to-[#0B5E63] px-4 py-3 text-sm font-semibold shadow-lg shadow-[#0E8388]/20 transition hover:brightness-110"
          >
            <Plus size={17} />
            New Conversation
          </NavLink>
        </div>

        <div className="px-4 pt-7">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
            Navigation
          </p>

          <nav className="mt-3 space-y-1.5">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `
                    group flex items-center gap-3 rounded-xl px-3.5 py-3
                    text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-white/10 text-white shadow-inner"
                        : "text-white/55 hover:bg-white/5 hover:text-white"
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`
                          flex h-9 w-9 items-center justify-center rounded-lg
                          transition
                          ${
                            isActive
                              ? "bg-[#0E8388] text-white shadow-lg shadow-[#0E8388]/20"
                              : "bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white"
                          }
                        `}
                      >
                        <Icon size={17} />
                      </span>

                      <span>{item.name}</span>

                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden px-4 pt-8">
          <div className="flex items-center justify-between px-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
              Recent
            </p>

            <span className="text-[10px] text-white/25">Chats</span>
          </div>

          <div className="mt-3 space-y-1">
            <button
              type="button"
              className="w-full truncate rounded-lg px-3 py-2.5 text-left text-xs text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              Trip to Bamyan Valley
            </button>

            <button
              type="button"
              className="w-full truncate rounded-lg px-3 py-2.5 text-left text-xs text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              Historical places in Herat
            </button>

            <button
              type="button"
              className="w-full truncate rounded-lg px-3 py-2.5 text-left text-xs text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              Peaceful nature destinations
            </button>

            <button
              type="button"
              className="w-full truncate rounded-lg px-3 py-2.5 text-left text-xs text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              Photography trip
            </button>
          </div>
        </div>

        <div className="shrink-0 border-t border-white/10 p-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl p-2.5 transition hover:bg-white/5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A227]/20 text-[#F3D98C]">
              <User size={17} />
            </div>

            <div className="min-w-0 text-left">
              <p className="truncate text-sm font-medium text-white">
                Traveler
              </p>

              <p className="truncate text-[11px] text-white/35">
                AfghanBuddy Explorer
              </p>
            </div>
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex h-[64px] shrink-0 items-center border-b border-slate-200 bg-white px-4 lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100"
          >
            <Menu size={22} />
          </button>

          <div className="ml-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0E8388] text-white">
              <Sparkles size={15} />
            </div>

            <span className="font-semibold text-[#101B2D]">AfghanBuddy AI</span>
          </div>
        </div>

        <main className="min-h-0 flex-1 overflow-hidden"></main>
      </div>
    </div>
  );
}
