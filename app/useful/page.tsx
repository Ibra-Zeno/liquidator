import { FC } from "react";

import CTA from "@/components/ui/CTA";
import Image from "next/image";
import imageData from "@/public/images/imageData";
import Link from "next/link";

interface UsefulPageProps {}

const Useful: FC<UsefulPageProps> = ({}) => {
  const blocks = [
    { title: "Creative minds" },
    { title: "Effortless updates" },
    { title: "Strong empathy" },
    { title: "Conquer the best" },
    { title: "Designing for people" },
    { title: "Simple and affordable" },
    { title: "Get freelance work" },
    { title: "Get freelance work" },
    { title: "Get freelance work" },
    { title: "Sell your goods" },
  ];

  return (
    <>
      <div className="bg-neutral-300">
        <div className="mx-auto max-w-5xl px-4 pb-24 pt-24 lg:pt-32 xl:px-0">
          <h1 className="text-5xl font-semibold text-gray-900 md:text-6xl">
            <span className="text-sky-700">Helpful Resources:</span> Find What
            You&apos;re Looking For
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-lg text-gray-900">
              Welcome to our Helpful Resources page, where we’ve gathered a
              curated selection of links to make your experience seamless and
              efficient. Whether you’re looking for key tools, detailed guides,
              or quick access to important information, you’ll find everything
              you need right here. Explore the links below to get started!
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {imageData.map((block, index) => (
            <Link href={block.link} key={index} className="group">
              <div className="flex h-36 flex-col justify-center rounded-xl border border-gray-200 p-4 text-center transition-all duration-200 ease-in-out group-hover:bg-blue-300 dark:border-neutral-700 sm:h-56 md:p-5">
                <div className="mx-auto flex items-center justify-center rounded-lg  ">
                  {/* Icon Placeholder */}
                  <Image
                    src={block.src}
                    height={60}
                    width={60}
                    alt={`${block.name} logo`}
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-xs font-semibold text-gray-800 dark:text-neutral-200 sm:text-base lg:text-lg">
                    {block.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Useful;
