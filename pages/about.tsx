import { FC } from "react";
import { GetStaticProps } from "next";
import { PackageCheck } from "lucide-react";
import Link from "next/link";
import Seo from "@/components/Seo";
import CTA from "@/components/ui/CTA";
import Strategies from "@/components/ui/about/Strategies";
import { Button } from "@/components/shadcn/ui/button";
import TeamIllustration from "@/components/ui/illustrations/TeamIllustration";
import GrowthIllustration from "@/components/ui/illustrations/GrowthIllustration";
import { fetchAboutPage, AboutPageContent } from "@/lib/sanityQueries";

const fallback: Required<AboutPageContent> = {
  eyebrow: "Business Support, Redefined",
  intro:
    "Liquidator.net specialises in expert corporate recovery and insolvency services, adeptly steering businesses through financial challenges.",
  body: "At Liquidator.net, we guide businesses through financial challenges with precision and care. Founded with a commitment to integrity, responsibility, and technical excellence, we deliver tailored solutions that empower our clients to navigate complexity and achieve sustainable outcomes.",
  values: [
    {
      title: "Integrity",
      description: "Ethical and transparent practices guide every engagement.",
    },
    {
      title: "Responsibility",
      description:
        "A proactive approach to solving complex financial challenges.",
    },
    {
      title: "Technical Excellence",
      description:
        "Superior expertise ensures high-quality, actionable results.",
    },
  ],
  strategies: [
    {
      title: "Pre-emptive Measures",
      description:
        "Our insight into financial distress is not limited to recessions; we understand that financial difficulties can be an early indicator of business failure.",
    },
    {
      title: "Strategic Alliances",
      description:
        "We maintain a collaborative approach with lenders and legal advisers to provide strategic counsel well-versed in liquidation preparation intricacies.",
    },
    {
      title: "Experienced Leadership",
      description:
        "Our experienced Management Team leverages their expertise in insolvency to provide actionable solutions and advice to creditors, shareholders, directors, and companies.",
    },
  ],
};

interface AboutPageProps {
  content: Required<AboutPageContent>;
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const sanityContent = await fetchAboutPage();
  const content: Required<AboutPageContent> = {
    eyebrow: sanityContent?.eyebrow || fallback.eyebrow,
    intro: sanityContent?.intro || fallback.intro,
    body: sanityContent?.body || fallback.body,
    values: sanityContent?.values?.length ? sanityContent.values : fallback.values,
    strategies: sanityContent?.strategies?.length
      ? sanityContent.strategies
      : fallback.strategies,
  };
  return {
    props: { content },
    revalidate: 3600,
  };
};

const About: FC<AboutPageProps> = ({ content }) => {
  return (
    <main>
      <Seo
        title="About Us"
        description="Learn about The Liquidator's mission, values and 17 years of experience in corporate recovery and insolvency across Malaysia."
        path="/about"
      />
      <section className="py-20 sm:py-24">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                {content.eyebrow}
              </span>
              <h1 className="font-serif text-3xl font-medium text-text sm:text-4xl">
                Who We Are
              </h1>
              <p className="mt-5 max-w-[46ch] text-base text-text/70">
                {content.intro}
              </p>
              <p className="mt-5 max-w-[52ch] text-sm text-text/70">
                {content.body}
              </p>
            </div>
            <div className="rounded border border-black/10 bg-secondary/40 p-7">
              <h2 className="font-serif text-xl font-medium text-text">
                What Sets Us Apart
              </h2>
              <ul className="mt-6 space-y-6">
                {content.values.map((v) => (
                  <li key={v.title} className="flex items-start gap-3.5">
                    <PackageCheck
                      size={22}
                      strokeWidth={1.6}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <p className="text-sm text-text/75">
                      <span className="font-semibold text-text">
                        {v.title}
                      </span>
                      : {v.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Strategies strategies={content.strategies} />

      <section className="border-t border-black/10 py-20 sm:py-24">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                Experienced Leadership You Can Trust
              </span>
              <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-5 max-w-xl text-base text-text/70">
                Our senior management team, made up of experienced licensed
                liquidators, brings extensive expertise in corporate
                recovery. Their collective knowledge ensures every engagement
                is handled with professionalism and precision.
              </p>
              <div className="mt-7">
                <Link href="/team">
                  <Button variant="default" size="lg" className="text-sm">
                    Our Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] max-h-96 w-full overflow-hidden rounded bg-gradient-to-br from-secondary to-accent-soft">
              <TeamIllustration className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-20 sm:py-24">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 aspect-[4/3] max-h-96 w-full overflow-hidden rounded bg-gradient-to-br from-secondary to-accent-soft lg:order-1">
              <GrowthIllustration className="h-full w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                Comprehensive Solutions
              </span>
              <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-5 max-w-xl text-base text-text/70">
                We offer tailored solutions in corporate recovery and
                insolvency, guiding businesses through challenges with
                expertise and care. From liquidation to asset management, our
                services are designed to deliver results and drive growth.
              </p>
              <div className="mt-7">
                <Link href="/services">
                  <Button variant="default" size="lg" className="text-sm">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default About;
