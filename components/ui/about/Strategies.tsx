import { Crown, Gauge, Link2 } from "lucide-react";
import { FC } from "react";

const icons = [Gauge, Link2, Crown];

interface StrategyItem {
  title: string;
  description: string;
}

interface StrategiesProps {
  eyebrow?: string;
  heading?: string;
  strategies: StrategyItem[];
}

const Strategies: FC<StrategiesProps> = ({
  eyebrow = "Managing Financial Distress",
  heading = "Strategies and Solutions",
  strategies,
}) => {
  if (strategies.length === 0) return null;

  return (
    <section className="border-t border-black/10 py-20 sm:py-24">
      <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
        <div className="mb-11 max-w-[600px]">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {strategies.map((strategy, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={strategy.title}
                className="border-t-2 border-accent pt-6"
              >
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-medium text-text">
                  {strategy.title}
                </h3>
                <p className="mt-2 text-sm text-text/70">
                  {strategy.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strategies;
