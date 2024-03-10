import { clients } from "../../constants/index";

export default function OurClients() {
  return (
    <main className={"antialiased"}>
      <section>
        <h1
          className={
            "py-4 text-center text-2xl font-medium text-stone-700 md:py-6 md:text-3xl md:font-semibold lg:py-8 lg:text-4xl lg:font-bold"
          }
        >
          Our Happy Clients
        </h1>

        <div className={"p-4 md:p-6 lg:p-8"}>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <li
                key={client?.id}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
              >
                <div className="flex flex-1 flex-col p-8">
                  <img
                    className="mx-auto h-32 w-32 flex-shrink-0 rounded-full object-cover"
                    src={client.logo}
                    alt={client}
                    width={"320"}
                    height={"320"}
                    loading={"lazy"}
                    fetchpriority="high"
                    decoding="async"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
