import { Menu, Popover, Transition } from "@headlessui/react";

import { HiChevronDoubleDown } from "react-icons/hi2";

export default function NavTest() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center rounded-sm bg-red-500 px-8 py-2 text-gray-800 hover:text-gray-600">
            <span>Dropdown</span>
            <span>
              <HiChevronDoubleDown className="h-4 w-4" />
            </span>
          </Popover.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute z-10 mt-2 w-48 space-y-2 rounded border border-gray-200 bg-white p-2 shadow-lg">
              <Menu>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } block px-4 py-2 text-sm`}
                      href="#!"
                    >
                      Item 1
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } block px-4 py-2 text-sm`}
                      href="#!"
                    >
                      Item 2
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            as={"a"}
                            href={"/product"}
                            className="flex items-center rounded-sm bg-red-500 px-8 py-2 text-gray-800 hover:text-gray-600"
                          >
                            <span>Submenu</span>
                            <span>
                              <HiChevronDoubleDown className="h-4 w-4" />
                            </span>
                          </Popover.Button>
                          <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Popover.Panel className="absolute z-10 mt-2 w-48 space-y-2 rounded border border-gray-200 bg-white p-2 shadow-lg">
                              <Menu>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700"
                                      } block px-4 py-2 text-sm`}
                                      href="#!"
                                    >
                                      Subitem 1
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700"
                                      } block px-4 py-2 text-sm`}
                                      href="#!"
                                    >
                                      Subitem 2
                                    </a>
                                  )}
                                </Menu.Item>
                              </Menu>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  )}
                </Menu.Item>
              </Menu>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
