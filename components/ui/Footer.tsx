"use client";

import { FC } from "react";
import { Slack, Landmark } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {}
const companyLocations = [
  {
    name: "Radiant Consulting Asia Sdn Bhd",
    icons: <Landmark />,
    id: "(773117-T)",
    margin: "mr-auto",
  },
  {
    name: "Chilterns Insolvency Sdn Bhd",
    icons: <Landmark />,
    id: "(822208-U)",
    margin: "mx-auto",
  },
  {
    name: "Radiant Corporate Solutions Sdn Bhd",
    icons: <Landmark />,
    id: "(1005821-D)",
    margin: "ml-auto",
  },
];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div>
      <footer className="bg-[#DDF2FD]">
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:pt-20">
          <div className="flex justify-between">
            <div className="col-span-full mb-8 lg:col-span-1">
              <Logo />
              <h4 className="mt-10 max-w-md text-lg font-medium leading-8 text-gray-500">
                Propelling Business Innovations Forward and Cultivating
                Financial Empowerment for Sustainable Growth
              </h4>
            </div>

            <section className="flex flex-row gap-x-24">
              <div className="col-span-1">
                <h4 className="font-semibold ">Product</h4>
                <div className="mt-3 grid space-y-3">
                  <p>
                    <a
                      className="inline-flex gap-x-2 hover:text-gray-200"
                      href="#"
                    >
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 hover:text-gray-200"
                      href="#"
                    >
                      Changelog
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 hover:text-gray-200"
                      href="#"
                    >
                      Docs
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <h4 className="font-semibold ">Company</h4>
                <div className="mt-3 grid space-y-3">
                  <p>
                    <a
                      className="inline-flex gap-x-2 hover:text-gray-200"
                      href="#"
                    >
                      About us
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 hover:text-gray-200"
                      href="#"
                    >
                      Blog
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 hover:text-gray-200"
                      href="#"
                    >
                      Careers
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 hover:text-gray-200"
                      href="#"
                    >
                      Customers
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-5 grid grid-cols-3 items-center justify-between">
            {companyLocations.map((location) => (
              <div
                key={location.name}
                className={`col-span-1 w-fit ${location.margin}`}
              >
                <div className="flex gap-x-2">
                  {location.icons}
                  <h4 className="font-semibold">{location.name}</h4>
                </div>
                <p className="mt-1.5 text-sm text-gray-500">{location.id}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-y-2 border-t border-gray-400/50 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
            <div className="flex items-center justify-between ">
              <p className="text-sm">© All rights reserved.</p>
            </div>

            <div>
              <a
                className="inline-flex h-10 w-10 items-center justify-center gap-x-3.5 rounded-md text-center text-gray-200 transition hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                href="#"
              >
                <Slack />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center gap-x-3.5 rounded-md text-center text-gray-200 transition hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                href="#"
              >
                <Slack />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center gap-x-3.5 rounded-md text-center text-gray-200 transition hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                href="#"
              >
                <Slack />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center gap-x-3.5 rounded-md text-center text-gray-200 transition hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                href="#"
              >
                <Slack />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center gap-x-3.5 rounded-md text-center text-gray-200 transition hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                href="#"
              >
                <Slack />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
