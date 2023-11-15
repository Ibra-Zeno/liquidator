import { FC } from "react";
import Image from "next/image";
import { AreaChart, Key, Shield } from "lucide-react";

const Features: FC = ({}) => {
  return (
    <section className="">
      <div className="container mx-auto px-6 py-10">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2">
            <div>
              <h1 className="text-2xl font-semibold capitalize  lg:text-3xl">
                explore our <br /> awesome Components
              </h1>

              <div className="mt-2">
                <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
              </div>
            </div>

            <div className="md:-mx-4 md:flex md:items-start">
              <span className="inline-block rounded-xl bg-blue-100 p-2 text-blue-500 dark:bg-blue-500 dark:text-white md:mx-4">
                <Shield />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                  Integrity
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  We uphold stringent ethical standards to address our
                  clients&apos; needs with integrity and dedication. Our firm
                  commitment to responsible business practices ensures that we
                  deliver conscientious and professional services consistently.
                </p>
              </div>
            </div>
            <div className="md:-mx-4 md:flex md:items-start">
              <span className="inline-block rounded-xl bg-blue-100 p-2 text-blue-500 dark:bg-blue-500 dark:text-white md:mx-4">
                <Key />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                  Responsibility
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  We shoulder the responsibility of addressing the challenges
                  presented by the demanding nature of our clients&apos;
                  businesses. Our approach is proactive and dedicated, ensuring
                  we navigate through complexities with expertise and
                  resilience.
                </p>
              </div>
            </div>
            <div className="md:-mx-4 md:flex md:items-start">
              <span className="inline-block rounded-xl bg-blue-100 p-2 text-blue-500 dark:bg-blue-500 dark:text-white md:mx-4">
                <AreaChart />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                  Technical Excellence
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  This core principle, ingrained across our firm, drives us
                  towards the pinnacle of quality. It bolsters client
                  satisfaction, employee growth, and underpins our independence.
                </p>
              </div>
            </div>

            {/* ... Repeat the structure for each item, replacing SVG with <h4>SVG ICONS</h4> ... */}
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <Image
              className="h-[28rem] w-[28rem] rounded-full object-cover shadow-2xl xl:h-[30rem] xl:w-[30rem]"
              src="/images/index/index-bg.jpg"
              height={544}
              width={544}
              alt="random image"
            />
          </div>
        </div>

        <hr className="my-12 border-gray-200 dark:border-gray-700" />

        {/* ... Similar changes for other sections ... */}
      </div>
    </section>
  );
};

export default Features;
