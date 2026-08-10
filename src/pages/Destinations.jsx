import SearchFilter from "../components/destinations/SearchFilter";
import DestinationGrid from "../components/destinations/DestinationGrid";

import useFavorites from "../hooks/useFavorites";
import useDestinations from "../hooks/useDestinations";

export default function Destinations() {
  const { favorites } = useFavorites();

  const {
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
  } = useDestinations(favorites);

  return (
    <>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        province={province}
        setProvince={setProvince}
        sort={sort}
        setSort={setSort}
        favoritesOnly={favoritesOnly}
        setFavoritesOnly={setFavoritesOnly}
        categories={categories}
        provinces={provinces}
      />

      <DestinationGrid destinations={filtered} />
    </>
  );
}
