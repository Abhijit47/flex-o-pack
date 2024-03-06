import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { navlinks } from "../../constants";
import { classNames } from "../../lib/helpers";
import HeaderSocial from "./HeaderSocial";
import NavbarContactInfo from "./NavbarContactInfo";

export default function NavbarDisclosure() {
  const { pathname } = useLocation();

  return (
    <Transition
      as={Fragment}
      enter="transition ease-in-out duration-500 delay-75"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in-out duration-500 delay-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navlinks.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.href === pathname
                  ? "bg-slate-100 text-gray-900"
                  : "text-slate-900 hover:bg-gray-50 hover:text-blue-900",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavbarContactInfo />
        </div>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <HeaderSocial />
        </div>
      </Disclosure.Panel>
    </Transition>
  );
}
