import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import { PackageCheck } from "lucide-react";

const services = [
  {
    title: "Distressed Assets Management",
    icon: <PackageCheck />,
    content: () => (
      <>
        <li>
          <strong>Comprehensive Corporate Insolvency Expertise</strong>: Our
          team is equipped with extensive knowledge in managing all facets of
          corporate insolvency, covering liquidation and receivership
          engagements.
        </li>
        <li>
          <strong>Collaborative Approach</strong>: We collaborate closely with
          financial advisers, liquidators, and special administrators, offering
          guidance on corporate structures, due diligence, and debt
          restructuring agreements.
        </li>
        <li>
          <strong>Enforcement and Advisory</strong>: Advising on and enforcing
          creditors&apos; rights and corporate remedies through our expertise in
          judicial processes. engagements.
        </li>
      </>
    ),
  },
  {
    title: "Property (Asset) Management",
    icon: <PackageCheck />,
    content: () => (
      <>
        <li>
          <strong>Specialised Real Estate Management</strong>: Our property
          management services are specifically tailored to meet the unique
          requirements of each real estate investment.
        </li>
        <li>
          <strong>Focused Objectives</strong>: We are dedicated to ensuring
          informed and strategic supervision of real estate investments,
          maximising utilisation and securing the highest net return while
          safeguarding the initial capital.
        </li>
      </>
    ),
  },
  {
    title: "Focused Objectives",
    icon: <PackageCheck />,
    content: () => (
      <>
        <li>
          <strong>Tailored Corporate Strategy Advice</strong>: We provide
          bespoke advice on corporate strategies, fundraising alternatives, and
          capital restructuring, as well as navigating the regulatory and legal
          dimensions of the securities markets.
        </li>
        <li>
          <strong>Valuation and Transactions</strong>: Our services include
          feasibility studies, asset disposals, company valuations, and guidance
          on mergers, acquisitions, and disposals, ensuring all-encompassing
          support for both local and cross-border transactions.
        </li>
      </>
    ),
  },
  {
    title: "Joint Venture Arrangements and Listing Exercises",
    icon: <PackageCheck />,
    content: () => (
      <>
        <li>
          <strong>Joint Venture Structuring and Approvals</strong>: Offering
          expert advice on forming joint ventures, structuring arrangements, and
          securing necessary approvals from relevant authorities.
        </li>
        <li>
          <strong>Specialised Listing Advice</strong>: Our advisory services
          extend to reverse takeovers and listing exercises, focusing on
          achieving your objectives and maximising value.
        </li>
      </>
    ),
  },
  {
    title: "Investor Relations",
    icon: <PackageCheck />,
    content: () => (
      <>
        <li>
          <strong>Effective Communication Strategies</strong>: We aim to reflect
          your company&apos;s intrinsic value in its share price through
          strategic communication with current and potential investors.
        </li>
        <li>
          <strong>Media and Analyst Interaction</strong>: Engaging with the
          media, investment analysts, and the investing community, we enhance
          shareholder confidence and aid in realising the full market potential
          of your company.
        </li>
      </>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <main className="mx-auto max-w-7xl">
      {
        // TODO: Add Image to banner for services
      }
      <section id="banner" className="border-b border-gray-700/25 pb-3">
        <div
          aria-hidden="true"
          className="absolute -top-96 start-1/2 flex -translate-x-1/2 transform"
        >
          <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl "></div>
          <div className="rounded-fulls h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl "></div>
        </div>
        <div className="relative overflow-hidden">
          <div className="relative">
            <div className="mx-auto max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="inline-block bg-gradient-to-l from-blue-600 to-violet-500 bg-clip-text text-sm font-medium text-transparent">
                  Explore What We Offer
                </p>

                <div className="mt-5 max-w-2xl">
                  <h1 className="block text-xl font-semibold tracking-tight text-gray-800 md:text-3xl lg:text-4xl">
                    Services
                  </h1>
                </div>

                <div className="mt-5 max-w-3xl">
                  <p className="text-lg text-gray-600 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa dolores ipsum aspernatur officia ex, soluta est laborum
                    ducimus iusto dolorum aut reprehenderit veniam repellendus
                    possimus vero adipisci ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-12">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {services.map((feature) => (
                <div key={feature.title} className="relative pl-16">
                  <dt className="mb-4 pt-1.5 text-xl font-bold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    <ul className="list-inside list-disc leading-8">
                      {feature.content()}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* <p className="mx-auto mb-6 mt-12 max-w-prose text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolore
        officia ex sint cupiditate maiores, quisquam numquam commodi iure, rem
        rerum quod omnis qui perferendis velit neque placeat, voluptatibus et?
      </p> */}
      {/* <section className="p-4 lg:p-8">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <Image
              src="/images/index/index-bg.jpg"
              width={544}
              height={544}
              alt=""
              className="aspect-video h-80 "
            />
            <div className="flex flex-1 flex-col justify-center p-6 ">
              <span className="mb-2.5 text-xs uppercase">
                Join, it&apos;s free
              </span>
              <h3 className="text-3xl font-bold">
                We&apos;re not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <Image
              src="/images/index/index-bg.jpg"
              width={544}
              height={544}
              alt=""
              className="aspect-video h-80 "
            />
            <div className="flex flex-1 flex-col justify-center p-6">
              <span className="mb-2.5 text-xs uppercase">
                Join, it&apos;s free
              </span>
              <h3 className="text-3xl font-bold">
                We&apos;re not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <Image
              src="/images/index/index-bg.jpg"
              width={544}
              height={544}
              alt=""
              className="aspect-video h-80"
            />
            <div className="flex flex-1 flex-col justify-center p-6">
              <span className="mb-2.5  text-xs uppercase">
                Join, it&apos;s free
              </span>
              <h3 className="text-3xl font-bold">
                We&apos;re not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Services;
