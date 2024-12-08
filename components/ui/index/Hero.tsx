import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Users2,
  CheckSquare,
  LockKeyhole,
  Clock,
  Cog,
  ShieldCheck,
} from "lucide-react";
// import Button from "@/components/ui/index/button";
import { Separator } from "@/components/shadcn/ui/separator";
import { Button } from "@/components/shadcn/ui/button";
import LogoCloud from "@/components/ui/index/LogoCloud";

const stats = [
  {
    name: "17 Years Experience",
    icon: <Clock size={30} strokeWidth={2.5} />,
  },
  {
    name: "Custom Strategies",
    icon: <Cog size={35} strokeWidth={1.8} />,
  },
  {
    name: "Trusted & Accredited",
    icon: <ShieldCheck size={30} strokeWidth={2.5} />,
  },
];

const Hero: React.FC = () => {
  return (
    <main className="relative ">
      <div className="overflow-hidden py-0 sm:py-4 md:py-8 lg:py-12">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="isolate z-30 lg:pr-8 lg:pt-4">
              <div className="relative isolate mx-auto block justify-center md:h-[40rem] ">
                <h1 className="pb-3 pt-8 text-center text-5xl font-bold leading-10 tracking-tighter sm:text-7xl md:text-left">
                  Liquidation.
                </h1>
                <h1 className="text-center text-5xl font-bold leading-10 tracking-tighter sm:text-7xl md:text-left">
                  Expertise.
                </h1>
                <p className=" text-text/75 my-8 text-center text-base sm:text-lg sm:leading-8 md:mb-12 md:mt-14 md:text-left">
                  Propelling Business Innovations Forward and Cultivating
                  Financial Empowerment for Sustainable Growth in a Dynamic and
                  Ever-Evolving Global Landscape, Driving Positive Change and
                  Fostering Prosperity for All Stakeholders.
                </p>
                {/* Buttons */}
                {/* sm screen btns */}
                <div className="mx-auto mb-6 flex justify-center gap-x-6 md:hidden">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    <Button
                      className="flex flex-row text-sm "
                      variant={"default"}
                      size={"sm"}
                    >
                      Contact Us
                      <ChevronRight className="ml-2" />
                    </Button>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-center "
                  >
                    <Button variant="ghost" size={"sm"} className="text-sm">
                      Learn More
                      <ChevronRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
                {/* md+ screen btns */}
                <div className="mb-10 hidden justify-start gap-x-6 md:flex">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    <Button
                      className="flex flex-row text-base "
                      variant={"default"}
                      size={"lg"}
                    >
                      Contact Us
                      <ChevronRight className="ml-2" />
                    </Button>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-center "
                  >
                    <Button variant="ghost" size={"lg"} className="text-base">
                      Learn More
                      <ChevronRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="mb-12 mt-8 grid max-w-2xl grid-cols-3 justify-start divide-x-2 text-left text-xs sm:-ml-6 sm:px-0 md:-mb-20 md:mt-12 ">
                  {stats.map((stat, idx) => (
                    <div
                      className="mx-auto flex flex-row items-center pl-1 md:pl-4"
                      key={stat.name}
                    >
                      <div className="rounded-full p-0.5 text-accent">
                        {stat.icon}
                      </div>
                      <p className="ml-3 text-xs md:text-sm">{stat.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="mx-auto flex max-w-md content-center items-center justify-center pb-12 md:max-w-none md:py-12">
                <Image
                  src="/images/index/malaysia-bg-index.jpg"
                  alt="Professional Illustration"
                  width={700}
                  height={700}
                  className="my-auto h-auto max-w-full rounded object-cover shadow-lg grayscale filter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
