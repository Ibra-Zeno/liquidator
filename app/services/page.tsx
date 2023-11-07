import Breadcrumbs from "@/components/ui/Breadcrumbs";

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
    </main>
  );
};

export default Services;
