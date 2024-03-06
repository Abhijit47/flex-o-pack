import { Disclosure } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavbarToggler({ open }) {
  return (
    <div className="relative z-10 flex items-center lg:hidden">
      {/* Mobile menu button */}
      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span className="sr-only">Open menu</span>
        {open ? (
          <HiX className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <HiMenu className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
}
