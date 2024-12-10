import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="bg-gray-800 text-white rounded-xl shadow-lg p-4">
      <div className="rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 p-6">
        <img
          src={flags.svg}
          alt={flags.alt}
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />

        <div className="mt-4 space-y-2">
          <p className="text-lg font-semibold truncate">{name.common}</p>
          <p className="text-sm">
            <span className="font-medium text-gray-400">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p className="text-sm">
            <span className="font-medium text-gray-400">Region:</span> {region}
          </p>
          <p className="text-sm">
            <span className="font-medium text-gray-400">Capital:</span>{" "}
            {capital && capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
