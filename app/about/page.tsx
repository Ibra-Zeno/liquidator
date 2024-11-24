import { FC } from "react";
import Image from "next/image";
// import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Sparkles, CheckSquare, PackageCheck } from "lucide-react";
import Features from "@/components/ui/about/Features";
import Link from "next/link";
import Strategies from "@/components/ui/about/Strategies";
import CTA from "@/components/ui/CTA";
interface pageProps {}

const About: FC<pageProps> = ({}) => {
  return (
    <main>
      {/* <div
        aria-hidden="true"
        className="absolute -top-96 start-1/2 flex max-w-[100vw] -translate-x-1/2 transform"
      >
        <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl "></div>
        <div className="h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 rounded-full bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl "></div>
      </div> */}
      <div className="relative overflow-hidden">
        <div className="relative">
          <div className="mx-auto max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-block bg-gradient-to-l from-blue-600 to-violet-500 bg-clip-text text-sm font-medium text-transparent">
                Improve Your Asset Management
              </p>

              <div className="mt-5 max-w-2xl">
                <h1 className="block text-3xl font-semibold tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
                  About Us
                </h1>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-lg leading-8 text-gray-600 ">
                  Our mission is to provide a platform for all stakeholders in
                  the property industry to collaborate and share information in
                  a transparent manner.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 hidden border-gray-200 md:block" />
      </div>

      {/* Content (sticky) */}
      <section className="container relative isolate overflow-hidden px-6 lg:px-0">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-40 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2  lg:gap-y-0">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:mt-12  lg:w-full lg:max-w-8xl lg:grid-cols-2 lg:justify-end lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-[34rem]">
                <p className="text-sm font-semibold leading-7 text-emerald-700">
                  Guiding Businesses Through Financial Challenges
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Who We Are
                </h2>
                <p className="mt-6 text-xl font-medium leading-8 text-gray-700">
                  Liquidator.net specialises in expert corporate recovery and
                  insolvency services, adeptly steering businesses through
                  financial challenges.
                </p>
              </div>
            </div>
          </div>
          {/* Aside */}
          <div className="relative block w-full max-w-lg justify-center py-12 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <section className="">
              <div className="relative mx-auto h-[28rem] w-[90%] max-w-[23rem] rounded-md bg-slate-200 shadow-lg sm:h-[25.5rem] lg:w-full ">
                {/* <div className="absolute inset-0 -z-10 h-[30rem] w-[20rem] translate-x-[3rem] rotate-45 bg-emerald-700/25 blur-3xl "></div> */}
                {/* Bookmark thingy */}
                <div className="flex">
                  <div className="absolute -left-2 top-6 z-10 h-16 w-20 rounded-r-md bg-sky-950">
                    <div className="absolute inset-0 flex items-center justify-items-center">
                      <Sparkles
                        className="mx-auto my-auto flex justify-center rounded-full border p-1 text-white"
                        strokeWidth={1.35}
                        size={30}
                      />
                    </div>
                  </div>
                  <h2 className="ml-24 mt-10 text-xl font-bold tracking-tight">
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
              <div className="max-w-3xl text-base leading-8 text-gray-700 lg:max-w-[34rem]">
                <p>
                  At Liquidator.net, we guide businesses through financial
                  challenges with precision and care. Founded with a commitment
                  to integrity, responsibility, and technical excellence, we
                  deliver tailored solutions that empower our clients to
                  navigate complexity and achieve sustainable outcomes.
                </p>
                {/* <h2 className="mb-4 mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  Our Excellence in Advisory Services
                </h2>
                <p>
                  At the heart of our operations, Liquidator.net is celebrated
                  for its exceptional technical acumen and the personalised
                  service we offer. As a boutique Distressed Assets Management
                  (DAM) firm, we are dedicated to specialising in corporate
                  recovery and insolvency engagements among other services. Our
                  singular focus remains steadfast—to guide our clients in
                  achieving their business goals.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* <Features /> */}
      </section>
      <Strategies />
      {/* Meet the Team */}
      <section className="pb-36 pt-32">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center rounded-full py-0.5 text-xs font-semibold italic text-foreground text-gray-600 transition-colors ">
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
                  <button className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto">
                    Our Team
                  </button>
                </Link>
                {/* <button className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-input bg-zinc-200 px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto">
                  Read The Docs
                </button> */}
              </div>
            </div>
            <Image
              src="/images/about/meeting-room1.jpg"
              alt="placeholder hero"
              height="700"
              width="700"
              className="max-h-96 w-full rounded-md object-cover object-bottom"
            />
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="pb-32">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
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
              <div className="inline-flex items-center rounded-full py-0.5 text-xs font-semibold italic text-foreground text-gray-600 transition-colors">
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
                  <button className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BS CTA
       <section className="mt-12 border-y-4 border-[#80b2c9]  bg-[#98afba] py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 md:text-center">
          <div className="max-w-xl md:mx-auto">
            <h3 className="text-3xl font-semibold text-gray-100 sm:text-4xl">
              Build the future with us
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3 md:justify-center">
            <Link
              href="/services"
              className="inline-block rounded-[2px] bg-gray-800 px-4 py-2 font-medium tracking-wide text-white shadow-md duration-150 hover:bg-gray-700 hover:shadow-none active:bg-gray-900"
            >
              Explore Services
            </Link>
            <Link
              href="/team/senior-management"
              className="inline-block rounded-[2px] border px-4 py-2 font-medium tracking-wide text-gray-100 duration-150 hover:bg-gray-50 hover:text-gray-800 active:bg-gray-100 active:text-gray-900"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section> */}
      <CTA />
    </main>
  );
};

export default About;
