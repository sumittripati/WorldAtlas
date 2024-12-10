import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-12 md:py-36">
        {/* Hero Content */}
        <div className="hero-content order-2 md:order-1">
          <h1 className="font-inherit text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight tracking-tight text-black mb-8">
            Explore the World, One Country at a Time.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="inline-flex items-center bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
            Start Exploring <FaLongArrowAltRight className="ml-2" />
          </button>
        </div>

        {/* Hero Image */}
        <div className="hero-image flex justify-center items-center order-1 md:order-2">
          <img
            src="/images/world.png"
            alt="world is beauty"
            className="w-full md:w-4/5"
          />
        </div>
      </div>
    </main>
  );
};
