import { GetStaticProps } from "next";
import Seo from "@/components/Seo";
import { fetchSiteSettings, SiteSettings } from "@/lib/sanityQueries";

interface PrivacyPageProps {
  email: string;
  address: string;
}

export const getStaticProps: GetStaticProps<PrivacyPageProps> = async () => {
  const settings = await fetchSiteSettings();
  return {
    props: {
      email: settings?.email || "info@theliquidator.net",
      address:
        settings?.address ||
        "Suite 8-11-4, Menara Mutiara Bangsar, Jalan Liku, Off Jalan Riong, 59100 Kuala Lumpur, Malaysia",
    },
    revalidate: 3600,
  };
};

const sections: { title: string; body: string[] }[] = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect personal data you provide directly to us (such as your name, contact details, and the details of your enquiry) when you contact us by phone, email, or through this website.",
      "In the course of engagements (liquidation, receivership, corporate recovery and related matters), we may also collect financial and corporate information as required to carry out our statutory duties as licensed insolvency practitioners.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the personal data we collect to respond to enquiries, provide our professional services, meet our regulatory and statutory obligations (including to the Malaysia Department of Insolvency and the Companies Commission of Malaysia), and maintain records as required by law.",
      "We do not sell or rent personal data to third parties.",
    ],
  },
  {
    title: "3. Disclosure of Information",
    body: [
      "We may share personal data with relevant courts, regulators, creditors, and professional advisers where necessary to carry out an engagement or comply with a legal obligation. Any such disclosure is limited to what is reasonably required.",
    ],
  },
  {
    title: "4. Data Retention",
    body: [
      "We retain personal data for as long as necessary to fulfil the purposes described in this policy, and as required by applicable law and professional regulation governing insolvency practitioners in Malaysia.",
    ],
  },
  {
    title: "5. Your Rights",
    body: [
      "Under Malaysia's Personal Data Protection Act 2010 (PDPA), you have the right to access and request correction of your personal data held by us. To make such a request, contact us using the details below.",
    ],
  },
  {
    title: "6. Cookies",
    body: [
      "This website does not use tracking or advertising cookies. Standard technical data (such as page requests) may be logged by our hosting provider for security and reliability purposes.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this policy from time to time to reflect changes in our practices or for legal reasons. The date of the latest revision will be reflected on this page.",
    ],
  },
];

const PrivacyPage: React.FC<PrivacyPageProps> = ({ email, address }) => {
  return (
    <main>
      <Seo
        title="Privacy Policy"
        description="How The Liquidator collects, uses and protects personal data, in accordance with Malaysia's Personal Data Protection Act 2010."
        path="/privacy"
      />
      <header className="hero-wash py-20 sm:py-24">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            Legal
          </span>
          <h1 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-[62ch] text-base text-text/70">
            This policy explains how The Liquidator collects, uses and
            protects personal data, in accordance with Malaysia&apos;s
            Personal Data Protection Act 2010.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-[760px] px-4 py-16 lg:px-8">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl font-medium text-text">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-text/70">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="border-t border-black/10 pt-8">
            <h2 className="font-serif text-xl font-medium text-text">
              Contact Us About Your Data
            </h2>
            <p className="mt-3 text-sm leading-7 text-text/70">
              For any questions about this policy, or to make a data access
              or correction request, contact us at{" "}
              <a
                href={`mailto:${email}`}
                className="font-medium text-primary hover:underline"
              >
                {email}
              </a>{" "}
              or write to us at {address}.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
