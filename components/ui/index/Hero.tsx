import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import KLSkyline from "./KLSkyline";

const stats = [
  { value: "20", label: "Years in practice" },
  { value: "5", label: "Registered entities" },
  { value: "MDI", label: "Appointed insolvency agent" },
  { value: "26", label: "Licensed specialists" },
];

const Hero: React.FC = () => {
  return (
    <main>
      <header className="hero-wash relative overflow-hidden py-20 sm:py-24">
        <div className="container relative mx-auto flex max-w-[1120px] items-end gap-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[640px]">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/80">
              Corporate Recovery &amp; Insolvency — Kuala Lumpur
            </p>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.12] text-text sm:text-5xl lg:text-6xl">
              Insolvency, handled with{" "}
              <em className="text-primary">clarity</em>.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg text-text/70">
              Licensed liquidators and corporate recovery specialists guiding
              businesses, developers and financial institutions through
              winding-up, receivership and stalled projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/contact">
                <Button variant="default" size="lg" className="text-sm">
                  Contact Us
                  <ChevronRight className="ml-1.5" size={16} />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-sm">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <KLSkyline className="hidden h-80 w-auto shrink-0 text-primary opacity-[0.14] lg:block xl:h-96" />
        </div>
      </header>

      <div className="border-y border-accent/30 bg-accent-soft/60">
        <div className="container mx-auto grid max-w-[1120px] grid-cols-2 divide-x divide-accent/20 px-4 sm:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center">
              <p className="font-serif text-3xl font-medium text-text sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-text/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
