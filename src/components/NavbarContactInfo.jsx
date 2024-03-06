import { FaMapMarkedAlt, FaRocketchat } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

export default function NavbarContactInfo() {
  return (
    <div
      className={
        "flex w-full flex-col items-start justify-around ps-2 lg:flex-row lg:items-center lg:ps-0"
      }
    >
      <dl className={"flex items-center gap-x-2"}>
        <dt className={"hidden lg:block"}>
          <FaMapMarkedAlt className={"size-8 text-blue-900"} />
        </dt>
        <dd>
          <p className={"text-lg font-semibold text-blue-700"}>Office</p>
          <p className={"flex items-center gap-x-2"}>
            <span className={"text-sm font-medium"}>Faridabad-121002,</span>
            <span className={"text-sm font-medium"}>Haryana</span>
          </p>
        </dd>
      </dl>
      {/* <div className={"h-full w-px bg-black"}>&nbsp;</div> */}
      <dl className={"flex items-center gap-x-2"}>
        <dt className={"hidden lg:block"}>
          <FaPhoneVolume className={"size-8 text-blue-900"} />
        </dt>
        <dd>
          <p className={"text-lg font-semibold text-blue-700"}>Phone</p>
          <p className={"flex flex-wrap items-center gap-x-2"}>
            <span>
              <a href="tel:+91-9350577429" className={"text-sm font-medium"}>
                +91-9350577429
              </a>
            </span>
            <span>
              <a href="tel:+91-9350231555" className={"text-sm font-medium"}>
                +91-9350231555
              </a>
            </span>
            <span>
              <a href="tel:+91-9312047770" className={"text-sm font-medium"}>
                +91-9312047770
              </a>
            </span>
          </p>
        </dd>
      </dl>
      {/* <div className={"h-full w-px bg-black"}>&nbsp;</div> */}
      <dl className={"flex items-center gap-x-2"}>
        <dt className={"hidden lg:block"}>
          <FaRocketchat className={"size-8 text-blue-900"} />
        </dt>
        <dd>
          <p className={"text-lg font-semibold text-blue-700"}>Email</p>
          <span>
            <a
              href="mailto:info@flexopack.in"
              className={"text-sm font-medium"}
            >
              info@flexopack.in
            </a>
          </span>
        </dd>
      </dl>
    </div>
  );
}
