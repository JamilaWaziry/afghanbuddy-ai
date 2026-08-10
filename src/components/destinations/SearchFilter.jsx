import { Search, ChevronDown, Heart, Sparkles } from "lucide-react";

export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
  province,
  setProvince,
  sort,
  setSort,
  favoritesOnly,
  setFavoritesOnly,
  categories = ["All"],
  provinces = ["All"],
}) {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-32"
      style={{
        background: "linear-gradient(115deg, #0B1626 0%, #101B2D 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px), repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 26px)",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0E8388]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F3D98C]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <Sparkles size={13} />
          AI-Powered Search
        </div>

        <h1
          className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
        >
          Discover Afghanistan
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
          Search {categories.length - 1}+ categories across every province,
          filtered exactly the way you want.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-4 shadow-2xl sm:mt-10 sm:p-5">
          <div className="grid gap-3 lg:grid-cols-5 lg:gap-3">
            <div className="relative lg:col-span-2">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search destinations..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-[#1A2332] outline-none transition focus:border-[#0E8388] focus:bg-white focus:ring-4 focus:ring-[#0E8388]/10"
              />
            </div>

            <FilterSelect
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={categories}
            />

            <FilterSelect
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              options={provinces}
            />

            <FilterSelect
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              options={[
                { value: "rating", label: "Highest Rating" },
                { value: "name", label: "Name (A–Z)" },
              ]}
            />
          </div>

          <button
            type="button"
            onClick={() => setFavoritesOnly(!favoritesOnly)}
            aria-pressed={favoritesOnly}
            className={`mt-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              favoritesOnly
                ? "border-[#C1502E] bg-[#C1502E]/10 text-[#C1502E]"
                : "border-slate-200 text-slate-500 hover:border-slate-300"
            }`}
          >
            <Heart
              size={15}
              className={favoritesOnly ? "fill-[#C1502E]" : ""}
            />
            Favorites Only
          </button>
        </div>
      </div>
    </section>
  );
}

function FilterSelect({ value, onChange, options }) {
  const normalized = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt,
  );

  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#1A2332] outline-none transition focus:border-[#0E8388] focus:bg-white focus:ring-4 focus:ring-[#0E8388]/10"
      >
        {normalized.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}
