import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navlinks } from "../../constants";
import { classNames } from "../../lib/helpers";

export default function NavbarLinks() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      {navlinks.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className={classNames(
            item.href === pathname
              ? "bg-slate-100 text-gray-900"
              : "text-slate-900 hover:bg-gray-50 hover:text-blue-900",
            "inline-flex items-center rounded-md px-3 py-2 text-sm font-large",
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </NavLink>
      ))}
    </Fragment>
  );
}
