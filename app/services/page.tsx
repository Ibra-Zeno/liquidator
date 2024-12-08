import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import {
  PackageCheck,
  Speech,
  BookText,
  BadgeCheck,
  LifeBuoy,
  ClipboardList,
  Briefcase,
  Edit3,
  DollarSign,
  CheckCircle,
  Building2,
  Layers,
  BarChart,
  Globe,
} from "lucide-react";
import CTA from "@/components/ui/CTA";
import ServicesComp from "@/components/ui/services/Expertise";

const heroFeat = [
  {
    name: "Corporate Recovery",
    desc: "Expert solutions for solvent closures, creditor claims, and court-supervised insolvency processes.",
    icon: <Briefcase className="me-6 mt-0.5 h-8 w-8 shrink-0 text-gray-800" />,
  },
  {
    name: "Liquidation & Receivership",
    desc: "Licensed professionals handle complex cases and revive abandoned projects with innovative strategies.",
    icon: (
      <ClipboardList className="me-6 mt-0.5 h-8 w-8 shrink-0 text-gray-800" />
    ),
  },
  {
    name: "Corporate Rescue",
    desc: "Restructuring plans, court-supervised protection, and stakeholder agreements to ensure business continuity.",
    icon: <LifeBuoy className="me-6 mt-0.5 h-8 w-8 shrink-0 text-gray-800" />,
  },
];

const choiceFeatures = [
  {
    name: "Tailored Solutions",
    description:
      "No two businesses are alike, and neither are our strategies. We tailor every solution to fit the unique needs of your business.",
    icon: Edit3,
  },
  {
    name: "Cost-Effective Services",
    description:
      "We believe in delivering value. Our fees are transparent, competitive, and aligned with the complexity of each case.",
    icon: DollarSign,
  },
  {
    name: "Proven Track Record",
    description:
      "With successful engagements across industries, we are a trusted partner in corporate recovery.",
    icon: CheckCircle,
  },
];

const partners = [
  {
    name: "SMEs",
    desc: "facing financial difficulties or restructuring requirements.",
    icon: Building2,
  },
  {
    name: "Large Corporations",
    desc: "requiring advanced insolvency, restructuring, or legal support.",
    icon: Globe,
  },
  {
    name: "Developers",
    desc: "seeking to revive stalled residential or commercial projects.",
    icon: Layers,
  },
  {
    name: "Financial Institutions",
    desc: "managing distressed assets and insolvency portfolios.",
    icon: BarChart,
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
      {/* Title */}
      <div>
        <div className="bg-secondary/60 ">
          <div className="mx-auto max-w-5xl  px-4 pb-20 pt-24 lg:pt-32 xl:px-0">
            <h1 className="mx-auto mt-1.5 max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:mt-2 sm:text-4xl">
              Explore What We Offer
            </h1>
            <div className="max-w-5xl">
              <p className="mx-auto my-8 max-w-3xl text-left text-base text-text/75 sm:text-lg sm:leading-8 md:mb-12 md:mt-14">
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
      {/* Triple Service Stats */}
      <div
        className="mx-auto -mt-28
       max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="grid items-center gap-6 divide-x-1 sm:grid-cols-2 lg:grid-cols-3">
          {heroFeat.map((service: any, index: any) => (
            <div
              className="border-text-25 group flex w-full gap-y-6 rounded border bg-background p-5 py-7 shadow-sm "
              key={index}
            >
              {service.icon}

              <div>
                <div>
                  <h3 className="block font-bold text-gray-800">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text/75">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-background">
        {/* Our Expertise (6 blocks) */}
        <section className="py-16">
          <div className="container mx-auto max-w-screen-xl">
            <p className="mb-4 text-sm text-muted-foreground md:pl-5">
              Specialised Solutions
            </p>
            <h2 className="mb-12 mt-2 pl-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Our Expertise
            </h2>
            <ServicesComp />
          </div>
        </section>
        {/* Why Choose Us? */}
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-primary">
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
                          <feature.icon
                            aria-hidden="true"
                            className="size-5 absolute left-1 top-1 text-accent"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <Image
                alt="Product screenshot"
                src="/images/service/serviceFeat.jpg"
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 grayscale-0 filter sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Who we work with */}
      {/* End Col */}
      <div className="continer mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pb-24">
        <h3 className=" mb-12 mt-1.5 max-w-7xl text-lg font-bold tracking-tight text-gray-900 sm:mt-2 sm:text-3xl">
          Who We Work For
        </h3>
        <div className="grid items-center gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((item, index) => (
            <div key={item.name}>
              <item.icon className="size-9 shrink-0 text-secondary" />
              <div className="mt-6 h-0.5 bg-gradient-to-r from-primary/40 via-transparent to-transparent">
                <div className="h-0.5 w-9 bg-secondary"></div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="mt-1 text-gray-600">{item.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Col */}
      {/* End Grid */}

      {/* Timeline */}
      <div className="border-y-2 border-gray-200 bg-background py-12">
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
          <div className="flex max-w-3xl gap-x-5 py-8 md:py-12 ">
            {/* Timeline Content */}
            <div className="relative md:pb-12 md:pt-8">
              {/* Continuous Timeline Line */}
              <div className="absolute bottom-0 left-3 top-0 w-px bg-gray-200"></div>
              {/* Step: Consultation */}
              <div className="flex items-start gap-x-4 pb-12">
                {/* Icon */}
                <div className="relative z-10  rounded-full bg-gray-200">
                  <Speech className="h-8 w-8 p-1 text-accent" />
                </div>
                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    Consultation
                  </h3>
                  <p className="mt-1 leading-7 text-gray-600">
                    We begin with an in-depth consultation to understand your
                    unique challenges and goals. By carefully assessing your
                    financial situation, we align our approach with your
                    objectives, ensuring a clear path forward.{" "}
                  </p>
                </div>
              </div>
              {/* Step: Strategy Development */}
              <div className="flex items-start gap-x-4 pb-12">
                {/* Icon */}
                <div className="relative z-10  rounded-full bg-gray-200">
                  <BookText className="h-8 w-8 p-1 text-accent" />
                </div>
                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    Strategy Development
                  </h3>
                  <p className="mt-1 leading-7 text-gray-600">
                    Based on your needs, we craft a tailored strategy that
                    outlines the best course of action. Our solutions are
                    designed to be compliant, practical, and focused on
                    delivering the results you need.{" "}
                  </p>
                </div>
              </div>
              {/* Step: Implementation */}
              <div className="flex items-start gap-x-4">
                {/* Icon */}
                <div className="relative z-10  rounded-full bg-gray-200">
                  <BadgeCheck className="h-8 w-8 p-1 text-accent" />
                </div>
                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg  font-semibold text-gray-800">
                    Implementation
                  </h3>
                  <p className="mt-1 leading-7 text-gray-600">
                    With a clear plan in place, we handle every aspect of
                    execution, from managing paperwork to coordinating with
                    creditors and overseeing asset management. We keep you
                    informed and supported at every step.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Closing Statement */}
          <div className="-mt-6 !leading-8 tracking-wide text-gray-600 md:text-lg">
            With The Liquidator, you’re not just hiring a service
            provider—you’re gaining a dedicated partner committed to your
            success. Let us help you navigate the complexities of insolvency and
            recovery with clarity and expertise.
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
};

export default Services;
