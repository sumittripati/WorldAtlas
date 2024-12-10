export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="container mx-auto flex flex-wrap gap-4 justify-between items-center bg-gray-900 p-4 rounded-lg shadow-lg">
      {/* Search Input */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
          className="w-full p-2 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Sort Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => sortCountries("asc")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Asc
        </button>
        <button
          onClick={() => sortCountries("des")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Desc
        </button>
      </div>

      {/* Filter Dropdown */}
      <div className="flex-1">
        <select
          className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
