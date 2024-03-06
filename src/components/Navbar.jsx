import { Disclosure } from "@headlessui/react";

import NavLogo from "./NavLogo";
import NavbarContactInfo from "./NavbarContactInfo";
import NavbarDisclosure from "./NavbarDisclosure";
import NavbarLinks from "./NavbarLinks";
import NavbarToggler from "./NavbarToggler";

export default function Navbar() {
  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-4 lg:divide-y lg:divide-gray-200">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <NavLogo />
                </div>
              </div>

              <NavbarToggler open={open} />
            </div>
            <div className="hidden lg:flex">
              <NavbarContactInfo />
            </div>
            <nav
              className="hidden lg:flex lg:space-x-8 lg:py-2"
              aria-label="Global"
            >
              <NavbarLinks />
            </nav>
          </div>

          {/* Navbar Disclosure */}
          <NavbarDisclosure />
        </>
      )}
    </Disclosure>
  );
}
