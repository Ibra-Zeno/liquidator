import { GetStaticProps } from "next";
import { client } from "@/sanity/lib/client";
import FAQAccordion, { FaqItem } from "@/components/ui/faq/FAQAccordion";
import Seo from "@/components/Seo";
import CTA from "@/components/ui/CTA";

interface FAQPageProps {
  items: FaqItem[];
}

export const getStaticProps: GetStaticProps<FAQPageProps> = async () => {
  const items = await client.fetch<FaqItem[]>(
    `*[_type == "faq"] | order(order asc)`,
  );
  return {
    props: { items },
    revalidate: 3600,
  };
};

const FAQ: React.FC<FAQPageProps> = ({ items }) => {
  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers to common questions about liquidation, corporate recovery and our process, from how a case begins to what to expect along the way."
        path="/FAQ"
      />
      <header className="hero-wash py-20 sm:py-24">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            Find Your Answers
          </span>
          <h1 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 max-w-[62ch] text-base text-text/70">
            Answers to the most common questions about liquidation,
            corporate recovery and our process, from how a case begins to
            what to expect along the way.
          </p>
        </div>
      </header>
      {items.length === 0 ? (
        <p className="container mx-auto max-w-[1120px] px-4 py-12 text-sm text-text/50 lg:px-8">
          No FAQs have been added yet.
        </p>
      ) : (
        <FAQAccordion items={items} />
      )}
      <CTA />
    </>
  );
};

export default FAQ;
