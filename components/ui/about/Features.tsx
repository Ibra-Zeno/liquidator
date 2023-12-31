import { FC } from "react";
import Image from "next/image";
import { AreaChart, Key, Shield } from "lucide-react";

const values = [
  {
    icon: <Shield />,
    title: "Integrity",
    content:
      "We uphold stringent ethical standards to address our clients' needs with integrity and dedication. Our firm commitment to responsible business practices ensures that we deliver conscientious and professional services consistently.",
  },
  {
    icon: <Key />,
    title: "Responsibility",
    content:
      "We shoulder the responsibility of addressing the challenges presented by the demanding nature of our clients' businesses. Our approach is proactive and dedicated, ensuring we navigate through complexities with expertise and resilience.",
  },
  {
    icon: <AreaChart />,
    title: "Technical Excellence",
    content:
      "This core principle, ingrained across our firm, drives us towards the pinnacle of quality. It bolsters client satisfaction, employee growth, and underpins our independence.",
  },
];

const Features: FC = ({}) => {
  return (
    <section className="mx-auto my-12 bg-[#9cadbc]/30 px-3">
      <div className="container mx-auto pt-12">
        <div className="lg:flex lg:items-center">
          <div className="-ml-12 hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <Image
              className="h-[28rem] w-[28rem] rounded object-cover shadow-2xl xl:h-[36rem] xl:w-[25rem]"
              src="/images/index/index-bg.jpg"
              height={544}
              width={544}
              alt="random image"
            />
          </div>
          <div className="w-full max-w-2xl space-y-12 lg:w-1/2">
            <div>
              <h3 className="text-2xl font-semibold capitalize  lg:text-3xl">
                A Company <br /> Defined By Values
              </h3>

              <div className="mt-2">
                <span className="inline-block h-1 w-40 rounded-full bg-[#80b2c9]"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-[#80b2c9]"></span>
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-[#80b2c9]"></span>
              </div>
            </div>
            {values.map((value) => (
              <div
                className="md:-mx-4 md:flex md:items-start"
                key={value.title}
              >
                <span className="inline-block rounded-xl bg-blue-100 p-2 text-blue-500 dark:bg-blue-500 dark:text-white md:mx-4">
                  {value.icon}
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h5 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                    {value.title}
                  </h5>

                  <p className="mt-3 leading-7 text-gray-500">
                    {value.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-12 border-gray-200 dark:border-gray-700" />

        {/* ... Similar changes for other sections ... */}
      </div>
    </section>
  );
};

export default Features;
