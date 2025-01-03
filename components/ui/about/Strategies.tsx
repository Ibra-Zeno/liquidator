import { Crown, Gauge, Link } from "lucide-react";
import { FC } from "react";

interface StrategiesProps {}

const strategies = [
  {
    icon: <Gauge className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />,
    title: "Pre-emptive Measures",
    content:
      "Our insight into financial distress is not limited to recessions; we understand that financial difficulties can be an early indicator of business failure.",
  },
  {
    icon: <Link className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />,
    title: "Strategic Alliances",
    content:
      "We maintian a collaborative approach with lenders and legal advisers to provide strategic counsel well-versed in liquidation preparation intricacies.",
  },
  {
    icon: <Crown className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />,
    title: "Experienced Leadership",
    content:
      "Our experienced Management Team leverages their expertise in insolvency to provide actionable solutions and advice to creditors, shareholders, directors, and companies.",
  },
];
const Strategies: FC<StrategiesProps> = ({}) => {
  return (
    <section className="border-y-8 border-secondary/30 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h5 className="mb-1.5 text-center text-base font-semibold leading-7 tracking-wide text-primary ">
          Managing Financial Distress
        </h5>
        <h3 className="mb-3 text-center text-2xl font-semibold capitalize lg:text-3xl">
          Strategies and Solutions
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
          {strategies.map((strategy) => (
            <div
              className="flex flex-col items-center space-y-3 rounded-xl bg-secondary/20 p-6 text-center  "
              key={strategy.title}
            >
              <span className="inline-block rounded-full bg-background p-3 text-accent">
                {strategy.icon}
              </span>

              <h4 className="text-text text-xl font-semibold capitalize">
                {strategy.title}
              </h4>

              <p className="text-sm leading-7 text-gray-700 ">
                {strategy.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategies;
