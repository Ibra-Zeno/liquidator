import {
  Briefcase,
  ClipboardList,
  LifeBuoy,
  Edit3,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { GetStaticProps } from "next";
import Seo from "@/components/Seo";
import CTA from "@/components/ui/CTA";
import ServicesComp from "@/components/ui/services/Expertise";
import WhoWeWorkFor from "@/components/ui/index/WhoWeWorkFor";
import Process from "@/components/ui/index/Process";
import { fetchServices, Service } from "@/lib/sanityQueries";

const heroFeat = [
  {
    name: "Corporate Recovery",
    desc: "Expert solutions for solvent closures, creditor claims, and court-supervised insolvency processes.",
    icon: <Briefcase size={26} strokeWidth={1.6} className="text-primary" />,
  },
  {
    name: "Liquidation & Receivership",
    desc: "Licensed professionals handle complex cases and revive abandoned projects with innovative strategies.",
    icon: (
      <ClipboardList size={26} strokeWidth={1.6} className="text-primary" />
    ),
  },
  {
    name: "Corporate Rescue",
    desc: "Restructuring plans, court-supervised protection, and stakeholder agreements to ensure business continuity.",
    icon: <LifeBuoy size={26} strokeWidth={1.6} className="text-primary" />,
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

interface ServicesPageProps {
  services: Service[];
}

export const getStaticProps: GetStaticProps<ServicesPageProps> = async () => {
  const services = await fetchServices();
  return {
    props: { services },
    revalidate: 3600,
  };
};

const Services: React.FC<ServicesPageProps> = ({ services }) => {
  return (
    <main>
      <Seo
        title="Our Services"
        description="Liquidation, corporate rescue, conveyancing, insolvency administration and more — explore The Liquidator's full range of corporate recovery services."
        path="/services"
      />
      <header
        className="hero-wash py-20 sm:py-24"
      >
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            What We Handle
          </span>
          <h1 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            Explore what we offer
          </h1>
          <p className="mt-5 max-w-[60ch] text-base text-text/70">
            At The Liquidator, we are dedicated to helping businesses
            navigate the complexities of insolvency, corporate recovery, and
            project revitalization. Our comprehensive range of services
            ensures that no matter the challenge, we can provide tailored
            solutions that meet your needs.
          </p>
        </div>
      </header>

      <section className="border-t border-black/10 py-14">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {heroFeat.map((service) => (
              <div
                key={service.name}
                className="rounded border border-black/10 bg-background p-6 shadow-sm"
              >
                {service.icon}
                <h3 className="mt-4 font-serif text-lg font-medium text-text">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-text/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-20 sm:py-24">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            Specialised Solutions
          </span>
          <h2 className="mb-10 font-serif text-3xl font-medium text-text sm:text-4xl">
            Our expertise
          </h2>
          {services.length === 0 ? (
            <p className="text-sm text-text/50">
              No services have been added yet.
            </p>
          ) : (
            <ServicesComp services={services} />
          )}
        </div>
      </section>

      <section className="border-t border-black/10 py-20 sm:py-24">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2">
            <div>
              <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                Our Expertise
              </span>
              <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
                Why choose us?
              </h2>
              <p className="mt-5 max-w-xl text-base text-text/70">
                Selecting the right partner for corporate recovery is
                crucial. At The Liquidator, we combine expertise, innovation,
                and empathy to deliver solutions that work. Our focus is on
                achieving tangible results while providing unwavering
                support.
              </p>
              <dl className="mt-8 space-y-6">
                {choiceFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-text">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-0 top-0.5 h-5 w-5 text-accent"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-sm text-text/70">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <Image
              alt="Corporate recovery documentation"
              src="/images/service/serviceFeat.jpg"
              width={800}
              height={600}
              className="w-full rounded object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      <WhoWeWorkFor />
      <Process />
      <CTA />
    </main>
  );
};

export default Services;
