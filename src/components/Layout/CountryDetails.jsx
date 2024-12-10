import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  return (
    <section className="max-w-7xl mx-auto my-16 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="bg-white p-8 rounded-lg shadow-md">
        {country && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Country Flag */}
            <img
              src={country.flags.svg}
              alt={country.flags.alt || "Country flag"}
              className="w-full max-w-sm mx-auto rounded-lg shadow-md"
            />
            {/* Country Details */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {country.name.official}
              </h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">Native Names: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-medium">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-medium">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="font-medium">Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="font-medium">Capital: </span>
                  {country.capital}
                </p>
                <p>
                  <span className="font-medium">Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="font-medium">Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-medium">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Back Button */}
        <div className="mt-8 flex justify-end">
          <NavLink to="/country">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
