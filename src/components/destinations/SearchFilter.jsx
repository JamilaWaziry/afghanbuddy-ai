import { Search } from "lucide-react";

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
}) {
  return (
    <section className="bg-slate-900 pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-5xl font-bold text-white">Discover Afghanistan</h1>

        <p className="mt-3 mb-10 text-slate-300">
          Search destinations using AI-powered filters.
        </p>

        <div className="grid gap-5 rounded-3xl bg-white p-6 lg:grid-cols-5">
          <div className="relative lg:col-span-2">
            <Search
              size={20}
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-xl border py-4 pl-12 pr-4 outline-none"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border p-4"
          >
            <option>All</option>
            <option>Nature</option>
            <option>History</option>
            <option>Culture</option>
          </select>

          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="rounded-xl border p-4"
          >
            <option>All</option>
            <option>Bamyan</option>
            <option>Herat</option>
            <option>Kabul</option>
            <option>Panjshir</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border p-4"
          >
            <option value="rating">Highest Rating</option>

            <option value="name">Name</option>
          </select>
        </div>

        <label className="mt-5 flex items-center gap-3 text-white">
          <input
            type="checkbox"
            checked={favoritesOnly}
            onChange={(e) => setFavoritesOnly(e.target.checked)}
          />
          Favorites Only
        </label>
      </div>
    </section>
  );
}
