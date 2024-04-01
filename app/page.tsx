import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users2, CheckSquare, LockKeyhole } from "lucide-react";
// import Button from "@/components/ui/index/button";
import { Separator } from "@/components/shadcn/ui/separator";
import { Button } from "@/components/shadcn/ui/button";
import LogoCloud from "@/components/ui/index/LogoCloud";

const Index: React.FC = () => {
  return (
    <main className="relative ">
      <div
        aria-hidden="true"
        className="absolute -top-96 start-1/2 z-0 flex max-w-[100vw] -translate-x-1/2 transform"
      >
        <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl "></div>
        <div className="rounded-fulls h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl "></div>
      </div>
      <div className="my-10 overflow-hidden py-20">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="isolate z-30 lg:pr-8 lg:pt-4">
              <div className="relative isolate mx-auto -mt-20 flex h-[40rem] flex-col justify-center ">
                <h1 className="text-4xl font-bold leading-10 tracking-tighter sm:text-7xl">
                  Liquidation Wonders
                </h1>
                <p className="mb-20 mt-10 text-base text-gray-900/75 sm:text-lg sm:leading-8">
                  Propelling Business Innovations Forward and Cultivating
                  Financial Empowerment for Sustainable Growth in a Dynamic and
                  Ever-Evolving Global Landscape, Driving Positive Change and
                  Fostering Prosperity for All Stakeholders.
                </p>
                <div className="mb-10 flex justify-start gap-x-6">
                  <Button className=" bg-sky-950 text-base text-white ">
                    <Link href="#" className="flex items-center justify-center">
                      Learn More
                      <ChevronRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button variant="ghost" className="text-base">
                    <Link
                      href="#"
                      className="flex items-center justify-center "
                    >
                      Contact Us
                      <ChevronRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="-mb-20 mt-10 grid max-w-xl grid-cols-3 gap-x-12 gap-y-8 px-20 text-left sm:grid-cols-3 sm:px-0">
                  <div className="flex w-full">
                    <div className="flex w-full items-center">
                      <Users2 className="" size={50} />
                      <p className="ml-3 w-full min-w-[4rem] text-sm">
                        Over 12,000 students
                      </p>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="my-auto ml-12 h-[75%]"
                    />
                  </div>
                  <div className="flex w-full">
                    <div className="flex w-full items-center">
                      <CheckSquare className="" size={50} />
                      <p className="ml-3 w-full min-w-[4rem] text-sm">
                        No yearly charges
                      </p>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="my-auto ml-12 h-[75%]"
                    />
                  </div>
                  <div className="flex items-center">
                    <LockKeyhole size={50} />
                    <p className="ml-3 text-sm ">
                      Secured & safe online payment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inset-y-0 right-0 top-0 z-0 mx-auto max-w-xl overflow-hidden px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-7/12 lg:max-w-full lg:pr-0 xl:px-0">
              <svg
                className="absolute left-0 hidden h-full -translate-x-1/2 transform text-white/30 lg:block"
                viewBox="0 0 100 100"
                fill="currentColor"
                preserveAspectRatio="none slice"
              >
                <path d="M50 0H100L90 100H10L100 0Z" />
              </svg>
              <Image
                className="isolate z-40 h-56 w-full rounded border-y-4 border-sky-800/60 object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
                style={{
                  clipPath: "polygon(33% 0, 100% 0%, 100% 100%, 4% 100%)",
                }}
                src="/images/index/index-bg.jpg"
                alt="Homepage backlground image"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <LogoCloud /> */}
    </main>
  );
};

export default Index;
