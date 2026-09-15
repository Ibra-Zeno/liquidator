import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useToast } from "@/components/hooks/use-toast";
import { ExternalLink, Landmark, Mail, MapPin, Phone, Printer } from "lucide-react";
import Link from "next/link";
import Seo from "@/components/Seo";
import { fetchSiteSettings, SiteSettings } from "@/lib/sanityQueries";

const OfficeMap = dynamic(() => import("@/components/ui/contact/OfficeMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-secondary/40" />,
});

const OFFICE_LAT = 3.122438942040024;
const OFFICE_LNG = 101.67364755297056;

const defaultSettings: Required<SiteSettings> = {
  phone: "+6 03 2282 4558",
  phoneHref: "60322824558",
  fax: "+6 03 2282 1558",
  email: "info@theliquidator.net",
  address:
    "Suite 8-11-4, Menara Mutiara Bangsar, Jalan Liku, Off Jalan Riong, 59100 Kuala Lumpur, Malaysia",
  entities: [
    { name: "Radiant Consulting Asia Sdn Bhd", regNo: "(773117-T)" },
    { name: "Chilterns Insolvency Sdn Bhd", regNo: "(822208-U)" },
    { name: "MJ Insolvency", regNo: "(LLP0037224-LAL) (NF 2776)" },
    { name: "TS Insolvency", regNo: "(NF 2776)" },
    { name: "Radiant Corporate Solutions Sdn Bhd", regNo: "(1005821-D)" },
  ],
};

interface ContactPageProps {
  settings: Required<SiteSettings>;
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  const sanitySettings = await fetchSiteSettings();
  const settings: Required<SiteSettings> = {
    phone: sanitySettings?.phone || defaultSettings.phone,
    phoneHref: sanitySettings?.phoneHref || defaultSettings.phoneHref,
    fax: sanitySettings?.fax || defaultSettings.fax,
    email: sanitySettings?.email || defaultSettings.email,
    address: sanitySettings?.address || defaultSettings.address,
    entities: sanitySettings?.entities?.length
      ? sanitySettings.entities
      : defaultSettings.entities,
  };
  return {
    props: { settings },
    revalidate: 3600,
  };
};

const ContactPage: React.FC<ContactPageProps> = ({ settings }) => {
  const { toast } = useToast();

  const copyAddress = () => {
    navigator.clipboard
      .writeText(settings.address)
      .then(() => {
        toast({ description: "Address has been copied." });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const feature = [
    {
      title: "Visit Us",
      sub: settings.address,
      action: (
        <button
          onClick={copyAddress}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Copy address
        </button>
      ),
      icon: <MapPin size={22} strokeWidth={1.6} className="text-primary" />,
    },
    {
      title: "Email Us",
      sub: "Send us an email and we'll respond as soon as possible.",
      action: (
        <Link
          href={`mailto:${settings.email}`}
          className="text-sm font-semibold text-primary hover:underline"
        >
          {settings.email}
        </Link>
      ),
      icon: <Mail size={22} strokeWidth={1.6} className="text-primary" />,
    },
    {
      title: "Call Us",
      sub: "Reach out to us by phone to ask a question or learn more.",
      action: (
        <Link
          href={`tel:${settings.phoneHref}`}
          className="text-sm font-semibold text-primary hover:underline"
        >
          {settings.phone}
        </Link>
      ),
      icon: <Phone size={22} strokeWidth={1.6} className="text-primary" />,
    },
    {
      title: "Write To Us",
      sub: "Need to send documents by fax? Use the number below.",
      action: (
        <span className="text-sm font-semibold text-primary">
          {settings.fax}
        </span>
      ),
      icon: <Printer size={22} strokeWidth={1.6} className="text-primary" />,
    },
  ];

  return (
    <main>
      <Seo
        title="Contact Us"
        description="Get in touch with The Liquidator for a confidential, no-obligation consultation on insolvency and corporate recovery in Malaysia."
        path="/contact"
      />
      <header className="hero-wash py-20 sm:py-24">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-5 max-w-[52ch] text-base text-text/70">
            Confidential, no-obligation consultations. We&apos;re here to
            help you every step of the way.
          </p>
        </div>
      </header>

      <section className="border-t border-black/10 py-16 sm:py-20">
        <div className="container mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {feature.map((f) => (
              <div
                key={f.title}
                className="rounded border border-black/10 bg-secondary/30 p-6"
              >
                {f.icon}
                <h3 className="mt-4 font-serif text-lg font-medium text-text">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-text/70">{f.sub}</p>
                <div className="mt-4">{f.action}</div>
              </div>
            ))}
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded border border-black/10">
            <OfficeMap
              lat={OFFICE_LAT}
              lng={OFFICE_LNG}
              label="The Liquidator · Menara Mutiara Bangsar"
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${OFFICE_LAT},${OFFICE_LNG}`}
              target="_blank"
              rel="noreferrer"
              className="absolute right-3 top-3 z-[1000] flex items-center gap-1.5 rounded border border-black/10 bg-background px-3 py-1.5 text-xs font-semibold text-primary shadow-sm transition-colors hover:bg-secondary"
            >
              Get Directions
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-14">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {settings.entities.map((entity) => (
              <div key={entity.name}>
                <Landmark
                  size={24}
                  strokeWidth={1.6}
                  className="mx-auto text-accent"
                />
                <p className="mt-3 text-sm text-text">{entity.name}</p>
                <p className="mt-1.5 text-xs text-text/50">{entity.regNo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
