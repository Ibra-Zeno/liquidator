import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users2, CheckSquare, LockKeyhole } from "lucide-react";
// import Button from "@/components/ui/index/button";
import { Separator } from "@/components/shadcn/ui/separator";
import { Button } from "@/components/shadcn/ui/button";
import LogoCloud from "@/components/ui/index/LogoCloud";
import LogoCarousel from "./LogoCarousel";

const HeroTest: React.FC = () => {
  return (
    <main className="relative ">
      <div className="my-10">
        <div className=" px-6">
          <div className="grid  grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20  lg:grid-cols-3 ">
            <div className="col-span-2 mx-auto max-w-2xl lg:max-w-none">
              <div className="isolate z-30 col-span-2 w-full lg:pr-8 lg:pt-4">
                <div className="relative isolate mx-auto -mt-20 flex h-[30rem] flex-col justify-center ">
                  <h1 className="animate-fadeIn mb-8 font-serif text-4xl font-light italic leading-10 opacity-0 delay-100 fill-mode-forwards sm:text-5xl">
                    Liquidation.
                  </h1>
                  <h1 className="mb-20 animate-[fadeIn_ease-in_1s]  font-serif text-4xl font-light italic leading-10 opacity-0 delay-500 fill-mode-forwards sm:text-5xl">
                    Expertise.
                  </h1>
                  <div className="mb-10 flex justify-start gap-x-6">
                    <Button className=" bg-sky-950 text-base text-white ">
                      <Link
                        href="#"
                        className="flex items-center justify-center"
                      >
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
            </div>
          </div>
          <LogoCarousel />
        </div>
      </div>
      {/* <LogoCloud /> */}
    </main>
  );
};

export default HeroTest;
