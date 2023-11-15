import { FC } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Gauge, Link, Crown, Sparkles } from "lucide-react";
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
        <Breadcrumbs />
      </section>
      {/* Content (sticky) */}
      <section className="relative isolate overflow-hidden bg-white px-6 pt-12 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
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
          <div className="block w-full justify-center py-12 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1  xl:-ml-24">
            <section>
              <div className="relative mx-auto h-[28rem] w-[90%] max-w-[25rem] rounded-md bg-slate-200 shadow-lg  lg:w-full">
                {/* Bookmark thingy */}
                <div className="flex">
                  <div className="absolute -left-2 top-6 h-16 w-20 rounded-r-md bg-sky-950">
                    <div className="absolute inset-0 flex items-center justify-items-center">
                      <Sparkles
                        className="mx-auto my-auto flex justify-center rounded-full border p-1 text-white"
                        strokeWidth={1.35}
                        size={30}
                      />
                    </div>
                  </div>
                  <h2 className="ml-24 mt-10 text-xl font-bold tracking-tight">
                    Excellence in Recovery
                  </h2>
                </div>
                <div className="triangle absolute -left-2 top-[88px]"></div>
              </div>
            </section>
            {/* // <img
          //   className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          //   src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          //   alt=""
          // /> */}
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-3xl text-base leading-8 text-gray-700 lg:max-w-[34rem]">
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
