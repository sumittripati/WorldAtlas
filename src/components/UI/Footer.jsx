import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="bg-[#151414] relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="flex items-center gap-6" key={index}>
              <div className="text-[#3a4ed5] text-4xl">{footerIcon[icon]}</div>
              <div className="flex flex-col gap-1.5">
                <p className="text-white text-lg font-bold">{title}</p>
                <p className="text-[#757575] text-base">{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#202020] py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-[#878787] text-sm">
            <p>
              Copyright &copy; 2024, All Rights Reserved
              <NavLink to="#" target="_blank" className="text-[#3a4ed5] ml-2">
                Sumit Tripathi
              </NavLink>
            </p>
          </div>
          <div className="flex justify-end">
            <ul className="flex gap-5">
              <li>
                <NavLink
                  to="/"
                  className="text-sm text-[#878787] hover:text-[#3a4ed5]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  target="_blank"
                  className="text-sm text-[#878787] hover:text-[#3a4ed5]"
                >
                  Social
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-sm text-[#878787] hover:text-[#3a4ed5]"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
