import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";

const credentials = [
  { label: "20", detail: "years in practice" },
  { label: "5", detail: "registered entities" },
  { label: "MDI", detail: "appointed agent of the Malaysia Dept. of Insolvency" },
  { label: "Bangsar", detail: "head office in Kuala Lumpur" },
];

const Hero: React.FC = () => {
  return (
    <main>
      <header className="hero-wash py-20 sm:py-24">
        <div className="mx-auto max-w-[640px] px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/80">
            Corporate Recovery &amp; Insolvency — Kuala Lumpur
          </p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.12] text-text sm:text-5xl lg:text-6xl">
            Insolvency, handled with <em className="text-primary">clarity</em>.
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
      </header>

      <div className="border-y border-accent/30 bg-accent-soft/60 py-4">
        <div className="container mx-auto flex max-w-[1120px] flex-wrap gap-x-10 gap-y-2 px-4 text-sm text-text/70 lg:px-8">
          {credentials.map((c) => (
            <span key={c.label}>
              <b className="font-semibold text-text">{c.label}</b> {c.detail}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
