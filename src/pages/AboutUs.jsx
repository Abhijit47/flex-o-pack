import { Suspense } from "react";

import { FaSpinner } from "react-icons/fa";

export default function AboutUs() {
  return (
    <main className={"antialiased"}>
      <section>
        <Suspense fallback={<FallBack />}>
          <div className={"aspect-h-1 aspect-w-1"}>
            <img
              src="/about-us.webp"
              alt="About us"
              width={4000}
              height={2000}
              loading={"lazy"}
              decoding={"async"}
              fetchpriority={"auto"}
              className={"h-full w-full object-cover opacity-50"}
            />
          </div>
        </Suspense>

        <AboutCompany />

        <VisionAndMission />

        <ApplicationIndustries />

        <CompanyFactSheet />
      </section>
    </main>
  );
}

function VisionAndMission() {
  return <div>Vision and mission!!!</div>;
}

function ApplicationIndustries() {
  return <div>ApplicationIndustries!!!</div>;
}

function AboutCompany() {
  return (
    <div className={"grid grid-cols-1 gap-y-4 py-8 md:grid-cols-2 md:gap-x-4"}>
      <div>
        <video
          controls={true}
          controlsList={"nodownload"}
          autoPlay={true}
          muted={true}
          loop={true}
          disableRemotePlayback={true}
          disablePictureInPicture={true}
          width={720}
          height={480}
          className={"h-full w-full object-cover"}
        >
          <source src="/about-video-1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={"self-center p-4"}>
        <h3 className={"text-2xl font-bold text-stone-700"}>About Us</h3>
        <p className={"text-base font-medium text-stone-700"}>
          Located at a prime location of Haryana (India), We{" "}
          <strong> Flexo Pack Machines Pvt. Ltd.</strong> are a renowned
          Packaging machinery Rasgulla Ball Making Machine exporter,
          <strong>manufacturer and supplier.</strong>
          Utilizing the best-in-class metal alloys and state-of-the-art
          infrastructural facilities, our company delivers Auger Filler Machine,
          Namkeen Packing Machine, Snacks Packing Machine, Gulab Jamun Ball
          Making Machine, Liquid Packing Machine and many more. These surpass
          the clients expectations on the basis of their features like
          functional efficiency, easy operations, less maintenance and sturdy
          designs. Our products have managed to satisfy numerous clients from
          the Food & Beverage industry and we strive to enhance our reach in
          future.
        </p>
      </div>
    </div>
  );
}

function CompanyFactSheet() {
  return (
    <div className={"space-y-8 divide-y divide-gray-400 px-4 py-8"}>
      <h2 className={"text-3xl font-bold text-stone-700"}>
        Company Fact-Sheet
      </h2>
      <div className={"bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6"}>
        <div className="flow-root">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">
                Year of Establishment
              </dt>
              <dd className="text-gray-700 sm:col-span-2">2004</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">No. of Employees</dt>
              <dd className="text-gray-700 sm:col-span-2">50</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">
                No. of Production Units
              </dt>
              <dd className="text-gray-700 sm:col-span-2">1</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">
                Monthly Production Capacity
              </dt>
              <dd className="text-gray-700 sm:col-span-2">As per order</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Production Type</dt>
              <dd className="text-gray-700 sm:col-span-2">
                Automatic & Semi-Automatic
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">
                Warehousing Facility
              </dt>
              <dd className="text-gray-700 sm:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">
                Original Equipment Manufacturer
              </dt>
              <dd className="text-gray-700 sm:col-span-2">Yes</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">
                Primary Competitive Advantages
              </dt>
              <dd className="text-gray-700 sm:col-span-2">
                <u className={"list-disc no-underline"}>
                  <li>
                    Use of latest technologies in the field of manufacturing
                  </li>
                  <li>Stringent quality analysis</li>
                  <li>Skilled personnel</li>
                  <li>Sound industrial knowledge</li>
                  <li>Wide distribution network</li>
                  <li>Prompt delivery of consignments</li>
                  <li>Market leading prices.</li>
                </u>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

function FallBack() {
  return <FaSpinner className={"size-10 animate-spin"} />;
}
