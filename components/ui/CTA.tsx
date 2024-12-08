import { Link } from "@nextui-org/react";
import { Button } from "@/components/shadcn/ui/button";
import { FC } from "react";
import { BadgeCheck } from "lucide-react";

interface CTAProps {}

const CTA: FC<CTAProps> = ({}) => {
  return (
    <section className="pb-32 pt-8">
      <div className="container">
        <div className="relative rounded-xl border border-border bg-primary/10 px-6 py-8 2xl:grid 2xl:grid-cols-2 2xl:px-14 2xl:py-10">
          {/* Background SVG */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <svg
              fill="none"
              width="404"
              height="384"
              viewBox="0 0 404 384"
              aria-hidden="true"
              className="absolute left-full top-full -translate-x-2/3 -translate-y-1/2 rotate-[60deg]"
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    fill="currentColor"
                    className="text-border"
                  />
                </pattern>
              </defs>
              <rect fill="url(#dots)" width="400" height="400" />
            </svg>
          </div>
          {/* Content Section */}
          <div className="relative mb-12 2xl:mb-0">
            <h3 className="mb-6 text-2xl font-semibold md:mb-8 md:text-4xl lg:mb-10">
              Need Help?
            </h3>
            <p className="mb-8 text-base tracking-wide text-zinc-600">
              We provide expert solutions for corporate recovery, conveyancing,
              litigation, and more.
            </p>
            <ul className="grid gap-x-8 gap-y-4 text-zinc-600 md:grid-cols-2">
              {[
                "Tailored Strategies",
                "Proven Success",
                "Transparent Pricing",
                "Comprehensive Expertise",
              ].map((item, idx) => (
                <li className="flex items-center gap-2 text-sm" key={idx}>
                  <BadgeCheck className="text-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Call to Action Button */}
          <div className="relative flex items-end 2xl:justify-end">
            <Link href="/contact">
              <Button
                variant={"default"}
                size="lg"
                className="pb-5 pt-3 text-sm text-background"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

/*  */
