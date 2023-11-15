import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

const services = [
  {
    title: "Distressed Assets Management",
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
    <main>
      <section id="banner">
        <div className="mx-auto grid max-w-2xl gap-y-8 py-12 text-center text-lg tracking-wide">
          <span className=" font-semibold">Improve you asset management</span>
          <h2 className="-mt-2 text-6xl font-bold">Services</h2>
          <p>
            Our mission is to provide a platform for all stakeholders in the
            property industry to collaborate and share information in a
            transparent manner.
          </p>
        </div>
        <Breadcrumbs />
      </section>
      <p className="mx-auto mb-6 mt-12 max-w-prose text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolore
        officia ex sint cupiditate maiores, quisquam numquam commodi iure, rem
        rerum quod omnis qui perferendis velit neque placeat, voluptatibus et?
      </p>
      {services.map((service) => (
        <section
          key={service.title}
          className="shadown-lg mx-auto max-w-6xl rounded border-y-2 py-12"
        >
          <div className="grid grid-cols-6 justify-between gap-y-8">
            <h2 className="col-span-2 text-4xl font-bold">{service.title}</h2>
            <ul className="col-span-4 list-inside list-disc leading-8">
              {service.content()}
            </ul>
          </div>
        </section>
      ))}
      <section className="p-4 lg:p-8">
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
      </section>
    </main>
  );
};

export default Services;
