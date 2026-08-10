import { useMemo, useState } from "react";
import { destinations } from "../data/destinations";

export default function useDestinations(favorites) {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [province, setProvince] = useState("All");

  const [sort, setSort] = useState("rating");

  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const categories = useMemo(() => {
    const unique = [...new Set(destinations.map((item) => item.category))];
    return ["All", ...unique.sort()];
  }, []);

  const provinces = useMemo(() => {
    const unique = [...new Set(destinations.map((item) => item.province))];
    return ["All", ...unique.sort()];
  }, []);

  const filtered = useMemo(() => {
    let data = [...destinations];

    data = data.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category === "All" || item.category === category;

      const matchesProvince = province === "All" || item.province === province;

      const matchesFavorite = !favoritesOnly || favorites.includes(item.id);

      return (
        matchesSearch && matchesCategory && matchesProvince && matchesFavorite
      );
    });

    if (sort === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "name") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    }

    return data;
  }, [search, category, province, sort, favoritesOnly, favorites]);

  return {
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

    categories,
    provinces,

    filtered,
  };
}
