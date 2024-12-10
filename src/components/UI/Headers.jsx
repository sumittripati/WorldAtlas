import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => setShow(!show);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 max-w-screen-xl">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-xl font-bold">
            <NavLink to="/" className="hover:text-blue-500">
              WorldAtlas
            </NavLink>
          </div>

          {/* Navigation Section */}
          <nav
            className={`${
              show ? "block" : "hidden"
            } md:bloc absolute md:static bg-gray-900 w-full md:w-auto top-16 left-0 md:top-0 z-10 md:flex`}
          >
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0 items-center">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-blue-500 transition-colors duration-300"
                  onClick={() => setShow(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-blue-500 transition-colors duration-300"
                  onClick={() => setShow(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/country"
                  className="hover:text-blue-500 transition-colors duration-300"
                  onClick={() => setShow(false)}
                >
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-blue-500 transition-colors duration-300"
                  onClick={() => setShow(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={handleButtonToggle}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
