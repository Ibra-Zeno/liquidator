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

const features = [
  {
    name: "Comprehensive Conveyancing Matters",
    description:
      "We simplify property transactions, including sub-sales, auctions, refinancing, deed reassignment, and transfer perfection, ensuring a seamless process for all parties.",
    icon: PackageCheck,
  },
  {
    name: "Insolvency Administration with MDI",
    description:
      "As an agent for the Malaysia Department of Insolvency (MDI), we manage insolvency cases diligently, ensuring compliance with legal and regulatory requirements.",
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
        <div className="">
          <div className="mx-auto max-w-5xl px-4 pb-24 pt-24 lg:pt-32 xl:px-0">
            <h1 className="text-5xl font-semibold md:text-6xl">
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
      <section id="pricing" className="pb-12 pt-2">
        <div className="relative mx-auto w-full items-center px-6 md:max-w-7xl md:px-10 lg:px-12">
          <div className="mx-auto max-w-sm space-y-12 rounded md:grid md:w-full md:max-w-none md:grid-cols-3 md:gap-x-4 md:space-y-0  md:px-8 md:py-12 lg:px-0 lg:py-0">
            {[
              {
                title: "Corporate Recovery",
                description: "Services:",
                features: [
                  "Members Voluntary Winding-Up – For solvent companies seeking an efficient closure.",
                  "Creditors Voluntary Winding-Up – Helping businesses address creditor claims strategically",
                  "Receivership – Ensuring professional oversight of assets and obligations",
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
                className="relative flex flex-col rounded-xl p-4 pt-12 text-center transition-all duration-150 ease-in-out hover:bg-gray-400 hover:shadow-2xl md:border md:border-gray-400"
              >
                <div className="flex h-full flex-col justify-start sm:px-0">
                  <div className="px-4 pb-3 pt-5">
                    <div className="-mt-2 flex flex-col items-baseline">
                      <h3 className="w-full pl-2 text-left text-2xl font-medium">
                        {course.title}
                      </h3>
                      <div className="h-0.5 w-10 rounded "></div>
                    </div>
                    <div className="ml-2 mt-1 h-[1px] w-8 bg-slate-400 md:w-16"></div>
                  </div>
                  <p className="mt-8 w-full pl-6 text-left text-sm">
                    {course.description}
                  </p>
                  <ul
                    role="list"
                    className="mt-3 flex flex-col gap-y-3 px-8 pb-5 text-left text-xs sm:px-20 sm:text-center md:px-0 md:text-sm lg:gap-y-5 lg:px-4 lg:pb-8"
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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Deploy faster
            </h2>
            <p className="text-pretty lg:text-balance mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="size-10 absolute left-0 top-0 flex items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                  Our Expertise
                </h2>
                <p className="text-pretty mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Simpler Solutions
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  We provide a comprehensive range of services tailored to
                  address complex business needs, ensuring efficiency and
                  effectiveness in every engagement.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
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
      <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        <div className="max-w-2xl">
          {/* Avatar Media */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
              <div className="shrink-0">
                <div
                  className="size-12 rounded-full bg-gray-300"
                  style={{ width: "48px", height: "48px" }}
                ></div>
              </div>
              <div className="grow">
                <div className="flex items-center justify-between gap-x-2">
                  <div>
                    <span className="font-semibold text-gray-800">
                      Leyla Ludic
                    </span>
                    <ul className="text-xs text-gray-500">
                      <li className="relative inline-block pe-6">Jan 18</li>
                      <li className="relative inline-block pe-6">8 min read</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg border bg-white px-2.5 py-1.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl">
                Announcing a free plan for small teams
              </h2>
              <p className="text-lg text-gray-800">
                At Preline, our mission has always been focused on bringing
                openness and transparency to the design process. We have always
                believed that by providing a space where designers can share
                ongoing work not only empowers them to make better products, it
                also helps them grow.
              </p>
            </div>
            <p className="text-lg text-gray-800">
              We are proud to be a part of creating a more open culture and to
              continue building a product that supports this vision.
            </p>
            <figure>
              <div
                className="w-full rounded-xl bg-gray-300 object-cover"
                style={{ height: "320px" }}
              ></div>
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                A woman sitting at a table.
              </figcaption>
            </figure>
            <p className="text-lg text-gray-800">
              As we have grown, we have seen how Preline has helped companies
              such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring
              their designers closer together to create amazing things. We have
              also learned that when the culture of sharing is brought in
              earlier, the better teams adapt and communicate with one another.
            </p>
            <blockquote className="p-4 text-center sm:px-7">
              <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal">
                To say that switching to Preline has been life-changing is an
                understatement. My business has tripled and I got my life back.
              </p>
              <p className="mt-5 text-gray-800">Nicole Grazioso</p>
            </blockquote>
            <figure>
              <div
                className="w-full rounded-xl bg-gray-300 object-cover"
                style={{ height: "320px" }}
              ></div>
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                A man and a woman looking at a cell phone.
              </figcaption>
            </figure>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">
                Bringing the culture of sharing to everyone
              </h3>
              <p className="text-lg text-gray-800">
                We know the power of sharing is real, and we want to create an
                opportunity for everyone to try Preline and explore how
                transformative open communication can be.
              </p>
            </div>
            <ul className="list-outside list-disc space-y-5 ps-5 text-lg text-gray-800">
              <li className="ps-2">
                Preline allows us to collaborate in real time and is a really
                great way for leadership on the team to stay up-to-date with
                what everybody is working on&quot;{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline"
                  href="#"
                >
                  said
                </a>{" "}
                Stewart Scott-Curran, Intercom&apos;s Director of Brand Design.
              </li>
            </ul>
            <div>
              <a
                className="m-1 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-800 hover:bg-gray-200"
                href="#"
              >
                Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
