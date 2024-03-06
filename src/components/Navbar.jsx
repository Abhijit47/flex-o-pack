import {
  FaFacebookF,
  FaGooglePlusG,
  FaMapMarkedAlt,
  FaRocketchat,
  FaTwitter,
} from "react-icons/fa";
import { FaPhoneVolume, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { navlinks } from "../../constants";

export default function Navbar() {
  return (
    <header>
      <div className={"flex justify-between bg-blue-900 p-2"}>
        <h2 className={"text-base font-medium text-white"}>
          Welcome To Flexo Pack Machine Pvt Ltd
        </h2>
        <div className={"flex items-center gap-x-2"}>
          <p className={"text-base font-medium text-white"}>
            Get Social With Us!
          </p>
          <div className={"flex items-center gap-x-2"}>
            <FaFacebookF />
            <FaTwitter />
            <FaGooglePlusG />
            <FaYoutube />
          </div>
        </div>
      </div>
      <img
        src="/logo.jpg"
        alt="navlogo"
        decoding={"async"}
        fetchPriority={"high"}
      />

      <div>
        <div>
          <FaMapMarkedAlt />
        </div>
        <div>
          <FaPhoneVolume />
        </div>
        <div>
          <FaRocketchat />
        </div>
      </div>

      <nav>
        <ul className={"flex items-center justify-evenly bg-blue-500 p-4"}>
          {navlinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.href}
                rel="noopener noreferrer"
                className={"capitalize"}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
