import { HiMail, HiPhone } from "react-icons/hi";

export default function Contact() {
  return (
    <div>
      {/* <section className="body-font relative text-gray-600">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div className="container mx-auto flex px-5 py-24">
          <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
              Feedback
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label for="email" className="text-sm leading-7 text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="text-sm leading-7 text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
            <button className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              Button
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section> */}

      <div className="relative bg-white mt-10">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <HiPhone
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <HiMail
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">support@example.com</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-base text-gray-500">
                Looking for careers?{" "}
                <a href="#!" className="font-medium text-gray-700 underline">
                  View all job openings
                </a>
                .
              </p>
            </div>
          </div>
          <div className="bg-white px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
