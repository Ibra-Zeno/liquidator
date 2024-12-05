import { PackageCheck } from "lucide-react";
import React from "react";

const service = [
  {
    title: "Comprehensive Conveyancing Matters",
    description:
      "We simplify property transactions, including sub-sales, auctions, refinancing, deed reassignment, and transfer perfection, ensuring a seamless process for all parties.",
    Icon: PackageCheck,
  },
  {
    title: "Corporate Recovery Receivership",
    description:
      "We offer expert strategies for asset management and financial restructuring, helping businesses remain operational while resolving insolvency challenges.",
    Icon: PackageCheck,
  },
  {
    title: "Insolvency Administration with MDI",
    description:
      "As a trusted agent for the Malaysia Department of Insolvency (MDI), we manage assigned insolvency companies with precision and ensure compliance with regulatory requirements.",
    Icon: PackageCheck,
  },
  {
    title: "Revival of Abandoned Projects",
    description:
      "Our innovative, cost-effective solutions breathe life into stalled residential and commercial developments, overcoming financial and structural challenges.",
    Icon: PackageCheck,
  },
  {
    title: "Litigation Support",
    description:
      "We provide end-to-end legal assistance, including case preparation and courtroom guidance, for effective dispute resolution.",
    Icon: PackageCheck,
  },
  {
    title: "Strata Title Applications",
    description:
      "We expedite ownership transitions by managing strata title applications and ensuring full compliance with property laws.",
    Icon: PackageCheck,
  },
];

const ServicesComp: React.FC = () => {
  return (
    <div className="mx-auto max-w-[85rem] rounded-sm border-small border-slate-400 bg-slate-200 px-4 py-10 shadow-xl sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[68rem]">
        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          {service.map((block: any, index: any) => (
            <div
              className="flex gap-x-5 rounded-md border-small border-slate-500/25 bg-slate-100 p-4 shadow-sm sm:gap-x-8"
              key={block.title}
            >
              <div className="mt-2 shrink-0">
                {block.Icon && (
                  <block.Icon className="size-8 text-gray-800 dark:text-white" />
                )}
              </div>
              <div className="grow">
                <h3 className="text-base font-semibold text-gray-800 dark:text-neutral-200 sm:text-lg">
                  {block.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default ServicesComp;
