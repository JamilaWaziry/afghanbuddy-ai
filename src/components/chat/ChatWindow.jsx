import { useState } from "react";
import {
  Home,
  Compass,
  Heart,
  Map,
  User,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import useChat from "../../hooks/useChat";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import QuickPrompts from "./QuickPrompts";
import CategoryAttachment from "./CategoryAttachment";

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
];

export default function ChatWindow() {
  const { messages, loading, sendMessage } = useChat();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F5F7F8]">
      <aside
        className="
          hidden
          h-screen
          w-[250px]
          shrink-0
          flex-col
          border-r
          border-slate-200
          bg-[#0B1626]
          text-white
          md:flex
        "
      >
        <div className="flex h-[88px] items-center border-b border-white/10 px-6">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-[#0E8388]
                to-[#0B5E63]
                shadow-lg
                shadow-[#0E8388]/20
              "
            >
              <Sparkles size={21} />
            </div>

            <div>
              <h1 className="text-[17px] font-bold tracking-tight">
                AfghanBuddy
              </h1>

              <p className="text-[11px] text-white/50">AI Travel Assistant</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-7">
          <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
            Navigation
          </p>

          <nav className="space-y-1.5">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-3.5
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#0E8388] text-white shadow-lg shadow-[#0E8388]/20"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }
                    `
                  }
                >
                  <Icon size={18} strokeWidth={1.8} />

                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-8">
            <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              AI Tools
            </p>

            <NavLink
              to="/assistant"
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                rounded-xl
                px-3.5
                py-3
                text-sm
                font-medium
                transition-all
                ${
                  isActive
                    ? "bg-white text-[#0B1626]"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }
                `
              }
            >
              <Sparkles size={18} />

              <span>AfghanBuddy AI</span>

              <span className="ml-auto h-2 w-2 rounded-full bg-[#C9A227]" />
            </NavLink>
          </div>
        </div>

        <div className="border-t border-white/10 p-4">
          <button
            type="button"
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              p-3
              text-left
              transition
              hover:bg-white/5
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C1502E]">
              <User size={17} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Traveler</p>

              <p className="truncate text-[11px] text-white/40">
                Explore Afghanistan
              </p>
            </div>
          </button>
        </div>
      </aside>

      {mobileSidebar && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setMobileSidebar(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <aside
            className="
              relative
              flex
              h-full
              w-[280px]
              flex-col
              bg-[#0B1626]
              text-white
              shadow-2xl
            "
          >
            <div className="flex h-[80px] items-center justify-between border-b border-white/10 px-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E8388]">
                  <Sparkles size={20} />
                </div>

                <div>
                  <h2 className="font-bold">AfghanBuddy</h2>

                  <p className="text-[10px] text-white/40">AI Travel</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileSidebar(false)}
                className="rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 space-y-2 px-4 py-6">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileSidebar(false)}
                    className={({ isActive }) =>
                      `
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      ${
                        isActive
                          ? "bg-[#0E8388] text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }
                      `
                    }
                  >
                    <Icon size={18} />
                    {item.name}
                  </NavLink>
                );
              })}

              <NavLink
                to="/assistant"
                onClick={() => setMobileSidebar(false)}
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0B1626]"
              >
                <Sparkles size={18} />
                AfghanBuddy AI
              </NavLink>
            </nav>
          </aside>
        </div>
      )}

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div
          className="
            flex
            h-[64px]
            shrink-0
            items-center
            border-b
            border-slate-200
            bg-white
            px-4
            md:hidden
          "
        >
          <button
            type="button"
            onClick={() => setMobileSidebar(true)}
            className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-100"
          >
            <Menu size={21} />
          </button>

          <div className="ml-3 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0E8388] text-white">
              <Sparkles size={17} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#101B2D]">AfghanBuddy AI</p>

              <p className="text-[10px] text-slate-400">AI Travel Assistant</p>
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <ChatHeader />
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">
          <ChatMessages
            messages={messages}
            loading={loading}
            selectedCategory={selectedCategory}
            onSuggestionClick={sendMessage}
          />
        </div>

        <div className="shrink-0 border-t border-slate-200 bg-white">
          <QuickPrompts onSelect={setSelectedCategory} />

          {selectedCategory && (
            <CategoryAttachment
              category={selectedCategory}
              onRemove={() => setSelectedCategory(null)}
            />
          )}

          <ChatInput
            onSend={sendMessage}
            selectedCategory={selectedCategory}
            clearCategory={() => setSelectedCategory(null)}
          />
        </div>
      </main>
    </div>
  );
}
