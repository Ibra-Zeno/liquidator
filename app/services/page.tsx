import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import { PackageCheck, Speech, BookText, BadgeCheck } from "lucide-react";
import CTA from "@/components/ui/CTA";

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

const choiceFeatures = [
  {
    name: "Tailored Solutions",
    description:
      "No two businesses are alike, and neither are our strategies. We tailor every solution to fit the unique needs of your business.",
  },
  {
    name: "Cost-Effective Services",
    description:
      "We believe in delivering value. Our fees are transparent, competitive, and aligned with the complexity of each case.",
  },
  {
    name: "Proven Track Record",
    description:
      "With successful engagements across industries, we are a trusted partner in corporate recovery.",
  },
];

const partners = [
  {
    name: "Small and Medium-Sized Enterprises",
    desc: "facing financial difficulties or restructuring requirements.",
  },
  {
    name: "Large Corporations",
    desc: "requiring advanced insolvency, restructuring, or legal support.",
  },
  {
    name: "Developers",
    desc: "seeking to revive stalled residential or commercial projects.",
  },
  {
    name: "Financial Institutions",
    desc: "managing distressed assets and insolvency portfolios.",
  },
];

const expertFeatures = [
  {
    name: "Comprehensive Conveyancing Matters",
    description:
      "We simplify property transactions, including sub-sales, auctions, refinancing, deed reassignment, and transfer perfection, ensuring a seamless process for all parties.",
    icon: PackageCheck,
  },
  {
    name: "Corporate Recovery Receivership",
    description:
      "We offer expert strategies for asset management and financial restructuring, helping businesses remain operational while resolving insolvency challenges.",
    icon: PackageCheck,
  },
  {
    name: "Insolvency Administration with MDI",
    description:
      "As a trusted agent for the Malaysia Department of Insolvency (MDI), we manage assigned insolvency companies with precision and ensure compliance with regulatory requirements.",
    icon: PackageCheck,
  },
  {
    name: "Revival of Abandoned Projects",
    description:
      "Our innovative, cost-effective solutions breathe life into stalled residential and commercial developments, overcoming financial and structural challenges.",
    icon: PackageCheck,
  },
  {
    name: "Litigation Support",
    description:
      "We provide end-to-end legal assistance, including case preparation and courtroom guidance, for effective dispute resolution.",
    icon: PackageCheck,
  },
  {
    name: "Strata Title Applications",
    description:
      "We expedite ownership transitions by managing strata title applications and ensuring full compliance with property laws.",
    icon: PackageCheck,
  },
];
const Services: React.FC = () => {
  return (
    <>
      <div>
        <div className="bg-slate-200 md:pb-48">
          <div className="mx-auto max-w-5xl px-4 pb-24 pt-24 lg:pt-32 xl:px-0">
            <h1 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Explore What We Offer
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-lg">
                At The Liquidator, we are dedicated to helping businesses
                navigate the complexities of insolvency, corporate recovery, and
                project revitalization. Our comprehensive range of services
                ensures that no matter the challenge, we can provide tailored
                solutions that meet your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <section id="pricing" className="pb-12 pt-2 md:-mt-52">
        <div className="relative mx-auto w-full items-center px-6 md:max-w-7xl md:px-10 lg:px-12">
          <div className="mx-auto max-w-sm space-y-12 rounded md:grid md:w-full md:max-w-none md:grid-cols-3 md:gap-x-4 md:space-y-0  md:px-8 md:py-12 lg:px-0 lg:py-0">
            {[
              {
                title: "Corporate Recovery",
                description: "Services:",
                features: [
                  "Members Voluntary Winding-Up – For solvent companies seeking an efficient closure.",
                  "Creditors Voluntary Winding-Up – Helping businesses address creditor claims strategically",
                  "Compulsory Winding-Up – Providing court-supervised processes for insolvent companies.",
                ],
                link: "./project-management.html",
              },
              {
                title: "Liquidation & Receivership",
                description: "Services:",
                features: [
                  "Licensed professionals managing all engagements in liquidation and corporate rescue.",
                  "Proven expertise across industries, tackling diverse and complex cases",
                  "Specialists in reviving abandoned projects with innovative approaches",
                ],
                link: "./project-planning.html",
              },
              {
                title: "Corporate Rescue",
                description: "Mechanisms:",
                features: [
                  "Corporate Voluntary Arrangements – Solutions to maintain operations during restructuring.",
                  "Judicial Management – Court-supervised planning to protect against creditor claims.",
                  "Scheme Arrangement – Facilitating agreements to satisfy all stakeholders",
                ],
                link: "./construction-planning.html",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-xl bg-white p-4 pt-12 text-center shadow-sm transition-all duration-150 ease-in-out hover:-translate-y-2 hover:shadow-2xl md:border md:border-gray-400"
              >
                <div className="flex h-full flex-col justify-start sm:px-0">
                  <div className="px-4 pb-8 pt-5">
                    <div className="-mt-2 flex flex-col items-baseline">
                      <h3 className="w-full pl-2 text-left text-2xl font-medium">
                        {course.title}
                      </h3>
                      <div className="h-0.5 w-10 rounded "></div>
                    </div>
                    <div className="ml-2 mt-1 h-[1px] w-8 bg-slate-400 md:w-16"></div>
                  </div>
                  {/* <p className="mt-8 w-full pl-6 text-left text-sm">
                    {course.description}
                  </p> */}
                  <ul
                    role="list"
                    className="mt-3 flex flex-col gap-y-3 px-8 pb-5 text-left text-xs !leading-7 tracking-wide text-gray-800 sm:px-20 sm:text-center md:px-0 md:text-base lg:gap-y-5 lg:px-4 lg:pb-8"
                  >
                    {course.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex w-full items-start justify-start"
                      >
                        <span className="mr-3">&#10004;</span>
                        <span className="mx-auto text-center md:mx-0 md:text-left">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-br from-white to-slate-100">
        {/* Our Expertise (6 blocks) */}
        <section className="py-32">
          <div className="container mx-auto max-w-screen-xl">
            <p className="mb-4 text-sm text-muted-foreground md:pl-5">
              Specialised Solutions
            </p>
            <h2 className="mt-2 pl-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Our Expertise
            </h2>
            <div className="ml-6 mt-1 h-[1px] w-8 bg-slate-400 md:w-44"></div>
            <div className="mx-auto mt-10 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-14">
              {expertFeatures.map((feature, idx) => (
                <div
                  className="group flex gap-6 rounded-lg md:block md:p-5"
                  key={idx}
                >
                  <span className="mb-8 ml-0 flex w-auto items-center justify-start ">
                    <feature.icon className="h-10 w-10 rounded-full bg-slate-200 p-2" />
                  </span>
                  <div>
                    <div className="relative mb-2 w-fit text-lg after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-in-out group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                      {feature.name}
                    </div>
                    <p className="!leading-9 text-muted-foreground md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us? */}
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-indigo-600">
                    Our Expertise
                  </h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Why Choose Us?
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    Selecting the right partner for corporate recovery is
                    crucial. At The Liquidator, we combine expertise,
                    innovation, and empathy to deliver solutions that work. Our
                    focus is on achieving tangible results while providing
                    unwavering support.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {choiceFeatures.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <PackageCheck
                            aria-hidden="true"
                            className="size-5 absolute left-1 top-1 text-indigo-600"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                alt="Product screenshot"
                src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="border-y-2 border-gray-200 bg-slate-100">
        <div className="mx-auto max-w-4xl p-6 py-12">
          {/* Section Header */}
          <div className="">
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Discover Our Process
            </h1>
            <p className="mt-6 !leading-8 tracking-wide text-gray-600 md:text-lg">
              Navigating insolvency or restructuring can feel overwhelming, but
              at The Liquidator, we aim to make the journey as seamless and
              stress-free as possible. Our streamlined process is designed to
              ensure clarity, precision, and successful outcomes for every
              client
            </p>
          </div>
          {/* Main Layout */}
          <div className="flex gap-x-5 py-8 md:py-12 ">
            {/* Left Image */}
            <div className="hidden w-1/3 rounded-md bg-gray-400 py-8 opacity-70 md:block"></div>
            {/* Timeline Content */}
            <div className="relative md:pb-12 md:pt-8">
              {/* Continuous Timeline Line */}
              <div className="absolute bottom-0 left-3 top-0 w-px bg-gray-200"></div>
              {/* Step: Consultation */}
              <div className="flex items-start gap-x-4 pb-12">
                {/* Icon */}
                <div className="relative z-10  rounded-full bg-gray-300">
                  <Speech className="h-8 w-8 p-1" />
                </div>
                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    Consultation
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Listening to understand your goals and challenges.
                  </p>
                </div>
              </div>
              {/* Step: Strategy Development */}
              <div className="flex items-start gap-x-4 pb-12">
                {/* Icon */}
                <div className="relative z-10  rounded-full bg-gray-300">
                  <BookText className="h-8 w-8 p-1" />
                </div>
                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    Strategy Development
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Crafting personalized solutions for success.
                  </p>
                </div>
              </div>
              {/* Step: Implementation */}
              <div className="flex items-start gap-x-4">
                {/* Icon */}
                <div className="relative z-10  rounded-full bg-gray-300">
                  <BadgeCheck className="h-8 w-8 p-1" />
                </div>
                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg  font-semibold text-gray-800">
                    Implementation
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Delivering results with precision and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Closing Statement */}
          <div className="!leading-8 tracking-wide text-gray-600 md:text-lg">
            With The Liquidator, you’re not just hiring a service
            provider—you’re gaining a dedicated partner committed to your
            success. Let us help you navigate the complexities of insolvency and
            recovery with clarity and expertise.
          </div>
        </div>
      </div>
      {/* Who we work with */}
      <div className="bg-white py-8 sm:py-16 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Deploy faster
            </h2>
            <p className="text-pretty lg:text-balance mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Who We Work With
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Our services are tailored to meet the needs of:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 text-lg tracking-wide text-gray-600 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {partners.map((feature) => (
                <div key={feature.name} className="relative pl-12">
                  <dt className="inline  text-gray-900">
                    <PackageCheck
                      aria-hidden="true"
                      className=" absolute left-0 top-1 mr-4 inline h-8 w-8 rounded-full bg-amber-500 p-1 font-semibold text-sky-950"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
};

export default Services;
