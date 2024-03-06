import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function HeaderSocial() {
  return (
    <div className={"flex items-center gap-x-2"}>
      <p className={"text-base font-medium text-slate-700 lg:text-white"}>
        Get Social With Us!
      </p>
      <div className={"flex items-center gap-x-2"}>
        <NavLink
          href="https://www.facebook.com/flexopack.machines"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF
            className={
              "size-4 text-slate-700 transition-all delay-100 duration-500 ease-in-out hover:text-blue-700 lg:bg-transparent lg:text-white"
            }
          />
        </NavLink>
        <NavLink
          href="https://twitter.com/flexopackmachine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            className={
              "size-4 text-slate-700 transition-all delay-100 duration-500 ease-in-out hover:text-blue-700 lg:bg-transparent lg:text-white"
            }
          />
        </NavLink>
        <NavLink href="#" rel="noopener noreferrer">
          <FaGooglePlusG
            className={
              "size-4 text-slate-700 transition-all delay-100 duration-500 ease-in-out hover:text-blue-700 lg:bg-transparent lg:text-white"
            }
          />
        </NavLink>
        <NavLink
          href="https://www.youtube.com/channel/UCr0De7m4e3w3ABtQOJ4CkQQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube
            className={
              "size-4 text-slate-700 transition-all delay-100 duration-500 ease-in-out hover:text-blue-700 lg:bg-transparent lg:text-white"
            }
          />
        </NavLink>
      </div>
    </div>
  );
}
