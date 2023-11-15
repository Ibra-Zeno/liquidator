import { FC } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  Atom,
  Shield,
  Key,
  AreaChart,
  Gauge,
  Link,
  ShipWheel,
  Crown,
} from "lucide-react";
import Features from "@/components/ui/about/Features";
import Strategies from "@/components/ui/about/Strategies";
interface pageProps {}

const About: FC<pageProps> = ({}) => {
  return (
    <main>
      <section id="banner">
        <div className="mx-auto grid max-w-2xl gap-y-8 py-12 text-center text-lg tracking-wide">
          <span className=" font-semibold">Improve you asset management</span>
          <h2 className="-mt-2 text-6xl font-bold">About Us</h2>
          <p>
            Our mission is to provide a platform for all stakeholders in the
            property industry to collaborate and share information in a
            transparent manner.
          </p>
        </div>
        {/* <Breadcrumbs /> */}
      </section>
      {/* Content (sticky) */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        {/* <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div> */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 py-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-[34rem]">
                <p className="text-sm font-semibold leading-7 text-indigo-600">
                  Expert Corporate Recovery and Insolvency Services
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Navigating Business Challenges
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Liquidator.net specialises in expert corporate recovery and
                  insolvency services, adeptly steering businesses through
                  financial challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 py-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-ml-12 lg:overflow-hidden">
            <section>
              <div className="mx-auto h-[28rem] w-[90%] rounded-md bg-slate-200 shadow-lg lg:ml-40 lg:mr-auto lg:w-full lg:max-w-[25rem]"></div>
            </section>
            {/* // <img
          //   className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          //   src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          //   alt=""
          // /> */}
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-3xl text-base leading-7 text-gray-700 lg:max-w-[34rem]">
                <p>
                  Liquidator.net stands as a paramount provider in the domain of
                  corporate advisory services, meticulously formed to address
                  the ever-evolving demands of corporate recovery and insolvency
                  engagements in a plethora of industries. We are unwavering in
                  our commitment to delivering exemplary advisory services that
                  not only align with our clients&apos; business objectives but
                  also equip them to conquer the challenges brought forth by the
                  constantly shifting business and economic terrains.
                </p>
                <h2 className="mb-4 mt-10 text-2xl font-bold tracking-tight text-gray-900">
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
                </p>
              </div>
            </div>
          </div>
        </div>
        <Features />
      </section>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-3xl text-base leading-7 text-gray-700 lg:max-w-[34rem]">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Navigating Financial Distress: Strategies and Solutions
            </h2>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <Gauge
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Pre-emptive Measures:
                  </strong>{" "}
                  Our insight into financial distress is not limited to
                  recessions; we understand that financial difficulties can be
                  an early indicator of business failure.
                </span>
              </li>
              <li className="flex gap-x-3">
                <Link
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Strategic Alliances:
                  </strong>{" "}
                  We maintain a collaborative approach, working closely with
                  lenders and legal advisers to provide strategic and technical
                  counsel well-versed in the intricacies of the lead-up to
                  liquidation or receivership.
                </span>
              </li>
              <li className="flex gap-x-3">
                <Crown
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Experienced Leadership:
                  </strong>{" "}
                  Our Management Team&apos;s extensive expertise in formal
                  insolvency assignments is leveraged to offer actionable
                  solutions and advice to a wide array of stakeholders,
                  including creditors, shareholders, directors, and companies.
                </span>
              </li>
            </ul>
            <h2 className="mb-4 mt-10 text-2xl font-bold tracking-tight text-gray-900">
              Specialised Insolvency Services
            </h2>
            <p className="mt-8">
              Our Insolvency division is adept at guiding companies through the
              intricacies of the liquidation process. We offer a comprehensive
              suite of services tailored to the needs of distressed entities,
              which includes:
            </p>
            <ol className="grid gap-y-1 py-5 font-bold leading-8 tracking-wide">
              <li>Court Liquidation</li>
              <li>Provisional Liquidation</li>
              <li>Pre-liquidation advice</li>
            </ol>
            <p className="">
              For entities facing receivership, we provide indispensable support
              to financial institutions, aiding in the exercise of their rights
              under debenture arrangements for the appointment of Receivers
              and/or Receiver and Manager. Our goal is to ensure the optimal
              realisation of assets and business components to maximise returns
              for financial institutions.
            </p>
            <h2 className="mb-4 mt-10 text-2xl font-bold tracking-tight text-gray-900">
              Our Distinguished Team
            </h2>
            <p className="mt-6">
              Pride in our organisation is deeply rooted in the collective
              expertise of our senior management team. This team, comprised of
              numerous seasoned licensed liquidators, is the driving force
              behind our distinguished insolvency engagements. Our expertise is
              channelled through our affiliate companies:{" "}
              <strong className="tracking-wide">
                Radiant Consulting Asia Sdn Bhd
              </strong>
              ,{" "}
              <strong className="tracking-wide">
                Chilterns Insolvency Sdn Bhd
              </strong>
              , and{" "}
              <strong className="tracking-wide">
                Radiant Corporate Solutions Sdn Bhd
              </strong>
              , ensuring comprehensive and professional management across all
              facets of our services.
            </p>
            <p className="mt-8">
              Liquidator.net is your trusted ally, equipped with the necessary
              expertise and personalised approach to navigate the complexities
              of corporate recovery and insolvency. Our relentless pursuit of
              excellence is reflected in our client satisfaction and the
              successful outcomes of our engagements.
            </p>
          </div>
        </div>
      </div>
      <Strategies />
    </main>
  );
};

export default About;
