import { Crown, Gauge, Link } from "lucide-react";
import { FC } from "react";

interface StrategiesProps {}

const strategies = [
  {
    icon: (
      <Gauge
        className="mt-1 h-5 w-5 flex-none text-indigo-600"
        aria-hidden="true"
      />
    ),
    title: "Pre-emptive Measures",
    content:
      "Our insight into financial distress is not limited to recessions; we understand that financial difficulties can be an early indicator of business failure.",
  },
  {
    icon: (
      <Link
        className="mt-1 h-5 w-5 flex-none text-indigo-600"
        aria-hidden="true"
      />
    ),
    title: "Strategic Alliances",
    content:
      "We maintian a collaborative approach with lenders and legal advisers to provide strategic counsel well-versed in liquidation preparation intricacies.",
  },
  {
    icon: (
      <Crown
        className="mt-1 h-5 w-5 flex-none text-indigo-600"
        aria-hidden="true"
      />
    ),
    title: "Experienced Leadership",
    content:
      "Our experienced Management Team leverages their expertise in insolvency to provide actionable solutions and advice to creditors, shareholders, directors, and companies.",
  },
];
const Strategies: FC<StrategiesProps> = ({}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h3 className="text-center text-2xl font-semibold capitalize lg:text-3xl">
          Strategies and Solutions
        </h3>
        <h5>Navigating Financial Distress</h5>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
          {strategies.map((strategy) => (
            <div
              className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800"
              key={strategy.title}
            >
              <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
                {strategy.icon}
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                {strategy.title}
              </h1>

              <p className="text-sm leading-7 text-gray-500 dark:text-gray-300">
                {strategy.content}
              </p>
            </div>
          ))}
          {/* <div className="flex flex-col items-center space-y-3 rounded-xl  p-6 text-center ">
            <span className="inline-block rounded-full  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
              Copy & paste components
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>

            <a
              href="#"
              className="-mx-1 flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="mx-1 h-4 w-4 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
              Zero Configuration
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>

            <a
              href="#"
              className="-mx-1 flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="mx-1 h-4 w-4 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
            <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
              Simple & clean designs
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>

            <a
              href="#"
              className="-mx-1 flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="mx-1 h-4 w-4 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Strategies;
