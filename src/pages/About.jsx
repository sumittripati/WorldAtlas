import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <section className="container mx-auto mb-36">
      <h2 className="text-center text-4xl text-white font-semibold leading-tight mb-10">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div
              className="max-w-[55rem] w-full mx-auto"
              key={id}
            >
              <div className="relative border-2 border-transparent bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509] rounded-[45px] p-10">
                <div className="absolute inset-0 -z-10 rounded-[45px] bg-gradient-to-br from-[#0c0a0e] via-[#5f6fad] to-[#0c0a0e]"></div>
                <p className="text-white text-2xl font-semibold mb-2">
                  {countryName}
                </p>
                <p className="text-white/50 font-semibold mb-2">
                  <span className="text-white/50">Capital:</span> {capital}
                </p>
                <p className="text-white/50 font-semibold mb-2">
                  <span className="text-white/50">Population:</span>{" "}
                  {population}
                </p>
                <p className="text-white/50 font-semibold">
                  <span className="text-white/50">Interesting Fact:</span>{" "}
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
