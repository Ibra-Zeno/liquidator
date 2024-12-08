import { FC } from "react";
import Image from "next/image";
// import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Sparkles, CheckSquare, PackageCheck } from "lucide-react";
import Features from "@/components/ui/about/Features";
import Link from "next/link";
import Strategies from "@/components/ui/about/Strategies";
import CTA from "@/components/ui/CTA";
import { Button } from "@/components/shadcn/ui/button";
interface pageProps {}

const About: FC<pageProps> = ({}) => {
  return (
    <main>
      {/* Content (sticky) */}
      <section className="container relative isolate overflow-hidden px-6 pt-12 lg:px-0">
        {/* Who We Are Section */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-40 gap-y-8 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2  lg:gap-y-0">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:mt-12  lg:w-full lg:max-w-8xl lg:grid-cols-2 lg:justify-end lg:gap-x-8 lg:px-8">
            {/* Title */}
            <div className="lg:pr-4">
              <div className="lg:max-w-[34rem]">
                <p className="w-fit text-xs font-semibold italic leading-7 text-primary md:text-sm">
                  Business Support, Redefined
                </p>
                <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-gray-900 sm:mt-2 sm:text-4xl">
                  Who We Are
                </h2>
                <p className="mt-6 font-medium leading-7 text-gray-700 sm:text-base lg:text-lg xl:text-xl xl:leading-8">
                  Liquidator.net specialises in expert corporate recovery and
                  insolvency services, adeptly steering businesses through
                  financial challenges.
                </p>
              </div>
            </div>
          </div>
          {/* Aside */}
          <div className="relative mx-auto block w-full max-w-lg justify-center lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:py-12">
            <section className="">
              <div className="relative mx-auto h-fit w-[90%] max-w-[23rem] rounded-md border-2 border-secondary/10 bg-white/75 pb-16 shadow-lg shadow-accent/40 sm:h-[25.5rem] lg:w-full ">
                {/* Bookmark thingy */}
                <div className="flex">
                  <div className="absolute -left-2 top-6 z-10 h-16 w-20 rounded-r-md bg-text">
                    <div className="absolute inset-0 flex items-center justify-items-center">
                      <Sparkles
                        className="mx-auto my-auto flex justify-center rounded-full border border-background p-1 text-background"
                        strokeWidth={1.35}
                        size={30}
                      />
                    </div>
                  </div>
                  <h2 className="ml-[90px] mt-10 text-base font-bold tracking-tight sm:ml-24 md:text-xl">
                    What Sets Us Apart
                  </h2>
                </div>
                <div className="triangle absolute -left-2 top-[88px]"></div>
                <ul className="mt-12">
                  <li className="ml-8 mt-6 flex items-start justify-start pr-6">
                    <PackageCheck size={50} strokeWidth={1.2} />
                    <p className="ml-3 max-w-sm text-sm font-medium leading-6 text-gray-600">
                      <span className="font-bold text-gray-900">Integrity</span>
                      : Ethical and transparent practices guide every
                      engagement.
                    </p>
                  </li>
                  <li className="ml-8 mt-6 flex items-start justify-start pr-6">
                    <PackageCheck size={50} strokeWidth={1.2} />
                    <p className="ml-3 max-w-sm text-sm font-medium leading-6 text-gray-600">
                      <span className="font-bold text-gray-900">
                        Responsibility
                      </span>
                      : A proactive approach to solving complex financial
                      challenges.
                    </p>
                  </li>
                  <li className="ml-8 mt-6 flex items-start justify-start pr-6">
                    <PackageCheck size={50} strokeWidth={1.2} />
                    <p className="ml-3 max-w-sm text-sm font-medium leading-6 text-gray-600">
                      <span className="font-bold text-gray-900">
                        Technical Excellence
                      </span>
                      : Superior expertise ensures high-quality, actionable
                      results.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:mb-4 lg:grid lg:w-full lg:max-w-8xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="mb-6 max-w-3xl text-sm font-medium leading-7 text-gray-700 sm:text-base md:text-base lg:max-w-[34rem] xl:leading-8">
                <p>
                  At Liquidator.net, we guide businesses through financial
                  challenges with precision and care. Founded with a commitment
                  to integrity, responsibility, and technical excellence, we
                  deliver tailored solutions that empower our clients to
                  navigate complexity and achieve sustainable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Strategies />
      {/* Meet the Team */}
      <section className="py-12 pb-24 xl:pb-36 xl:pt-32">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center rounded-full py-0.5 text-xs font-semibold italic text-primary/90 transition-colors ">
                Experienced Leadership You Can Trust
              </div>
              <h1 className="text-pretty mb-6 mt-4 text-3xl font-semibold lg:text-5xl">
                Meet Our Team
              </h1>
              <p className="mb-8 max-w-xl text-zinc-600 lg:text-lg">
                Our senior management team, made up of experienced licensed
                liquidators, brings extensive expertise in corporate recovery.
                Their collective knowledge ensures every engagement is handled
                with professionalism and precision.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="/team/liquidators">
                  <Button variant={"default"}>Our Team</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/images/about/meeting-room1.jpg"
              alt="Meeting Room"
              height="700"
              width="700"
              className="max-h-96 w-full rounded-md object-cover object-bottom"
            />
          </div>
        </div>
      </section>
      <div className="mx-auto -mt-12 mb-12 h-0.5 w-24 rounded bg-gray-600/20 lg:hidden"></div>
      {/* Services */}
      <section className="pb-32">
        <div className="container">
          <div className="flex flex-col-reverse items-center gap-8 direction-reverse lg:grid lg:grid-cols-2">
            {/* Image on the left */}
            <Image
              src="/images/about/services.jpg"
              height={700}
              width={700}
              alt="placeholder hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            {/* Text content on the right */}
            <div className="flex flex-col items-center text-center lg:items-start lg:pl-8 lg:text-left">
              <div className="inline-flex items-center rounded-full py-0.5 text-xs font-semibold italic text-primary/90 transition-colors">
                Comprehensive solutions
              </div>
              <h1 className="text-pretty mb-6 mt-4 text-3xl font-semibold lg:text-5xl">
                Our Services
              </h1>
              <p className="mb-8 max-w-xl text-zinc-600 lg:text-lg">
                We offer tailored solutions in corporate recovery and
                insolvency, guiding businesses through challenges with expertise
                and care. From liquidation to asset management, our services are
                designed to deliver results and drive growth.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="/services">
                  <Button>Explore Services</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default About;
