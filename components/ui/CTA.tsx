import { FC } from "react";

interface CTAProps {}

const CTA: FC<CTAProps> = ({}) => {
  return (
    <section className="pb-32 pt-8">
      <div className="container">
        <div className="relative rounded-xl border border-border bg-zinc-100 px-6 py-8 2xl:grid 2xl:grid-cols-2 2xl:px-14 2xl:py-10">
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
            <h3 className="mb-6 text-2xl font-semibold md:mb-8 md:text-4xl lg:mb-12">
              Need Help?
            </h3>
            <p className="mb-6 text-sm tracking-widest text-zinc-600">
              We provide expert solutions for corporate recovery, conveyancing,
              litigation, and more.
            </p>
            <ul className="grid gap-x-8 gap-y-4 text-zinc-600 md:grid-cols-2">
              {[
                "Tailored strategies for your unique challenges.",
                "Proven success in insolvency and recovery.",
                "Transparent, competitive fees for all engagements.",
                "Specialists in reviving stalled projects.",
              ].map((item, idx) => (
                <li className="flex items-center gap-2" key={idx}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check size-5"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Call to Action Button */}
          <div className="relative flex items-end 2xl:justify-end">
            <button className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Call to Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

/*  */
