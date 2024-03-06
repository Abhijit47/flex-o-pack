import { HiX } from "react-icons/hi";
import HeaderSocial from "./HeaderSocial";

export default function HeaderBanner() {
  return (
    <div className="bg-blue-900 py-2.5">
      <div className="flex items-center justify-between gap-x-4 gap-y-2 px-4">
        <h2
          className={"text-sm font-medium text-white md:text-base lg:text-lg"}
        >
          Welcome To Flexo Pack Machine Pvt Ltd
        </h2>

        <div className={"flex items-center gap-x-4"}>
          <div className={"hidden lg:block"}>
            <HeaderSocial />
          </div>

          {/* close button */}
          <div className="flex items-center">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <HiX className="h-5 w-5 text-slate-100" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
